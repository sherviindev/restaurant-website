import React from "react";

const categories = [
  { key: "foods", label: "🍽 غذاها" },
  { key: "drinks", label: "🥤 نوشیدنی‌ها" },
  { key: "soups", label: "🥣 سوپ‌ها" },
  { key: "desserts", label: "🍰 دسرها" },
];

const items = {
  foods: [
    { name: "کباب کوبیده", price: "120,000 تومان" },
    { name: "زرشک پلو", price: "95,000 تومان" },
    { name: "چلو ماهیچه", price: "180,000 تومان" },
  ],
  drinks: [
    { name: "نوشابه", price: "15,000 تومان" },
    { name: "دوغ", price: "20,000 تومان" },
    { name: "آبمیوه طبیعی", price: "40,000 تومان" },
  ],
  soups: [
    { name: "سوپ جو", price: "35,000 تومان" },
    { name: "سوپ قارچ", price: "40,000 تومان" },
    { name: "سوپ سبزیجات", price: "30,000 تومان" },
  ],
  desserts: [
    { name: "بستنی", price: "25,000 تومان" },
    { name: "کیک شکلاتی", price: "45,000 تومان" },
    { name: "فرنی", price: "20,000 تومان" },
  ],
};

const Menu = () => {
  const scrollToCategory = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 p-4 md:p-6 gap-6">
      {/* دسته‌بندی‌ها (موبایل: بالا / دسکتاپ: سمت راست) */}
      <div className="md:w-1/4 bg-white rounded-2xl shadow-lg p-4 sticky md:top-6 h-fit order-1 md:order-2">
        <h2 className="text-xl font-bold mb-4 text-gray-800 text-right">منو</h2>
        <ul className="space-y-3 text-right">
          {categories.map((cat) => (
            <li
              key={cat.key}
              onClick={() => scrollToCategory(cat.key)}
              className="cursor-pointer p-3 rounded-xl bg-gray-50 hover:bg-yellow-100 hover:text-yellow-600 transition-all font-medium shadow-sm"
            >
              {cat.label}
            </li>
          ))}
        </ul>
      </div>

      {/* آیتم‌ها (موبایل: زیر دسته‌بندی / دسکتاپ: سمت چپ) */}
      <div className="md:w-3/4 space-y-10 order-2 md:order-1">
        {categories.map((cat) => (
          <div
            key={cat.key}
            id={cat.key}
            className="bg-white rounded-2xl shadow-xl p-6"
          >
            <h3 className="text-2xl font-bold text-yellow-700 mb-4 border-b pb-2 text-right">
              {cat.label}
            </h3>
            <ul className="space-y-3">
              {items[cat.key].map((item, i) => (
                <li
                  key={i}
                  className="relative flex flex-row-reverse justify-between items-center p-3 bg-gray-50 rounded-xl shadow-sm hover:shadow-md hover:bg-yellow-50 transition-all cursor-pointer font-medium"
                >
                  {/* اسم غذا */}
                  <div className="flex flex-row-reverse items-center gap-2 text-right">
                    <span>{item.name}</span>
                  </div>
                  {/* قیمت */}
                  <span className="text-gray-700 font-semibold">
                    {item.price}
                  </span>
                  {/* توپ زرد سمت راست آیتم */}
                  <span className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-yellow-500 rounded-full"></span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
