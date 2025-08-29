import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import footerLogo from "../../assets/images/food-logo.png";

const Footer = () => {
  return (
    <>
      {/* بخش تماس برای لینک Navbar */}
      <div id="callme" className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-6">تماس با ما</h2>
        <p className="text-center text-gray-700">
          می‌توانید با ما تماس بگیرید یا از طریق شبکه‌های اجتماعی با ما در ارتباط باشید.
        </p>
      </div>

      {/* فوتر */}
      <div className="bg-[#111] text-gray-200">
        <section className="max-w-[1200px] mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-6 py-10">
            {/* بخش لینک‌های مفید */}
            <div>
              <h1 className="text-xl font-bold mb-4">لینک‌های مفید</h1>
              <ul className="flex flex-col gap-3">
                <li className="cursor-pointer hover:text-red-400">صفحه اصلی</li>
                <li className="cursor-pointer hover:text-red-400">منو</li>
                <li className="cursor-pointer hover:text-red-400">گالری</li>
                <li className="cursor-pointer hover:text-red-400">درباره ما</li>
                <li className="cursor-pointer hover:text-red-400">تماس با ما</li>
              </ul>
            </div>

            {/* بخش آدرس و اطلاعات تماس */}
            <div>
              <h1 className="text-xl font-bold mb-4">آدرس</h1>
              <div className="flex items-center gap-3 mb-3">
                <FaLocationArrow />
                <p>زنجان، اتوبان ۲۲ بهمن، جنب پل قائم، رستوران پلو</p>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <FaMobileAlt />
                <p>۰۲۴-۳۳۴۴۶۶۶۶</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope />
                <p>info@polorest.com</p>
              </div>
            </div>

            {/* بخش توضیحات و لوگو */}
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-3 mb-4">
                <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
                رستوران پلو
              </h1>
              <p className="text-sm leading-6">
                فعالیت این رستوران در امتداد فعالیت یکی از چلوکبابی‌های قدیمی
                زنجان به نام "چلوکبابی سعدی" است که به پدر مدیر رستوران تعلق داشت.
              </p>

              {/* شبکه‌های اجتماعی */}
              <div className="flex items-center gap-4 mt-6">
                <a href="#"><FaInstagram className="text-2xl hover:text-pink-500" /></a>
                <a href="#"><FaFacebook className="text-2xl hover:text-blue-500" /></a>
                <a href="#"><FaLinkedin className="text-2xl hover:text-blue-400" /></a>
              </div>
            </div>
          </div>

          {/* بخش کپی‌رایت */}
          <div className="text-center text-sm border-t border-gray-600 py-5">
            تمامی حقوق برای رستوران پلو محفوظ می‌باشد © 2025
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
