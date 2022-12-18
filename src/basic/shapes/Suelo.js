const geometry = new THREE.PlaneGeometry( 100, 100 );
const material = new THREE.MeshBasicMaterial( {color: 0xc90076, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry, material );

plane.rotation.x += Math.PI *.5;


export default plane;