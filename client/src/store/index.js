import { proxy } from "valtio";
const state = proxy({
    intro:true,
    color:'#EfBD48',
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal:'./threejs.png',
    fullDecal:'./threejs.png',
    downloadShirt:'./shirt_baked.glb'
})

export default state;