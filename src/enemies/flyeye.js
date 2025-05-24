import { Vector3 } from "@babylonjs/core";
import Enemy from './enemy.js';

export default class Flyeye extends Enemy{
  constructor( scene, position ){

    let mesh = scene.getAsset( 'flyeye' );
    mesh.rotation = new Vector3( 0, ( Math.PI /2 ),0 );

    super( scene, mesh, position, 10 );
  }
}

