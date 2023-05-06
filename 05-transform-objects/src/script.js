import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
//  */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// mesh.position.set(1,-0.2,-0.9)
// scene.add(mesh)

//Group concept

const group = new THREE.Group()
group.position.y = -1
group.scale.x = 1
group.rotation.z = Math.PI 

scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)

group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
cube2.position.set(1.5,0,0)
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
)
cube3.position.set(-1.5,0,0)
group.add(cube3)

// //scale
// mesh.scale.x = 2
// mesh.scale.y = 0.3
// mesh.scale.z = 1 // bydefault
// //mesh.scale.set(2,0.3,1)

// //reorder
// mesh.rotation.reorder('XZY')
// //Euler Rotation
// mesh.rotation.set(0 ,1,Math.PI * 2.5)


//Axes Helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(0,0,3)

scene.add(camera)
// camera.lookAt(mesh.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)