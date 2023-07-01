import { motion } from "framer-motion";
import { useState } from "react";

import { InvitationModal } from "./InvitationModal";
import featuresdiagonal from "../assets/images/featuresdiagonal.jpg";
import "../styles/Table.css";

export const FeaturesDiagonal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-customDarkBg1"
    id="course">
      
      <div className="custom-shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        
        <div className=" 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center bg-customDarkBg1 pt-12 lg:pt-12 pb-4 lg:pb-10 mx-auto lg:flex-row flex-col">
          <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
            <span className="custom-block-subtitle">
              Accelerate Your Success
            </span>
            <h2 className="mt-10 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              精心安排的課程內容
            </h2>
            {/* <p className="mb-16 text-customGrayText leading-loose">
              Our platform enables you to launch your data-driven projects with
              ease. Boost productivity and achieve better results. Empower your
              decision-making with advanced analytics
            </p>
            <div
              className="w-[210px] h-12 custom-button-colored mr-10 "
              onClick={() => setIsModalOpen(true)}
            >
              Get Started
            </div> */}
          </div>
          {/* <div className="w-4/5 lg:w-1/2 lg:pl-16 flex justify-center mx-auto pt-16 lg:pt-0">
            <img
              src={featuresdiagonal}
              alt="f1"
              className="rounded-xl  custom-border-gray"
            />
          </div> */}
          
        </div>
        <MyTable />
      </motion.div>
      <div className="custom-shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};


const MyTable = () => {
  return (
    <table className="GeneratedTable">
      <thead>
        <tr>
          <th> </th>
          <th colSpan="2">Day1 8/6 (日)</th>
          <th>Day2 8/7 (一)</th>
          <th>Day3 8/8 (二)</th>
          <th>Day4 8/9 (三)</th>
          <th>Day5 8/10 (四)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>9:00~9:30</td>
          <td colSpan="2">報到</td>
          <td rowSpan="4">登峰造極<br /> (超級電腦簡介與實操)</td>
          <td rowSpan="3">拜師學藝<br /> (學生叢集競賽座談會)</td>
          <td rowSpan="4">學以致用<br /> (高效能計算在科學計算與<br /> 人工智慧的應用簡介與實操)</td>
          <td rowSpan="4">增廣見聞<br /> (國網中心參訪)</td>
        </tr>
        <tr>
          <td>9:30~10:00</td>
          <td colSpan="2">啟航 (開幕)</td>
        </tr>
        <tr>
          <td>10:00~10:30</td>
          <td colSpan="2" rowSpan="2">進入平行世界<br /> (平行計算簡介 I)</td>
        </tr>
        <tr>
          <td>10:30~12:00</td>
          <td>超級比一比 (效能競賽)</td>
        </tr>
        <tr>
          <td>12:00~13:30</td>
          <td colSpan="2">午餐</td>
          <td>午餐</td>
          <td>午餐</td>
          <td>午餐</td>
          <td>午餐</td>
        </tr>
        <tr>
          <td>13:30~15:00</td>
          <td>追本溯源<br /> (Linux教學)</td>
          <td>探索未來<br /> (平行計算簡介 II)</td>
          <td rowSpan="3">多重宇宙<br /> (GPU平行程式教學)</td>
          <td rowSpan="3">駭客任務:首部曲<br /> (程式競賽)</td>
          <td rowSpan="3">駭客任務:最終戰役<br /> (應用競賽)</td>
          <td>開花結果<br /> (競賽成果發表)</td>
        </tr>
        <tr>
          <td>15:00~16:00</td>
          <td colSpan="2" rowSpan="2">一個頭兩個大<br /> (MPI平行程式教學)</td>
          <td>滿載而歸<br /> (頒獎、閉幕)</td>
        </tr>
        <tr>
          <td>15:00~17:30</td>
          <td rowSpan="3"> <br /><br /></td>
        </tr>
        <tr>
          <td>17:30~19:00</td>
          <td colSpan="2">晚餐，相見歡</td>
          <td>晚餐</td>
          <td>晚餐</td>
          <td>晚餐</td>
        </tr>
        <tr>
          <td>19:00~21:30</td>
          <td colSpan="2">手腦並用<br /> (上機練習)</td>
          <td>七手八腳<br /> (上機練習)</td>
          <td>駭客任務:重裝上陣<br /> (程式競賽)</td>
          <td>集思廣益<br /> (競賽成果彙整)</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MyTable;