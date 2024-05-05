'use client'

import React, { useState, useEffect } from "react";
import PortfolioItem from "./portfolioItem";
import PortfolioData from "./portfolioData";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


const Portfolio = () => {
  const [selectedTag, setSelectedTag] = useState("websites");
  const [filteredPortfolio, setFilteredPortfolio] = useState(PortfolioData);

 
  useEffect(() => {
    if (selectedTag === "websites") {
      setFilteredPortfolio(PortfolioData);
    } else {
      const filteredItems = PortfolioData.filter((item) =>
        item.tags.includes(selectedTag)
      );
      setFilteredPortfolio(filteredItems);
    }
  }, [selectedTag]);

  const handleTagSelection = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <>
   <section className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 px-3 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex sm:flex-col md:flex-row lg:items-center lg:gap-2 xl:gap-32.5">
            <div className="md:w-1/2 sm:w-full">
              <h4 className="text-black dark:text-white text-lg font-medium ml-8 mb-4.5 ">
                🔥 My Projects
              </h4>
              <div className="flex flex-row justify-start items-center">
              <Image
                    width={130}
                    height={130}
                    src="/images/user/macaihero.png"
                    alt="Logo"
                    className="mr-6 mb-3"
                  />
              <h1 className="text-black dark:text-white text-4xl xl:text-hero font-bold mb-5 pr-16 ">
              Portfolio 
                <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 ml-2.5 ">
                </span>
              </h1>
              </div>
              <h4 className="text-black dark:text-white text-lg font-medium mt-4 mb-5.5">
                Web | AI | Marketing | Automations
              </h4>

              <motion.div
              variants={{ hidden: {opacity: 0, y: -20, },
                visible: { opacity: 1,y: 0,},
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-5">
     
              <li>
              <a href="https://x.com/piotrmacai" target="_blank">
                  <svg
                    className="fill-[#D1D8E0] hover:fill-primary transition-all duration-300"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.643 4.93701C22.808 5.21401 21.911 5.40301 20.968 5.48601C21.93 4.89801 22.668 3.99301 23.016 2.91301C22.116 3.45901 21.119 3.86101 20.058 4.10001C19.208 3.20301 17.998 2.62501 16.658 2.62501C13.998 2.62501 11.793 4.83001 11.793 7.49001C11.793 7.76501 11.823 8.03001 11.875 8.28401C7.728 8.08601 4.1 6.12001 1.671 3.14001C1.37 3.71101 1.205 4.35001 1.205 5.03001C1.205 6.65001 2.021 8.08001 3.22 8.96001C2.435 8.93901 1.67 8.73101 1 8.36101C1 8.38001 1 8.39901 1 8.41901C1 10.761 2.711 12.669 4.9 13.004C4.6 13.089 4.295 13.132 3.98 13.132C3.751 13.132 3.525 13.107 3.303 13.063C3.768 14.941 5.636 16.274 7.836 16.312C6.107 17.504 3.991 18.215 1.725 18.215C1.435 18.215 1.148 18.195 0.867 18.16C2.016 19.472 4.413 20.255 7.022 20.255C16.647 20.255 21.568 13.179 21.568 7.89001C21.568 7.68001 21.561 7.47101 21.552 7.26301C22.461 6.62301 23.212 5.83501 23.643 4.93701Z"
                      fill=""
                    />
                  </svg>
                </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/piotrmac0/" target="_blank">
                    <svg
                      className="fill-[#D1D8E0] hover:fill-primary transition-all duration-300"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1505)">
                        <path
                          d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1505">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100093134271073" target="_blank">
                    <svg
                      className="fill-[#D1D8E0] hover:fill-primary transition-all duration-300"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1499)">
                        <path
                          d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1499">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                <a href="https://www.instagram.com/piotr.macai/" target="_blank">
                  <svg
                    className="fill-[#D1D8E0] hover:fill-primary transition-all duration-300"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                      fill=""
                    />
                  </svg>
                </a>
                </li>
                <li>
                  <a href="https://www.github.com/aiwareai/" target="_blank">
                    
                  <Image src="/images/brand/github.png" alt="git" width={24} height={24} className="fill-[#D1D8E0] hover:fill-primary transition-all duration-300"/>
                  </a>
                </li>
              </ul>
            </motion.div>

              <div className="mt-10">
                {/* <form onSubmit={handleSubmit}> */}
                  <div className="flex flex-wrap gap-5">
           
                  <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >

                <form
                 action="https://formspree.io/f/xyyqlvdz" method="POST">
                    <div className="relative">
                      <input
                       type="email" name="email"
                       placeholder="Leave Your Email"
                        className="w-full dark:bg-black border border-stroke dark:border-strokedark shadow-solid-11 dark:shadow-none rounded-full focus:outline-none focus:border-primary dark:focus:border-primary py-3 px-6"
                      />

                      <button type="submit" value="Submit" aria-label="signup to newsletter" className="absolute right-0 p-4">
                        <svg
                          className="fill-[#757693] dark:fill-white hover:fill-primary"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_48_1487)">
                            <path
                              d="M3.1175 1.17318L18.5025 9.63484C18.5678 9.67081 18.6223 9.72365 18.6602 9.78786C18.6982 9.85206 18.7182 9.92527 18.7182 9.99984C18.7182 10.0744 18.6982 10.1476 18.6602 10.2118C18.6223 10.276 18.5678 10.3289 18.5025 10.3648L3.1175 18.8265C3.05406 18.8614 2.98262 18.8792 2.91023 18.8781C2.83783 18.8769 2.76698 18.857 2.70465 18.8201C2.64232 18.7833 2.59066 18.7308 2.55478 18.6679C2.51889 18.6051 2.50001 18.5339 2.5 18.4615V1.53818C2.50001 1.46577 2.51889 1.39462 2.55478 1.33174C2.59066 1.26885 2.64232 1.2164 2.70465 1.17956C2.76698 1.14272 2.83783 1.12275 2.91023 1.12163C2.98262 1.12051 3.05406 1.13828 3.1175 1.17318ZM4.16667 10.8332V16.3473L15.7083 9.99984L4.16667 3.65234V9.16651H8.33333V10.8332H4.16667Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_48_1487">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </form>

                </motion.div>
                  </div>
              </div>


                <div className="lg:grid grid-cols-3 grid-rows-1 gap-4 flex flex-row mt-10">

                          <div className="col-span-1 bg-gray-200 p-4">
                              <div 
                                    style={{
                                      backgroundColor: 'rgba(217, 216, 216, 0.24)',
                                      borderRadius: '16px',
                                      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                      backdropFilter: 'blur(19.5px)',
                                      WebkitBackdropFilter: 'blur(19.5px)',
                                      border: '1px solid rgba(255, 255, 255, 0.03)',
                                    }}
                              className="rounded-lg p-4 shadow-lg flex flex-col items-center justify-center grid-in-twitter">
                                  <a href="/generativeai" target="_blank" className="text-center">
                                  <img src="/images/brand/icons8-adobe-illustrator-100.png" alt="Tools" className="inline w-12 h-12 mb-2" />
                                    <p className="text-lg font-semibold">Generative AI</p>
                                    <p className="text-sm">Artworks</p>
                                  </a>
                                </div>
                      </div>
                      <div className="col-span-2 bg-gray-200 p-4">
                              <div 
                                style={{
                                  backgroundColor: 'rgba(217, 216, 216, 0.30)',
                                  borderRadius: '16px',
                                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                  backdropFilter: 'blur(19.5px)',
                                  WebkitBackdropFilter: 'blur(19.5px)',
                                  border: '1px solid rgba(255, 255, 255, 0.03)',
                                }}
                              className="rounded-lg p-4 shadow-lg flex flex-col items-center justify-center grid-in-twitter">
                                  <a href="https://macai.tech/portfolio/" target="_blank" className="text-center">
                                    <img src="/images/brand/icons8-portfolio-96.png" alt="Twitter" className="inline w-12 h-12 mb-2" />
                                    <p className="text-lg font-semibold">Portfolio</p>
                                    <p className="text-sm">With the best of my projects</p>
                                  </a>
                                </div>
                      </div>
                </div>


            </div>


                {/* SECOND COLUMN */}

                <div className="md:w-1/2 hidden md:grid lg:grid grid-cols-2 grid-rows-3 gap-4">
                  <div className="bg-gray-600 p-4 col-span-2">
                          <div 
                                style={{
                                  backgroundColor: 'rgba(217, 216, 216, 0.10)',
                                  borderRadius: '16px',
                                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                  backdropFilter: 'blur(19.5px)',
                                  WebkitBackdropFilter: 'blur(19.5px)',
                                  border: '1px solid rgba(255, 255, 255, 0.03)',
                                }}
                          className="rounded-lg p-4 shadow-lg flex flex-col items-center justify-center grid-in-twitter">
                              <a href="https://ainsider.cloud" target="_blank" className="text-center">
                                <img src="/images/logo/logo-white.png"  alt="Twitter" className="inline w-12 h-12 mb-2" />
                                <p className="text-lg font-semibold">Ainsider Magazine</p>
                                <p className="text-sm">Gen AI Tools | Blog | Prompts </p>
                              </a>
                            </div>
                  </div>
                  <div className="col-span-1 bg-gray-200 p-4">
                          <div 
                                style={{
                                  backgroundColor: 'rgba(217, 216, 216, 0.24)',
                                  borderRadius: '16px',
                                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                  backdropFilter: 'blur(19.5px)',
                                  WebkitBackdropFilter: 'blur(19.5px)',
                                  border: '1px solid rgba(255, 255, 255, 0.03)',
                                }}
                          className="rounded-lg p-4 shadow-lg flex flex-col items-center justify-center grid-in-twitter">
                              <a href="https://twitter.com/piotrmacai" target="_blank" className="text-center">
                                <img src="/images/brand/x64o.png" alt="Twitter" className="inline w-12 h-12 mb-2" />
                                <p className="text-lg font-semibold">My Twitter</p>
                                <p className="text-sm">Latest AI Insights</p>
                              </a>
                            </div>
                  </div>
                  <div className="bg-gray-200 p-4 row-span-2 h-full">
                          <div 
                                style={{
                                  backgroundColor: 'rgba(217, 216, 216, 0.30)',
                                  borderRadius: '16px',
                                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                  backdropFilter: 'blur(19.5px)',
                                  WebkitBackdropFilter: 'blur(19.5px)',
                                  border: '1px solid rgba(255, 255, 255, 0.03)',
                                }}
                          className="h-full rounded-lg p-4 shadow-lg flex flex-col items-center justify-center grid-in-twitter">
                              <a href="https://ainsider.beehiiv.com/" target="_blank" className="text-center">
                                <img src="/images/logo/logo-dark.png" alt="Beehiiv" className="inline w-12 h-12 mb-2" />
                                <p className="text-lg font-semibold">Ainsider Newsletter</p>
                                <p className="text-sm">Subscribe to My AInsider Newsletter</p>
                              </a>
                            </div>
                  </div>
                  <div className="bg-gray-200 p-4 col-span-1 h-full">
                          <div
                                style={{
                                  backgroundColor: 'rgba(217, 216, 216, 0.14)',
                                  borderRadius: '16px',
                                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                  backdropFilter: 'blur(19.5px)',
                                  WebkitBackdropFilter: 'blur(19.5px)',
                                  border: '1px solid rgba(255, 255, 255, 0.03)',
                                }}
                          className="-full rounded-lg p-4 shadow-lg flex flex-col items-center justify-center grid-in-twitter">
                              <a href="https://www.linkedin.com/in/piotrmac0/" target="_blank" className="text-center">
                                <img src="/images/brand/linkedin64.png" alt="Linkedin" className="inline w-12 h-12 mb-2" />
                                <p className="text-lg font-semibold">Linkedin</p>
                                <p className="text-sm">Let's connect at Linkedin</p>
                              </a>
                            </div>
                  </div>
                  
               
                </div>
              
    

          </div>
        </div>
      </section>


          <section className="pb-10 lg:py-15 xl:py-20 px-10">
          <div className="flex flex-wrap flex-row justify-center gap-6 mt-1">
                  <button
                    className={`mr-2 text-lg font-semibold ${
                      selectedTag === "websites" ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => handleTagSelection("websites")}
                  >
                    Websites
                  </button>
                    <button
                    className={`mr-2 text-lg font-semibold ${
                      selectedTag === "marketing" ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => handleTagSelection("marketing")}
                  >
                    Marketing & SEO
                  </button>
                  <button
                    className={`mr-2 text-lg font-semibold ${
                      selectedTag === "ai" ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => handleTagSelection("ai")}
                  >
                    AI & Automations
                  </button>
                  <Link href="/generativeai" target="_blank" rel="noopener noreferrer">
                  <button 
                    className={`mr-2 text-lg font-semibold ${
                      selectedTag === "marketing" ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                  >
                    Generative AI
                  </button>
                  </Link>
                    
                  
           
             
                
         </div>
              <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-10">
                  {filteredPortfolio.map((post, key) => (
                    <PortfolioItem key={key} portfolio={post} />
                  ))}
                </div>
              </div>
        </section>


    </>
  );
};

export default Portfolio;
