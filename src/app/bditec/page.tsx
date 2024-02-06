import Image from 'next/image'
import React from 'react'
import SliderBDITEC from './Slider'

const page = () => {
    return (
        <>

            <main className='w-full h-full bg-white'>
                <header className='bg-white px-4 lg:p-0'>
                    <div className='container mx-auto max-w-[900ox] bg-white lg:max-w-[1170px]'>
                        <div className='flex items-center lg:flex-col justify-between'>
                            <div className='w-full min-h-20 py-4'>
                                <div className='h-full'>
                                    <Image src="/logo.png" alt="" width={350} height={80} />
                                </div>
                            </div>
                            <button className='font-bold text-2xl rotate-[90deg] text-gray-500 lg:hidden'>|||</button>
                            <nav className='hidden lg:block bg-[#1b7a72] w-full'>
                                <ul className='flex uppercase text-white'>
                                    <li className='p-5 text-[12px] font-light border-r-[1px] border-[#00000031] hover:bg-blue-500 cursor-pointer'>About Itee</li>
                                    <li className='p-5 text-[12px] font-light border-r-[1px] border-[#00000031] hover:bg-blue-500 cursor-pointer'>Bditec</li>
                                    <li className='p-5 text-[12px] font-light border-r-[1px] border-[#00000031] hover:bg-blue-500 cursor-pointer'>Registation</li>
                                    <li className='p-5 text-[12px] font-light border-r-[1px] border-[#00000031] hover:bg-blue-500 cursor-pointer'>Exam Date</li>
                                    <li className='p-5 text-[12px] font-light border-r-[1px] border-[#00000031] hover:bg-blue-500 cursor-pointer'>Result</li>
                                    <li className='p-5 text-[12px] font-light border-r-[1px] border-[#00000031] hover:bg-blue-500 cursor-pointer'>Download</li>
                                    <li className='p-5 text-[12px] font-light border-r-[1px] border-[#00000031] hover:bg-blue-500 cursor-pointer'>Links</li>
                                    <li className='p-5 text-[12px] font-light border-r-[1px] border-[#00000031] hover:bg-blue-500 cursor-pointer'>FAQ</li>
                                    <li className='p-5 text-[12px] font-light border-r-[1px] border-[#00000031] hover:bg-blue-500 cursor-pointer'>E-learning</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
                <div className='container mx-auto max-w-[900ox] bg-white lg:max-w-[1170px]'>
                    <div className='w-full min-h-[250px] bg-gray-300'>
                       <SliderBDITEC/>
                    </div>
                    <div className='flex'>
                        <div>
                            <section className='min-h-screen w-full pb-8 bg-gray-100/60'>
                                <div className='w-full'>
                                    <div className='flex items-center gap-6 min-h-10 py-5'>
                                        <div className='min-w-1 bg-red-600 min-h-6'></div>
                                        <h1 className='font-bold text-[18px] text-gray-600'>ABOUT ITEE</h1>
                                    </div>
                                    <div className='px-8'>
                                        <p className='text-[14px] text-gray-600'>{`ITEE stands for Information Technology Engineers Examination. ITEE is the national level IT Engineers Examination governed by IPA, Japan. It is one of the largest scale national qualification examinations in Japan, with approximately 600,000 applicants each year. ITEE examination is conducted on the same date and time with the same set of questions among all the ITPEC (Information Technology Professionals Examination Council) member countries. The examination is conducted twice a year, generally in April and October.`}</p>
                                    </div>
                                    <div className='flex items-center gap-6 min-h-10 py-5'>
                                        <div className='min-w-1 min-h-6'></div>
                                        <h1 className='font-bold text-[18px] text-gray-600 capitalize'>There are currently 4 exams being offered by ITPEC:</h1>
                                    </div>
                                    <div>
                                        <ul className='list-decimal pl-20 flex flex-col gap-2'>
                                            <li><span className='font-bold'>Level-1:</span> IT Passport Exam (<span className='font-bold'>IP</span>): [This examination is suitable for IT & non-IT professionals and graduates.] <span className='font-light text-red-500'>Registration for IP/FE Exam</span></li>
                                            <li><span className='font-bold'>Level-2:</span> Fundamental Information Technology Engineer Examination (<span className='font-bold'>FE</span>): [This examination is suitable for IT professionals/graduates and 4th years’ CSE/IT related students.]<span className='font-light text-red-500'>Registration for IP/FE Exam</span></li>
                                            <li><span className='font-bold'>Level-3:</span> Applied Information Technology Engineer Examination (<span className='font-bold'>AP</span>): [This examination is suitable for experienced IT professionals.]</li>
                                            <li><span className='font-bold'>Level-4:</span> Advanced Examination (<span className='font-bold'>AE</span>): [This examination is suitable for domain specific experienced IT professionals.]</li>

                                        </ul>
                                    </div>
                                    <div className='flex items-center gap-6 min-h-10 py-5'>
                                        <div className='min-w-1  min-h-6'></div>
                                        <h1 className='font-bold text-[18px] text-gray-600'>ITEE in Asia</h1>
                                    </div>
                                    <div className='px-8'>
                                        <p className='text-[14px] text-gray-600'>{`ITEE qualification is widely accepted in Asian region. An agreement of mutual recognition on ITEE examination has been made amongst 13 countries in Asia. ITEE certification is mutually recognized in China, Chinese Taipei, India, Japan, Korea, Singapore, Philippines, Malaysia, Mongolia, Myanmar, Thailand, Vietnam and Bangladesh.`}</p>
                                        <p className='text-[14px] text-gray-600'>{`ITPEC is an organization to co-ordinate all the efforts of member countries in the implementation of IT Engineers Skill Standards and IT Engineers Examinations in Asia. Bangladesh has joined as ITPEC member country on 1 September 2014. Member countries of ITPEC are Philippines, Mongolia, Myanmar, Thailand, Vietnam and Bangladesh.`}</p>
                                    </div>
                                    <div className='flex items-center gap-6 min-h-10 py-5'>
                                        <div className='min-w-1  min-h-6'></div>
                                        <h1 className='font-bold text-[18px] text-gray-600'>ITEE in Bangladesh</h1>
                                    </div>
                                    <div className='px-8'>
                                        <p className='text-[14px] text-gray-600'>{`Bangladesh government is conducting and implementing ITEE in Bangladesh by Bangladesh IT-engineers Examination Center (BD-ITEC) of Bangladesh Computer Council under the umbrella of ICT Division, Ministry of Posts, Telecommunications & IT. It is the national level examination for IT professionals/graduates in Bangladesh. Non-IT Professionals/graduates also can achieve international recognition for their IT knowledge & skills. BD-ITEC is conducting ITEE in Bangladesh from October 2013 regularly. The following two exams are conducted in Bangladesh now:`}</p>
                                    </div>
                                    <div className='py-4'>
                                        <ul className='list-decimal pl-20 flex flex-col gap-2'>
                                            <li><span className='font-bold'>Level-1:</span> IT Passport Exam (<span className='font-bold'>IP</span>): [This examination is suitable for IT & non-IT professionals and graduates.] <span className='font-light text-red-500'>Registration for IP/FE Exam</span></li>
                                            <li><span className='font-bold'>Level-2:</span> Fundamental Information Technology Engineer Examination (<span className='font-bold'>FE</span>): [This examination is suitable for IT professionals/graduates and 4th years’ CSE/IT related students.]<span className='font-light text-red-500'>Registration for IP/FE Exam</span></li>

                                        </ul>
                                    </div>
                                    <div className='px-8'>
                                        <h1 className='text-[20px] italic text-gray-500 font-bold'>{`“পরবর্তী ITEE পরীক্ষা আগামী ২৭ এপ্রিল ২০২৪ শনিবার অনুষ্ঠিত হবে। পরীক্ষার রেজিস্ট্রেশন ০৪ ফেব্রুয়ারী ২০২৪ হতে ৩১ মার্চ ২০২৪ তারিখ পর্যন্ত চলমান থাকবে।”`}</h1>
                                    </div>
                                    <div className='px-8 my-4'>
                                        <h1 className='text-[20px] font-bold'>Registration for Exam</h1>
                                    </div>
                                    <div className='flex items-center gap-2 px-8'>Please visit <a className='text-red-500 font-light' href="http://registration.bditec.gov.bd/" target="_blank" rel="noopener noreferrer">http://registration.bditec.gov.bd/</a></div>
                                </div>
                                <button className='mx-8 my-4 p-3 px-10 bg-[#009a8c] uppercase font-bold text-2xl text-white'>E-LEARNING</button>
                                <div className='mx-8  my-4 h-12 bg-[#009a8c]'></div>
                            </section>
                        </div>
                        <div className='hidden lg:flex min-w-[400px] h-full min-h-screen'>
                            <div className='w-full max-h-10 bg-[#009a8c]'></div>
                        </div>
                    </div>
                </div>
                <footer className='mt-8 w-full min-h-[350px] bg-[url(/footer-bg.png)] py-8 pb-10'>
                    <div className='container mx-auto max-w-[900ox] lg:max-w-[1170px]'>
                        <div className='lg:flex gap-8'>
                            <div>
                                <div>
                                    <div className='flex items-center gap-6 min-h-10 py-8'>
                                        <div className='min-w-1 bg-red-600 min-h-5'></div>
                                        <h1 className='font-light text-[13px] text-gray-600'>USEFUL LINKS</h1>
                                    </div>
                                    <div>
                                        <ul className='list-item pl-10 overflow-x-auto max-h-[350px]'>
                                            <li className='py-2 border-y-[1px]'>INFORMATION & COMMUNICATION TECHNOLOGY DIVISION</li>
                                            <li className='py-2 border-y-[1px]'>BANGLADESH COMPUTER COUNCIL (BCC)</li>
                                            <li className='py-2 border-y-[1px]'>MINISTRY OF ECONOMY, TRADE AND INDUSTRY (METI) OF JAPAN</li>
                                            <li className='py-2 border-y-[1px]'>JAPAN INTERNATIONAL COOPERATION AGENCY (JICA), BANGLADESH</li>
                                            <li className='py-2 border-y-[1px]'>JAPAN INFORMATION-TECHNOLOGY PROMOTION AGENCY (IPA)</li>
                                            <li className='py-2 border-y-[1px]'>JAPAN INFORMATION-TECHNOLOGY ENGINEERS EXAMINATION CENTER (JITEC)</li>
                                            <li className='py-2 border-y-[1px]'>INFORMATION TECHNOLOGY PROFESSIONALS EXAMINATION COUNCIL (ITPEC)</li>
                                            <li className='py-2 border-y-[1px]'>JAPAN EXTERNAL TRADE ORGANIZATION (JETRO) BANGLADESH</li>
                                            <li className='py-2 border-y-[1px]'>BANGLADESH ASSOCIATION OF SOFTWARE & INFORMATION SERVICES (BASIS)</li>
                                            <li className='py-2 border-y-[1px]'>BANGLADESH COMPUTER SOCIETY (BCS)</li>
                                            <li className='py-2 border-y-[1px]'>UNIVERSITY GRANTS COMMISSION (UGC) OF BANGLADESH</li>
                                            <li className='py-2 border-y-[1px]'>BANGLADESH UNIVERSITY OF ENGINEERING AND TECHNOLOGY (BUET)</li>
                                            <li className='py-2 border-y-[1px]'>UNIVERSITY OF DHAKA</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center gap-6 min-h-10 py-8'>
                                    <div className='min-w-1 bg-red-600 min-h-5'></div>
                                    <h1 className='font-light text-[13px] text-gray-600'>CONTACT</h1>
                                </div>
                                <div>
                                    <div className='px-8 my-4'>
                                        <h1 className='text-[20px] font-bold'>BANGLADESH IT-ENGINEERS EXAMINATION CENTER (BD-ITEC)</h1>
                                    </div>
                                    <div className='px-8 text-[14px] text-gray-600 flex flex-col gap-2'>
                                        <p>Bangladesh Computer Council (BCC)</p>
                                        <p>ICT Tower (BCC Bhaban)</p>
                                        <p>Agargaon, Sher-e-Bangla Nagar,</p>
                                        <p>Dhaka-1207</p>
                                    </div>
                                    <div className='px-8 my-4 font-bold text-[13px] text-black flex flex-col gap-2'>
                                        <p>CALL US: 02-55006847, 02-8181032, 02-8181033, 01857321122</p>
                                        <p>EMAIL US: <a href="mailto:INFO@BDITEC.GOV.BD" className='text-red-500'>INFO@BDITEC.GOV.BD</a></p>
                                    </div>
                                    <div className='flex items-center gap-6 min-h-10 py-8'>
                                        <div className='min-w-1 bg-red-600 min-h-5'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className='flex flex-col justify-center items-center py-8 gap-2'>
                    <a target='_blank' href='#' className='flex flex-col items-center gap-2'>
                        <Image src="/gov-logo.png" alt="" width={100} height={100} />
                        <p className='text-[14px] text-gray-600'>Information & Communication Technology Division</p>
                    </a>
                    <a target='_blank' href='#' className='flex flex-col items-center gap-2'>
                        <Image src="/bcc-logo.png" alt="" width={100} height={100} />
                        <p className='text-[14px] text-gray-600'>Bangladesh Computer Council</p>
                    </a>
                    <a target='_blank' href='#' className='flex flex-col items-center gap-2'>
                        <Image src="/jica-logo.png" alt="" width={100} height={100} />
                        <p className='text-[14px] text-gray-600'>Japan International Cooperation Agency</p>
                    </a>
                </div>
                <div className='w-full py-14 bg-black'>
                    <div className='container mx-auto max-w-[900ox] lg:max-w-[1170px]'>
                        <div className='flex flex-col gap-6'>
                            <p className='text-[11px] font-light text-white'>© 2020 BANGLADESH IT-ENGINEERS EXAMINATION CENTER (BD-ITEC). ALL RIGHTS RESERVED.</p>
                            <p className='text-[11px] font-light text-white'>DEVELOPED & MAITAINED BY: <a className='text-red-500' href="#" target="_blank" rel="noopener noreferrer">RAJ IT SOLUTIONS LTD. (AN ISO 9001:2015 CERTIFIED COMPANY)</a>.</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default page