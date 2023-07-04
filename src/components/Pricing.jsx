import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

const pricingData = [
  "精彩課程",
  "助教指導",
  "三餐",
  "旅平險",
  "紀念品",
  "參加證書（國網中心核發）",
  "* 住宿",
];

const pricingData_no_hotel = [
  "精彩課程",
  "助教指導",
  "三餐",
  "旅平險",
  "紀念品",
  "參加證書（國網中心核發）",
];

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  const handleButtonClick = () => {
    window.open('https://forms.gle/DWqtfWvNPMW4nYrTA/', '_blank');
  };

  return (
    <section className="w-screen flex justify-center bg-customDarkBg2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-customDarkBg2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="custom-block-subtitle" >
              歡迎具備基本的 C/C++ 語言程式能力者來挑戰、學習！
              </span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
                報名資訊
              </h2>
              <p className="mb-6 text-customGrayText" style={{ textAlign: "left", paddingLeft: "3vw" ,fontSize: "1.2rem" }}>
              招生對象：不限，但名額有限，學生身份優先錄取
              <br />
              授課地點：清華大學資電館
              <br />
              收費用途：用於住宿及飲食
              </p>

              {/* for swich between monthly and yearly. 
                <label className="mx-auto bg-customDarkBg3 relative flex justify-between items-center group text-xl w-44 h-12 rounded-lg pr-36 pl-1 cursor-pointer">
                <input
                  type="checkbox"
                  className="peer appearance-none"
                  checked={!isMonthly}
                  onChange={handleChange}
                />
                <span className="h-8 w-[5.5rem] flex items-center pr-2 bg-customDarkBg3 after:rounded-lg duration-300 ease-in-out  after:w-[30rem] after:h-10  after:bg-customPrimary   after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem] cursor-pointer"></span>
                <div className="flex absolute text-white text-sm font-bold">
                  <div
                    className={
                      isMonthly ? "mr-9 ml-3" : "mr-9 ml-3 text-gray-400"
                    }
                  >
                    Monthly
                  </div>
                  <div className={isMonthly && "text-gray-400"}>Yearly</div>
                </div>
              </label> */}
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20 justify-center">
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                  安心追夢
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-3xl sm:text-4xl font-bold text-white text-left mt-4 mr-2">
                      $0
                    </div>
                  </div>

                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                  擁有中低收、低收或清寒證明者由國網中心補助參與
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-white">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <div
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Get Started
                  </div> */}
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="px-8 py-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 2xl:mb-4 text-2xl font-bold font-heading text-white text-left">
                    含住宿
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-3xl sm:text-4xl font-bold text-white text-left mt-4 mr-2">
                      {isMonthly ? "$3000" : "$180"}
                    </div>
                  </div>
                  <p className="mt-8 mb-8 2xl:mb-12 text-gray-500 leading-loose text-left">
                    營隊提供四晚清大學生宿舍，養精蓄銳後為課程做好準備
                  </p>
                  <ul className="mb-14 text-white">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <div
                    className="inline-block text-center py-2 px-4 w-full custom-button-colored leading-loose transition duration-200 mt-20"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Get Started
                  </div> */}
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    不含住宿
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-3xl sm:text-4xl font-bold text-white text-left mt-4 mr-2">
                      {isMonthly ? "$2000" : "$390"}
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    營隊不含住宿，學生需自行安排住宿
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-white">
                    {pricingData_no_hotel.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className="inline-block text-center py-2 px-4 w-1/2 rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                onClick={() => handleButtonClick()}
              >
                7/23 截止，立刻報名！
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
