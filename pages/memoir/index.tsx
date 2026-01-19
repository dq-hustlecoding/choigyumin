import { HiddenPageSEO } from '@/components/SEO';
import SectionContainer from '@/components/SectionContainer';
import Link from '@/components/Link';

// 숨겨진 인생 스토리 목록 페이지
// 검색엔진에 인덱싱되지 않음 - 직접 URL로만 접근 가능

const stories = [
  {
    slug: 'chapter-1',
    title: '1화. 시작',
    date: '2026-01-19',
    excerpt: '모든 이야기에는 시작이 있다...',
  },
];

export default function MemoirIndex() {
  return (
    <>
      <HiddenPageSEO title="My Memoir - 비공개 스토리" />
      <SectionContainer>
        <div className="fade-in">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              📖 나의 이야기
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              이 페이지는 검색엔진에 노출되지 않는 비공개 공간입니다.
              <br />
              직접 URL을 아는 사람만 접근할 수 있어요.
            </p>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {stories.map((story) => (
              <article key={story.slug} className="py-6">
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      {story.date}
                    </dd>
                  </dl>
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h2 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link
                          href={`/memoir/${story.slug}`}
                          className="text-gray-900 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-400"
                        >
                          {story.title}
                        </Link>
                      </h2>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {story.excerpt}
                    </div>
                    <div className="text-base font-medium leading-6">
                      <Link
                        href={`/memoir/${story.slug}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        읽기 &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
