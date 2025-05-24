import { Engine, Vector3 } from "@babylonjs/core";
import HavokPhysics from '@babylonjs/havok';
import { HavokPlugin } from '@babylonjs/core/Physics/v2';
import './style.css';
import $ from 'jquery';
import Level from './levels/level-1.js';

const canvas = $( 'canvas#main').get( 0 );
const engine = new Engine( canvas );

HavokPhysics().then( (havok) => {

  let havokInstance = havok;

  const havokPlugin = new HavokPlugin( true, havokInstance );
  const level = new Level( engine, havokPlugin );

  $( level ).on( 'ready', () => {

    engine.runRenderLoop(() => {
      level.render();
    });

  })

  level.start();

});

window.addEventListener( 'resize', () => engine.resize() );


