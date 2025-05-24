import Enemy from './enemy.js';

export default class JrCerberes extends Enemy{
  constructor( scene, position ){

    let mesh = scene.getAsset( 'jr-cerebes' );

    super( scene, mesh, position, 10 );
  }
}

