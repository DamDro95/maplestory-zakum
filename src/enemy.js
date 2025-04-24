import { CreateBox, StandardMaterial, Color3, PhysicsAggregate, PhysicsShapeType, PhysicsMotionType } from '@babylonjs/core';

export default class Enemy{
  constructor( scene, dimensions, position, hp ){
    this.mesh = CreateBox( 'enemy', dimensions, scene );
    this.mesh.position = position;
    this.hp = hp;

    const obstacleMat = new StandardMaterial( 'obstacleMat', scene );
    obstacleMat.diffuseColor = new Color3( 2, 10, 0  );
    this.mesh.material = obstacleMat;

    this.physicsAggregate = new PhysicsAggregate( this.mesh, PhysicsShapeType.BOX, { mass: 0 }, scene );
    this.physicsAggregate.body.setMotionType( PhysicsMotionType.STATIC ); 
    this.physicsAggregate.body.setCollisionCallbackEnabled( true );
    this.physicsAggregate.body.getCollisionObservable().add( this.damaged.bind( this ) );
  }

  damaged(){
    this.hp -= 1;
    if( this.hp == 0 ){
      this.mesh.dispose();
    }
  }
}
