'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const ImageZoom = () => {
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0
    });
    const [currentImage, setCurrentImage] = useState('/asus-pn63-s1-barebone-pc-11th-gen-intel-core-i3-11698668116.webp');
    const imgList = [
        '/asus-pn63-s1-barebone-pc-11th-gen-intel-core-i3-11698668116.webp',
        '/asus-pn63-s1-barebone-pc-11th-gen-intel-core-i3-21698668117.webp',
        '/asus-pn63-s1-barebone-pc-11th-gen-intel-core-i3-31698668117.webp',
        '/asus-pn63-s1-barebone-pc-11th-gen-intel-core-i3-41698668117.webp'
    ];

    const hendelMouseMove = (e: any) => {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        setMousePosition({ x, y })
    }
    const hendelMouseOut = (e: any) => {
        setMousePosition({ x: 0, y: 0 })
    }

    console.log(mousePosition);


    return (
        <div className='md:min-h-[400px] bg-white'>
            <div className='w-full h-full md:flex'>
                <div className='h-full w-full order-1 grid place-content-center overflow-hidden min-w-[300px]' onMouseMove={hendelMouseMove} onMouseLeave={hendelMouseOut}>
                    {/* Add image zooming effect on mouse over on the */}
                    {
                        mousePosition.x > 0 ? (
                            <Image src={currentImage} alt="big-image" className='w-full' width={700} height={700} id='zoomingImage' style={{ transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`, transform: `scale(2)` }} />
                        ) : (
                            <Image src={currentImage} alt="big-image" className='w-full' width={700} height={700} />
                        )
                    }
                </div>
                <div className='md:h-full bg-white flex md:flex-col gap-4 p-4'>
                    {imgList.map((img, index) => (
                        <div
                            key={index}
                            className='w-full aspect-h-9 cursor-pointer group overflow-hidden border border-gray-300 rounded-md'
                            onMouseOver={() => setCurrentImage(img)}
                        >
                            <Image
                                src={img}
                                className='object-cover transition-transform transform group-hover:scale-110'
                                alt={`image-${index}`}
                                width={80}
                                height={80}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageZoom;