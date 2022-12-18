const sphereGeometry = new THREE.SphereGeometry(0.3, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.name = 'personaje';
sphere.position.set(0, 0.5, 1);


export default sphere;