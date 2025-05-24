import { Vector3, LoadAssetContainerAsync, CreateGround, PhysicsAggregate, PhysicsShapeType } from "@babylonjs/core";
import Level from './level.js';
import Character from '../character.js';
import Cerebes from '../enemies/cerebes.js';
import JrCerebes from '../enemies/jr-cerebes.js';
import Flyeye from '../enemies/flyeye.js';
import Zakum from '../enemies/zakum.js';
import Platform from '../platform.js';

export default class Level1 extends Level{

  constructor( engine, physicsPlugin ){
    super( engine, physicsPlugin );

    this.addAsset( 'cerebes', 'jr-cerebes', 'flyeye', 'zakum-body', 'zakum-arm-1', 'zakum-arm-2' );
  }

  init(){
    
    // Ground
    this.ground = CreateGround( 'ground', { width: 80, height: 1 }, this );
    this.groundAggregate = new PhysicsAggregate( this.ground, PhysicsShapeType.BOX, { mass: 0 }, this );

    // Player
    this.player = new Character( this );
    this.cerebes = new Cerebes( this, new Vector3( -16, 0, 0 ) );
    this.jr_cerebes = new JrCerebes( this, new Vector3( -12, 0, 0 ) );
    this.flyeye = new Flyeye( this, new Vector3( -8, 5, 0 ) );
    this.zakum = new Zakum( this, new Vector3( 10, 0, 0 ) );
  }
}
