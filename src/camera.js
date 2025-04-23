import { FreeCamera, Vector3 } from "@babylonjs/core";
import $ from 'jquery';

export default class Camera extends FreeCamera{
  constructor( scene ){
    super( 'camera', new Vector3( 0, 1, -10 ), scene );
    const engine = scene.getEngine();
    // this.attachControl(engine.getRenderingCanvas(), true);
    
    // This creates and positions a free camera (non-mesh)
    this.mode = FreeCamera.ORTHOGRAPHIC_CAMERA;
    const aspect = engine.getRenderWidth() / engine.getRenderHeight();
    const orthoSize = 10;
    this.orthoLeft = -orthoSize * aspect;
    this.orthoRight = orthoSize * aspect;
    this.orthoTop = orthoSize;
    this.orthoBottom = -orthoSize;
    this.setTarget( Vector3.Zero() );
    this.position.y = 6;

    this.checkCollisions = true;

    const $canvas = $( engine.getRenderingCanvas() );
    $canvas.on( 'focusCamera', ( event, x ) => this.focusCamera( x ) );
  }

  focusCamera( x ){
    this.position.x = x;
  }
}

