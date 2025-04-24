import { CreateBox, Vector3, StandardMaterial, Color3, PhysicsAggregate, PhysicsShapeType, PhysicsMotionType } from '@babylonjs/core';
import Enemy from './enemy.js';

export default class Zakum{
  constructor( scene ){

    let dimensions = { width: 5, height: 11, depth: 0.1 };
    let position = new Vector3( 0, 5.5, 1 );
    this.body = new Enemy( scene, dimensions, position, 20 );

    dimensions = { height: 1, width: 6, depth: 1 };
    position = new Vector3( -4, 8, 1 );
    this.arm1 = new Enemy( scene, dimensions, position, 5 );

    dimensions = { height: 1, width: 6, depth: 1 };
    position = new Vector3( -4, 6, 1 );
    this.arm2 = new Enemy( scene, dimensions, position, 10 );

    dimensions = { height: 1, width: 6, depth: 1 };
    position = new Vector3( -4, 4, 1 );
    this.arm3 = new Enemy( scene, dimensions, position, 12 );

    dimensions = { height: 1, width: 6, depth: 1 };
    position = new Vector3( -4, 2, 1 );
    this.arm4 = new Enemy( scene, dimensions, position, 8 );

    dimensions = { height: 1, width: 6, depth: 1 };
    position = new Vector3( 4, 8, 1 );
    this.arm5 = new Enemy( scene, dimensions, position, 8 );

    dimensions = { height: 1, width: 6, depth: 1 };
    position = new Vector3( 4, 6, 1 );
    this.arm6 = new Enemy( scene, dimensions, position, 10 ); 

    dimensions = { height: 1, width: 6, depth: 1 };
    position = new Vector3( 4, 4, 1 );
    this.arm7 = new Enemy( scene, dimensions, position, 12 );

    dimensions = { height: 1, width: 6, depth: 1 };
    position = new Vector3( 4, 2, 1 );
    this.arm8 = new Enemy(  scene, dimensions, position, 12 );
  }
}

