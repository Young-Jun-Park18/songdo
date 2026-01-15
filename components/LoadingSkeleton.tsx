export default function LoadingSkeleton() {
  return (
    <div className="flex gap-6">
      {/* 왼쪽 필터 스켈레톤 */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="space-y-8">
          {/* 카테고리 스켈레톤 */}
          <div>
            <div className="h-6 bg-gray-200 rounded w-24 mb-4 animate-pulse" />
            <div className="space-y-2">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="h-9 bg-gray-100 rounded animate-pulse" />
              ))}
            </div>
          </div>

          {/* 재고 상태 스켈레톤 */}
          <div>
            <div className="h-6 bg-gray-200 rounded w-20 mb-4 animate-pulse" />
            <div className="space-y-2">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="h-6 bg-gray-100 rounded animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* 오른쪽 상품 영역 스켈레톤 */}
      <div className="flex-1">
        {/* 상단 정렬 바 스켈레톤 */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-300">
          <div className="space-y-2">
            <div className="h-7 bg-gray-200 rounded w-32 animate-pulse" />
            <div className="h-4 bg-gray-100 rounded w-48 animate-pulse" />
          </div>
          <div className="hidden md:flex gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-8 w-20 bg-gray-100 rounded animate-pulse" />
            ))}
          </div>
        </div>

        {/* 상품 그리드 스켈레톤 - 3개씩 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="animate-pulse">
              {/* 이미지 스켈레톤 */}
              <div className="aspect-square bg-gray-200 rounded-lg mb-3" />

              {/* 내용 스켈레톤 */}
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-6 bg-gray-200 rounded w-1/2 mt-2" />
                <div className="space-y-1 mt-2">
                  <div className="h-3 bg-gray-100 rounded w-full" />
                  <div className="h-1.5 bg-gray-100 rounded w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}