const geometry = new THREE.BoxGeometry( 2, 1, 3 );
const material = new THREE.MeshStandardMaterial( { color: 0xb48a5f } );
const mesa = new THREE.Mesh( geometry, material );
mesa.name = 'mesa';
mesa.position.set(0, 1 , -3.5);


export default mesa;