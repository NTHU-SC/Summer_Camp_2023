import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import dashboard from "../assets/images/main.jpg";

export const GOGO = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-screen flex justify-center items-center mb-10 md:mb-6 lg:mb-4 xl:mb-5 2xl:mb-20 hero-bg-gradient pb-2400 sm:pb-3200 md:pb-4400 lg:pb-0" id="home">
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-1600 md:pt-1600 lg:pt-2000 text-center">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-2 sm:mb-6 justify-center">
            <div
              className="custom-button-colored w-48 sm:w-36 h-10 mr-0 sm:mr-2 lg:mr-4"
            >
              <a href="https://forms.gle/DWqtfWvNPMW4nYrTA" target="_blank">
                點我報名
              </a>
            </div>
            {/* <div
              className="w-48 sm:w-36 h-10 rounded-xl font-bold text-white border border-solid flex justify-center items-center cursor-pointer bg-customDarkBg2 hover:bg-customDarkBg3 border-customPrimary transition"
              onClick={() => setIsModalOpen(true)}
            >
              Live demo
            </div> */}
          </div>
        </motion.div>

      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>

  );
};
