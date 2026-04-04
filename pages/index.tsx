import Link from '@/components/Link';
import { PageSEO } from '@/components/SEO';
import Tag from '@/components/Tag';
import siteMetadata from '@/data/siteMetadata';
import { getAllFilesFrontMatter, getFileBySlug } from '@/lib/mdx';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import { AuthorFrontMatter } from 'types/AuthorFrontMatter';
import { PostFrontMatter } from 'types/PostFrontMatter';
import config from 'config';

const MAX_DISPLAY = 5;

// @ts-ignore
export const getStaticProps: GetStaticProps<{
  author: AuthorFrontMatter;
  posts: PostFrontMatter[];
}> = async () => {
  const authorDetails = await getFileBySlug<AuthorFrontMatter>('authors', [
    'default',
  ]);
  const posts = await getAllFilesFrontMatter('blog');

  const { frontMatter: author } = authorDetails;

  return { props: { author, posts } };
};

const Banner = dynamic(import('@/components/Banner'));

const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString(siteMetadata.locale, options);
};

export default function Home({
  author,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <Banner frontMatter={author} />

      {/* Key Achievements Section */}
      <div className='divide-y divide-gray-200 dark:divide-gray-700'>
        <div className='space-y-2 pt-10 pb-8 md:space-y-5'>
          <h2 className='text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl'>
            Impact Highlights
          </h2>
          <p className='text-lg leading-7 text-gray-500 dark:text-gray-400'>
            Measurable outcomes from production AI engineering and technical leadership.
          </p>
        </div>
        <div className='grid grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:grid-cols-4'>
          <div className='rounded-xl border border-gray-200 p-6 dark:border-gray-700'>
            <div className='mb-2 text-3xl font-bold text-primary-500'>
              40%
            </div>
            <h3 className='mb-2 text-lg font-bold dark:text-white'>
              LLM Automation
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              Reduced operational overhead through Claude-powered workflow automation and AI-assisted documentation.
            </p>
          </div>
          <div className='rounded-xl border border-gray-200 p-6 dark:border-gray-700'>
            <div className='mb-2 text-3xl font-bold text-primary-500'>40%</div>
            <h3 className='mb-2 text-lg font-bold dark:text-white'>
              Customer Growth
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              Scaled enterprise customer base at Greybox through technical advisory and custom evaluation frameworks.
            </p>
          </div>
          <div className='rounded-xl border border-gray-200 p-6 dark:border-gray-700'>
            <div className='mb-2 text-3xl font-bold text-primary-500'>50M+</div>
            <h3 className='mb-2 text-lg font-bold dark:text-white'>
              Rows / Day
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              Engineered distributed data processing on Spark/Kubernetes at Class101, handling 50M+ daily transactions.
            </p>
          </div>
          <div className='rounded-xl border border-gray-200 p-6 dark:border-gray-700'>
            <div className='mb-2 text-3xl font-bold text-primary-500'>$20M</div>
            <h3 className='mb-2 text-lg font-bold dark:text-white'>Series A</h3>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              Led technical strategy as CTO, securing $20M in funding by building high-performance recommendation engines (LightGCN, ALS).
            </p>
          </div>
        </div>
      </div>

      {/* Technical Expertise Section */}
      <div className='divide-y divide-gray-200 dark:divide-gray-700'>
        <div className='space-y-2 pt-10 pb-8 md:space-y-5'>
          <h2 className='text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl'>
            Technical Expertise
          </h2>
          <p className='text-lg leading-7 text-gray-500 dark:text-gray-400'>
            From LLM deployment to data architecture — the full applied AI stack.
          </p>
        </div>
        <div className='grid grid-cols-1 gap-6 py-8 md:grid-cols-3'>
          <div className='space-y-3'>
            <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
              Applied AI & LLMs
            </h3>
            <p className='text-gray-500 dark:text-gray-400'>
              Prompt engineering, agent development, RAG pipelines, LLM evaluation frameworks, and Claude API integration in production environments.
            </p>
          </div>
          <div className='space-y-3'>
            <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
              Data & Infrastructure
            </h3>
            <p className='text-gray-500 dark:text-gray-400'>
              End-to-end data pipelines (dbt, Spark, Kinesis), multi-cloud architecture (GCP, AWS), and scalable infrastructure on Kubernetes.
            </p>
          </div>
          <div className='space-y-3'>
            <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
              Technical Leadership
            </h3>
            <p className='text-gray-500 dark:text-gray-400'>
              Ex-CTO experience, enterprise technical advisory, developer workshops, and cross-functional stakeholder alignment. Bilingual in Korean and English.
            </p>
          </div>
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className='divide-y divide-gray-200 dark:divide-gray-700'>
        <div className='space-y-2 pt-10 pb-8 md:space-y-5'>
          <h2 className='text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl'>
            Latest Writing
          </h2>
          <p className='text-lg leading-7 text-gray-500 dark:text-gray-400'>
            Thoughts on AI engineering, data architecture, and building with LLMs.
          </p>
        </div>
        <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map(frontMatter => {
            const { slug, date, title, summary, tags } = frontMatter;
            return (
              <li key={slug} className='py-6'>
                <article>
                  <div className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
                    <dl>
                      <dt className='sr-only'>Published on</dt>
                      <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className='space-y-3 xl:col-span-3'>
                      <div>
                        <h3 className='text-xl font-bold leading-8 tracking-tight'>
                          <Link
                            href={`/blog/${slug}`}
                            className='text-gray-900 dark:text-gray-100'
                          >
                            {title}
                          </Link>
                        </h3>
                        <div className='flex flex-wrap'>
                          {tags.map(tag => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                      <div className='prose max-w-none text-gray-500 dark:text-gray-400'>
                        {summary}
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className='flex justify-end text-base font-medium leading-6'>
          <Link
            href='/blog'
            className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
            aria-label='all posts'
          >
            All Posts &rarr;
          </Link>
        </div>
      )}

      {/* Featured Projects Section */}
      {config.projects && config.projects.length > 0 && (
        <div className='divide-y divide-gray-200 dark:divide-gray-700'>
          <div className='space-y-2 pt-10 pb-8 md:space-y-5'>
            <h2 className='text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl'>
              Selected Projects
            </h2>
            <p className='text-lg leading-7 text-gray-500 dark:text-gray-400'>
              Production AI systems and technical work that drove real outcomes.
            </p>
          </div>
          <div className='container py-6'>
            <div className='-m-4 flex flex-wrap'>
              {config.projects
                .slice(0, 4)
                .map(({ slug, title, shortDescription }) => (
                  <div key={slug} className='p-4 md:w-1/2 lg:w-1/4'>
                    <div className='h-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700'>
                      <div className='p-6'>
                        <h3 className='mb-3 text-lg font-bold leading-8 tracking-tight text-gray-900 dark:text-white'>
                          <Link href={`/projects/${slug}`}>{title}</Link>
                        </h3>
                        <p className='mb-3 text-sm text-gray-500 dark:text-gray-400'>
                          {shortDescription}
                        </p>
                        <Link
                          href={`/projects/${slug}`}
                          className='text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                          aria-label={`Read more about ${title}`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Publications Section */}
      <div className='divide-y divide-gray-200 dark:divide-gray-700'>
        <div className='space-y-2 pt-10 pb-8 md:space-y-5'>
          <h2 className='text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl'>
            Publications
          </h2>
          <p className='text-lg leading-7 text-gray-500 dark:text-gray-400'>
            Technical guides on full-stack engineering and recommendation systems.
          </p>
        </div>
        <div className='grid grid-cols-1 gap-8 py-8 md:grid-cols-2'>
          <div className='rounded-xl border border-gray-200 p-6 dark:border-gray-700'>
            <h3 className='mb-2 text-xl font-bold dark:text-white'>
              Build Your Own Netflix
            </h3>
            <p className='mb-4 text-sm text-gray-500 dark:text-gray-400'>
              A full-stack guide to movie recommendation systems, published on Amazon.
            </p>
            <a
              href='https://a.co/d/crhmMBu'
              target='_blank'
              rel='noreferrer'
              className='text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
            >
              View on Amazon &rarr;
            </a>
          </div>
          <div className='rounded-xl border border-gray-200 p-6 dark:border-gray-700'>
            <h3 className='mb-2 text-xl font-bold dark:text-white'>
              나 혼자 만든다! 풀스택
            </h3>
            <p className='mb-4 text-sm text-gray-500 dark:text-gray-400'>
              Published by BJ Public, covering end-to-end web service development with a recommendation system.
            </p>
            <a
              href='http://www.yes24.com/Product/Goods/116009699'
              target='_blank'
              rel='noreferrer'
              className='text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
            >
              View on BJ Public &rarr;
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
