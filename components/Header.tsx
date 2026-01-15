export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* 상단 영역 */}
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* 로고 */}
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-green-600 cursor-pointer">
              척척밥상
            </h1>
            <p className="text-[10px] md:text-xs text-gray-500">
              신선한 식재료, 건강한 밥상
            </p>
          </div>

          {/* 검색바 - 태블릿 이상에서만 */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="검색어를 입력해주세요"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* 우측 메뉴 */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* 모바일 검색 버튼 */}
            <button className="md:hidden p-2 text-gray-700 hover:text-green-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <button className="hidden sm:flex items-center gap-1 text-sm text-gray-700 hover:text-green-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>배송지</span>
            </button>

            <button className="relative p-2 md:p-0 md:flex md:items-center md:gap-1 text-sm text-gray-700 hover:text-green-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="hidden md:inline">장바구니</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}