import Level from './level.js';
import Platform from '../platform.js';
import Zakum from '../zakum.js';
import { CreateGround, PhysicsAggregate, PhysicsShapeType, Vector3 } from "@babylonjs/core";

export default class Level2 extends Level{

  constructor( engine, physicsPlugin ){
    super( engine, physicsPlugin );
    
    // Ground
    this.ground = CreateGround( 'ground', { width: 100, height: 1 }, this );
    this.groundAggregate = new PhysicsAggregate( this.ground, PhysicsShapeType.BOX, { mass: 0 }, this );
   
    // Obstacle
    const leftPlatformBottom = new Platform( this, 6, 1, 1, new Vector3( -14, 2, 0 ) );
    const leftPlatformMiddle = new Platform( this, 6, 1, 1, new Vector3( -16, 5, 0 ) );
    const leftPlatformTop = new Platform( this, 6, 1, 1, new Vector3( -12, 8, 0 ) );
    const rightPlatformBottom = new Platform( this, 6, 1, 1, new Vector3( 14, 2, 0 ) );
    const rightPlatformMiddle = new Platform( this, 6, 1, 1, new Vector3( 16, 5, 0 ) );
    const rightPlatformTop = new Platform( this, 6, 1, 1, new Vector3( 12, 8, 0 ) );

    // Enemies
    const zakum = new Zakum();
  }
}
