"use client";

import { useState, useEffect } from 'react';

const shops = [
  {
    slug: '소이연남',
    tabLabel: '소이연남 (커피님)',
    name: '🍜 소이연남 동탄호수공원점',
    address: '동탄대로5길 21 라크몽 1층 E160호',
    benefit: '모임회원 한정 💥최종 결제금액의 5% 할인 입니다.!💥',
    condition: '할인방법 : 주문전 모임회원이라고 얘기해주세요.',
    details: [
      '👉 그 외 여러가지 메뉴있어요',
      '• 소고기 쌀국수(기본) 13,000원',
      '• 똠얌 쌀국수(기본) 14,900원',
      '• 소이 뽀삐아(스프링롤) 15,000원',
      '• 쏨땀 14,000원'
    ],
    images: ['/shop-soi.jpg'] 
  },
  {
    slug: '뷰티아르떼',
    tabLabel: '뷰티아르떼 (해피걸님)',
    name: '✨ 뷰티아르떼 (한미약품 인근)',
    address: '동탄대로23길 121, 1층 (블루샹하이 음식점 옆)',
    benefit: '모임회원 특별할인! 할인은 20%~50% 까지 진행중',
    condition: '💥자세한 상담은 문자로 010-6222-6367💥',
    details: [
      '👉 매달 시술종목 몇가지씩 할인이벤트하고있는데 할인에 해당안되는 시술종목도 할인가로 해드림.',
      '👉 여러가지 시술시 더 많은 할인 팍팍!',
      '• 반영구 ▶ 눈썹, 아이라인, 입술',
      '• 피부관리 ▶ 모공축소, 기미잡티, 브이라인 윤곽 리프팅, 건조하신분, 물광, 웨딩케어, 문제성피부',
      '• 마사지 ▶ 데콜테, 복부, 등관리, 오십견, 전신',
      '• 특수관리 ▶ 쥐젖, 점, 편평사마귀, 흑자, 검버섯, 비립종, 한관종등',
      '• 색소침착 ▶ y존, 팔꿈치, 겨드랑이, 엉밑, 유륜등',
      '• 타투 ▶ 레터링, 미니타투, 팔, 허벅지, 쇄골등',
      '• 왁싱 ▶ 브라질리언(여), 비키니라인, 전체',
      '• 탈모두피문신 ▶ 엠자, 정수리, 원형, 흉터, 전체',
      '• 두피생장술 ▶ 모발이 굵어지게~잔털 올라오게',
      '• 헤드스파 ▶ 두피각질, 두피마사지, 스트레스완화, 두피스파',
      '• 네일아트 ▶ 첫방문 29,000~',
      '• 속눈썹 ▶ 첫방문 30,000~'
    ],
    images: ['/shop-beauty-1.jpg', '/shop-beauty-2.jpg', '/shop-beauty-3.jpg', '/shop-beauty-4.jpg']
  },
  {
    slug: '사주분석',
    tabLabel: '사주 (서해리님)',
    name: '🔮 기질분석을 통한 사주분석 (❤큰돈만질여자❤)',
    address: '온라인 상담',
    benefit: '할인방법 💥모임 회원 한정 15만원 ➔ 10만원💥',
    condition: '예약 링크: https://url.kr/1dwswh',
    details: [
      '눈에 보이는 것이 아니라 \'보이지 않는 어떤것\'에 영향을 미쳐 자신만의 권력과 가치를 만들어 내는 사람!!!',
      '누구나 마음만 먹으면 꼭 필요한 사람 "린치핀"이 될 수 있습니다.',
      '기질분석을 통하여 본인만의 린치핀을 확인해 보세요~!'
    ],
    images: ['/shop-saju.jpg']
  },
  {
    slug: '프리다이빙',
    tabLabel: '프리다이빙 (박성철님)',
    name: '🤿 본투다이브 (프리다이빙)',
    address: '💥토~일 수강가능 (잠수풀장 ➡️ 성남, 잠실, 용인 등)',
    benefit: 'PADI 패디 레벨2 자격증반 4회 400,000 (모임회원님들은 무제한으로 수강봐드립니다. 더 추가금 없습니다.)',
    condition: '자세한 상담은 010-8483-2112',
    details: [
      '• 1회 체험가 60,000',
      '• 국제자격증으로 해외에서 프리패스~',
      '• 매년 해외 나갑니다~ 동남아, 일본, 제주, 울릉도등 물 맑은곳 👍',
      '👉 인생 최고의 인생샷 원하시는 분 ✋',
      '👉 특별한 취미를 만들고 싶은신 분 ✋',
      '👉 물 공포증을 이겨내고 싶은신 분 ✋',
      '👉 연인과 함께 바다속을 날고싶은 분 ✋',
      '👉 다이어트 하고 싶으신 분 ✋',
      '밀착관리! 될때까지 재밌게 자세히 알려드려요.'
    ],
    images: ['/shop-dive-1.jpg', '/shop-dive-2.jpg']
  },
  {
    slug: '라임제이',
    tabLabel: '본식스냅 (라임님)',
    name: '📸 ❤라임제이❤ (본식스냅)',
    address: '출장 스냅 촬영',
    benefit: '상담후 전체견적에서 최대10% 할인',
    condition: '유준 010-3005-4819',
    details: [
      'https://www.instagram.com/lime.j_photography/profilecard/?igsh=NXF0NnVpZHc2d28='
    ],
    images: ['/shop-lime.jpg']
  },
  {
    slug: '작은마을한의원',
    tabLabel: '한의원 (박승훈님)',
    name: '🌿 작은마을한의원 박승훈 원장입니다',
    address: '동탄역 인근 | 월~토 진료 / 주말 진료 OK',
    benefit: '5월 가정의 달을 맞아 저희 한의원 공진단, 경옥고 특판합니다.',
    condition: '구입문의: 031-374-4731',
    details: [
      '기력 회복, 면역 증진, 신경 안정까지 한 번에! 필요하신 분들은 언제든지 연락주세요.',
      '• 사향공진단 (1박스 10환 ➔ 31만원)',
      '• 경옥고 (1박스 60환 ➔ 19만원)'
    ],
    images: ['/shop-hanuiwon.jpg']
  },
  {
    slug: '보험클리닉',
    tabLabel: '보험 (미나리님)',
    name: '📑 미나리🎀 이민아 팀장 / 한화피플라이프 보험클리닉',
    address: '수원시 팔달구 경수대로 420, 마라톤빌딩 501호',
    benefit: '✨전문 분석!✨ 기존 보험 무료분석해드립니다.',
    condition: 'MOBILE 010-3280-8585',
    details: [
      '보험은 없는사람 없겠죠~~ 정확한 설계를 통해 부족한건 채우고 불필요한건 줄이고 보장은 더 짱짱하게!',
      '예전 보험들이 좋은것도 있지만 현재 질병에 해당되지 않는 보험도 많아요~~',
      '막상 청구했더니 해당되지 않는다고하면??'
    ],
    images: ['/shop-insurance.jpg']
  }
];

export default function Home() {
  const [activeSlug, setActiveSlug] = useState('소이연남');
  const [isMobile, setIsMobile] = useState(false);
  const activeShop = shops.find(shop => shop.slug === activeSlug) || shops[0];

  useEffect(() => {
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  const renderContent = (text: string) => {
    // 010-XXXX-XXXX 형태의 전화번호와 URL을 매칭
    const regex = /(01[016789]-?\d{3,4}-?\d{4})|(https?:\/\/[^\s]+)/g;
    
    if (!regex.test(text)) return <span>{text}</span>;

    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, i) => {
          if (!part) return null;
          // 전화번호 링크
          if (/01[016789]-?\d{3,4}-?\d{4}/.test(part)) {
            return isMobile ? (
              <a key={i} href={`tel:${part.replace(/-/g, '')}`} className="text-blue-600 font-bold underline">{part}</a>
            ) : <span key={i} className="font-semibold text-gray-800">{part}</span>;
          }
          // URL 링크
          if (/https?:\/\/[^\s]+/.test(part)) {
            return (
              <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold break-all">{part}</a>
            );
          }
          return <span key={i}>{part}</span>;
        })}
      </span>
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-6 pb-20">
      <header className="mb-6 text-center pt-8">
        <h1 className="font-bold text-gray-900" style={{ fontSize: 'clamp(1.2rem, 4vw, 1.75rem)' }}>
          <span className="text-blue-600">[동탄2] 호수공원 친목 걷기모임</span><br/>
          회원 전용 제휴 상점
        </h1>
        <p className="text-gray-500 mt-3" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
          우리 모임 회원에게만 제공되는 특별 혜택입니다.
        </p>
      </header>

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
            {shop.tabLabel}
          </button>
        ))}
      </div>

      <div className="max-w-md mx-auto fade-in" key={activeSlug}>
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <h2 className="font-bold text-gray-900" style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)' }}>{activeShop.name}</h2>
          <p className="text-gray-500 mt-1.5" style={{ fontSize: 'clamp(0.875rem, 2vw, 0.95rem)' }}>{activeShop.address}</p>
          
          <div className="mt-5 bg-blue-50 border border-blue-100 text-blue-800 p-4 rounded-xl text-left">
            <span className="font-bold block mb-1" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)' }}>{renderContent(activeShop.benefit)}</span>
            {activeShop.condition && (
              <span className="block text-sm font-medium opacity-80 mt-2">
                💡 {renderContent(activeShop.condition)}
              </span>
            )}
          </div>
          
          <div className="mt-5 text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl flex flex-col gap-2" style={{ fontSize: 'clamp(0.875rem, 2vw, 0.95rem)' }}>
            {activeShop.details.map((detail, idx) => (
              <span key={idx} className="block">{renderContent(detail)}</span>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3">
            {activeShop.images && activeShop.images.length > 0 ? (
              activeShop.images.map((imgSrc, index) => (
                <div key={index} className="w-full relative rounded-xl overflow-hidden bg-gray-100 border border-gray-100">
                  <img 
                    src={imgSrc} 
                    alt={`${activeShop.name} 상세 이미지 ${index + 1}`} 
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              ))
            ) : (
              <div className="w-full h-32 flex items-center justify-center bg-gray-100 rounded-xl text-gray-400">
                이미지 준비 중
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}