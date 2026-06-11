import { useState } from "react"

function App() {
  const [select, setSelect] = useState('');
  const [selectLang, setSelectLang] = useState('');

  return (
    <div className="w-full bg-gray-100 min-h-screen">
      {/* ================= NAVBAR หลัก ================= */}
      <div className="flex flex-wrap items-center bg-slate-900 text-white px-4 py-2 gap-x-4 gap-y-2 justify-between md:justify-start">
        <div className="flex item-center font-bold text-xl cursor-pointer border border-gray-900 hover:border-gray-300">
          <p>Logo</p>
        </div>

        <div className="hidden md:block text-left text-xs cursor-pointer border border-gray-900 hover:border-gray-300">
          <p>Deliver to</p>
          <p>THailand</p>
        </div>

        <div className="w-full md:flex-1 h-10 rounded-md overflow-hidden bg-white focus-within:ring-2 focus-within:ring-orange-400 focus-within:border-transparent border border-gray-300 order-last md:order-0">
          <div className="flex h-full">
            <select 
              value={select}
              onChange={(e) => setSelect(e.target.value)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-2 outline-none border-r border-gray-300 cursor-pointer"
            >
              <option value="All">All</option>
              <option value="Arts & Crafts">Arts & Crafts</option>
              <option value="Automotive">Automotive</option>
              <option value="Baby">Baby</option>
              <option value="Books">Books</option>
              <option value="Computers">Computers</option>
              <option value="Deals">Deals</option>
              <option value="Electronics">Electronics</option>
            </select>

            <input 
              type="text" 
              placeholder="Search Amazon" 
              className="flex-1 px-3 text-base text-gray-900 outline-none"
            />

            <button className="bg-[#febd69] hover:bg-[#f3a847] px-4 flex items-center justify-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center text-sm cursor-pointer">
          <select 
            value={selectLang}
            onChange={(e) => setSelectLang(e.target.value)}
            className="bg-transparent text-white font-bold outline-none cursor-pointer border border-gray-900 hover:border-gray-300"
          >
            <option value="EN" className="bg-slate-900">EN</option>
            <option value="ES" className="bg-slate-900">TH</option>
          </select>
        </div>

        <div className="text-left text-xs cursor-pointer border border-gray-900 hover:border-gray-300">
          <p className="text-gray-400 hidden md:block">Hello, Sign in</p>
          <p className="font-bold md:text-sm">Account & Lists</p>
        </div>

        <div className="hidden sm:block text-left text-xs cursor-pointer border border-gray-900 hover:border-gray-300">
          <p className="text-gray-400">Returns</p>
          <p className="font-bold md:text-sm">& Orders</p>
        </div>

        <div className="hidden md:flex items-center text-lg cursor-pointer border border-gray-900 hover:border-gray-300">
          <p className="text-3xl">🛒</p>
          <p className="font-bold md:text-sm">cart</p>
        </div>
      </div>

      {/* ================= NAVBAR รอง (Sub-nav) ================= */}
      <div className="flex flex-wrap items-center bg-gray-800 text-white px-4 py-2 gap-x-4 gap-y-2 justify-between md:justify-start">
        <div className="hidden md:flex items-center gap-1 text-lg cursor-pointer border border-gray-800 hover:border-gray-300 px-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <p className="text-md md:text-sm font-bold">All</p>
        </div>
        <div className="hidden md:flex items-center text-lg cursor-pointer border border-gray-800 hover:border-gray-300 px-1"><p className="text-md md:text-sm">Today's Deals</p></div>
        <div className="hidden md:flex items-center text-lg cursor-pointer border border-gray-800 hover:border-gray-300 px-1"><p className="text-md md:text-sm">Gift Cards</p></div>
        <div className="hidden md:flex items-center text-lg cursor-pointer border border-gray-800 hover:border-gray-300 px-1"><p className="text-md md:text-sm">Sell</p></div>
        <div className="hidden md:flex items-center text-lg cursor-pointer border border-gray-800 hover:border-gray-300 px-1"><p className="text-md md:text-sm">Registry</p></div>
        <div className="hidden md:flex items-center text-lg cursor-pointer border border-gray-800 hover:border-gray-300 px-1"><p className="text-md md:text-sm">Prime Video</p></div>
        <div className="hidden md:flex items-center text-lg cursor-pointer border border-gray-800 hover:border-gray-300 px-1"><p className="text-md md:text-sm">Customer Service</p></div>
        <div className="hidden md:flex items-center text-lg cursor-pointer border border-gray-800 hover:border-gray-300 px-1 md:ml-auto">
          <p className="text-md md:text-sm font-bold">Get free shipping to Thailand</p>
        </div>
      </div>

      {/* ================= ส่วนเนื้อหาหลัก (MAIN BODY) ================= */}
      <div className="max-w-375 mx-auto pb-12 relative">
        
        {/* 1. Hero Banner (แบนเนอร์หลักด้านบนสุด) */}
        <div className="w-full h-62.5 md:h-87.5 bg-linear-to-r from-orange-500 to-amber-600 flex flex-col justify-start pt-8 px-6 md:px-10 text-white select-none">
          <p className="text-sm md:text-base font-medium">Father's Day deals</p>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-1">Save on gifts<br/>for Dad</h1>
        </div>

        {/* กล่องหุ้มเนื้อหาด้านล่างเพื่อให้จัดหน้าต่างห่างจากขอบซ้ายขวา */}
        <div className="px-4 -mt-16 md:-mt-24 relative z-10">
          
          {/* 2. Alert/Info Bar (แถบแจ้งเตือนตรงกลางสไตล์ Amazon) */}
          <div className="w-full bg-white border border-gray-200 text-xs md:text-sm py-2.5 px-4 text-center my-4 rounded shadow-sm text-gray-800">
            Additional customs documents are required for your destination. <a href="#" className="text-blue-600 hover:text-orange-500 hover:underline">Please click here to learn more.</a>
          </div>

          {/* 3. Product Grid (ระบบกล่องแสดงสินค้า) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            
            {/* กล่องแบบที่ 1: รูปเดี่ยวขนาดใหญ่ (เช่น Get your game on) */}
            <div className="bg-white p-5 flex flex-col justify-between shadow-sm rounded-sm">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Get your game on</h2>
                {/* กล่องร่างรูปภาพใหญ่ */}
                <div className="w-full h-65 bg-gray-200 flex items-center justify-center text-gray-400 text-sm rounded">
                  [ Image Placeholder ]
                </div>
              </div>
              <a href="#" className="text-xs md:text-sm text-cyan-600 hover:text-orange-500 hover:underline mt-4 block">Shop gaming</a>
            </div>

            {/* กล่องแบบที่ 2: รูปเดี่ยวขนาดใหญ่พื้นหลังสี (เช่น FREE Shipping to Thailand) */}
            <div className="bg-white p-5 flex flex-col justify-between shadow-sm rounded-sm">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">FREE Shipping to Thailand</h2>
                {/* กล่องร่างรูปภาพใหญ่ที่มีสีสีสัน */}
                <div className="w-full h-65 bg-amber-100 flex items-center justify-center text-amber-700 text-sm rounded font-medium">
                  [ Banner Image ]
                </div>
              </div>
              <a href="#" className="text-xs md:text-sm text-cyan-600 hover:text-orange-500 hover:underline mt-4 block">Learn more</a>
            </div>

            {/* กล่องแบบที่ 3: แตกเป็น 4 ช่องย่อย (เช่น Shop Fashion for less) */}
            <div className="bg-white p-5 flex flex-col justify-between shadow-sm rounded-sm">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Shop Fashion for less</h2>
                {/* ภายในแบ่งเป็น Grid 2x2 */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="cursor-pointer">
                    <div className="w-full h-25 bg-gray-200 flex items-center justify-center text-xs text-gray-400 rounded">Img 1</div>
                    <p className="text-xs text-gray-600 mt-1">Jeans under $50</p>
                  </div>
                  <div className="cursor-pointer">
                    <div className="w-full h-25 bg-gray-200 flex items-center justify-center text-xs text-gray-400 rounded">Img 2</div>
                    <p className="text-xs text-gray-600 mt-1">Tops under $25</p>
                  </div>
                  <div className="cursor-pointer">
                    <div className="w-full h-25 bg-gray-200 flex items-center justify-center text-xs text-gray-400 rounded">Img 3</div>
                    <p className="text-xs text-gray-600 mt-1">Dresses under $30</p>
                  </div>
                  <div className="cursor-pointer">
                    <div className="w-full h-25 bg-gray-200 flex items-center justify-center text-xs text-gray-400 rounded">Img 4</div>
                    <p className="text-xs text-gray-600 mt-1">Shoes under $50</p>
                  </div>
                </div>
              </div>
              <a href="#" className="text-xs md:text-sm text-cyan-600 hover:text-orange-500 hover:underline mt-4 block">See all deals</a>
            </div>

            {/* กล่องแบบที่ 4: แตกเป็น 4 ช่องย่อย (เช่น Grilling must-haves for Dads) */}
            <div className="bg-white p-5 flex flex-col justify-between shadow-sm rounded-sm">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Grilling must-haves</h2>
                <div className="grid grid-cols-2 gap-3">
                  <div className="cursor-pointer">
                    <div className="w-full h-25 bg-gray-200 flex items-center justify-center text-xs text-gray-400 rounded">Item 1</div>
                    <p className="text-xs text-gray-600 mt-1">Grilling pans</p>
                  </div>
                  <div className="cursor-pointer">
                    <div className="w-full h-25 bg-gray-200 flex items-center justify-center text-xs text-gray-400 rounded">Item 2</div>
                    <p className="text-xs text-gray-600 mt-1">Aprons</p>
                  </div>
                  <div className="cursor-pointer">
                    <div className="w-full h-25 bg-gray-200 flex items-center justify-center text-xs text-gray-400 rounded">Item 3</div>
                    <p className="text-xs text-gray-600 mt-1">Grilling tools</p>
                  </div>
                  <div className="cursor-pointer">
                    <div className="w-full h-25 bg-gray-200 flex items-center justify-center text-xs text-gray-400 rounded">Item 4</div>
                    <p className="text-xs text-gray-600 mt-1">Gloves</p>
                  </div>
                </div>
              </div>
              <a href="#" className="text-xs md:text-sm text-cyan-600 hover:text-orange-500 hover:underline mt-4 block">Shop Father's Day gifts</a>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default App