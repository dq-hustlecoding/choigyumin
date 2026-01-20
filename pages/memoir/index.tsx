import { HiddenPageSEO } from '@/components/SEO';
import SectionContainer from '@/components/SectionContainer';
import Link from '@/components/Link';
import { stories } from '@/layouts/MemoirLayout';

// 숨겨진 인생 스토리 목록 페이지
// 검색엔진에 인덱싱되지 않음 - 직접 URL로만 접근 가능

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
              화곡동에서 시작해 제주, 시흥, 안산을 거쳐 서울대까지.
              <br />
              끊임없이 떠돌았던 한 소년의 성장기.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200">
                🔒 이 페이지는 검색엔진에 노출되지 않습니다
              </span>
            </div>
          </div>

          {/* 스토리 목록 */}
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {stories.map((story, index) => (
              <article key={story.slug} className="py-6 group">
                <Link
                  href={`/memoir/${story.slug}`}
                  className="block hover:bg-gray-50 dark:hover:bg-gray-800/50 -mx-4 px-4 py-4 rounded-lg transition-colors"
                >
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <div className="flex items-center gap-3 xl:block">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-bold text-sm">
                        {story.chapter === 0 ? '序' : story.chapter}
                      </span>
                      <dl className="xl:mt-2">
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
                          {story.date}
                        </dd>
                      </dl>
                    </div>
                    <div className="space-y-3 xl:col-span-3">
                      <div>
                        <h2 className="text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 group-hover:text-primary-500 transition-colors">
                          {story.title}
                        </h2>
                      </div>
                      <p className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {story.excerpt}
                      </p>
                      <div className="text-base font-medium leading-6">
                        <span className="text-primary-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          읽기 →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* 하단 안내 */}
          <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl text-center">
            <p className="text-gray-600 dark:text-gray-400">
              이 이야기는 실화를 바탕으로 작성되었습니다.
              <br />
              <span className="text-sm">
                일부 에피소드는 생동감을 위해 각색되었습니다.
              </span>
            </p>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
