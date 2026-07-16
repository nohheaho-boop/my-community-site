"use client";

import { useState } from 'react';

const shops = [
  {
    slug: '소이연남',
    tabLabel: '소이연남 (커피님)',
    name: '🍜 소이연남 동탄호수공원점',
    address: '동탄대로5길 21 라크몽 1층 E160호',
    benefit: '최종 결제금액 5% 할인',
    condition: '주문 전 모임 회원이라고 얘기해주세요.',
    description: '소고기 쌀국수, 똠얌 쌀국수, 소이 뽀삐아(스프링롤), 쏨땀 등',
    imageSrc: '/shop-soi.jpg',
    imageAlt: '소이연남 쌀국수'
  },
  {
    slug: '뷰티아르떼',
    tabLabel: '뷰티아르떼 (해피걸님)',
    name: '✨ 뷰티아르떼',
    address: '동탄대로23길 121, 1층 (블루샹하이 옆)',
    benefit: '시술종목 20%~50% 할인 (미해당 종목도 할인가 적용)',
    condition: '예약 및 상담: 010-6222-6367 (해피걸님)',
    description: '반영구(눈썹/입술), 피부관리, 탈모두피문신, 헤드스파, 네일 등',
    imageSrc: '/shop-beauty.jpg',
    imageAlt: '뷰티아르떼 시술'
  },
  {
    slug: '사주분석',
    tabLabel: '사주 (서해리님)',
    name: '🔮 기질 분석 및 사주',
    address: '온라인 상담 (예약 링크 제공)',
    benefit: '모임 회원 한정 15만원 ➔ 10만원',
    condition: '회원 인증 후 링크를 통해 예약',
    description: '보이지 않는 것에 영향을 미쳐 자신만의 권력과 가치를 만들어 내는 사람! 본인만의 린치핀을 확인해 보세요.',
    imageSrc: '/shop-saju.jpg',
    imageAlt: '사주 기질 분석'
  },
  {
    slug: '프리다이빙',
    tabLabel: '프리다이빙 (박성철님)',
    name: '🤿 본투다이브',
    address: '잠수풀장 (성남, 잠실, 용인 등)',
    benefit: '패디 레벨2 자격증반 40만원 (모임회원 무제한 수강)',
    condition: '토~일 수강 가능 / 상담: 010-8483-2112',
    description: '추가금 없이 될 때까지 밀착 관리! 물 공포증 극복, 다이어트, 인생 최고의 바닷속 인생샷을 원하시는 분.',
    imageSrc: '/shop-dive.jpg',
    imageAlt: '프리다이빙 수중 촬영'
  },
  {
    slug: '라임제이',
    tabLabel: '본식스냅 (라임님)',
    name: '📸 라임제이 본식스냅',
    address: '출장 스냅 촬영',
    benefit: '상담 후 전체 견적에서 최대 10% 할인',
    condition: '상담: 유준 010-3005-4819',
    description: '평생 남는 소중한 결혼식의 순간을 가장 아름답게 담아드립니다.',
    imageSrc: '/shop-lime.jpg',
    imageAlt: '라임제이 본식스냅'
  },
  {
    slug: '작은마을한의원',
    tabLabel: '한의원 (박승훈님)',
    name: '🌿 작은마을한의원',
    address: '동탄역 인근',
    benefit: '가정의 달 공진단(31만원), 경옥고(19만원) 특판',
    condition: '문의: 031-374-4731',
    description: '기력 회복, 면역 증진, 신경 안정까지 한 번에! 체력 저하에 최고의 명약입니다.',
    imageSrc: '/shop-hanuiwon.jpg',
    imageAlt: '한의원 공진단 경옥고'
  },
  {
    slug: '보험클리닉',
    tabLabel: '보험 (미나리님)',
    name: '📑 한화피플라이프 보험클리닉',
    address: '수원시 팔달구 경수대로 420, 마라톤빌딩 501호',
    benefit: '기존 보험 무료 분석 및 맞춤 설계',
    condition: '상담: 010-3280-8585 (미나리님)',
    description: '부족한 건 채우고 불필요한 건 줄이고 보장은 더 짱짱하게! 정확한 설계를 도와드립니다.',
    imageSrc: '/shop-insurance.jpg',
    imageAlt: '보험클리닉 명함'
  }
];

export default function Home() {
  const [activeSlug, setActiveSlug] = useState('소이연남');
  const activeShop = shops.find(shop => shop.slug === activeSlug) || shops[0];

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-6 pb-20">
      
      {/* 걷기 모임 이름이 강조된 상단 헤더 */}
      <header className="mb-6 text-center pt-8">
        <h1 className="font-bold text-gray-900" style={{ fontSize: 'clamp(1.2rem, 4vw, 1.75rem)' }}>
          <span className="text-blue-600">[동탄2] 호수공원 친목 걷기모임</span><br/>
          회원 전용 제휴 상점
        </h1>
        <p className="text-gray-500 mt-3" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
          우리 모임 회원에게만 제공되는 특별 혜택입니다.
        </p>
      </header>

      {/* 활동명이 포함된 탭 네비게이션 */}
      <div className="max-w-md mx-auto mb-6 flex flex-wrap justify-center gap-2 px-1">
        {shops.map((shop) => (
          <button
            key={shop.slug}
            onClick={() => setActiveSlug(shop.slug)}
            className={`whitespace-nowrap px-4 py-2 rounded-full font-semibold transition-colors text-sm ${
              activeSlug === shop.slug
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            {shop.tabLabel} {/* 버튼에 새로 추가한 tabLabel(활동명 포함)이 표시됩니다 */}
          </button>
        ))}
      </div>

      {/* 선택된 상점 상세 정보 */}
      <div className="max-w-md mx-auto fade-in" key={activeSlug}>
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <h2 className="font-bold text-gray-900" style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)' }}>{activeShop.name}</h2>
          <p className="text-gray-500 mt-1.5" style={{ fontSize: 'clamp(0.875rem, 2vw, 0.95rem)' }}>{activeShop.address}</p>
          
          <div className="mt-5 bg-blue-50 border border-blue-100 text-blue-800 p-4 rounded-xl text-center">
            <span className="font-bold block mb-1" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)' }}>{activeShop.benefit}</span>
            {activeShop.condition && <span className="block text-sm opacity-80 mt-2">💡 {activeShop.condition}</span>}
          </div>
          
          <p className="mt-5 text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl" style={{ fontSize: 'clamp(0.875rem, 2vw, 0.95rem)' }}>
            {activeShop.description}
          </p>

          <div className="mt-6 w-full h-64 relative rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-100">
            {activeShop.imageSrc ? (
              <img 
                src={activeShop.imageSrc} 
                alt={activeShop.imageAlt} 
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-400">이미지 준비 중</span>
            )}
          </div>
        </section>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .fade-in { animation: fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        @keyframes fadeIn { 
          from { opacity: 0; transform: translateY(10px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
      `}} />
    </main>
  );
}