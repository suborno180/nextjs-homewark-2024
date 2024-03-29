import React from 'react'

const Foodpanda = () => {
    return (
        <div>
            <main>
                <div>
                    <div className="p-2 bg-[#e21b70]">
                        <div className="max-w-[350px] px-4 lg:px-0 mx-auto">
                            <div className="w-full flex gap-8">
                                <div className="hidden md:grid place-content-center">
                                    <svg viewBox="0 0 48 48" width="40" fill="white" xmlns="http://www.w3.org/2000/svg"
                                        className="svg-stroke-container">
                                        <path
                                            d="M44.66,9.09,31.19,5.18a4.66,4.66,0,0,0-2.59,0L11,10.13a4.62,4.62,0,0,0-3.37,4.36s0,0,0,.07v4C4.51,21.9.1,27.21,0,31.91A10.57,10.57,0,0,0,0,33a5,5,0,0,0,2.69,4.08,5.66,5.66,0,0,0,2.64.65,13.73,13.73,0,0,0,4.27-1,7.73,7.73,0,0,0,3.7,5.55A5.41,5.41,0,0,0,16,43a17.66,17.66,0,0,0,5.93-1.66l1.16.58a4.66,4.66,0,0,0,2.07.48,4.55,4.55,0,0,0,1.26-.17l18.16-5.91A4.62,4.62,0,0,0,48,31.87V13.51A4.64,4.64,0,0,0,44.66,9.09Zm-33.35,2,9-2.52,13.18,3.83A3.62,3.62,0,0,1,36,15.86v5L26.28,24V18.37a2.56,2.56,0,0,0-1.92-2.44L11.17,12.1a2.85,2.85,0,0,0-1.45,0A3.64,3.64,0,0,1,11.31,11.11ZM4.79,36a4,4,0,0,1-2.14-3.89c.17-2.62,2.47-5.88,5-8.82V33a2.53,2.53,0,0,0,1.52,2.29l.39.18c0,.1,0,.21,0,.32C7.84,36.31,6.09,36.61,4.79,36Zm16,4.75c-2,.66-4.14,1-5.61.37a4.89,4.89,0,0,1-3-4.48v0l4.23,2,4.58,2.13Zm2-.31-6-2.78-4.58-2.13s0-.08,0-.12c.91-4.8,6.24-12.14,9.08-15.16a1,1,0,0,0-.42-1.68l-1.21-.41a1,1,0,0,0-1.07.28c-1.78,1.95-7.92,9.28-8.92,15.48,0,.14-.06.28-.07.41l0,0A1.51,1.51,0,0,1,8.69,33V22.13c1.64-1.81,3.26-3.43,4.38-4.62a1,1,0,0,0-.43-1.68l-1.2-.41a1,1,0,0,0-1.08.28c-.36.4-.95,1-1.67,1.74v-3a1.5,1.5,0,0,1,.62-1.14A1.74,1.74,0,0,1,10.37,13a1.79,1.79,0,0,1,.51.07l13.19,3.83a1.55,1.55,0,0,1,1.17,1.46V39.08a1.48,1.48,0,0,1-.72,1.26A1.84,1.84,0,0,1,22.8,40.45ZM47,31.87a3.6,3.6,0,0,1-2.7,3.46L26.11,41.24a3.25,3.25,0,0,1-1.35.1,1.41,1.41,0,0,0,.31-.14,2.49,2.49,0,0,0,1.21-2.12v-5.5L47,27.11Zm0-14.5-9.89,3.16V15.86a4.64,4.64,0,0,0-3.34-4.42L22.12,8.06l6.76-1.91a3.77,3.77,0,0,1,1-.14,3.55,3.55,0,0,1,1,.15l13.47,3.92A3.59,3.59,0,0,1,47,13.51Z"
                                            className="rider-icon__path"></path>
                                    </svg>
                                </div>
                                <div className="flex items-center gap-2 justify-between w-full">
                                    <h1 className="text-white lg:text-nowrap lg:text-2xl">Do you need a business account?</h1>
                                    <button className="uppercase text-nowrap font-bold text-white p-2 border-[2px] rounded-lg">signup
                                        now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <header className="p-2 px-4 lg:px-0 w-full shadow-2xl">
                        <div className="flex items-center justify-between max-w-[1200px] mx-auto">
                            <div className="lg:hidden">
                                <svg aria-hidden="true" fill="#e21b70" focusable="false" className="fl-interaction-primary" width="24"
                                    height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="personal-icon">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 11.5C13.933 11.5 15.5 9.933 15.5 8C15.5 6.067 13.933 4.5 12 4.5C10.067 4.5 8.50001 6.067 8.50001 8C8.50001 9.933 10.067 11.5 12 11.5ZM10.0566 14.2045C10.679 14.071 11.33 14.0001 12 14C12.0003 14 12.0007 14 12.001 14C12.6709 14 13.3218 14.0708 13.9442 14.2042C17.1008 14.881 19.5251 17.1688 19.9907 20.0041C20.0802 20.5491 19.6241 21 19.0718 21H4.93021C4.37792 21 3.92177 20.5491 4.01127 20.0041C4.47684 17.1692 6.90063 14.8815 10.0566 14.2045ZM10.1743 12.6562C8.31584 11.9269 7.00001 10.1171 7.00001 8C7.00001 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.1169 15.6845 11.9265 13.8263 12.656C13.2609 12.8779 12.6452 12.9999 12.001 13C12.0007 13 12.0003 13 12 13C11.3557 13 10.7399 12.8781 10.1743 12.6562ZM18.3216 19.5C17.5644 17.2951 15.1351 15.5 12.001 15.5C8.86687 15.5 6.43759 17.2951 5.6804 19.5H18.3216Z">
                                    </path>
                                </svg>
                            </div>
                            <div className="flex items-center">
                                <a href="http://" target="_blank" className="flex items-center gap-3">
                                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="28" height="28"
                                        data-testid="brand-icon-icon" aria-hidden="true" focusable="false" className="logo-icon">
                                        <path d="M35 0H5C2.24 0 0 2.24 0 5v30c0 2.76 2.24 5 5 5h30c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5Z"
                                            fill="#ff2b85"></path>
                                        <path
                                            d="M14.58 17.53c.41-.04.71-.4.68-.81a.756.756 0 0 0-.81-.68c-.39.03-.68.35-.68.74.02.43.38.76.81.75Zm10.44-1.33c.12-.09.25-.14.4-.16.43-.02.79.32.81.75 0 .41-.33.75-.75.75s-.75-.33-.75-.75c0-.23.11-.45.29-.59Z"
                                            fill="#fff"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M33.51 14.52v-.03c-.15-.3-.1-.65.12-.9a4.983 4.983 0 0 0 .89-4.78c-.06-.19-.34-.24-.61-.29-.26-.05-.52-.09-.62-.26-.09-.15-.06-.38 0-.63.02-.07.03-.13.04-.2.05-.26.07-.51-.06-.64s-.28-.26-.42-.37l-.09-.07c-1-.74-2.23-1.1-3.47-1.03-1.08.05-2.23.41-3.06 1.14-.4.29-.92.37-1.39.22l-.07-.02c-.84-.3-1.7-.52-2.58-.66a14.28 14.28 0 0 0-6.95.66h-.05c-.45.18-.96.1-1.35-.19-1.55-1.37-4.68-1.71-6.72.01-2.23 1.88-2.36 5.17-.71 7.1.22.25.26.6.12.9-.98 2-1.5 4.2-1.51 6.43 0 7.97 6.72 13.77 15 13.77 8.28 0 15-5.8 15-13.77 0-2.22-.52-4.41-1.49-6.41 0 0 0 .02-.01.02h-.01ZM19.9 20.19c1.19 0 2.15.26 2.15.72 0 .46-.96 1.5-2.15 1.5s-2.15-1.04-2.15-1.5c0-.46.96-.72 2.15-.72ZM7.86 11.8a.578.578 0 0 1-.18-.2c-.02-.03-.04-.07-.06-.1-.36-.66-.45-1.44-.23-2.16.42-1.41 1.92-2.24 3.35-2.05.37.05.74.17 1.07.35.14.08.26.17.37.28.04.04.08.09.1.15.02.09 0 .18-.07.25-.06.06-.14.11-.22.15-1.37.8-2.49 1.95-3.52 3.14-.17.19-.35.37-.61.19Zm3.66 11.33c-1.24-.14-2.32-1.45-2.73-2.77-.18-.58-.61-3.26 1.31-5.2.64-.64 1.54-1.21 2.79-1.59.41-.1.82-.15 1.24-.15.62 0 1.36.1 1.95.53 1.24.91 1.26 2.44.52 3.23s-2.4 2.59-2.83 4.06c-.42 1.47-1.01 2.04-2.26 1.9 0 0 .01-.01.01 0v-.01Zm8.4 4.43h-.04c-2.39-.01-4.32-1.7-4.32-3.4 0-.59.26-.89.89-.73.37.09 1.89.48 3.27.48h.35c1.35 0 2.82-.37 3.24-.48h.03c.64-.16.89.14.89.72 0 1.7-1.93 3.39-4.32 3.4h.01v.01Zm11.09-7.22c-.41 1.32-1.49 2.63-2.73 2.77-1.24.14-1.83-.42-2.26-1.9-.43-1.47-2.09-3.28-2.83-4.07-.74-.78-.72-2.32.52-3.23.58-.43 1.33-.53 1.95-.53.42 0 .83.05 1.24.15 1.25.38 2.15.94 2.79 1.58 1.92 1.94 1.49 4.62 1.31 5.2 0 0 .01.03 0 .03h.01Zm1.37-8.84-.06.1a.86.86 0 0 1-.18.2c-.26.18-.44 0-.61-.19-1.03-1.19-2.15-2.34-3.52-3.14a1.07 1.07 0 0 1-.22-.15.33.33 0 0 1-.08-.25c.02-.06.05-.11.1-.15.11-.11.23-.21.37-.28.33-.18.7-.3 1.07-.35 1.43-.19 2.93.64 3.35 2.05.21.72.13 1.5-.23 2.16h.01Z"
                                            fill="#fff"></path>
                                    </svg>
                                    <span className="text-[#e21b70] font-bold text-[20px]">foodpanda</span>
                                </a>
                            </div>
                            <div className="flex">
                                <div className="hidden lg:flex items-center gap-4">
                                    <button className="p-1 border-[1px] border-[#e21b70] text-[#e21b70] px-4 rounded-lg">Login</button>
                                    <button className="p-1 border-[1px] border-[#e21b70] bg-[#e21b70] text-white px-4 rounded-lg">Login</button>
                                    <div className="flex items-center gap-1 hover:bg-[#e21b70]/20 p-1 px-2 rounded-md">
                                        <svg aria-hidden="true" focusable="false" className="fl-none" width="24" height="24" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM10.6635 19.3813C9.79267 18.1369 9.11658 16.9361 8.65036 15.75H5.50337C6.58707 17.6234 8.45784 18.9845 10.6635 19.3813ZM4.84335 14.25H8.17237C7.98964 13.4966 7.89523 12.7442 7.8931 11.9853C7.891 11.2379 7.97842 10.4952 8.15242 9.75H4.84335C4.62027 10.4603 4.5 11.2161 4.5 12C4.5 12.7839 4.62027 13.5397 4.84335 14.25ZM5.50337 8.25H8.61663C9.06884 7.07159 9.72906 5.8752 10.586 4.63309C8.41405 5.04747 6.57436 6.39858 5.50337 8.25ZM18.4966 15.75C17.4415 17.574 15.6402 18.9124 13.5102 19.3479C14.3698 18.1154 15.038 16.9255 15.5 15.75H18.4966ZM19.1566 14.25H15.978C16.1608 13.4966 16.2552 12.7442 16.2573 11.9853C16.2594 11.2379 16.172 10.4952 15.998 9.75H19.1566C19.3797 10.4603 19.5 11.2161 19.5 12C19.5 12.7839 19.3797 13.5397 19.1566 14.25ZM18.4966 8.25H15.5338C15.0859 7.08283 14.4339 5.89803 13.5888 4.66862C15.6845 5.12065 17.4545 6.44847 18.4966 8.25ZM12.0752 5.12312C12.8682 6.22942 13.4764 7.26325 13.9116 8.25H10.2388C10.674 7.26325 11.2822 6.22942 12.0752 5.12312ZM9.69994 9.75H14.4504C14.6591 10.5113 14.7593 11.2505 14.7573 11.981C14.7552 12.7258 14.6467 13.4775 14.4269 14.25H9.72354C9.50364 13.4775 9.39519 12.7258 9.3931 11.981C9.39105 11.2505 9.49129 10.5113 9.69994 9.75ZM10.2783 15.75H13.8721C13.4389 16.7093 12.8428 17.7109 12.0752 18.7788C11.3076 17.7109 10.7115 16.7093 10.2783 15.75Z">
                                            </path>
                                        </svg>
                                        <select name="" id="" className="bg-transparent rounded-lg outline-none">
                                            <option value="bn">BN</option>
                                            <option value="en">EN</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="grid place-content-center">
                                    <svg aria-hidden="true" fill="#e21b70" focusable="false" className="fl-brand-primary" width="24" height="24"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M12.0021 2C14.5418 2 16.4241 3.6512 16.5538 6.15854H19.8491C20.4014 6.15854 20.8491 6.60625 20.8491 7.15854C20.8491 7.20585 20.8457 7.25311 20.8391 7.29996L19.1248 19.1414C19.0544 19.6341 18.6325 20 18.1348 20H5.86942C5.37176 20 4.94984 19.6341 4.87947 19.1414L3.16518 7.29996C3.08707 6.75322 3.46697 6.24669 4.0137 6.16859C4.06055 6.16189 4.10781 6.15854 4.15513 6.15854L7.36129 6.16397C7.49108 3.65663 9.46248 2 12.0021 2ZM17.5607 16.25H6.44235C6.22143 16.25 6.04235 16.4291 6.04235 16.65C6.04235 16.669 6.04369 16.6879 6.04638 16.7067L6.25397 18.1567C6.28217 18.3537 6.45092 18.5 6.64993 18.5H17.3533C17.5523 18.5 17.7211 18.3537 17.7492 18.1566L17.9567 16.7066C17.988 16.488 17.836 16.2853 17.6174 16.254C17.5986 16.2513 17.5797 16.25 17.5607 16.25ZM18.8109 7.65854H5.19233C4.97142 7.65854 4.79233 7.83762 4.79233 8.05854C4.79233 8.32251 4.79367 8.09637 4.79635 8.11511L5.71793 14.4066C5.74609 14.6036 5.91486 14.75 6.11391 14.75H17.8891C18.0882 14.75 18.2569 14.6036 18.2851 14.4066L19.2069 8.11513C19.2381 7.89643 19.0862 7.69381 18.8675 7.66256C18.8487 7.65988 18.8298 7.65854 18.8109 7.65854ZM12.0021 3.40323C10.4163 3.40323 9.15495 4.32251 8.91234 5.80175C8.88507 5.96802 8.98943 6.12701 9.15495 6.15854C9.17377 6.16212 9.19289 6.16392 9.21204 6.1639L14.7134 6.15847C14.8772 6.15843 15.0099 6.02566 15.0099 5.86189C15.0099 5.84361 14.9631 5.82209 15.0049 5.80742C14.655 4.32251 13.5918 3.40323 12.0021 3.40323Z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>

                <section className="w-full min-h-[80vh] bg-[#f7f7f7] relative">
                  
                    <div className="max-w-[1200px] px-4 lg:px-0 mx-auto">
                        <div className="w-full h-full grid lg:grid-cols-5">
                            <div className="col-span-5 lg:col-span-2 min-h-36 lg:order-1 w-full flex justify-end relative">
                                <img className="h-36 lg:h-[500px] lg:absolute -right-[30%]" src="https://images.deliveryhero.io/image/foodpanda/homepage/refresh-hero-home-bd.png" alt="" />
                            </div>
                            <div className="lg:min-h-[500px] col-span-5 lg:col-span-3 lg:flex lg:flex-col justify-center lg:pl-4 w-full">
                                <div className="flex flex-col lg:flex-row items-center gap-4">
                                    <div className="w-full flex flex-col lg:flex-row items-center gap-4 p-2 rounded-xl lg:border-[1px] lg:shadow-2xl">
                                        <div className="border-[1px] shadow-2xl lg:shadow-none w-full rounded-xl flex items-center gap-4">
                                            <input type="text" className="w-full bg-transparent text-[18px] p-2 lg:text-[20px] outline-none px-4"
                                                placeholder="Your street and stree number"/>
                                                <div className="flex items-center gap-2 mr-4">
                                                    <span>
                                                        <svg aria-hidden="true" fill="#e21b70" focusable="false" className="fl-none" width="24" height="24"
                                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M12 2C12.4142 2 12.75 2.33579 12.75 2.75L12.7506 3.67925C12.7507 3.88008 12.8998 4.04968 13.0989 4.07562C13.1524 4.08259 13.1986 4.08909 13.2375 4.09514C16.6725 4.62856 19.3848 7.34731 19.9084 10.7855C19.9135 10.8188 19.9189 10.8575 19.9247 10.9019C19.9506 11.1011 20.1204 11.2502 20.3214 11.2502L21.25 11.25C21.6642 11.25 22 11.5858 22 12C22 12.4142 21.6642 12.75 21.25 12.75L20.3212 12.7506C20.1205 12.7507 19.951 12.8995 19.9249 13.0985C19.9211 13.1273 19.9175 13.1532 19.9141 13.1762C19.4013 16.6567 16.647 19.4078 13.1649 19.9158C13.145 19.9187 13.1228 19.9218 13.0984 19.925C12.8995 19.9511 12.7507 20.1206 12.7506 20.3213L12.75 21.25C12.75 21.6642 12.4142 22 12 22C11.5858 22 11.25 21.6642 11.25 21.25L11.2502 20.3213C11.2502 20.1203 11.1011 19.9505 10.9018 19.9246C10.8535 19.9183 10.8115 19.9124 10.7758 19.9069C7.33814 19.379 4.62167 16.6629 4.09327 13.2254C4.08776 13.1896 4.08184 13.1474 4.07552 13.0989C4.04958 12.8997 3.87997 12.7507 3.67912 12.7506L2.75 12.75C2.33579 12.75 2 12.4142 2 12C2 11.5858 2.33579 11.25 2.75 11.25L3.67818 11.2502C3.87895 11.2502 4.04865 11.1015 4.07487 10.9024C4.07777 10.8805 4.08053 10.8604 4.08317 10.8422C4.58738 7.36412 7.32923 4.61075 10.8016 4.08916C10.8307 4.08479 10.8642 4.08013 10.902 4.07519C11.1012 4.04909 11.2502 3.87936 11.2502 3.67848L11.25 2.75C11.25 2.33579 11.5858 2 12 2ZM12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5ZM12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8ZM12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5Z">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    <span className="text-[#e21b70] text-nowrap font-bold">Locate me</span>
                                                </div>
                                        </div>
                                        <button className="w-full lg:w-[150px] bg-[#e21b70] hover:bg-[#c00c5a] p-2 rounded-xl text-white">Find foods</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Foodpanda