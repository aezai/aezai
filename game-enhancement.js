// Updating the Three.js game setup - adding interactive controls and enhancements.

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a rotating sphere
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 5;

// Add ambient light
const light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

// Animation structure
function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
}

// Add user interactions with keyboard
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            sphere.position.y += 0.1;
            break;
        case 'ArrowDown':
            sphere.position.y -= 0.1;
            break;
        case 'ArrowLeft':
            sphere.position.x -= 0.1;
            break;
        case 'ArrowRight':
            sphere.position.x += 0.1;
            break;
    }
});

animate();