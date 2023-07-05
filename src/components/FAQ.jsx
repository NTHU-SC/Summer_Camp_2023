import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "我沒有資訊工程的背景，這樣還能參加嗎？",
    answer:
      "沒問題的！超級電腦非常需要跨領域人才，才能結合不同學科知識，解決跨領域的難題。在課程中，我們也會依照能力分組，並有助教能夠協助大家解決疑問。",
  },
  {
    question: "我要怎麼知道有沒有成功報名呢？",
    answer:
      "本次夏令營預計招收學員 80 名，我們會針對報名資料做簡易審查，非先報先贏。我們將在您報名後兩週內(或最晚7/24前)寄出通知信告知是否報名成功。若報名成功，再請於收到通知信的一週內，按信中指示繳交報名費完成報名程序。",
  },
  {
    question: "繳費成功後會有收據嗎？",
    answer:
      "我們會由承辦公司（星希科技有限公司）開立發票。並在營期間交予學員。",
  },
  {
    question: "請問臨時無法參與能夠退費嗎？",
    answer:
      "活動 10 天（含）前取消：酌扣相關手續費用500元。活動2天（含）前取消：酌扣相關手續費用 1000 元。活動前一天及當天取消：不予退費。活動前一天及當天取消原因，如因個人身體狀況無法參加，則須檢附醫生證明申請退費，酌扣相關手續費用 500 元。",
  },
  {
    question: "住宿的房型是什麼樣的呢？",
    answer:
      "清大學生宿舍四人房，實際房型依照學校分配決定。由於學校僅提供床位，因此請記得攜帶睡袋或床墊喔！",
  },
  {
    question: "可以跟認識的同學一起住嗎？",
    answer:
      "請在繳費後的回填表單中，於備註區塊填寫一起住的成員名單。上限四人，不可男女混住。",
  },
  {
    question: "我還有其他問題！",
    answer:
      "請聯絡 hpcai@lsalab.cs.nthu.edu.tw",
  },
  
];

export const FAQ = () => (
  <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 custom-block-subtitle text-center">
            解答專區
          </p>
          <h2 className="mb-16 custom-block-big-title text-center">
            常見問題
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1" key={`${item.question}-${item.answer}`}>
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <p
          className={`text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
