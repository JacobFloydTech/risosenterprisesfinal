"use client"

import { useEffect, useRef } from "react"


export default function VideoIntroduction({setter}: { setter: Function}) {
    const buttons = useRef<any>();
    const grid = useRef<any>();
    const button = useRef<any>();

    useEffect(() => {
        setter(true)
        
    }, [])

    function handleScroll() {
        const el = document.getElementById('videoContainer');
        if (!el) { return; }
        let { top } = el.getBoundingClientRect();
        const target = window.innerWidth >= 1366 ? window.innerHeight / 3 : window.innerHeight/1.5;
        if (top < target) {
            start();
        }
    }
    
    function start() { 
        const el = document.getElementById('videoContainer');
        if (!el) { return; }
        el.classList.add('animateVideoContainerIn');
        main();
        window.removeEventListener('scroll', handleScroll, false)
    }
    function main() {
        if (!grid.current || !buttons.current) { return }
        const el = document.getElementById('videoContainer');
        if (!el) { return; }
        let player = document.getElementById('video') as HTMLVideoElement;
        player.classList.add('videoFadeIn')
        setTimeout(() => {
            player?.play();
        }, 2200);
        setTimeout(() => {
            document.getElementById('backgroundFilter')?.classList.add('backgroundFilter');
            document.getElementById('videoText')?.classList.add('videoText');
            buttons.current.classList.add('buttons');
            const children = Array.from(grid.current?.children) as Array<any>;
            children.forEach((e) => { animate(Array.from(e?.children)) })
            document.getElementById('video')?.classList.add('fadeOut')
        }, 7500);
        
    }

    function animate(array: Array<HTMLParagraphElement>) {
        array.forEach((e, i) => {
            setTimeout(() => {
                e.classList.add('chemicalSlide');
            }, (i / 2 + 0.5) * 1000);
        })
    }

    const particulates = ['E. coli', 'Campylobacter', 'Cryptosporidium', 'Salmonella', 'Giardia']
    const chemicals = ['Nitrates', 'Phosphates', 'Hormones', 'Microplastics', 'Cyanobacteria']
    return (
        <>
            <button ref={button} onClick={() => {start(); button.current.classList.add('fadeOut'); button.current.classList.remove('squeezeButton')}} className="bg-yellow-300 mt-12 text-white text-2xl px-4 py-2 rounded-full squeezeButton transition hover:scale-110 duration-100">Squeeze me</button>
            <div id='videoContainer' className=" w-full h-96 lg:h-[450px] xl:h-[500px] 2xl:h-[800px]  relative flex flex-col justify-center items-center ">
                <video preload="auto" disableRemotePlayback id='video' className="w-full opacity-0 h-full object-cover md:object-contain top-0 left-0 absolute" playsInline controls={false} muted>
                    <source type="video/webm" src="waicorderRenderTest.webm"/>
                    <source type="video/mp4" src="output.mp4"/>
                </video>
                <div id='backgroundFilter' className="z-30 px-4 py-2 rounded-3xl absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-1/2 bg-[rgba(255,240,0,0.2)] backdrop-blur-lg opacity-0 h-full" />
                <div className="z-40 text-white md:text-lg font-bold w-3/4 md:w-2/3 2xl:w-1/2  mx-auto text-center" >
                    <div id='videoText' className="opacity-0">
                        <p className=" xl:text-4xl 2xl:text-5xl 3xl:text-6xl md:text-xl  text-lg font-bold ">The Waicorder</p>
                        <div className="w-full mx-auto my-2 h-[3px] bg-white 3xl:my-4 " />
                        <p className="text-sm xl:text-lg 2xl:text-3xl 3xl:text-5xl py-2 xl:py-4 2xl:py-6 3xl:py-12">Revolutionizing Water Testing Soon</p>
                    </div>
                    <div ref={grid} className="grid grid-cols-2 md:-4  xl:w-3/4  mx-auto">
                        <ul className="flex flex-col items-center md:space-y-2 2xl:space-y-4">
                            {particulates.map((e) => {
                                return <p className="lg:text-left text-sm md:text-xl xl:text-2xl 2xl:text-4xl 3xl:text-5xl md:w-1/2 mx-auto text-center opacity-0">{e}</p>
                            })}
                        </ul>
                        <ul className="flex flex-col items-center  md:space-y-2 2xl:space-y-4">
                            {chemicals.map((e) => {
                                return <p className="lg:text-left text-sm md:text-xl xl:text-2xl 2xl:text-4xl 3xl:text-5xl md:w-1/2 mx-auto text-center opacity-0">{e}</p>
                            })}
                        </ul>
                    </div>
        
                    <div ref={buttons} className=" xl:w-3/4 2xl:w-2/3 pt-4 text-white z-40 flex justify-center items-center space-y-8 md:space-y-0  md:text-lg 2xl:text-xl 3xl:text-2xl my-2  md:my-4 xl:my-12   opacity-0 mx-auto">
                        <div className="flex flex-col items-center space-y-2 justify-center">
                            <p className="text-sm md:text-xl 2xl:text-lg ">Get in touch if you want to help, join or know more:</p>
                            <button onClick={() => window.location.href = '/contact'} className="bg-[#f2cc00] rounded-full border-white border-2 px-4 py-2 transition duration-200 hover:scale-105 hover:[background-size:200%] xl:hover:scale-110  p-2  3xl:px-8 3xl:py-4">Get in contact </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
