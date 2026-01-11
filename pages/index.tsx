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

      {/* Recent Posts Section */}
      <div className='divide-y divide-gray-200 dark:divide-gray-700'>
        <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
          <h2 className='text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl'>
            Latest Posts
          </h2>
          <p className='text-lg leading-7 text-gray-500 dark:text-gray-400'>
            Thoughts on software development, startups, and more.
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
              Featured Projects
            </h2>
            <p className='text-lg leading-7 text-gray-500 dark:text-gray-400'>
              Some things I've built and contributed to.
            </p>
          </div>
          <div className='container py-6'>
            <div className='-m-4 flex flex-wrap'>
              {config.projects.slice(0, 3).map(({ slug, title, description }) => (
                <div key={slug} className='p-4 md:w-1/2 lg:w-1/3'>
                  <div className='h-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700'>
                    <div className='p-6'>
                      <h3 className='mb-3 text-lg font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100'>
                        <Link href={`/projects/${slug}`}>{title}</Link>
                      </h3>
                      <p className='prose mb-3 max-w-none text-gray-500 dark:text-gray-400'>
                        {description}
                      </p>
                      <Link
                        href={`/projects/${slug}`}
                        className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                        aria-label={`Read more about ${title}`}
                      >
                        Learn more &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex justify-end pt-4 text-base font-medium leading-6'>
            <Link
              href='/projects'
              className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
              aria-label='all projects'
            >
              All Projects &rarr;
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
