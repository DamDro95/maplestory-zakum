import { Scene, HemisphericLight, Vector3, CreateGround, PhysicsAggregate, PhysicsShapeType } from "@babylonjs/core";
import Platform from './platform.js';
import Zakum from './zakum.js';
import Controller from './controller.js';
import Character from './character.js';
import Camera from './camera.js';

export default class Level extends Scene{

  constructor( engine, physicsPlugin ){
    super( engine );

    const gravityVector = new Vector3( 0, -24, 0 );
    this.enablePhysics( gravityVector, physicsPlugin );

    const camera = new Camera( this );

    const controller = new Controller( this );

    // Light
    new HemisphericLight( 'light', new Vector3( 0, 1, 0 ), this );

    // Ground
    this.ground = CreateGround( 'ground', { width: 100, height: 1 }, this );
    this.groundAggregate = new PhysicsAggregate( this.ground, PhysicsShapeType.BOX, { mass: 0 }, this );

    // Player
    let player = new Character( this );

    // Obstacle
    const leftPlatformBottom = new Platform( this, 6, 1, 1, new Vector3( -14, 2, 0 ) );
    const leftPlatformMiddle = new Platform( this, 6, 1, 1, new Vector3( -16, 5, 0 ) );
    const leftPlatformTop = new Platform( this, 6, 1, 1, new Vector3( -12, 8, 0 ) );
    const rightPlatformBottom = new Platform( this, 6, 1, 1, new Vector3( 14, 2, 0 ) );
    const rightPlatformMiddle = new Platform( this, 6, 1, 1, new Vector3( 16, 5, 0 ) );
    const rightPlatformTop = new Platform( this, 6, 1, 1, new Vector3( 12, 8, 0 ) );

    const zakum = new Zakum();
  }
}
