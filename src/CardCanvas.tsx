import cardFront from './resources/city/City - Front.jpg'
import cardBack from './resources/city/City - Back.jpg'
import { useEffect, useLayoutEffect, useRef } from 'react';


export default function CardCanvas(){
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasBackRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        if(canvasRef.current !== null){
            const context = canvasRef.current.getContext('2d');
            if(context !== null ) {
                context.font = "25pt SakkalMajalla";
                context.fillStyle = "white";
                context.textAlign = "center";
            }
            const image = new Image();
            image.onload = function(res) {
                console.log("res", res);
                context?.drawImage(image, 0, 0);
                context?.fillText("Mytext", 90, 200);
                
            };
            image.onerror = function(err) {
                console.log("err", err);
            };
            image.src = require("./resources/city/City - Front.jpg");
        }
        if(canvasBackRef.current !== null){
            const context = canvasBackRef.current.getContext('2d');
            
            if(context !== null ) {
                context.font = "25pt SakkalMajalla";
                context.fillStyle = "white";
                context.textAlign = "center";
            }
            const image = new Image();
            image.onload = function(res) {
                console.log("res", res);
                context?.drawImage(image, 0, 0);
                context?.fillText("Mytext", 90, 200);
                
            };
            image.onerror = function(err) {
                console.log("err", err);
            };
            image.src = require("./resources/city/City - Back.jpg");
        }
    }, [])
    return (
        <>
        <canvas ref={canvasRef} width="413" height="563" className=' my-auto aspect-[413/563] h-full'></canvas>
        <canvas ref={canvasBackRef} width="413" height="563" className=' my-auto aspect-[413/563] h-full'></canvas>
        </>
    )
}