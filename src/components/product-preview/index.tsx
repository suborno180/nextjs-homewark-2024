import React from 'react';
import { FaEnvelopeSquare, FaFacebookSquare, FaHome, FaLongArrowAltRight, FaMoneyBill, FaSitemap, FaStar, FaTruck, FaWhatsapp } from 'react-icons/fa';
import { FaRegMessage } from 'react-icons/fa6';
import ImageZoom from './zooming/ImageZoom';

const ProductPreviewSection = () => {
    return (
        <div className='flex flex-col gap-3 md:p-6'>
            <div className='p-2 w-full bg-white overflow-hidden border-[1px] flex items-center'>
                <ul className='flex items-center gap-2 text-[13px]'>
                    <li className='flex items-center gap-1 text-nowrap'><FaHome/> Mini PC</li>
                    <li className='flex items-center gap-1 text-nowrap'><FaLongArrowAltRight/>All Brands</li>
                    <li className='flex items-center gap-1 text-nowrap'><FaLongArrowAltRight/>Asus</li>
                    <li className='flex items-center gap-1 text-nowrap '><FaLongArrowAltRight/><span className='line-clamp-1'>Asus PN63-S1 (Barebone PC) 11th Gen Intel Core i3 1115G4 4GB 3200MHz RAM Black Mini PC</span></li>
                </ul>
            </div>
            <div className='gap-3 lg:flex'>
                <ImageZoom />
                <div className='md:min-h-[400px] lg:min-w-[50%] bg-white md:flex-1 flex flex-col gap-3 p-3'>
                    <div className='flex flex-col gap-3 p-3'>
                        <div>
                            <h1>Asus PN63-S1 (Barebone PC) 11th Gen Intel Core i3 1115G4 4GB 3200MHz RAM Black Mini PC</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center'>
                                <FaStar color='green' />
                                <FaStar color='green' />
                                <FaStar color='green' />
                                <FaStar color='green' />
                                <FaStar color='green' />
                            </div>
                            <span className='text-[12px]'>8 reviews</span>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center flex-wrap gap-3'>
                                <div className='bg-gray-200 p-2 pr-5 text-[13px]'>Regular Price Tk 48,280</div>
                                <div className='bg-gray-200 p-2 pr-5 text-[13px]'>Monthly EMI Tk 4,023</div>
                            </div>
                            <div className='bg-gray-200 p-2 pr-5 text-[13px] max-w-[200px] font-bold'>Special Price Tk 45,000</div>
                            <a href='/' className='border-[1px] max-w-[150px] text-center border-red-500 p-2 pr-5 text-[13px]  text-red-500 rounded-sm hover:bg-red-500 hover:text-white'>See similar model</a>
                        </div>
                        <div>
                            <span className='text-sky-500'>Delivery in 1 days</span>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <h1 className='text-2xl'>Quick Overview</h1>
                            </div>
                            <div>
                                <ul className='list-disc ml-6'>
                                    <li>Form Factor - Mini PC</li>
                                    <li>Processor Type - Core i3</li>
                                    <li>Processor Max Turbo Frequency - 4.10GHz</li>
                                    <li>RAM - 4GB</li>
                                    <li>Hard Disk Drive (HDD) - No</li>
                                    <li>Solid-State Drive (SSD) - No</li>
                                    <li>Graphics Memory - Shared</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-4'>
                            <input type="number" min={1} defaultValue={1} className='border-[1px] border-black max-w-[100px] text-center ' />
                            <button className='p-1 px-5 bg-green-500 text-white hover:bg-green-600'>Add to Cart</button>
                            <button className='p-1 px-5 bg-gray-200 hover:bg-gray-300'>Compare</button>
                        </div>
                        <div className='flex items-center flex-wrap gap-3'>
                            <button className='bg-gray-200 p-2 pr-5 text-[13px] flex items-center gap-2 hover:bg-slate-300'><FaTruck /> Branches and Pickup Points</button>
                            <button className='bg-gray-200 p-2 pr-5 text-[13px] flex items-center gap-2 hover:bg-slate-300'><FaSitemap /> Order Procedure</button>
                            <button className='bg-gray-200 p-2 pr-5 text-[13px] flex items-center gap-2 hover:bg-slate-300'><FaMoneyBill /> Payment Method</button>
                        </div>
                        <div className='flex items-center gap-4'>
                            <span>Shere</span>
                            <a href="https://wa.me/?text=https://www.ryanscomputers.com/asus-pn63-s1-barebone-pc-11th-gen-intel-core-i3-1115g4-4gb-3200mhz-ram-black-mini-pc" target="_blank">
                                <FaWhatsapp className='text-green-500' />
                            </a>
                            <a href="mailto:?subject=Asus%20PN63-S1%20(Barebone%20PC)%2011th%20Gen%20Intel%20Core%20i3%201115G4%204GB%203200MHz%20RAM%20Black%20Mini%20PC&body=https://www.ryanscomputers.com/asus-pn63-s1-barebone-pc-11th-gen-intel-core-i3-1115g4-4gb-3200mhz-ram-black-mini-pc">
                                <FaEnvelopeSquare className='text-red-500' />
                            </a>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.ryanscomputers.com/asus-pn63-s1-barebone-pc-11th-gen-intel-core-i3-1115g4-4gb-3200mhz-ram-black-mini-pc">
                                <FaFacebookSquare className='text-blue-500' />
                            </a>
                            <a href="fb-messenger://share/?link=https://www.ryanscomputers.com/asus-pn63-s1-barebone-pc-11th-gen-intel-core-i3-1115g4-4gb-3200mhz-ram-black-mini-pc">
                                <FaRegMessage className='text-blue-500' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPreviewSection;
