import { HiddenPageSEO } from '@/components/SEO';
import SectionContainer from '@/components/SectionContainer';
import Link from '@/components/Link';

interface LocationData {
  id: number;
  place: string;
  period: string;
  type: 'birth' | 'childhood' | 'university' | 'marriage' | 'overseas';
  description?: string;
}

const locations: LocationData[] = [
  { id: 1, place: '서울 강서구 화곡동', period: '1991~1997', type: 'birth', description: '출생지' },
  {
    id: 2,
    place: '경기도 시흥시 정왕동',
    period: '1997~1998',
    type: 'childhood',
    description: '보람유치원',
  },
  {
    id: 3,
    place: '제주도',
    period: '1998~1999',
    type: 'childhood',
    description: '아버지 AVIS 렌터카 발령',
  },
  {
    id: 4,
    place: '경기도 시흥시 정왕동',
    period: '1999~2010',
    type: 'childhood',
    description: '서해초, 함현중, 정희영·안효준',
  },
  {
    id: 5,
    place: '경기도 안산 (진성고)',
    period: '2007~2010',
    type: 'childhood',
    description: '기숙사 생활',
  },
  {
    id: 6,
    place: '서울시 관악구 대학동',
    period: '2010~2013',
    type: 'university',
    description: '첫 자취',
  },
  {
    id: 7,
    place: '서울시 관악구 청룡동',
    period: '2013~2016',
    type: 'university',
    description: '과외로 돈 벌고 이사',
  },
  {
    id: 8,
    place: '서울시 동작구 신대방동',
    period: '2018',
    type: 'marriage',
    description: '신혼집 🏠',
  },
  { id: 9, place: '서울시 중구 신당동', period: '2018~2019', type: 'marriage' },
  { id: 10, place: '경기도 용인시 기흥구 흥덕마을', period: '2019~2020', type: 'marriage' },
  { id: 11, place: '서울시 구로구 구로동', period: '2020~2021', type: 'marriage' },
  {
    id: 12,
    place: '싱가포르 Tai Seng (Sky Green)',
    period: '2021~2022',
    type: 'overseas',
    description: '릴리 스타트업',
  },
  {
    id: 13,
    place: '서울시 강남구 역삼동',
    period: '2022',
    type: 'marriage',
    description: '모멘티 한국',
  },
  {
    id: 14,
    place: '미국 뉴욕 Long Island City',
    period: '2022',
    type: 'overseas',
    description: '친구집 얹혀살기',
  },
  {
    id: 15,
    place: '미국 뉴욕 177 Bleecker St',
    period: '2022~2023',
    type: 'overseas',
    description: '120년 된 건물 🗽',
  },
  {
    id: 16,
    place: '서울시 강남구 역삼동 (송향제빌)',
    period: '2023~2024',
    type: 'marriage',
    description: '그레이박스',
  },
  {
    id: 17,
    place: '서울시 강동구 천호동 (동아하이빌)',
    period: '2024~현재',
    type: 'marriage',
    description: '현재 거주지 📍',
  },
];

const parentLocations = [
  { place: '안산 단원구 상록동', period: '~2015' },
  { place: '강남구 논현동', period: '2015~2020' },
  { place: '경기도 하남시 풍산동', period: '2020~현재' },
];

const typeColors = {
  birth: 'bg-red-500',
  childhood: 'bg-emerald-500',
  university: 'bg-blue-500',
  marriage: 'bg-amber-500',
  overseas: 'bg-purple-500',
};

const typeLabels = {
  birth: '출생',
  childhood: '성장기',
  university: '대학',
  marriage: '결혼 후',
  overseas: '해외',
};

interface CountryData {
  name: string;
  nameKo: string;
  flag: string;
  years: string;
  cities: string[];
}

const countries: CountryData[] = [
  {
    name: 'South Korea',
    nameKo: '대한민국',
    flag: '🇰🇷',
    years: '1991~현재',
    cities: [
      '화곡동',
      '시흥 정왕동',
      '제주도',
      '안산',
      '관악구',
      '신대방동',
      '신당동',
      '용인',
      '구로동',
      '역삼동',
      '천호동',
    ],
  },
  {
    name: 'Canada',
    nameKo: '캐나다',
    flag: '🇨🇦',
    years: '2013~2014',
    cities: ['크레스톤', '넬슨'],
  },
  {
    name: 'United States',
    nameKo: '미국',
    flag: '🇺🇸',
    years: '2013~2014, 2022~2023',
    cities: ['스포캔 (WA)', '오린다 (CA)', 'Long Island City (NY)', '177 Bleecker St (NY)'],
  },
  {
    name: 'Singapore',
    nameKo: '싱가포르',
    flag: '🇸🇬',
    years: '2021~2022',
    cities: ['Tai Seng (Sky Green)'],
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
            <p className="text-gray-500 dark:text-gray-400">
              17번의 이사, 4개국, 36년의 기록
            </p>
          </div>

          {/* 국가별 요약 */}
          <div className="mb-12 grid gap-4 md:grid-cols-4">
            {countries.map((country) => (
              <div
                key={country.name}
                className="p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-center"
              >
                <div className="text-4xl mb-2">{country.flag}</div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100">{country.nameKo}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{country.years}</p>
              </div>
            ))}
          </div>

          {/* 범례 */}
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {Object.entries(typeLabels).map(([key, label]) => (
              <div key={key} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${typeColors[key as keyof typeof typeColors]}`} />
                <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
              </div>
            ))}
          </div>

          {/* 이사 타임라인 */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
              📦 이사 히스토리 (17회)
            </h2>
            <div className="relative">
              {/* 세로선 */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-blue-500 to-amber-500" />

              <div className="space-y-4">
                {locations.map((loc, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <div
                      key={loc.id}
                      className={`relative flex items-center ${
                        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      {/* 점 */}
                      <div
                        className={`absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 -translate-x-1/2 z-10 ${typeColors[loc.type]}`}
                      />

                      {/* 번호 */}
                      <div className="absolute left-0 md:left-1/2 w-4 h-4 flex items-center justify-center text-[10px] font-bold text-gray-400 -translate-x-8 md:translate-x-6">
                        {loc.id}
                      </div>

                      {/* 카드 */}
                      <div
                        className={`ml-12 md:ml-0 md:w-5/12 ${
                          isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                        }`}
                      >
                        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                            {loc.period}
                          </div>
                          <div className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                            {loc.place}
                          </div>
                          {loc.description && (
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              {loc.description}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* 반대편 공간 */}
                      <div className="hidden md:block md:w-5/12" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 부모님 이사 */}
          <div className="mb-12 p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
              👨‍👩‍👧 부모님 이사 (나와 별개)
            </h3>
            <div className="flex flex-wrap gap-4">
              {parentLocations.map((loc, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-gray-400">→</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                      {loc.place}
                    </div>
                    <div className="text-xs text-gray-500">{loc.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 통계 */}
          <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-center">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">17</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">총 이사 횟수</div>
            </div>
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">4</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">방문한 나라</div>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-center">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">11+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">한국 내 도시</div>
            </div>
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-center">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">9</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">결혼 후 이사</div>
            </div>
          </div>

          {/* 여정 요약 */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 text-center">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
              🏠 고향 없이 떠돌던 아이
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              화곡동 → 시흥 → 제주도 → 시흥 → 안산 → 관악구 → 신대방 → 신당동 → 용인 → 구로 →
              싱가포르 → 역삼 → 뉴욕 → 역삼 → 천호동
              <br />
              <br />
              <span className="font-medium">
                &ldquo;고향은 장소가 아니라 사람이다&rdquo;
              </span>
            </p>
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
