import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { HPCAISummerCampLogo } from "../assets/logos/HPCAISummerCampLogo";
import { TwitterIcon } from "../assets/icons/TwitterIcon";

const footerData = [
  {
    title: "國家高速網路與計算中心",
    items: [
      { label: "官方網站", link: "https://www.nchc.org.tw/" },
      { label: "Facebook", link: "https://www.facebook.com/%E5%9C%8B%E7%A0%94%E9%99%A2%E5%9C%8B%E7%B6%B2%E4%B8%AD%E5%BF%83-292580541692362/?notify_field=blurb&modal=profile_completion&notif_id=1558930416338465&notif_t=page_profile_blurb" },
      { label: "Instgram", link: "https://www.instagram.com/nchc.tw/?hl=zh-tws" },
      { label: "Youtube", link: "https://www.youtube.com/channel/UCWrzkYUM5cwpZExQ4Et5vSw" },
    ],
  },
  {
    title: "清大叢集電腦競賽團隊",
    items: [
      { label: "官方網站", link: "https://scc.nthu.site/" },
      { label: "GitHub", link: "https://github.com/nthu-sc" },
      { label: "Twitter", link: "https://twitter.com/nthuscc" },
    ],
  },
  // {
  //   title: "Company",
  //   items: ["About Us", "Jobs", "Press", "Contact Us"],
  // },
];

const Email = () => {
  const recipient = "hpcai@lsalab.nthu.edu.tw";
  const subject = "[HPCxAI Summer Camp] Subject";
  const message = "Hello,";

  return (
    <a href={`mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`}>
      hpcai@lsalab.nthu.edu.tw
    </a>
  );
};


export const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <HPCAISummerCampLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  HPC x AI Summer Camp
                </div>
              </div>
              <p className="mb-10 mt-4 px-12 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                聯絡資訊：
                <Email />
                {/* <a
                  href="＠lsalab.nthu.edu.tw"
                  target="_blank"
                  className="text-gray-100 ml-1.5 "
                  aria-label="DarkAdmin"
                >
                  ＠lsalab.nthu.edu.tw
                </a> */}
              </p>
              <div className="w-36 mx-auto lg:mx-0">
                {/* <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="#"
                >
                  <FacebookIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="#"
                >
                  <TwitterIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="#"
                >
                  <InstagramIcon />
                </a> */}
              </div>
            </div>
            <div className="w-full lg:w-1/2  lg:pl-16 hidden lg:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">國家高速網路<br />與計算中心</h3>
                <ul>
                  {footerData[0].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label=""
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  清大叢集電腦<br />競賽團隊
                </h3>
                <ul>
                  {footerData[1].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label=""
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* <div className="w-full md:w-1/3 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-white">Company</h3>
                <ul>
                  {footerData[2].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="#"
                        aria-label=""
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
          <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block">
            &copy; 2023. HPC x AI Summer Camp all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
