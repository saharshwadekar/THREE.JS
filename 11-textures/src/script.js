import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
 
/**
 * Texture
 */
// const image = new Image()
// const texture = new THREE.Texture(image)
// image.onload = () =>
// {
//     texture.needsUpdate = true
// }
// image.src = './textures/minecraft.png'
const loadingManager = new THREE.LoadingManager()

loadingManager.onStart = ()=>
{
    console.log('Loading Started')
}
loadingManager.onLoaded = ()=>
{
    console.log('Loading Finishes')
}
loadingManager.onProgress = ()=>
{
    console.log('Loading Progress')
}
loadingManager.onError = ()=>
{
    console.log('Loading Error')
}
const textureLoader = new THREE.TextureLoader(loadingManager)
// const colortexture = textureLoader.load('textures/door/color.jpg')
// const alphatexture = textureLoader.load('textures/door/alpha.jpg')
// const heighttexture = textureLoader.load('textures/door/height.jpg')
// const metalnesstexture = textureLoader.load('textures/door/metalness.jpg')
// const roughnesstexture = textureLoader.load('textures/door/roughness.jpg')
// const ambientOcclusiontexture = textureLoader.load('textures/door/ambientOcclusion.jpg')
// const checkerboardtexture = textureLoader.load('textures/checkerboard.png')
// const checkerboard_1texture = textureLoader.load('textures/checkerboard_1.png')
const minecrafttexture = textureLoader.load('textures/minecraft.png')

colortexture.rotation = Math.PI / 4
// colortexture.center.x = 0.5
// colortexture.center.y = 0.5

minecrafttexture.generateMipmaps = false
minecrafttexture.minFilter = THREE.NearestFilter
minecrafttexture.magFilter = THREE.NearestFilter

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
// const geometry = new THREE.SphereGeometry(1, 32, 32)
// const geometry = new THREE.ConeGeometry(1, 1, 32)
// const geometry = new THREE.TorusGeometry(1, 0.35, 32,100)

// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const material = new THREE.MeshBasicMaterial({ map: minecrafttexture })

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 1
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()