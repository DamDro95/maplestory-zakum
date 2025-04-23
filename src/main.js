import { Engine, Vector3 } from "@babylonjs/core";
import HavokPhysics from '@babylonjs/havok';
import { HavokPlugin } from '@babylonjs/core/Physics/v2';
import './style.css';
import $ from 'jquery';
import Level from './level.js';

const canvas = $( 'canvas#main').get( 0 );
const engine = new Engine( canvas );
let havokInstance;
HavokPhysics().then( (havok) => {
  havokInstance = havok;

  const havokPlugin = new HavokPlugin( true, havokInstance );
  const level = new Level( engine, havokPlugin );

  engine.runRenderLoop(() => {
    level.render();
  });
});

window.addEventListener( 'resize', () => engine.resize() );


