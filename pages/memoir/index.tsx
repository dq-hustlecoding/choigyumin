import { HiddenPageSEO } from '@/components/SEO';
import SectionContainer from '@/components/SectionContainer';
import Link from '@/components/Link';
import { stories, getSeason, seasonThemes } from '@/layouts/MemoirLayout';

// 숨겨진 인생 스토리 목록 페이지
// 검색엔진에 인덱싱되지 않음 - 직접 URL로만 접근 가능

const seasons = [
  { id: 0, name: '프롤로그', emoji: '📜' },
  { id: 1, name: '시즌 1: 성장기', emoji: '🌱', subtitle: '화곡동 ~ 서울대 입학' },
  { id: 2, name: '시즌 2: 대학생활', emoji: '🎓', subtitle: '관악산 아래에서' },
  { id: 3, name: '시즌 3: 사회인의 삶', emoji: '💼', subtitle: '직장, 결혼, 그리고 세계로' },
];

export default function MemoirIndex() {
  return (
    <>
      <HiddenPageSEO title="My Memoir - 비공개 스토리" />
      <SectionContainer>
        <div className="fade-in">
          {/* 헤더 */}
          <div className="space-y-4 pt-6 pb-8 md:space-y-5 text-center">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              📖 나의 이야기
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              화곡동에서 시작해 제주, 시흥, 안산을 거쳐
              <br />
              캐나다, 싱가포르, 뉴욕까지.
              <br />
              끊임없이 떠돌았던 한 소년의 36년.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200">
                🔒 검색엔진 비공개
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
                📝 {stories.length}개 챕터
              </span>
            </div>
          </div>

          {/* 퀵 네비게이션 */}
          <div className="mb-8 flex justify-center gap-4">
            <Link
              href="/memoir/timeline"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity"
            >
              📅 타임라인
            </Link>
            <Link
              href="/memoir/map"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-amber-500 text-white font-medium hover:opacity-90 transition-opacity"
            >
              🗺️ 세계 지도
            </Link>
          </div>

          {/* 시즌별 스토리 목록 */}
          {seasons.map((season) => {
            const theme = seasonThemes[season.id as keyof typeof seasonThemes];
            const seasonStories = stories.filter((s) => getSeason(s.chapter) === season.id);

            if (seasonStories.length === 0) return null;

            return (
              <div key={season.id} className="mb-10">
                {/* 시즌 헤더 */}
                <div className={`mb-4 p-4 rounded-xl ${theme.bg}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{season.emoji}</span>
                    <div>
                      <h2 className={`text-xl font-bold ${theme.text}`}>{season.name}</h2>
                      {season.subtitle && (
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {season.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* 챕터 목록 */}
                <div className="space-y-3">
                  {seasonStories.map((story) => (
                    <article key={story.slug} className="group">
                      <Link
                        href={`/memoir/${story.slug}`}
                        className={`block p-4 rounded-lg border-2 transition-all hover:shadow-md ${theme.border} hover:${theme.bg}`}
                      >
                        <div className="flex items-start gap-4">
                          <span
                            className={`flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm ${theme.badge}`}
                          >
                            {story.chapter === 0 ? '序' : story.chapter}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary-500 transition-colors truncate">
                                {story.title}
                              </h3>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                              {story.year}년 · {story.age}세
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                              {story.excerpt}
                            </p>
                          </div>
                          <span className="flex-shrink-0 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity">
                            →
                          </span>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}

          {/* 하단 안내 */}
          <div className="mt-12 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 rounded-xl">
            <div className="text-center mb-4">
              <p className="text-gray-600 dark:text-gray-400">
                이 이야기는 실화를 바탕으로 작성되었습니다.
                <br />
                <span className="text-sm">일부 에피소드는 생동감을 위해 각색되었습니다.</span>
              </p>
            </div>
            <div className="flex justify-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <Link
                href="/memoir/timeline"
                className="text-sm text-gray-500 hover:text-primary-500 dark:text-gray-400"
              >
                📅 타임라인
              </Link>
              <Link
                href="/memoir/map"
                className="text-sm text-gray-500 hover:text-primary-500 dark:text-gray-400"
              >
                🗺️ 지도
              </Link>
              <Link
                href="/memoir/prologue"
                className="text-sm text-gray-500 hover:text-primary-500 dark:text-gray-400"
              >
                📜 프롤로그부터 읽기
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
