import { Vector3 } from '@babylonjs/core';
import Enemy from './enemy.js';
import ZakumBody from './zakum-body.js';
import ZakumArm from './zakum-arm.js';

export default class Zakum{
  constructor( scene, position ){
    this.body = new ZakumBody( scene, position );

    let armPosition = position.add( new Vector3( -14, 4, 0 ) );
    this.topRightArm = new ZakumArm( scene, armPosition, 'right' );
    
    armPosition = position.add( new Vector3( -14, -1, 0 ) );
    this.bottomRightArm = new ZakumArm( scene, armPosition, 'right' );
    
    armPosition = position.add( new Vector3( 10, 1, 0 ) );
    this.topLeftArm = new ZakumArm( scene, armPosition, 'left' );
    
    armPosition = position.add( new Vector3( 10, -3, 0 ) );
    this.bottomLeftArm = new ZakumArm( scene, armPosition, 'left' );

  }
}
