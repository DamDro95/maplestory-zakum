import { ImportMeshAsync, CreateBox, Vector3, Ray, PhysicsAggregate, PhysicsShapeType } from '@babylonjs/core';
import $ from 'jquery';
import Projectile from './projectile.js';
import '@babylonjs/loaders/STL/stlFileLoader';

export default class Character{

  constructor( scene ){
    this.scene = scene;
    this.player = CreateBox( 'player', { height: 2, width: 1, depth: 1 }, scene );

    ImportMeshAsync( '/game-dev/player-projectile.stl', scene ).then( result => {
      this.projectile = result.meshes[0];
      this.projectile.scaling = new Vector3( 0.4, 0.4, 0.4 );
      this.projectile.setEnabled( false );
    });

    this.player.position.y = 5;
    this.player.position.x = -20;
   
    this.playerAggregate = new PhysicsAggregate( this.player, PhysicsShapeType.BOX, { mass: 1 }, scene );
    this.playerAggregate.body.setAngularDamping( 1 ); 

    this.speed = 5;
    this.jumpStrength = 10;

    this.$canvas = $( scene.getEngine().getRenderingCanvas() );

    this.$canvas.on( 'left', ( event, deltaTime ) => this.moveLeft( deltaTime ) );
    this.$canvas.on( 'right', ( event, deltaTime ) => this.moveRight( deltaTime ) );
    this.$canvas.on( 'space', ( event, deltaTime ) => this.jump() );
    this.$canvas.on( 'leftClick', ( event, vector ) => this.shoot( vector ) );

    this.$canvas.on( 'endFrame', ( event, deltaTime ) => this.focusCharacter() );
    this.$canvas.on( 'endFrame', ( event, deltaTime ) => this.disableRotations() );
  };

  disableRotations(){
    this.playerAggregate.body.setAngularVelocity( Vector3.Zero() );
  }

  focusCharacter(){
    this.$canvas.trigger( 'focusCamera', [ this.getPositionX() ] );
  }

  moveLeft(){
    let vector = this.playerAggregate.body.getLinearVelocity();
    vector.x = -this.speed;
    vector.z = 0;
    this.playerAggregate.body.setLinearVelocity( vector );
  }

  moveRight(){
    let vector = this.playerAggregate.body.getLinearVelocity();
    vector.x = this.speed;
    vector.z = 0;
    this.playerAggregate.body.setLinearVelocity( vector );
  }

  jump(){
    if( !this.isOnGround() ){
      return;
    }
    let vector = this.playerAggregate.body.getLinearVelocity();
    vector.y = this.jumpStrength;
    vector.z = 0;
    this.playerAggregate.body.setLinearVelocity( vector );
  }

  getPositionX(){
    return this.player.position.x;
  }

  getPositionY(){
    return this.player.position.y;
  }

  isOnGround() {
    const rayOrigin = this.player.position.clone();
    const rayDirection = new Vector3( 0, -1, 0 );
    const rayLength = 1.1; // adjust based on your player height

    const ray = new Ray( rayOrigin, rayDirection, rayLength );
    const pick = this.scene.pickWithRay( ray, ( mesh ) => {
      return mesh.name === 'ground' || mesh.name.startsWith( 'obstacle' );
    });

    return pick.hit;
  }

  shoot( targetPosition ){
    const projectile = new Projectile( this.projectile.clone(), this.scene, this.player.position.clone(), targetPosition  );
  }
}
