import { motion } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const CoC = () => (
  <section className="w-full bg-customDarkBg2 mt-20 mb-8 sm:mt-8 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[12vw] lg:pt-0">

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">

        <div className="w-full lg:w-full mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <span className="custom-block-subtitle">
              我們的約定
            </span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              行為準則
            </h2>
            <p className="mb-12 text-customGrayText leading-loose">
              HPC x AI Summer Camp 歡迎不同身分、來自不同背景的與會者，也非常鼓勵女性、性少數與多元背景的參與者。為了讓大家都能愉快的參加 HPC x AI，我們要求所有參與者閱讀以下行為準則（Code of Conduct），共同創造一個友善的環境。
              
              
              <br />
              <br />

              為此，無論是觀眾、贊助商、工作人員還是講者，希望每位參與者能夠遵守以下行為準則：
              <br />
              <br />
              <ul className="mb-6 text-white">
                <li className="mb-4 flex">
                  <span>✔︎ 尊重他人：將他人的感受放在心上，尊重每位參與者。</span>
                </li>
                <li className="mb-4 flex">
                  <span>✔︎ 避免冒犯：避免使用帶有侮辱、歧視或可能引起騷擾的言語和手勢。</span>
                </li>
                <li className="mb-4 flex">
                  <span>✔︎ 關心他人：多關心周圍的社群夥伴，詢問他們是否需要幫助。</span>
                </li>
                <li className="mb-4 flex">
                  <span>✔︎ 尋求協助：當遇到危險或發現事情不對勁時，及時尋求工作人員的支援和協助。</span>
                </li>
                <li className="mb-4 flex">
                  <span>✔︎ 交朋友：在年會中多結交朋友，珍惜彼此相聚的時光。</span>
                </li>
              </ul>
              <br />
              以下行為是社群不容忍的：
              <br />
              <br />
              <ul className="mb-6 text-white">
                <li className="mb-4 flex">
                  <span>⛌  挑釁和冒犯：針對性別、性取向、種族、外貌、宗教、年齡、身體狀況或個人身份的挑釁或冒犯。</span>
                </li>
                <li className="mb-4 flex">
                  <span>⛌ 騷擾：任何形式的性騷擾、言語和肢體霸凌。</span>
                </li>
                <li className="mb-4 flex">
                  <span>⛌ 不當言論和展示：公開展示或放映含有侮辱、歧視、仇恨、暴力或性暗示的言論、圖像或錄影。</span>
                </li>
                <li className="mb-4 flex">
                  <span>⛌ 干擾活動：無故干擾議程或活動的正常進行，無視工作人員或其他參與者的制止。</span>
                </li>
                <li className="mb-4 flex">
                  <span>⛌ 違法行為：從事違反法律的行為。</span>
                </li>
              </ul>
            </p>
            <ul className="mb-6 text-white">

            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
