import { ActionManager, ExecuteCodeAction } from "@babylonjs/core";
import $ from 'jquery';

export default class Controller{
  constructor( scene ){

    this.scene = scene;
    this.engine = scene.getEngine();
    this.$canvas = $( this.engine.getRenderingCanvas() );

    // Controls
    this.inputMap = {};
    scene.actionManager = new ActionManager( scene );

    scene.actionManager.registerAction( new ExecuteCodeAction(
      ActionManager.OnKeyDownTrigger, ( evt ) => this.inputMap[evt.sourceEvent.key] = true 
    ) );

    scene.actionManager.registerAction( new ExecuteCodeAction(
      ActionManager.OnKeyUpTrigger, ( evt ) => this.inputMap[evt.sourceEvent.key] = false
    ) );

    scene.onPointerDown = ( evt, pickInfo, type ) => {
      if( evt.button === 0 ){
        $( this.$canvas ).trigger( 'leftClick', pickInfo.ray.origin.clone() );
      }else if( evt.button === 2 ){
        $( this.$canvas ).trigger( 'rightClick', pickInfo.ray.direction );
      }
    };

    // Game Loop
    scene.onBeforeRenderObservable.add( this.handleInput.bind( this ) );
  }

  handleInput(){

    let deltaTime = this.engine.getDeltaTime() / 1000;

    if( this.inputMap["a"] || this.inputMap["ArrowLeft"] ){
      this.$canvas.trigger( 'left', [ deltaTime ] );
    }
    if( this.inputMap["d"] || this.inputMap["ArrowRight"] ){
      this.$canvas.trigger( 'right', [ deltaTime ] );
    }

    if( this.inputMap[" "] || this.inputMap["ArrowUp"] ){
      this.$canvas.trigger( 'space', [ deltaTime ] );
    }

    this.$canvas.trigger( 'endFrame', [ deltaTime ] )
  }
}
