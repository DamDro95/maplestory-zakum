import { CreateBox, Vector3, StandardMaterial, Color3, PhysicsAggregate, PhysicsShapeType, PhysicsMotionType } from '@babylonjs/core';

export default class Platform{
  constructor( scene, width, height, depth, position ){
    this.scene = scene;
    this.platform = CreateBox( 'obstacle', { width: width, height: height, depth: depth }, scene );

    this.platform.position = position;

    this.platformAggregate = new PhysicsAggregate( this.platform, PhysicsShapeType.BOX, { mass: 0 }, scene );
    this.platformAggregate.body.setMotionType( PhysicsMotionType.STATIC ); 

    const obstacleMat = new StandardMaterial( 'obstacleMat', scene );
    obstacleMat.diffuseColor = new Color3( 1, 0, 0  ); // red
    this.platform.material = obstacleMat;
  }
}
