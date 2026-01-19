import { HiddenPageSEO } from '@/components/SEO';
import SectionContainer from '@/components/SectionContainer';
import Link from '@/components/Link';

// 숨겨진 인생 스토리 - 1화
// 검색엔진에 인덱싱되지 않음

export default function Chapter1() {
  return (
    <>
      <HiddenPageSEO title="1화. 시작 - My Memoir" />
      <SectionContainer>
        <article className="fade-in">
          <header className="pt-6 pb-8">
            <div className="space-y-1 text-center">
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  2026년 1월 19일
                </dd>
              </dl>
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                1화. 시작
              </h1>
            </div>
          </header>

          <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">
            <p>
              안녕하세요, 이곳은 제 비밀스러운 이야기를 담는 공간입니다.
            </p>
            
            <h2>🌱 테스트 콘텐츠</h2>
            <p>
              이 페이지는 테스트용으로 만들어졌습니다. 여기에 인생 스토리를 연재할 수 있어요.
            </p>
            
            <blockquote>
              &ldquo;모든 위대한 이야기는 작은 시작에서 비롯된다.&rdquo;
            </blockquote>

            <h2>✨ 이 페이지의 특징</h2>
            <ul>
              <li>검색엔진에 인덱싱되지 않습니다 (noindex, nofollow)</li>
              <li>메뉴에 표시되지 않습니다</li>
              <li>직접 URL을 아는 사람만 접근할 수 있습니다</li>
            </ul>

            <h2>📝 앞으로의 계획</h2>
            <p>
              이곳에 당신의 인생 스토리를 자유롭게 연재해보세요.
              글을 추가하려면 <code>/pages/memoir/</code> 폴더에 새 파일을 만들면 됩니다.
            </p>
          </div>

          <footer className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <div className="flex justify-between text-sm font-medium">
              <Link
                href="/memoir"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              >
                &larr; 목록으로
              </Link>
              {/* 다음 화가 생기면 여기에 추가 */}
            </div>
          </footer>
        </article>
      </SectionContainer>
    </>
  );
}
