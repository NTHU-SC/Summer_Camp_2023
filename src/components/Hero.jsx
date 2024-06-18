import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import dashboard from "../assets/images/main.jpg";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-screen flex justify-center items-center bg-customDarkBg1 mb-[0vw] md:mb-[0vw] lg:mb-[0vw] xl:mb-[0vw] hero-bg-gradient pb-0 sm:pb-0 md:pb-0 lg:pb-0"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-20 text-center">


        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="relative w-screen flex justify-center ">
            <img
              src={dashboard}
              alt="123"
              className="w-4/5 2xl:w-[1200px] mx-auto z-10 rounded-xl custom-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0 top-[50px]"
            />
          </div>
        </motion.div>

        <div className="relative w-screen flex justify-center ">
          <section className="w-screen flex justify-center items-center mb-10 md:mb-6 lg:mb-4 xl:mb-5 2xl:mb-20 hero-bg-gradient pb-2400 sm:pb-3200 md:pb-4400 lg:pb-0 z-20 md:absolute " id="home">
            <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-1600 md:pt-1600 lg:pt-2000 text-center">

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-2 sm:mb-6 justify-center">
                  <a
                    className="custom-button-colored w-48 sm:w-36 h-10 mr-0 sm:mr-2 lg:mr-4" href="https://scc.nthu.site/Summer_Camp_2024/" target="_blank"
                  >
                    前往 2024 年網站
                  </a>
                </div>
              </motion.div>

            </div>
            {isModalOpen && (
              <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
            )}
          </section>

          <div className="custom-shape-divider-bottom-1665343298 hidden md:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className=" bg-customDarkBg2"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill custom-bg-dark1"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
