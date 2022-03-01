const canvas: HTMLCanvasElement = document.querySelector("canvas")
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")

const mario: number[][] = [
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 3, 3, 3, 4, 4, 4, 2, 4, 0, 0],
    [0, 3, 4, 3, 4, 4, 4, 4, 2, 4, 0, 0],
    [0, 3, 4, 3, 3, 4, 4, 4, 4, 2, 4, 4],
    [0, 3, 3, 4, 4, 4, 4, 4, 2, 2, 2, 2],
    [0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0],
    [0, 0, 1, 1, 5, 1, 1, 5, 1, 0, 0, 0],
    [0, 1, 1, 1, 5, 1, 1, 5, 1, 1, 1, 0],
    [1, 1, 1, 1, 5, 5, 5, 5, 1, 1, 1, 1],
    [4, 4, 1, 5, 6, 5, 5, 6, 5, 1, 4, 4],
    [4, 4, 4, 5, 5, 5, 5, 5, 5, 4, 4, 4],
    [4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4],
    [0, 0, 5, 5, 5, 0, 0, 5, 5, 5, 0, 0],
    [0, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 0],
    [3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3]
]

const fungus: number[][] = [
    [0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0],
    [0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0],
    [0, 0, 3, 2, 2, 3, 3, 3, 3, 3, 3, 2, 2, 3, 0, 0],
    [0, 3, 3, 3, 4, 2, 3, 3, 3, 3, 2, 4, 3, 3, 3, 0],
    [0, 3, 3, 3, 4, 2, 3, 3, 3, 3, 2, 4, 3, 3, 3, 0],
    [3, 3, 3, 3, 4, 2, 4, 3, 3, 4, 2, 4, 3, 3, 3, 3],
    [3, 3, 3, 3, 4, 4, 4, 3, 3, 4, 4, 4, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [0, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 0],
    [0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0],
    [0, 0, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 0, 0],
    [0, 2, 2, 2, 2, 2, 4, 4, 4, 4, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 0, 0],
]

const turtle: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 9, 9, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 9, 9, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 9, 9, 9, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 9, 9, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 2, 4, 4, 2, 9, 9, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 2, 4, 4, 4, 9, 9, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 2, 4, 4, 4, 9, 9, 9, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 2, 4, 4, 4, 4, 9, 2, 4, 2],
    [0, 0, 0, 2, 2, 2, 0, 0, 2, 4, 4, 4, 4, 4, 4, 2],
    [0, 0, 2, 8, 8, 8, 2, 2, 2, 4, 4, 2, 2, 4, 4, 2],
    [0, 2, 8, 2, 8, 2, 8, 2, 9, 2, 4, 2, 2, 4, 4, 2],
    [0, 2, 8, 8, 2, 8, 8, 2, 9, 2, 4, 2, 0, 2, 4, 2],
    [2, 8, 8, 2, 8, 2, 8, 2, 9, 2, 4, 4, 2, 0, 2, 2],
    [2, 8, 2, 8, 8, 8, 2, 8, 2, 9, 2, 4, 4, 2, 2, 0],
    [2, 2, 8, 8, 8, 8, 8, 2, 2, 9, 2, 4, 4, 4, 2, 0],
    [2, 8, 2, 8, 8, 8, 2, 8, 2, 9, 2, 4, 2, 2, 0, 0],
    [2, 8, 8, 2, 8, 2, 8, 8, 2, 9, 2, 4, 2, 0, 0, 0],
    [2, 8, 8, 8, 2, 8, 8, 8, 2, 9, 2, 2, 0, 0, 0, 0],
    [0, 2, 8, 2, 8, 2, 8, 2, 9, 9, 2, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 9, 9, 2, 0, 0, 0, 0, 0],
    [2, 9, 9, 9, 9, 9, 9, 9, 9, 9, 2, 2, 0, 0, 0, 0],
    [2, 9, 9, 9, 9, 9, 9, 9, 2, 2, 2, 4, 2, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 0, 2, 4, 4, 4, 4, 2, 0, 0, 0],
    [2, 9, 4, 4, 4, 2, 0, 2, 4, 4, 4, 4, 9, 2, 0, 0],
    [2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0],
]

const shell: number[][] = [
    [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 2, 8, 8, 8, 8, 2, 2, 0, 0, 0, 0],
    [0, 0, 0, 2, 8, 8, 2, 2, 2, 2, 8, 8, 2, 0, 0, 0],
    [0, 0, 2, 8, 8, 2, 8, 8, 8, 8, 2, 8, 8, 2, 0, 0],
    [0, 0, 2, 8, 2, 8, 8, 8, 8, 8, 8, 2, 8, 2, 0, 0],
    [0, 2, 8, 2, 8, 8, 8, 8, 8, 8, 8, 8, 2, 8, 2, 0],
    [0, 2, 2, 8, 2, 8, 8, 8, 8, 8, 8, 2, 2, 8, 2, 0],
    [2, 2, 8, 8, 8, 2, 8, 8, 8, 8, 2, 8, 8, 8, 2, 2],
    [2, 2, 8, 8, 8, 8, 2, 2, 2, 2, 8, 8, 8, 8, 2, 2],
    [2, 2, 2, 8, 8, 2, 8, 8, 8, 8, 2, 8, 8, 2, 2, 2],
    [2, 9, 2, 2, 2, 8, 8, 8, 8, 8, 8, 2, 2, 2, 9, 2],
    [2, 9, 9, 9, 2, 8, 8, 8, 8, 8, 8, 2, 9, 9, 9, 2],
    [0, 2, 2, 9, 9, 2, 2, 2, 2, 2, 2, 9, 9, 2, 2, 0],
    [0, 0, 0, 2, 9, 9, 9, 9, 9, 9, 9, 9, 2, 0, 0, 0],
    [0, 0, 0, 0, 2, 2, 9, 9, 9, 9, 2, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0],
]

const cloud: number[][] = [
    [0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 9, 9, 9, 9, 2, 0, 0, 0, 0],
    [0, 0, 2, 2, 9, 9, 9, 9, 9, 9, 2, 0, 0, 0],
    [0, 2, 9, 9, 10, 9, 9, 9, 9, 9, 9, 2, 2, 0],
    [2, 9, 9, 9, 9, 10, 9, 9, 9, 9, 10, 9, 9, 2],
    [2, 9, 9, 9, 9, 9, 9, 9, 9, 10, 9, 9, 9, 2],
    [2, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 2],
    [0, 2, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 2, 0],
    [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0],
]

const boss: number[][] = [
    [0, 0, 11, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 11, 0, 0],
    [0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0],
    [2, 11, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 11, 2],
    [2, 9, 2, 0, 2, 11, 11, 9, 9, 11, 11, 11, 0, 2, 9, 2],
    [2, 9, 11, 2, 11, 11, 2, 1, 1, 2, 11, 11, 2, 11, 9, 2],
    [2, 11, 11, 11, 11, 2, 1, 2, 9, 1, 2, 11, 11, 11, 11, 2],
    [0, 2, 11, 11, 11, 11, 1, 2, 2, 1, 11, 11, 11, 11, 2, 0],
    [0, 0, 2, 2, 11, 11, 11, 1, 1, 11, 11, 11, 2, 2, 0, 0],
    [0, 0, 0, 0, 2, 11, 11, 11, 11, 11, 11, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 2, 11, 11, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 2, 11, 11, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 2, 2, 2, 11, 11, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 11, 11, 11, 11, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 2, 11, 11, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 11, 11, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0],
]

const bossfire: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 11, 11, 12, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 12, 11, 11, 12, 0, 12, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 12, 11, 11, 12, 0, 12, 12, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 11, 11, 12, 12, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 12, 11, 11, 12, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 2, 0, 0, 12, 11, 11, 12, 0, 0, 2, 11, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 12, 11, 11, 12, 0, 0, 0, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 12, 0, 2, 11, 2, 0, 12, 2, 2, 2, 2, 2, 2, 12, 0, 2, 11, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 2, 9, 2, 0, 2, 11, 11, 9, 9, 11, 11, 11, 0, 2, 9, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 12, 0, 0, 12, 0, 0, 2, 9, 11, 2, 11, 11, 2, 1, 1, 2, 11, 11, 2, 11, 9, 2],
    [0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 12, 0, 12, 0, 12, 12, 0, 0, 0, 12, 2, 11, 11, 11, 11, 2, 1, 2, 9, 1, 2, 11, 11, 11, 11, 2],
    [0, 0, 12, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 2, 11, 11, 11, 11, 1, 2, 2, 1, 11, 11, 11, 11, 2, 0],
    [12, 12, 12, 12, 12, 12, 12, 12, 12, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 0, 0, 2, 2, 11, 11, 11, 1, 1, 11, 11, 11, 2, 2, 0, 0],
    [0, 12, 12, 12, 12, 12, 12, 12, 12, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 0, 0, 0, 0, 2, 11, 11, 11, 11, 11, 11, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 12, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 2, 2, 11, 11, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 12, 0, 2, 0, 0, 2, 11, 11, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 11, 11, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, , 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 11, 11, 11, 11, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 11, 11, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 11, 11, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0],
]

const heart: number[][] = [
    [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 1, 1, 9, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
]

const width: number = 1200 /* Width of game window in pixels */

let level: number = 1 /* Starting level */
const targetFps: number = 120 /* Target FPS - limiting this number may improve the performance */
const gameRefreshRate: number = 120 /* Game Refresh Rate - increasing this number will speed the game up */
const background: string = "#feefd2" /* Background color - sets the background color with given rgb/hsl/hex code */
const gravityForce: number = 10 /* Gravity Force - indicates the falling rate */
const speed: number = 2 /* Speed - default player speed */
const jump: number = 2 /* Jump - default player jump measured in blocks */
const bossLife: number = 4 /* Boss life - sets the amount of life of the boss */
let entities: Entity[] = []

const zoom: number = 2
const scale: number = 15
const displayWidth: number = width
const displayHeight: number = width * 0.625
const arenaWidth: number = Math.ceil((displayWidth / zoom) / scale)
const arenaHeight: number = Math.ceil((displayHeight / zoom) / scale)
canvas.width = displayWidth
canvas.height = displayHeight
ctx.scale(zoom, zoom)

//////////// <--------> ////////////>- COLOR PALETTE -<//////////// <--------> ////////////

const modelColor: string[] = [
    "",
    "red",
    "black",
    "brown",
    "#ffdbac",
    "blue",
    "gold",
    "#add8e6",
    "limegreen",
    "white",
    "lightgray",
    "yellow",
    "orange"
]

const arenaColor: string[] = [
    "",
    "#5a5aff",
    "limegreen"
]

interface Position {
    y: number
    x: number
}

interface EntityProperties {
    matrix: number[][]
    pos: Position
    falling: boolean
    gravityActive: boolean
    jumpCounter: number
    lastpos: Position
    timeout: number
    speed: number
    turned: boolean
    remove: VoidFunction
}

interface PlayerProperties {
    walking1: boolean
    walking2: boolean
    lastDir: boolean
}

interface EnemyProperties {
    direction: boolean
    jumping: boolean
    dead: boolean
}

interface BossProperties {
    life: number
    delay: number
    canAttack: boolean
    hpdrain: boolean
    attackModel: number[][]
    idleModel: number[][]
    hearts: Misc[]
}

interface MiscProperties {
    disappearing: boolean
    dead: boolean
}

//////////// <--------> ////////////>- ENTITIES CLASSES -<//////////// <--------> ////////////

class Entity implements EntityProperties {
    public matrix: number[][]
    public pos: Position
    public falling: boolean
    public gravityActive: boolean
    public jumpCounter: number
    public lastpos: Position
    public timeout: number
    public speed: number
    public turned: boolean
    public remove: VoidFunction

    constructor(matrix: number[][], pos: Position, speed?: number) {
        if (level === 7) this.matrix = JSON.parse(JSON.stringify(matrix))
        if (level !== 7) this.matrix = matrix
        this.pos = pos
        this.falling = false
        this.gravityActive = true
        this.jumpCounter = 0
        this.lastpos = { y: 0, x: 0 }
        this.timeout = null
        this.speed = speed
        this.turned = false
        this.remove = (): void => { entities = entities.filter((e: Entity) => e !== this) }
    }

    public static getEntity(entity: Entity): Entity {
        return entities[entities.indexOf(entity)]
    }
}

class Player extends Entity implements PlayerProperties {
    public walking1: boolean
    public walking2: boolean
    public lastDir: boolean

    constructor(matrix: number[][], pos: Position, speed: number) {
        super(matrix, pos, speed)
        this.walking1 = false
        this.walking2 = false
        this.lastDir = true
    }
}

class Enemy extends Entity implements EnemyProperties {
    public direction: boolean
    public jumping: boolean
    public dead: boolean

    constructor(matrix: number[][], pos: Position, direction: boolean, speed: number, jumping: boolean) {
        super(matrix, pos, speed)
        this.direction = direction
        this.jumping = jumping
        this.dead = false
        if (this.matrix !== boss && this.matrix !== bossfire && !this.direction) turn(this.matrix)
    }
}

class Boss extends Enemy implements BossProperties {
    public life: number
    public delay: number
    public hpdrain: boolean
    public canAttack: boolean
    public attackModel: number[][]
    public idleModel: number[][]
    public hearts: Misc[]

    constructor(matrix: number[][], pos: Position, direction: boolean, speed: number, jumping: boolean, life: number, delay: number, attackModel: number[][]) {
        super(matrix, pos, direction, speed, jumping)
        this.canAttack = true
        this.hpdrain = true
        this.attackModel = attackModel
        this.life = life
        this.delay = delay * 1000
        this.idleModel = matrix
        this.hearts = []
        for (let i = 0; i < life; i++) {
            this.hearts.push(new Misc(heart, { y: 30, x: 250 + 18 * i }, false))
        }
    }

    public attack() {
        if (this.dead) return
        if (this.matrix === boss) setTimeout((): void => {
            if (this.canAttack) {
                this.canAttack = false
                this.matrix = this.attackModel
                setTimeout((): void => { this.canAttack = true }, this.delay)
                if (!this.turned) this.pos.x -= 20
                this.pos.y -= 6
            }
        }, 500)
    }

}

class Misc extends Entity implements MiscProperties {
    public dead: boolean
    public disappearing: boolean

    constructor(matrix: number[][], pos: Position, disappearing: boolean) {
        super(matrix, pos)
        this.disappearing = disappearing
        this.dead = false
        this.gravityActive = false
    }
}

//////////// <--------> ////////////>- TEXT DRAWING -<//////////// <--------> ////////////

const text: VoidFunction = (): void => {
    ctx.textAlign = "left"
    ctx.font = "10px Comic Sans MS"
    ctx.fillStyle = "purple"
    ctx.fillText("FPS: " + fps, 10, 15)
    
    let displayTimer: string = `${timer / 10}`
    for (let i = 60; i < 60 * (timer / 10); i += 60) {
        if (Math.floor(timer / 10) >= i && Math.floor(timer / 10) < i + 60) {
            if ((timer - i * 10) / 10 < 10) {
                displayTimer = `${i / 60}:0${(timer - i * 10) / 10}`
                continue
            }
            displayTimer = `${i / 60}:${(timer - i * 10) / 10}`
        }
    }

    if (timer % 10 === 0) ctx.fillText("Time: " + displayTimer + ".0", 150, 15)
    if (timer % 10 !== 0) ctx.fillText("Time: " + displayTimer, 150, 15)

    ctx.textAlign = "center"
    if (level === 1) {
        ctx.font = "15px Comic Sans MS"
        ctx.fillStyle = "orange"
        ctx.fillText("Use", 60, 260)
        ctx.fillText("A, D to move", 60, 275)
        ctx.fillText("Use", 260, 220)
        ctx.fillText("W to jump", 260, 235)

        ctx.font = "50px Comic Sans MS"
        ctx.fillStyle = "lightblue"
        ctx.fillText("Mario Parkour 2.0", 300, 100)
    }
    if (level === 3) {
        ctx.font = "12px Comic Sans MS"
        ctx.fillStyle = "#73da6a"
        ctx.fillText("(!) Jump on the enemy to get rid of him", 300, 50)
    }
    if (level === 4) {
        ctx.font = "12px Comic Sans MS"
        ctx.fillStyle = "#73da6a"
        ctx.fillText("(!) Some of your enemies may jump when you are nearby", 300, 50)
    }
    if (level === 9) {
        if (scan(Boss)) return
        ctx.font = "30px Comic Sans MS"
        ctx.fillStyle = "#73da6a"
        ctx.fillText("You won !!!", 300, 150)

        ctx.font = "15px Comic Sans MS"
        ctx.fillStyle = "purple"
        ctx.fillText("Your time: " + displayTimer, 300, 175)
    }
}

//////////// <--------> ////////////>- CREATING THE ARENA ARRAY -<//////////// <--------> ////////////

const createArena = (w: number, h: number): number[][] => {
    const matrix: number[][] = []
    while (h--) {
        matrix.push(new Array(w).fill(0))
    }
    return matrix
}
const arena: number[][] = createArena(arenaWidth, arenaHeight)

//////////// <--------> ////////////>- DRAWING ENTITY -<//////////// <--------> ////////////

const drawEntity = (matrix: number[][], pos: Position): void => {
    matrix.forEach((row, y): void => {
        row.forEach((value, x): void => {
            if (value !== 0) {
                ctx.fillStyle = modelColor[value]
                ctx.fillRect(x + pos.x, y + pos.y, 1, 1)
            }
        })
    })
}

//////////// <--------> ////////////>- DRAWING BLOCKS FROM THE ARENA ARRAY -<//////////// <--------> ////////////

const drawArena: VoidFunction = (): void => {
    arena.forEach((row: number[], y: number): void => {
        row.forEach((value: number, x: number): void => {
            if (value !== 0) {
                ctx.fillStyle = arenaColor[value]
                ctx.fillRect(x * scale, y * scale, scale - 0.1, scale - 0.1)
            }
        })
    })
}

//////////// <--------> ////////////>- DRAWING BACKGROUND -<//////////// <--------> ////////////

const fillBackground: VoidFunction = (): void => {
    ctx.fillStyle = background
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

//////////// <--------> ////////////>- MODEL REVERSE -<//////////// <--------> ////////////

const turn = (model: number[][]): void => {
    for (let y = 0; y < model.length; ++y) {
        model[y].reverse()
    }
}

//////////// <--------> ////////////>- POSITION TO BLOCK REFFERENCE -<//////////// <--------> ////////////

const positionsY: number[] = []
for (let i = 0; i <= arenaHeight * scale; i += scale) {
    positionsY.push(i)
}
const getPosY = (y: number): number => {
    for (let i = 0; i < positionsY.length; i++) {
        if (y >= positionsY[i] && y < positionsY[i + 1]) {
            return i
        }
    }
}
const posMapY: Map<number, number> = new Map<number, number>()
for (let i = 0; i < arenaHeight * scale; i++) {
    posMapY.set(i, getPosY(i))
}

const positionsX: number[] = []
for (let i = 0; i <= arenaWidth * scale; i += scale) {
    positionsX.push(i)
}
const getPosX = (x: number): number => {
    for (let i = 0; i < positionsX.length; i++) {
        if (x >= positionsX[i] && x < positionsX[i + 1]) {
            return i
        }
    }
}
const posMapX: Map<number, number> = new Map<number, number>()
for (let i = 0; i < arenaWidth * scale; i++) {
    posMapX.set(i, getPosX(i))
}

//////////// <--------> ////////////>- COLLISION CHECK -<//////////// <--------> ////////////

const collide = (pos: Position): boolean => {
    let offsetX: number = posMapX.get(pos.x)
    let offsetY: number = posMapY.get(pos.y)

    try { if (arena[offsetY][offsetX] !== 0) return true } catch {
        entities.forEach((e: Entity): void => {
            if (e.pos.y >= 285) {
                if (e instanceof Enemy) e.remove()
                if (e instanceof Player) nextLevel(true)
            }
        })
    }

    return false
}

//////////// <--------> ////////////>- COLLISION SUPPORT -<//////////// <--------> ////////////

const fixedWalkingCollision = (dir: number, matrix: number[][]): number => {
    if (dir > 0) return matrix[0].length + 1
    if (dir < 0) return dir
}

const fixedScale = (dir: number): number => {
    if (dir > 0) return scale - 1
    if (dir < 0) return -2
}

//////////// <--------> ////////////>- ENTITIES COLLISION CHECK -<//////////// <--------> ////////////

const entityCollide = (pos1: Position, pos2: Position, enemymatrix: number[][]): boolean => {
    const playerpos: Position = pos1
    const enemypos: Position = pos2

    if (playerpos.x >= enemypos.x - enemymatrix[0].length && playerpos.x <= enemypos.x + enemymatrix[0].length) {
        if (playerpos.y >= enemypos.y && playerpos.y <= enemypos.y + enemymatrix.length) {
            return true
        }
    }
    return false
}

//////////// <--------> ////////////>- GRAVITY -<//////////// <--------> ////////////

const gravity: VoidFunction = (): void => {
    setTimeout(gravity, gravityForce)
    entities.forEach((entity: Entity) => {

        if (!collide({ y: entity.pos.y + entity.matrix.length, x: entity.pos.x })) {
            if (!entity.gravityActive) return
            if (entity.lastpos.x === 0 && !collide({ y: entity.pos.y + scale, x: entity.pos.x - 3 + scale })) {
                entity.pos.y++
                entity.falling = true
            } else {
                entity.falling = false
                if (entity instanceof Boss) {
                    if (entity.matrix === entity.attackModel) {
                        entity.matrix = entity.idleModel
                        if (!entity.turned) entity.pos.x += 20
                    }
                }
            }
            if (entity.lastpos.y !== 0 && entity.pos.y >= entity.lastpos.y + entity.matrix.length) {
                entity.lastpos.y = 0
            }
            if (entity.lastpos.x !== 0 && (entity.pos.x <= entity.lastpos.x - entity.matrix[0].length || entity.pos.x > entity.lastpos.x)) {
                entity.lastpos.x = 0
            }
        } else {
            entity.falling = false
            if (!(entity instanceof Boss)) return
            if (entity.matrix === entity.attackModel) {
                entity.matrix = entity.idleModel
                if (!entity.turned) entity.pos.x += entity.attackModel[Math.floor(entity.attackModel.length / 2)].length - entity.idleModel[Math.floor(entity.idleModel.length / 2)].length
            }
        }

    })
}

//////////// <--------> ////////////>- JUMPING -<//////////// <--------> ////////////

const jumpFrequency: number = 20

const clearJump = (entity: Entity): void => {
    entity.jumpCounter = 0
    clearTimeout(entity.timeout)
    entity.gravityActive = true
    entity.lastpos.x = 0
}

const doJump = (entity: Entity): void => {
    if (entity == null) return
    const endJump: number = jump * Math.floor(scale * 0.75)
    entity.falling = true

    if (entity.jumpCounter === 0) {
        entity.gravityActive = false
        if (entity instanceof Boss) entity.attack()
    }

    if (entity.jumpCounter >= endJump) {
        clearJump(entity)
        return
    }

    entity.jumpCounter++
    if (entity.jumpCounter > 0) entity.timeout = setTimeout(() => doJump(entity), jumpFrequency)

    if (!collide({ y: entity.pos.y - 2, x: entity.pos.x })
        && !collide({ y: entity.pos.y - 2, x: entity.pos.x + scale - 4 })) {
        entity.pos.y -= 2
    } else entity.jumpCounter = endJump
}

//////////// <--------> ////////////>- WALKING -<//////////// <--------> ////////////

const entityMove = (dir: number, entity: Entity): void => {
    if (entity instanceof Enemy && entity.direction == null) return
    if (entity.pos.x - 1 === 4 && dir < 0) {
        if (entity instanceof Enemy) {
            entity.direction = !entity.direction
            turn(entity.matrix)
        }
        return
    }
    if (!collide({ y: entity.pos.y, x: entity.pos.x + fixedWalkingCollision(dir, entity.matrix) })) {
        if (entity.pos.x >= arenaWidth * scale - entity.matrix[0].length - 2) {
            entity.pos.x--
            if (entity instanceof Enemy) {
                entity.direction = !entity.direction
                turn(entity.matrix)
            }
            return
        }
        if (entity.falling) {
            if (!collide({ y: entity.pos.y + Math.floor(entity.matrix.length * 0.9), x: entity.pos.x + fixedScale(dir) })
                && (entity.lastpos.y === 0 || entity.pos.y <= entity.lastpos.y)) {
                entity.pos.x += dir
            }
            return
        }
        if (!collide({ y: entity.pos.y + Math.floor(entity.matrix.length * 0.9), x: entity.pos.x + fixedWalkingCollision(dir, entity.matrix) })) {
            entity.pos.x += dir
        } else if (entity instanceof Enemy) {
            entity.direction = !entity.direction
            turn(entity.matrix)
        }
        if (entity instanceof Enemy && !entity.falling && entity.jumping
            && entity.pos.x >= player.pos.x - 80 && entity.pos.x <= player.pos.x + 80 + player.matrix[0].length
            && entity.pos.y <= player.pos.y + 40 && entity.pos.y >= player.pos.y - 40)
            doJump(entity)

        if (dir < 0 && collide({ y: entity.pos.y + scale, x: entity.pos.x })
            && !collide({ y: entity.pos.y + scale, x: entity.pos.x - scale })) {
            entity.lastpos.x = entity.pos.x
            entity.lastpos.y = entity.pos.y
        }
    } else if (entity instanceof Enemy) {
        entity.direction = !entity.direction
        turn(entity.matrix)
    }
}

//////////// <--------> ////////////>- ENTITIES PHYSICS LOGIC -<//////////// <--------> ////////////

const physics: VoidFunction = (): void => {
    entities.forEach((e: Entity): void => {
        if (e instanceof Player) {
            const player: Player = Entity.getEntity(e) as Player
            if (e.walking1) entityMove(-player.speed, player)
            if (e.walking2) entityMove(player.speed, player)
        }
        if (e instanceof Enemy) {
            const enemy: Enemy = Entity.getEntity(e) as Enemy
            const player2: Player = Entity.getEntity(player) as Player
            if (enemy == null) return
            if (e.direction) entityMove(enemy.speed, enemy)
            if (!e.direction) entityMove(-enemy.speed, enemy)

            if (e instanceof Boss) {
                if (e.matrix === e.idleModel || e.matrix === e.attackModel) {
                    if (player2.pos.x < e.pos.x && e.turned) {
                        e.turned = false
                        if (e.matrix === e.attackModel) e.pos.x -= 10
                        e.direction = false
                        turn(e.idleModel)
                        turn(e.attackModel)
                    }
                    if (player2.pos.x > e.pos.x && !e.turned) {
                        e.turned = true
                        if (e.matrix === e.attackModel) e.pos.x += 10
                        e.direction = true
                        turn(e.idleModel)
                        turn(e.attackModel)
                    }
                }
            }

            if (entityCollide({ y: player2.pos.y + player2.matrix.length + 2, x: player2.pos.x }, enemy.pos, enemy.matrix) && !enemy.dead) {
                headpop(e, player)
            }
            if (entityCollide(player2.pos, enemy.pos, enemy.matrix) && !enemy.dead) {
                if (level === 9 && scan(Boss)) {
                    let boss: Boss
                    entities.forEach((e: Entity): void => {
                        if (e instanceof Boss) boss = e
                    })
                    if (boss == null) return
                    if (boss.turned) {
                        turn(boss.attackModel)
                        turn(boss.idleModel)
                    }
                }
                nextLevel(true)
            }
        }
        if (e instanceof Misc) {
            const cloud: Misc = Entity.getEntity(e) as Misc
            const player2: Player = Entity.getEntity(player) as Player
            if (cloud == null) return
            if (entityCollide(player2.pos, { x: cloud.pos.x, y: cloud.pos.y - player.matrix.length }, cloud.matrix) && !cloud.dead) {
                headpop(e, player)
            }
        }
    })

    setTimeout(physics, 1000 / (gameRefreshRate / 2))
}

//////////// <--------> ////////////>- KILLING THE ENEMY -<//////////// <--------> ////////////

const headpop = (e: Entity, player: Player): void => {
    if (e instanceof Boss && e.matrix === e.attackModel) return
    if (e instanceof Enemy) e.dead = true
    if (e.matrix.length === 26) e.matrix = shell
    if (e instanceof Boss && e.life > 0) e.dead = false
    if (e instanceof Misc && e.disappearing) e.dead = true
    if (e instanceof Enemy && e.dead) doJump(e)
    if (e instanceof Enemy && e.dead) e.direction = null
    if ((e instanceof Enemy || e instanceof Misc) && e.dead) setTimeout((): void => e.remove(), 300)
    clearJump(Entity.getEntity(player))
    doJump(Entity.getEntity(player))

    if (!(e instanceof Boss)) return
    const boss: Boss = Entity.getEntity(e) as Boss
    setTimeout((): void => void clearJump(boss), 600)
    setTimeout((): void => void doJump(boss), 500)

    if (boss.life > 0 && boss.hpdrain) {
        boss.hpdrain = false
        setTimeout((): void => { boss.hpdrain = true }, 1000)
        boss.life--
        boss.hearts.pop()
    }
    if (boss.dead) return
    if (boss.life === 0) {
        boss.dead = true
        headpop(e, player)
    }

}

//////////// <--------> ////////////>- ARENA BLOCKS GENERATOR -<//////////// <--------> ////////////

const gen = (x1: number, x2: number, y1: number, y2: number, color?: number): void => {
    if (x1 > x2 || y1 > y2) return
    if (x1 < 0) x1 = 0
    if (x2 > arenaWidth) x2 = arenaWidth
    if (y1 < 0) y1 = 0
    if (y2 > arenaHeight) y2 = arenaHeight
    for (let y = y1; y < y2; y++) {
        for (let x = x1; x < x2; x++) {
            if (color != null) {
                arena[y][x] = color
                continue
            }
            arena[y][x] = 1
        }
    }
}

//////////// <--------> ////////////>- FLOOR HOLES GENERATOR -<//////////// <--------> ////////////

const hole = (x1: number, x2: number): void => {
    for (let x = x1; x < x2; x++) {
        arena[arenaHeight - 1][x] = 0
    }
}

//////////// <--------> ////////////>- FLOOR GENERATOR -<//////////// <--------> ////////////

const floor: VoidFunction = (): void => gen(0, arenaWidth, arenaHeight - 1, arenaHeight)

//////////// <--------> ////////////>- REMOVING ARENA BLOCKS -<//////////// <--------> ////////////

const pass = (x1: number, x2: number, y1: number, y2: number): void => {
    if (x1 > x2 || y1 > y2) return
    if (x1 < 0) x1 = 0
    if (x2 > arenaWidth) x2 = arenaWidth
    if (y1 < 0) y1 = 0
    if (y2 > arenaHeight) y2 = arenaHeight
    for (let y = y1; y < y2; y++) {
        for (let x = x1; x < x2; x++) {
            arena[y][x] = 0
        }
    }
}

//////////// <--------> ////////////>- RESET ARENA AND ENTITIES -<//////////// <--------> ////////////

const clear: VoidFunction = (): void => {
    arena.forEach((row: number[], y: number) => {
        row.forEach((value: number, x: number) => {
            arena[y][x] = 0
        })
    })
    entities = entities.filter((e: Entity) => e instanceof Player)
}

//////////// <--------> ////////////>- CREATING ENTITIES -<//////////// <--------> ////////////

const createEnemy = (matrix: number[][], pos: Position, direction: boolean, speed: number, jumping: boolean): void => {
    entities.push(new Enemy(matrix, pos, direction, speed, jumping))
}

const createBoss = (matrix: number[][], pos: Position, direction: boolean, speed: number, jumping: boolean, life: number, delay: number, attackModel: number[][]): void => {
    entities.push(new Boss(matrix, pos, direction, speed, jumping, life, delay, attackModel))
}

const createMisc = (matrix: number[][], pos: Position, disappearing: boolean): void => {
    entities.push(new Misc(matrix, pos, disappearing))
}

//////////// <--------> ////////////>- CHECK THE PRESENCE OF CERTAIN ENTITY TYPE -<//////////// <--------> ////////////

const scan = (e: Function): boolean => {
    for (let i = 0; i < entities.length; i++) {
        if (entities[i] instanceof e) return true
    }
    return false
}

//////////// <--------> ////////////>- CHECK THE PRESENCE OF SPECIFIC ENEMY -<//////////// <--------> ////////////

const scanEnemy = (e: number[][]): boolean => {
    for (let i = 0; i < entities.length; i++) {
        if (entities[i].matrix === e) return true
    }
    return false
}

//////////// <--------> ////////////>- PLAYER TELEPORT -<//////////// <--------> ////////////

const teleport = (y: number, x: number): void => {
    player.pos.y = y
    player.pos.x = x
}

//////////// <--------> ////////////>- LEVEL GENERATOR -<//////////// <--------> ////////////

const nextLevel = (lost?: boolean): void => {
    clear()
    floor()
    if (level > 1) teleport(player.pos.y, 17)
    if (level === 1) {
        teleport(343, 32)
        clearInterval(runningTimer)
        runningTimer = null
        timer = 0

        hole(12, 24)

        gen(8, 9, 23, 24)
        gen(9, 10, 23, 24)
        gen(9, 10, 22, 23, 2)
        gen(14, 15, 20, 21, 2)
        gen(21, 22, 20, 21, 2)
        gen(21, 22, 19, 20, 2)
        gen(28, 31, 18, 19, 2)
        gen(38, 40, 18, 19, 2)

        teleport(343, 32)
    }
    if (level === 2) {
        hole(14, 36)

        gen(0, 4, 18, 19, 2)
        gen(11, 12, 23, 24, 2)
        gen(16, 17, 21, 22, 2)
        gen(25, 27, 21, 22, 2)

        if (lost) teleport(343, 17)
    }
    if (level === 3) {
        hole(14, 16)

        gen(16, 18, 23, 24, 2)

        gen(22, 24, 23, 24)
        gen(22, 24, 22, 23, 2)

        gen(34, 36, 23, 24, 2)

        createEnemy(fungus, { y: 344, x: 380 }, false, 1, false)

        teleport(343, 17)
    }
    if (level === 4) {
        hole(6, 38)

        gen(6, 8, 22, 23, 2)
        gen(0, 2, 20, 21, 2)
        gen(6, 8, 18, 19, 2)
        gen(0, 2, 16, 17, 2)
        gen(4, 6, 14, 15, 2)
        gen(16, 18, 16, 17, 2)
        gen(18, 26, 18, 19)
        gen(26, 28, 16, 17, 2)
        gen(30, 38, 16, 17)
        gen(38, 40, 0, 25)

        createEnemy(turtle, { y: 200, x: 300 }, false, 1, true)

        teleport(343, 17)
    }
    if (level === 5) {
        hole(21, 23)
        hole(24, 40)

        gen(0, 16, 20, 21, 2)
        gen(0, 16, 12, 13, 2)
        gen(4, 20, 16, 17, 2)
        gen(4, 20, 8, 9, 2)
        gen(20, 21, 5, 25)
        gen(23, 24, 0, 14)
        gen(23, 24, 16, 25)
        gen(23, 27, 16, 17, 2)
        gen(29, 31, 14, 15, 2)
        gen(33, 35, 12, 13, 2)
        gen(37, 40, 10, 11, 2)

        createEnemy(fungus, { y: 100, x: 260 }, false, 1, false)
        createMisc(cloud, { y: 315, x: 260 }, false)
        createMisc(cloud, { y: 200, x: 260 }, false)
        createMisc(cloud, { y: 255, x: 25 }, false)
        createMisc(cloud, { y: 135, x: 25 }, false)

        teleport(343, 17)
    }
    if (level === 6) {
        hole(0, 40)

        gen(0, 3, 10, 11, 2)
        gen(7, 8, 0, 18)
        gen(12, 14, 19, 20, 2)
        gen(8, 10, 15, 16, 2)
        gen(8, 10, 10, 11, 2)
        gen(8, 10, 5, 6, 2)
        gen(30, 33, 9, 10, 2)
        gen(39, 40, 0, 18)
        gen(39, 40, 20, 25)
        gen(38, 40, 20, 21, 2)
        gen(32, 33, 10, 25)

        createMisc(cloud, { y: 310, x: 120 }, false)
        createMisc(cloud, { y: 245, x: 190 }, false)
        createMisc(cloud, { y: 180, x: 190 }, false)
        createMisc(cloud, { y: 115, x: 190 }, false)
        createMisc(cloud, { y: 140, x: 350 }, false)

        teleport(133, 17)
    }
    if (level === 7) {
        gen(0, 16, 11, 12)
        gen(24, 40, 13, 14)
        gen(0, 15, 7, 8)
        gen(25, 40, 9, 10)
        gen(0, 14, 3, 4)
        gen(26, 40, 5, 6)
        gen(6, 7, 20, 25)
        gen(4, 6, 22, 23, 2)
        gen(39, 40, 19, 25)
        gen(37, 40, 19, 20, 2)

        createEnemy(fungus, { y: 10, x: 10 }, true, 1, true)
        createEnemy(fungus, { y: 70, x: 100 }, true, 2, true)
        createEnemy(turtle, { y: 130, x: 40 }, true, 2, false)
        createEnemy(turtle, { y: 40, x: 480 }, false, 1, true)
        createEnemy(fungus, { y: 100, x: 570 }, false, 3, true)
        createEnemy(fungus, { y: 160, x: 510 }, false, 1, false)

        teleport(343, 17)
    }
    if (level === 8) {
        gen(0, 27, 20, 21, 2)
        gen(0, 2, 15, 16, 2)
        gen(7, 9, 18, 19, 2)
        gen(4, 23, 13, 14, 2)
        gen(0, 2, 9, 10)
        gen(4, 11, 7, 8)
        gen(29, 40, 13, 14, 2)
        gen(38, 40, 0, 11)

        createEnemy(fungus, { y: 280, x: 150 }, true, 1, false)
        createMisc(cloud, { y: 250, x: 50 }, false)
        createMisc(cloud, { y: 320, x: 440 }, false)

        teleport(343, 17)
    }
    if (level === 9) {
        createBoss(boss, { y: 343, x: 500 }, false, 1, true, bossLife, 3, bossfire)

        teleport(343, 17)
    }
}

//////////// <--------> ////////////>- CHECK NEXT LEVEL CONDITIONS -<//////////// <--------> ////////////

const levelCheck = (): void => {
    const border: number = arenaWidth * scale - player.matrix[0].length - player.speed
    if (level === 1 && player.pos.x >= border) {
        level++
        nextLevel()
    }
    if (level === 2 && player.pos.x >= border) {
        level++
        nextLevel()
    }
    if (level === 3 && player.pos.x >= border) {
        level++
        nextLevel()
    }
    if (level === 4) {
        if (scan(Enemy)) return
        pass(38, 40, 14, 16)
        if (player.pos.x >= border) {
            level++
            nextLevel()
        }
    }
    if (level === 5 && player.pos.x >= border) {
        level++
        nextLevel()
    }
    if (level === 6 && player.pos.x >= border) {
        level++
        nextLevel()
    }
    if (level === 7) {
        if (scan(Enemy)) return
        if (!scan(Misc)) createMisc(cloud, { y: 310, x: 500 }, false)
        if (player.pos.x >= border) {
            level++
            nextLevel()
        }
    }
    if (level === 8) {
        if (player.pos.y === 209 && scan(Enemy) && entities.length < 5) createEnemy(fungus, { y: 85, x: 140 }, false, 1, true)
        if (player.pos.x > 380 && player.pos.x < 383 && player.pos.y < 160 && !scanEnemy(turtle)) {
            createEnemy(turtle, { y: 166, x: 546 }, false, 1, true)
            gen(38, 40, 11, 13)
        }
        if (player.pos.x > 400 && player.pos.y < 200 && !scan(Enemy)) pass(30, 40, 11, 13)
        if (player.pos.x >= border) {
            level++
            nextLevel()
        }
    }
    if (level === 9 && !scan(Boss)) {
        clearInterval(runningTimer)
        if (player.pos.x >= border) {
            level = 1
            nextLevel()
        }
    }
}

//////////// <--------> ////////////>- FPS AND TIMER LOGIC -<//////////// <--------> ////////////

let fpsCounter: number = 0
let fps: number = 0

const fpsCounterReset: VoidFunction = (): void => {
    fps = fpsCounter
    fpsCounter = 0
}

let timer: number = 0
const time: VoidFunction = (): void => void timer++
let runningTimer: number = null

const drawEntities: VoidFunction = (): void => {
    entities.forEach((e: Entity): void => {
        drawEntity(e.matrix, e.pos)
        if (e instanceof Boss) e.hearts.forEach((h: Misc): void => void drawEntity(h.matrix, h.pos))
    })
}

//////////// <--------> ////////////>- CONTROLS -<//////////// <--------> ////////////

window.addEventListener("keypress", (e: KeyboardEvent) => {
    const playerEntity: Player = Entity.getEntity(player) as Player
    if (runningTimer == null) runningTimer = setInterval(time, 100)

    if (e.key === "a") {
        if (playerEntity.lastDir) turn(playerEntity.matrix)
        playerEntity.walking1 = true
        playerEntity.lastDir = false
    }
    if (e.key === "d") {
        if (!playerEntity.lastDir) turn(playerEntity.matrix)
        playerEntity.walking2 = true
        playerEntity.lastDir = true
    }
    if (e.key === "w" && !playerEntity.falling) doJump(playerEntity)
})

window.addEventListener("keyup", (e: KeyboardEvent) => {
    const playerEntity = Entity.getEntity(player) as Player

    if (e.key === "a") playerEntity.walking1 = false
    if (e.key === "d") playerEntity.walking2 = false
})

//////////// <--------> ////////////>- GENERAL RENDERING FUNCTION -<//////////// <--------> ////////////

const render: VoidFunction = (): void => {
    fillBackground()
    drawArena()
    text()
    drawEntities()

    levelCheck()
    fpsCounter++
}

//////////// <--------> ////////////>- GAME START -<//////////// <--------> ////////////

const run: VoidFunction = (): void => {
    physics()
    gravity()
    nextLevel()
    entities.push(player)
}

const player: Player = new Player(mario, { y: 343, x: 32 }, speed)

run()
render()

setInterval(fpsCounterReset, 1000)
setInterval(render, 1000 / targetFps)