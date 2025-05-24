import Enemy from './enemy.js';

export default class Cerberes extends Enemy{
  constructor( scene, position ){

    let mesh = scene.getAsset( 'cerebes' );

    super( scene, mesh, position, 10 );
  }
}

