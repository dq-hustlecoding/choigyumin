import { HiddenPageSEO } from '@/components/SEO';
import SectionContainer from '@/components/SectionContainer';
import Link from '@/components/Link';

interface CountryData {
  name: string;
  nameKo: string;
  flag: string;
  years: string;
  description: string;
  color: string;
  chapters: string[];
}

const countries: CountryData[] = [
  {
    name: 'South Korea',
    nameKo: '대한민국',
    flag: '🇰🇷',
    years: '1991~현재',
    description: '화곡동, 시화, 안산, 제주도, 서울 관악구, 신대방, 강남, 천호동...',
    color: 'bg-red-500',
    chapters: ['1화~7화 (성장기)', '8화~11화 (대학)', '12화 (첫 직장들)', '15화 (현재)'],
  },
  {
    name: 'Canada',
    nameKo: '캐나다',
    flag: '🇨🇦',
    years: '2013~2014',
    description: '크레스톤, 넬슨 (로키산맥). 한스와 로라의 집. 사과 축제, 헬스장, 다이어트.',
    color: 'bg-red-600',
    chapters: ['10화 (로키산맥의 겨울)'],
  },
  {
    name: 'United States',
    nameKo: '미국',
    flag: '🇺🇸',
    years: '2013~2014, 2022~2023',
    description:
      '스포캔 (워싱턴), 오린다 (캘리포니아), 뉴욕 맨해튼. 고모부에게 프로그래밍을 배우고, 177 Bleecker Street에서 꿈같은 나날을.',
    color: 'bg-blue-600',
    chapters: ['10화 (고모네 집)', '14화 (177 Bleecker Street)'],
  },
  {
    name: 'Singapore',
    nameKo: '싱가포르',
    flag: '🇸🇬',
    years: '2021~2022',
    description: 'Sky Green 콘도. 릴리 스타트업. Ryan, 소현 누나, 수진이 형과의 만남.',
    color: 'bg-red-500',
    chapters: ['13화 (싱가포르의 빛과 그림자)'],
  },
];

export default function MapPage() {
  return (
    <>
      <HiddenPageSEO title="세계 지도 - 나의 발자취" />
      <SectionContainer>
        <div className="fade-in">
          {/* 헤더 */}
          <div className="space-y-4 pt-6 pb-8 text-center">
            <Link
              href="/memoir"
              className="text-sm text-gray-500 hover:text-primary-500 dark:text-gray-400"
            >
              ← 목록으로
            </Link>
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              🗺️ 나의 발자취
            </h1>
            <p className="text-gray-500 dark:text-gray-400">살았던 나라들, 그리고 기억들</p>
          </div>

          {/* 세계 지도 시각화 (심플 버전) */}
          <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
            <div className="relative aspect-[2/1] max-w-4xl mx-auto">
              {/* 간단한 세계 지도 배경 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20">
                  {/* 대륙 실루엣 (간략화) */}
                  <ellipse cx="200" cy="200" rx="150" ry="100" fill="currentColor" />
                  <ellipse cx="500" cy="180" rx="200" ry="120" fill="currentColor" />
                  <ellipse cx="800" cy="200" rx="120" ry="100" fill="currentColor" />
                  <ellipse cx="300" cy="350" rx="80" ry="60" fill="currentColor" />
                  <ellipse cx="600" cy="380" rx="100" ry="50" fill="currentColor" />
                </svg>
              </div>

              {/* 국가 마커들 */}
              {/* 한국 */}
              <div
                className="absolute flex flex-col items-center animate-pulse"
                style={{ left: '78%', top: '35%' }}
              >
                <div className="w-6 h-6 rounded-full bg-red-500 border-4 border-white shadow-lg" />
                <span className="mt-1 text-xs font-bold bg-white dark:bg-gray-800 px-2 py-0.5 rounded shadow">
                  🇰🇷
                </span>
              </div>

              {/* 캐나다 */}
              <div
                className="absolute flex flex-col items-center"
                style={{ left: '18%', top: '25%' }}
              >
                <div className="w-5 h-5 rounded-full bg-red-600 border-3 border-white shadow-lg" />
                <span className="mt-1 text-xs font-bold bg-white dark:bg-gray-800 px-2 py-0.5 rounded shadow">
                  🇨🇦
                </span>
              </div>

              {/* 미국 */}
              <div
                className="absolute flex flex-col items-center"
                style={{ left: '15%', top: '40%' }}
              >
                <div className="w-5 h-5 rounded-full bg-blue-600 border-3 border-white shadow-lg" />
                <span className="mt-1 text-xs font-bold bg-white dark:bg-gray-800 px-2 py-0.5 rounded shadow">
                  🇺🇸
                </span>
              </div>

              {/* 싱가포르 */}
              <div
                className="absolute flex flex-col items-center"
                style={{ left: '72%', top: '60%' }}
              >
                <div className="w-4 h-4 rounded-full bg-red-500 border-3 border-white shadow-lg" />
                <span className="mt-1 text-xs font-bold bg-white dark:bg-gray-800 px-2 py-0.5 rounded shadow">
                  🇸🇬
                </span>
              </div>

              {/* 이동 경로 점선 */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50">
                <path
                  d="M78,17.5 Q50,5 18,12.5"
                  stroke="rgba(59, 130, 246, 0.5)"
                  strokeWidth="0.3"
                  strokeDasharray="1,1"
                  fill="none"
                />
                <path
                  d="M78,17.5 Q60,25 15,20"
                  stroke="rgba(59, 130, 246, 0.5)"
                  strokeWidth="0.3"
                  strokeDasharray="1,1"
                  fill="none"
                />
                <path
                  d="M78,17.5 Q75,40 72,30"
                  stroke="rgba(59, 130, 246, 0.5)"
                  strokeWidth="0.3"
                  strokeDasharray="1,1"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* 국가별 상세 카드 */}
          <div className="grid gap-6 md:grid-cols-2">
            {countries.map((country) => (
              <div
                key={country.name}
                className="p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{country.flag}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {country.nameKo}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{country.years}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      {country.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {country.chapters.map((chapter) => (
                        <span
                          key={chapter}
                          className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                        >
                          {chapter}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 여정 요약 */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 text-center">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
              🌏 총 4개국, 10개 이상의 도시
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              고향 없이 떠돌던 아이는 세계를 돌아다녔다.
              <br />
              하지만 어디에 있든, 고향은 사람이라는 것을 알게 됐다.
            </p>
          </div>

          {/* 안내 메시지 */}
          <div className="mt-8 p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 text-center text-sm text-yellow-800 dark:text-yellow-200">
            💡 한국 내 상세 지도 (화곡동, 시화, 안산, 제주도 등)는 추후 업데이트 예정입니다.
          </div>

          {/* 하단 네비게이션 */}
          <div className="mt-12 flex justify-center gap-4">
            <Link
              href="/memoir"
              className="px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              📚 목록으로
            </Link>
            <Link
              href="/memoir/timeline"
              className="px-6 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors"
            >
              📅 타임라인 보기
            </Link>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
