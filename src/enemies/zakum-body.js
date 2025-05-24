import { Vector3 } from "@babylonjs/core";
import Enemy from './enemy.js';

export default class ZakumBody extends Enemy{
  constructor( scene, position ){

    let mesh = scene.getAsset( 'zakum-body' );
    mesh.rotation = new Vector3( 0, ( Math.PI / 2 ), 0 );
    mesh.scaling = new Vector3( 4, 4, 4 );

    super( scene, mesh, position, 10 );
  }
}

