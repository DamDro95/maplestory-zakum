import { Scene, HemisphericLight, Vector3, AssetsManager } from "@babylonjs/core";
import Controller from '../controller.js';
import Camera from '../camera.js';
import $ from 'jquery';

export default class Level extends Scene{

  constructor( engine, physicsPlugin ){
    super( engine );

    this.assetsManager = new AssetsManager( this );
    this.assetsManager.onFinish = this.#onAssetsManagerTasksFinish.bind( this );

    this.assets = {};

    const gravityVector = new Vector3( 0, -24, 0 );
    this.enablePhysics( gravityVector, physicsPlugin );

    this.camera = new Camera( this );

    this.controller = new Controller( this );

    // Light
    this.light = new HemisphericLight( 'light', new Vector3( 0, 1, 0 ), this );
  }
  
  // override
  init(){}

  #onAssetsManagerTasksFinish( tasks ){

    tasks.forEach( task => {
      let name = task.meshesNames;
      let mesh = task.loadedMeshes[0];
      mesh.name = name;
      mesh.setEnabled( false );
      this.setAsset( name, mesh );
    });

    this.init();

    $( this ).trigger( 'ready' );
  }

  start(){
    for( const name in this.assets ){
      let taskName = name + ' task';
      let meshesName = name;
      let rootUrl = '';
      let sceneFilename = name + '.stl';
      let task = this.assetsManager.addMeshTask( taskName, meshesName, rootUrl, sceneFilename );
    }

    this.assetsManager.load();
  }

  getAsset( name ){
    return this.assets[name];
  }

  setAsset( name, mesh ){
    this.assets[name] = mesh;
  }

  addAsset( ...assets ){
    assets.forEach( asset => {
      this.assets[ asset ] = null;
    })
  }
}
