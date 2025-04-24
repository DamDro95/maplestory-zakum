import { MeshBuilder, Vector3, PhysicsAggregate, PhysicsShapeType, PhysicsBody, PhysicsShape, PhysicsMotionType } from "@babylonjs/core";
import $ from 'jquery';

export default class Projectile {
  constructor( scene, start, destination ) {
    this.projectile = MeshBuilder.CreateSphere( 'projectile', { diameter: 0.5 }, scene );

    start.z = 1;
    destination.z = 1;
    const direction = destination.subtract( start ).normalize();

    this.projectile.position = start;
    this.projectile.position.x += 2;

    this.projectileAggregate = new PhysicsAggregate( this.projectile, PhysicsShapeType.BOX, { mass: 1 }, scene );
    this.projectileAggregate.body.setMotionType( PhysicsMotionType.DYNAMIC ); 
    this.projectileAggregate.body.setCollisionCallbackEnabled( true );

    const impulse = direction.scale( 25 );
    this.projectileAggregate.body.applyImpulse( impulse, this.projectile.getAbsolutePosition() );

    this.projectileAggregate.body.getCollisionObservable().add( this.collided.bind( this ) );

    setTimeout( () => this.projectile.dispose(), 3000 );
  }

  collided( event ){
    const otherMesh = event.collider.transformNode;
    console.log( `💥 mesh1 collided with: ${otherMesh.name}` );
    this.projectile.dispose();
  }
}
