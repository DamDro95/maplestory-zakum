import { Vector3 } from "@babylonjs/core";
import Enemy from './enemy.js';

export default class ZakumArm extends Enemy{
  constructor( scene, position, variation ){

    let mesh;
    if( variation == 'left' ){

      mesh = scene.getAsset( 'zakum-arm-1' );
      mesh.rotation = new Vector3( -( Math.PI / 6 ), ( Math.PI / 2 ), 0 );
    }else{

      mesh = scene.getAsset( 'zakum-arm-2' );
      mesh.rotation = new Vector3( ( Math.PI / 6 ), ( Math.PI / 2 ), 0 );
    }

    mesh.scaling = new Vector3( 3, 3, 3 );

    super( scene, mesh, position, 10 );
  }
};
