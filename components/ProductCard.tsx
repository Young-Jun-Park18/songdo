interface Product {
  index: number;
  name: string;
  price: string;
  current: number;
  limit: number;
  image: string | null;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isSoldOut = product.current >= product.limit;
  const remaining = product.limit - product.current;
  const progressPercentage = Math.min((product.current / product.limit) * 100, 100);
  
  // 할인율 계산 (임의로 10~30% 사이)
  const discountRate = Math.floor(Math.random() * 20) + 10;

  return (
    <div className="group cursor-pointer">
      {/* 이미지 영역 */}
      <div className="relative aspect-square mb-3 overflow-hidden rounded-lg bg-gray-50">
        {/* 품절 오버레이 */}
        {isSoldOut && (
          <div className="absolute inset-0 bg-white/90 flex items-center justify-center z-10">
            <span className="text-gray-400 font-medium">품절</span>
          </div>
        )}

        {/* 할인 배지 */}
        {!isSoldOut && progressPercentage > 50 && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2 py-1 rounded">
              ~{discountRate}% 할인
            </span>
          </div>
        )}

        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg
              className="w-16 h-16 text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}

        {/* 장바구니 버튼 (호버시) */}
        {!isSoldOut && (
          <button className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        )}
      </div>

      {/* 상품 정보 */}
      <div>
        {/* 상품명과 재고 개수 */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-sm text-gray-900 line-clamp-2 leading-tight group-hover:underline flex-1">
            {product.name}
          </h3>
          {!isSoldOut && (
            <span className="text-xs text-gray-500 whitespace-nowrap mt-0.5">
              수량 {remaining}개
            </span>
          )}
        </div>
        
        {/* 가격 */}
        <div className="flex items-baseline gap-1.5">
          <span className="text-lg font-bold text-gray-900">
            {parseInt(product.price).toLocaleString()}
          </span>
          <span className="text-sm text-gray-500">원</span>
        </div>
      </div>
    </div>
  );
}