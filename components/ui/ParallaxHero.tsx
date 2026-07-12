import React from "react";
import Image from "next/image";

interface ParallaxHeroProps {
    backgroundImage: string;
    overlayClass?: string;
    containerClass?: string;
    imageClass?: string;
    children: React.ReactNode;
}

export default function ParallaxHero({
    backgroundImage,
    overlayClass = "bg-black/40",
    containerClass = "h-[460px] pt-24 md:pt-32",
    imageClass = "",
    children,
}: ParallaxHeroProps) {
    return (
        <section
            className={`relative w-full flex flex-col px-[8px] pt-[8px] z-0 ${containerClass}`}
        >
            {/* Background Image Mask */}
            <div
                className="absolute inset-y-[10px] inset-x-[10px] z-0 bg-[#252425] rounded-[20px]"
                style={{ clipPath: 'inset(0 round 20px)' }}
            >
                <div className="fixed top-0 left-0 w-full h-[100vh] z-0 pointer-events-none">
                    <Image
                        src={backgroundImage}
                        alt="Background"
                        fill sizes="100vw"
                        priority
                        className={`hero-parallax-anim object-cover scale-[1.02] ${imageClass}`}
                    />
                    <div className={`absolute inset-0 ${overlayClass}`} />
                </div>
            </div>

            {/* Content */}
            {children}
        </section>
    );
}
