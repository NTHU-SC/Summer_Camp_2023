import { motion } from "framer-motion";

import SC_logo from "../assets/logos/SC_logo.png"
import NCHC_logo from "../assets/logos/NCHC_logo.jpg"
import NTHU_logo from "../assets/logos/NTHU_logo.png"
import NVIDIA_logo from "../assets/logos/NVIDIA_logo.png"


export const Brands = () => (
  <section className="py-12 sm:py-24 bg-customDarkBg1 w-full mt-16 mb-16"
    id="brands">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
        <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="flex flex-col">
              <h2 className="mb-2  text-4xl sm:text-5xl 2xl:text-6xl py-3 font-bold tracking-normal text-white">
                高速計算<br />
                人工智慧<br />
                夏令營
              </h2>
              <h2 className=" text-4xl  sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-customSecondary">
                合辦單位
              </h2>
            </div>
          </div>
          <div className="w-2/3 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10">
            <div className="flex flex-wrap -m-4">
              <div className="flex py-3 justify-center">
                <a href="https://www.nchc.org.tw/" target="_blank" rel="noopener noreferrer">
                  <img
                    src={NCHC_logo}
                    alt="NCHC_logo"
                    className="rounded-xl  custom-border-gray"
                  />
                </a>
              </div>
              <div className="flex py-3 justify-center">
                <a href="http://scc.nthu.site/" target="_blank" rel="noopener noreferrer">
                  <img
                    src={SC_logo}
                    alt="SC_logo"
                    className="rounded-xl  custom-border-gray"
                  />
                </a>
              </div>
              <div className="flex py-3 justify-center">
                <a href="https://www.nthu.edu.tw/" target="_blank" rel="noopener noreferrer">
                  <img
                    src={NTHU_logo}
                    alt="NTHU_logo"
                    className="rounded-xl custom-border-gray"
                  />
                </a>
              </div>
              <div className="flex py-3 justify-center">
                <a href="https://www.nvidia.com/zh-tw/" target="_blank" rel="noopener noreferrer">
                  <img
                    src={NVIDIA_logo}
                    alt="NVIDIA_logo"
                    className="rounded-xl  custom-border-gray"
                  />
                </a>
              </div>
              {/*
              <div className="w-1/2 sm:w-1/3 py-6 flex justify-center">
                <img
                  src={SC_logo}
                  alt="f3"
                  className="rounded-xl  custom-border-gray"
                />
              </div> */}
              {/*
              <div className="w-1/2 sm:w-1/3 py-6 flex justify-center">
                <SpotifyLogo />
              </div>
              <div className="w-1/2 sm:w-1/3  py-6 flex  justify-center">
                <SlackLogo />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
