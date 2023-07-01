import { motion } from "framer-motion";

import feature1 from "../assets/images/class.jpg";
import feature2 from "../assets/images/server room.jpg";
import feature3 from "../assets/images/taiwania2.jpg";
import feature4 from "../assets/images/Training_camp.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
      className="w-full bg-customDarkBg2 mt-20 mb-8 sm:mt-8 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[12vw] lg:pt-0"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="custom-block-subtitle">營隊將為你帶來以下的學習與成長機會</span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                專注技術的夏令營
              </h2>
              <p className="mb-5 text-customGrayText leading-loose">
              聚集國內最優秀的產學研資源，透過真實操作超級電腦和接觸實際應用，你將學習到平行程式設計和獲得效能分析經驗。課程涵蓋了 10 堂課程和黑客松競賽，旨在培養學員的高速運算和知識 AI 能力！
      

              </p>
              <p className="mb-10 text-customGrayText leading-loose">
              營隊根據學員的背景和能力安排彈性的學習方式。立即報名參加這個營隊，開啟你在超算領域的學習之旅，並體驗到豐富的學習和成長機會！
              </p>
              <ul className="mb-6 text-white">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>專業課程：學習 AI 與操作超級電腦</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>經驗分享：超算冠軍團隊分享座談會</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>實地踏查：參訪國網中心與清大機房</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>親自實踐：參與黑客松親自著手優化</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>掌握趨勢：邀請業界專家演講與交流</span>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
              <div className="mb-4 py-3 pl-3 pr-2 rounded">
                <img
                  src={feature1}
                  alt="f1"
                  className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded ">
                <img
                  src={feature2}
                  alt="f2"
                  className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
                />
              </div>
            </div>
            <div className="w-1/2 lg:mt-20  pt-12 lg:pt-0 px-2 hidden sm:inline-block">
              <div className="mb-4 py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src={feature3}
                  alt="f3"
                  className="rounded-xl  custom-border-gray"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src={feature4}
                  alt="f4"
                  className="rounded-xl  custom-border-gray"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
