'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import LoadingSkeleton from '@/components/LoadingSkeleton';
import ScrollToTop from '@/components/ScrollToTop';

interface Product {
  index: number;
  name: string;
  price: string;
  current: number;
  limit: number;
  image: string | null;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [sortBy, setSortBy] = useState<string>('추천순');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.zeri.pics/');
        
        if (!response.ok) {
          throw new Error('데이터를 불러오는데 실패했습니다.');
        }

        const data = await response.json();
        const productList: Product[] = data.content;

        const inStock = productList.filter(p => p.current < p.limit);
        const outOfStock = productList.filter(p => p.current >= p.limit);

        inStock.sort((a, b) => a.index - b.index);
        outOfStock.sort((a, b) => a.index - b.index);

        setProducts([...inStock, ...outOfStock]);
      } catch (err) {
        setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = ['전체', '과일', '채소', '밀키트', '정육/계란', '수산', '간식'];

  const inStockCount = products.filter(p => p.current < p.limit).length;
  const soldOutCount = products.length - inStockCount;

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1 max-w-[1280px] mx-auto w-full px-4 py-6">
          <LoadingSkeleton />
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center p-8">
            <p className="text-xl text-gray-900 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              다시 시도
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 max-w-[1280px] mx-auto w-full px-4 py-6">
        <div className="flex gap-6">
          {/* 왼쪽 필터 사이드바 */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              {/* 카테고리 필터 */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">카테고리</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                          selectedCategory === category
                            ? 'bg-green-50 text-green-600 font-medium'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 재고 상태 */}
              <div>
                <h3 className="text-lg font-bold mb-4">재고 상태</h3>
                <div className="space-y-2 text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-green-600" defaultChecked />
                    <span>판매중 ({inStockCount})</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-green-600" />
                    <span className="text-gray-400">품절 ({soldOutCount})</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* 오른쪽 상품 영역 */}
          <div className="flex-1">
            {/* 상단 정렬 바 */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-300">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  전체 {products.length}개
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  신선한 식재료를 공동구매로 더 저렴하게
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2">
                {['추천순', '신상품순', '판매량순', '낮은가격순', '높은가격순'].map((sort) => (
                  <button
                    key={sort}
                    onClick={() => setSortBy(sort)}
                    className={`px-3 py-1.5 text-sm rounded transition-colors ${
                      sortBy === sort
                        ? 'bg-green-600 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {sort}
                  </button>
                ))}
              </div>
            </div>

            {/* 상품 그리드 - 한 행에 3개씩 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {products.map((product) => (
                <ProductCard key={product.index} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      
      <ScrollToTop />
    </div>
  );
}