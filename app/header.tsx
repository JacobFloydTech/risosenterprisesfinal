'use client';

import { useEffect } from "react"
import VideoIntroduction from "./product/videoIntroduction";
import { useState } from "react";

export default function Header() {
    const [videoLoaded, setVideoLoaded] = useState(false);
    useEffect(() => {
        setUpAnimation();
        window.addEventListener('resize',setUpAnimation)
        return () => window.removeEventListener('resize',setUpAnimation)

    }, [])


    function setUpAnimation() {
        animateMission();
        visionMobile();
    }

    function visionMobile() {
        const e = document.getElementById('vision');
        if (!e) { return }
        setTimeout(() => {
            e.classList.add('animateVision')
        }, 500);

        window.addEventListener('scroll', () => {
            const { top } = e.getBoundingClientRect();
            if (top+200 > window.scrollY) {
                e.classList.add('animateVision')
            } else {
                e.classList.remove('animateVision');
            }
        }, false)



    }



    function animateMission() {
        const e = document.getElementById('mission');
        if (!e) { return }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    setTimeout(() => {
                        e.target.classList.add('mission');
                        observer.unobserve(e.target);
                        observer.disconnect();
                    }, 350)
                }
            })
        }, { threshold: 0.8, })

        observer.observe(e);


    }




    return (
        <div className={"flex flex-col md:pt-24 w-screen overflow-hidden md:space-y-0 items-center" + (videoLoaded ? " opacity-1" : " opacity-0")}>
            
            <div id='container' className="flex-col  h-auto md:w-3/4 w-full justify-center items-center LoraText  font-bold text-2xl md:text-6xl pb-12 mt-36 sm:mt-20 ">

                    <div className=" text-center md:w-2/3 w-[95%] mx-auto  backdrop-blur-md bg-[rgba(255,240,0,0.2)] px-2 md:px-4 py-2 rounded-3xl ">
                        <div className="py-1 md:py-6 font-bold outlined-text flex flex-col md:space-y-4">
                            <p>There Shall be a Future Where Everyone</p>
                            <p className="md:pb-10 pb-4">Equally Accesses Safe Drinking-Water</p>
                            <p>We are making it to come true by enabling full control of the water quality at any time."</p>
                        </div>
                </div>

            </div>
         
                <VideoIntroduction setter={setVideoLoaded} />
       
            <div id='mission' className="font-bold opacity-0 py-4 text-2xl px-2 md:text-5xl text-[#FFFF00] LoraText pt-12">News</div>
        </div>
    )
}