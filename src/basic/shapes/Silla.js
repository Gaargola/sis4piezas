const geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
const silla = new THREE.Mesh( geometry, material );
silla.name = 'silla';
silla.position.set(0, 0.5, -1);


export default silla;