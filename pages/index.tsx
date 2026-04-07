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
    month: 'short',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString(siteMetadata.locale, options);
};

const impactItems = [
  {
    stat: '40%',
    label: 'LLM Automation',
    desc: 'Reduced operational overhead through Claude-powered workflow automation and AI-assisted documentation.',
  },
  {
    stat: '40%',
    label: 'Customer Growth',
    desc: 'Scaled enterprise customer base at Greybox through technical advisory and custom evaluation frameworks.',
  },
  {
    stat: '50M+',
    label: 'Rows / Day',
    desc: 'Engineered distributed data processing on Spark/Kubernetes at Class101, handling 50M+ daily transactions.',
  },
  {
    stat: '$20M',
    label: 'Series A',
    desc: 'Led technical strategy as CTO, securing $20M in funding with high-performance recommendation engines.',
  },
];

const expertiseItems = [
  {
    title: 'Applied AI & LLMs',
    desc: 'Prompt engineering, agent development, RAG pipelines, LLM evaluation frameworks, and Claude API integration in production environments.',
  },
  {
    title: 'Data & Infrastructure',
    desc: 'End-to-end data pipelines (dbt, Spark, Kinesis), multi-cloud architecture (GCP, AWS), and scalable infrastructure on Kubernetes.',
  },
  {
    title: 'Technical Leadership',
    desc: 'Ex-CTO experience, enterprise technical advisory, developer workshops, and cross-functional stakeholder alignment. Bilingual in Korean and English.',
  },
];

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

      {/* Impact */}
      <section className='pb-12'>
        <div className='mb-8 border-t border-gray-100 pt-10 dark:border-gray-800'>
          <h2 className='text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500'>
            Impact
          </h2>
        </div>
        <div className='grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-4'>
          {impactItems.map(item => (
            <div key={item.label}>
              <p className='mb-0.5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                {item.stat}
              </p>
              <p className='mb-2 text-xs font-semibold uppercase tracking-wider text-primary-500 dark:text-primary-400'>
                {item.label}
              </p>
              <p className='text-xs leading-relaxed text-gray-400 dark:text-gray-500'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className='pb-12'>
        <div className='mb-8 border-t border-gray-100 pt-10 dark:border-gray-800'>
          <h2 className='text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500'>
            Expertise
          </h2>
        </div>
        <div className='grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-3'>
          {expertiseItems.map(item => (
            <div key={item.title}>
              <h3 className='mb-2 text-sm font-semibold text-gray-900 dark:text-white'>
                {item.title}
              </h3>
              <p className='text-sm leading-relaxed text-gray-500 dark:text-gray-400'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Writing */}
      {posts.length > 0 && (
        <section className='pb-12'>
          <div className='mb-8 border-t border-gray-100 pt-10 dark:border-gray-800'>
            <div className='flex items-baseline justify-between'>
              <h2 className='text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500'>
                Writing
              </h2>
              {posts.length > MAX_DISPLAY && (
                <Link
                  href='/blog'
                  className='group inline-flex items-center gap-1 text-xs font-medium text-primary-500 dark:text-primary-400'
                  aria-label='all posts'
                >
                  All posts
                  <span className='transition-transform duration-200 group-hover:translate-x-0.5'>
                    →
                  </span>
                </Link>
              )}
            </div>
          </div>
          <ul className='space-y-0'>
            {posts.slice(0, MAX_DISPLAY).map(frontMatter => {
              const { slug, date, title, summary, tags } = frontMatter;
              return (
                <li key={slug}>
                  <article className='group border-b border-gray-100 py-5 dark:border-gray-800/60 last:border-0'>
                    <div className='flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-8'>
                      <time
                        dateTime={date}
                        className='shrink-0 text-xs font-medium tabular-nums text-gray-400 dark:text-gray-500 sm:mt-0.5 sm:w-28'
                      >
                        {formatDate(date)}
                      </time>
                      <div className='min-w-0 flex-1'>
                        <h3 className='mb-1 text-sm font-semibold leading-snug text-gray-900 dark:text-gray-100'>
                          <Link
                            href={`/blog/${slug}`}
                            className='transition-colors hover:text-primary-500 dark:hover:text-primary-400'
                          >
                            {title}
                          </Link>
                        </h3>
                        <p className='mb-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-2'>
                          {summary}
                        </p>
                        <div className='flex flex-wrap gap-1.5'>
                          {tags.map(tag => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {/* Projects */}
      {config.projects && config.projects.length > 0 && (
        <section className='pb-12'>
          <div className='mb-8 border-t border-gray-100 pt-10 dark:border-gray-800'>
            <div className='flex items-baseline justify-between'>
              <h2 className='text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500'>
                Projects
              </h2>
              <Link
                href='/projects'
                className='group inline-flex items-center gap-1 text-xs font-medium text-primary-500 dark:text-primary-400'
                aria-label='all projects'
              >
                All projects
                <span className='transition-transform duration-200 group-hover:translate-x-0.5'>
                  →
                </span>
              </Link>
            </div>
          </div>
          <ul className='space-y-0'>
            {config.projects
              .slice(0, 4)
              .map(({ slug, title, shortDescription }) => (
                <li key={slug}>
                  <Link
                    href={`/projects/${slug}`}
                    className='group flex items-start justify-between border-b border-gray-100 py-4 dark:border-gray-800/60 last:border-0'
                  >
                    <div className='min-w-0 flex-1 pr-8'>
                      <h3 className='mb-0.5 text-sm font-semibold text-gray-900 transition-colors group-hover:text-primary-500 dark:text-gray-100 dark:group-hover:text-primary-400'>
                        {title}
                      </h3>
                      <p className='text-xs leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-1'>
                        {shortDescription}
                      </p>
                    </div>
                    <span className='shrink-0 text-gray-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary-500 dark:text-gray-600 dark:group-hover:text-primary-400'>
                      →
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      )}

      {/* Publications */}
      <section className='pb-16'>
        <div className='mb-8 border-t border-gray-100 pt-10 dark:border-gray-800'>
          <h2 className='text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500'>
            Publications
          </h2>
        </div>
        <div className='grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2'>
          <div>
            <h3 className='mb-1 text-sm font-semibold text-gray-900 dark:text-white'>
              Build Your Own Netflix
            </h3>
            <p className='mb-3 text-xs leading-relaxed text-gray-500 dark:text-gray-400'>
              A full-stack guide to movie recommendation systems, published on
              Amazon.
            </p>
            <a
              href='https://a.co/d/crhmMBu'
              target='_blank'
              rel='noreferrer'
              className='group inline-flex items-center gap-1 text-xs font-medium text-primary-500 dark:text-primary-400'
            >
              View on Amazon
              <span className='transition-transform duration-200 group-hover:translate-x-0.5'>
                →
              </span>
            </a>
          </div>
          <div>
            <h3 className='mb-1 text-sm font-semibold text-gray-900 dark:text-white'>
              나 혼자 만든다! 풀스택
            </h3>
            <p className='mb-3 text-xs leading-relaxed text-gray-500 dark:text-gray-400'>
              BJ Public 출판. 영화 추천 시스템으로 배우는 풀스택 웹 서비스
              개발.
            </p>
            <a
              href='http://www.yes24.com/Product/Goods/116009699'
              target='_blank'
              rel='noreferrer'
              className='group inline-flex items-center gap-1 text-xs font-medium text-primary-500 dark:text-primary-400'
            >
              BJ Public에서 보기
              <span className='transition-transform duration-200 group-hover:translate-x-0.5'>
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
