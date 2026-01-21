import { HiddenPageSEO } from '@/components/SEO';
import SectionContainer from '@/components/SectionContainer';
import Link from '@/components/Link';
import { stories, getSeason, seasonThemes } from '@/layouts/MemoirLayout';

export default function Timeline() {
  // 시즌별로 그룹핑
  const seasons = [
    { id: 0, name: '프롤로그', chapters: stories.filter((s) => s.chapter === 0) },
    { id: 1, name: '시즌 1: 성장기', chapters: stories.filter((s) => s.chapter >= 1 && s.chapter <= 7) },
    { id: 2, name: '시즌 2: 대학생활', chapters: stories.filter((s) => s.chapter >= 8 && s.chapter <= 11) },
    { id: 3, name: '시즌 3: 사회인의 삶', chapters: stories.filter((s) => s.chapter >= 12) },
  ];

  return (
    <>
      <HiddenPageSEO title="타임라인 - 나의 이야기" />
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
              📅 타임라인
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              1991년생 · 36년의 기록
            </p>
          </div>

          {/* 타임라인 */}
          <div className="relative">
            {/* 세로선 */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-blue-500 to-amber-500" />

            {seasons.map((season, seasonIndex) => {
              const theme = seasonThemes[season.id as keyof typeof seasonThemes];
              return (
                <div key={season.id} className="mb-12">
                  {/* 시즌 헤더 */}
                  <div className="relative flex items-center justify-center mb-8">
                    <div
                      className={`z-10 px-6 py-3 rounded-full font-bold text-lg ${theme.badge}`}
                    >
                      {season.name}
                    </div>
                  </div>

                  {/* 챕터들 */}
                  <div className="space-y-6">
                    {season.chapters.map((story, index) => {
                      const isLeft = index % 2 === 0;
                      return (
                        <div
                          key={story.slug}
                          className={`relative flex items-center ${
                            isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                          }`}
                        >
                          {/* 점 */}
                          <div
                            className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 -translate-x-1/2 z-10 ${
                              season.id === 0
                                ? 'bg-slate-500'
                                : season.id === 1
                                  ? 'bg-emerald-500'
                                  : season.id === 2
                                    ? 'bg-blue-500'
                                    : 'bg-amber-500'
                            }`}
                          />

                          {/* 카드 */}
                          <div
                            className={`ml-12 md:ml-0 md:w-5/12 ${
                              isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                            }`}
                          >
                            <Link
                              href={`/memoir/${story.slug}`}
                              className={`block p-4 rounded-xl border-2 transition-all hover:scale-[1.02] hover:shadow-lg ${theme.border} ${theme.bg}`}
                            >
                              <div
                                className={`text-sm font-semibold mb-1 ${theme.text}`}
                              >
                                {story.year}년 · {story.age}세
                              </div>
                              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                                {story.title}
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                {story.excerpt}
                              </p>
                            </Link>
                          </div>

                          {/* 반대편 공간 */}
                          <div className="hidden md:block md:w-5/12" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {/* 끝 마커 */}
            <div className="relative flex items-center justify-center">
              <div className="z-10 w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold">
                ∞
              </div>
            </div>
          </div>

          {/* 통계 */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-center">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                {stories.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">총 챕터</div>
            </div>
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">36</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">기록된 년수</div>
            </div>
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-center">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">5</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">방문한 나라</div>
            </div>
            <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">10+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">살았던 집</div>
            </div>
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
              href="/memoir/map"
              className="px-6 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors"
            >
              🗺️ 지도 보기
            </Link>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
