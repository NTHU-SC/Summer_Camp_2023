import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import Enming from "../assets/images/2023-Enming.jpg";
import John from "../assets/images/2022-John.jpg";
import Mou from "../assets/images/2023-Mou.jpg";
import Yi from "../assets/images/2022-Yi.jpg";
import Wu from "../assets/images/2022-Wu.jpg";
import 小Ｐ from "../assets/images/小P.png";
import Nevikw from "../assets/images/2023-Nevikw.jpg";


const testimonialsDataUpperRow = [
  {
    customerName: "黃恩明",
    customerTitle: "資工系特選學生",
    content:
      "超算不僅考驗自己的學理知識，也需要有相當的實作技能，才能勝任比賽任務",
    image: Enming,
  
  },
  {
    customerName: "牟展佑",
    customerTitle: "大家的隊長",
    content:
      "唯有從上而下的理解整個系統的運作，才能榨出機器的完整性能",
    image: Mou,
  },
  {
    customerName: "翁君牧",
    customerTitle: "ISC 世界賽隊員",
    content:
      "參加超算比賽是接觸當今前沿尖端科技的難得機會，更能開拓我們的視野",
    image: Nevikw,
  }
];

const testimonialsDataLowerRow = [
  {
    customerName: "郭品毅",
    customerTitle: "SCC 世界冠軍隊員",
    content:
      "資訊工程已經不再只是寫程式，需要對硬體深入了解，以取得更優異的性能，並結合跨領域的應用，才能將科技用於改善我們的生活",
    image: Yi,
  },
  {
    customerName: "吳邦寧",
    customerTitle: "SCC 世界冠軍隊員",
    content:
      "魔鬼往往藏在細節裡，看似簡單的系統管理，往往會決定整個系統的效率。培養細心觀察、深入思考的能力，成為高效率的系統管理專家",
    image: Wu,
  },
  {
    customerName: "小P",
    customerTitle: "努力長大中，想要跑得超級快！",
    content:
      "來參加HPCAI夏令營吧！這裡的夥伴都超友善的，大家都願意互相幫助～不管遇到什麼問題，都可以勇敢發問，一起成長！😊🌈",
    image: 小Ｐ,
  },

];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          課程回饋
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
            高速運算及人工智慧課程廣受好評
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 py-10 xl:px-0 items-center">
          {testimonialsDataUpperRow.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="custom-content-text-white">
                "{testimonial.content}"
              </div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4" style={{alignItems: 'center'}}>
                <img src={testimonial.image} alt="" style={{width: '50px', height: '50px', borderRadius: '50%' }} />
                <div className="flex flex-col ml-4">
                  <div className="custom-content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="custom-content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsDataLowerRow.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="custom-content-text-white">
                "{testimonial.content}"
              </div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4" style={{alignItems: 'center'}}>
                <img src={testimonial.image} alt="" style={{width: '50px', height: '50px', borderRadius: '50%' }} />
                <div className="flex flex-col ml-4">
                  <div className="custom-content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="custom-content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
