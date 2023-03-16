import {createEditor} from "./lib.js"

const app = document.querySelector(".app") as HTMLElement

createEditor(app, "hello")