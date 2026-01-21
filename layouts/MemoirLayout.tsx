import { HiddenPageSEO } from '@/components/SEO';
import SectionContainer from '@/components/SectionContainer';
import Link from '@/components/Link';

export interface StoryMeta {
  slug: string;
  chapter: number;
  title: string;
  date: string;
  excerpt: string;
  year: number;
  age: number;
}

// 스토리 목록 데이터
export const stories: StoryMeta[] = [
  {
    slug: 'prologue',
    chapter: 0,
    title: '프롤로그 - 고향 없는 아이',
    date: '2026-01-19',
    excerpt: '화곡동, 시화, 제주도, 다시 시화... 끊임없이 떠돌았던 한 소년의 이야기가 시작된다.',
    year: 2026,
    age: 36,
  },
  {
    slug: 'chapter-1',
    chapter: 1,
    title: '1화. 화곡동, 첫 번째 기억',
    date: '2026-01-19',
    excerpt: '서울 강서구 화곡동의 작은 빌라. 유난히 추웠던 그 겨울, 가장 오래된 기억이 시작된다.',
    year: 1996,
    age: 6,
  },
  {
    slug: 'chapter-2',
    chapter: 2,
    title: '2화. 제주의 바람',
    date: '2026-01-19',
    excerpt: '아버지의 발령을 따라 제주도로. 한라산이 보이는 집에서의 새로운 시작.',
    year: 1998,
    age: 8,
  },
  {
    slug: 'chapter-3',
    chapter: 3,
    title: '3화. 운명적 재회',
    date: '2026-01-19',
    excerpt: '다시 돌아온 시화. 2학년 1반 교실에서 마주친 낯익은 얼굴.',
    year: 1999,
    age: 9,
  },
  {
    slug: 'chapter-4',
    chapter: 4,
    title: '4화. 도원결의',
    date: '2026-01-19',
    excerpt: '세 소년이 맺은 의형제의 맹세. 20년을 이어갈 우정의 시작.',
    year: 2003,
    age: 13,
  },
  {
    slug: 'chapter-5',
    chapter: 5,
    title: '5화. 불타는 청춘',
    date: '2026-01-19',
    excerpt: '과학고를 향한 질주. 새벽 2시까지 이어지는 학원 생활과 성장통.',
    year: 2005,
    age: 15,
  },
  {
    slug: 'chapter-6',
    chapter: 6,
    title: '6화. 진성고의 나날',
    date: '2026-01-19',
    excerpt: '192등으로 시작한 기숙사 생활. 공부의 재미를 알게 된 고등학교 시절.',
    year: 2007,
    age: 17,
  },
  {
    slug: 'chapter-7',
    chapter: 7,
    title: '7화. 서울대를 향하여',
    date: '2026-01-19',
    excerpt: '책상에 써놓은 다짐. 그리고 운명처럼 찾아온 추가합격 소식.',
    year: 2010,
    age: 20,
  },
  {
    slug: 'chapter-8',
    chapter: 8,
    title: '8화. 관악산 아래에서',
    date: '2026-01-21',
    excerpt: '서울대라는 명함이 열어준 세상. 오르비 91동, 총연극회, 그리고 새로운 인연들.',
    year: 2010,
    age: 20,
  },
  {
    slug: 'chapter-9',
    chapter: 9,
    title: '9화. 방황의 시작',
    date: '2026-01-21',
    excerpt: '대구 친구들, 과외의 나날, 그리고 학점은 개판. 서울대를 들어왔다는 것만으로 살던 시절.',
    year: 2011,
    age: 21,
  },
  {
    slug: 'chapter-10',
    chapter: 10,
    title: '10화. 로키산맥의 겨울',
    date: '2026-01-21',
    excerpt: '공익, 그리고 캐나다. 크레스톤의 사과 축제와 고모부에게 배운 프로그래밍.',
    year: 2012,
    age: 22,
  },
  {
    slug: 'chapter-11',
    chapter: 11,
    title: '11화. 스타트업의 꿈',
    date: '2026-01-21',
    excerpt: '복학, 컴공 복수전공, 그리고 김문석과의 창업. 봉천동에서의 폐업까지.',
    year: 2015,
    age: 25,
  },
];

interface Props {
  children: React.ReactNode;
  currentSlug: string;
}

export default function MemoirLayout({ children, currentSlug }: Props) {
  const currentIndex = stories.findIndex((s) => s.slug === currentSlug);
  const currentStory = stories[currentIndex];
  const prevStory = currentIndex > 0 ? stories[currentIndex - 1] : null;
  const nextStory = currentIndex < stories.length - 1 ? stories[currentIndex + 1] : null;

  return (
    <>
      <HiddenPageSEO title={`${currentStory?.title || 'Memoir'} - 비공개 스토리`} />
      <SectionContainer>
        <article className="fade-in">
          {/* 헤더 */}
          <header className="pt-6 pb-8">
            <div className="space-y-1 text-center">
              <div className="mb-4">
                <Link
                  href="/memoir"
                  className="text-sm text-gray-500 hover:text-primary-500 dark:text-gray-400"
                >
                  ← 목록으로
                </Link>
              </div>
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  {currentStory?.date}
                </dd>
              </dl>
              <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
                {currentStory?.title}
              </h1>
            </div>
          </header>

          {/* 본문 */}
          <div className="prose prose-lg max-w-none pb-8 dark:prose-dark prose-p:leading-relaxed prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-headings:text-gray-900 dark:prose-headings:text-gray-100">
            {children}
          </div>

          {/* 이전/다음 네비게이션 */}
          <nav className="border-t border-gray-200 dark:border-gray-700 pt-6 pb-8">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              {prevStory ? (
                <Link
                  href={`/memoir/${prevStory.slug}`}
                  className="group flex-1 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors"
                >
                  <span className="text-sm text-gray-500 dark:text-gray-400">← 이전</span>
                  <p className="mt-1 font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary-500">
                    {prevStory.title}
                  </p>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              {nextStory && (
                <Link
                  href={`/memoir/${nextStory.slug}`}
                  className="group flex-1 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors text-right"
                >
                  <span className="text-sm text-gray-500 dark:text-gray-400">다음 →</span>
                  <p className="mt-1 font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary-500">
                    {nextStory.title}
                  </p>
                </Link>
              )}
            </div>
          </nav>

          {/* 하단 목록 */}
          <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              📚 전체 목록
            </h2>
            <div className="space-y-3">
              {stories.map((story) => (
                <Link
                  key={story.slug}
                  href={`/memoir/${story.slug}`}
                  className={`block p-4 rounded-lg border transition-all ${
                    story.slug === currentSlug
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium">
                          {story.chapter === 0 ? '序' : story.chapter}
                        </span>
                        <div className="min-w-0">
                          <p
                            className={`font-medium truncate ${
                              story.slug === currentSlug
                                ? 'text-primary-600 dark:text-primary-400'
                                : 'text-gray-900 dark:text-gray-100'
                            }`}
                          >
                            {story.title}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {story.year}년 · {story.age}세
                          </p>
                        </div>
                      </div>
                    </div>
                    {story.slug === currentSlug && (
                      <span className="flex-shrink-0 text-xs bg-primary-500 text-white px-2 py-1 rounded ml-2">
                        현재
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </SectionContainer>
    </>
  );
}
