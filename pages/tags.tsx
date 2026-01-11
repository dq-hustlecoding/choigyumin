import Link from '@/components/Link';
import { PageSEO } from '@/components/SEO';
import Tag from '@/components/Tag';
import siteMetadata from '@/data/siteMetadata';
import { getAllTags } from '@/lib/tags';
import kebabCase from '@/lib/utils/kebabCase';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps: GetStaticProps<{
  tags: Record<string, number>;
}> = async () => {
  const tags = await getAllTags('blog');

  return { props: { tags } };
};

export default function Tags({
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
  const totalPosts = Object.values(tags).reduce((acc, count) => acc + count, 0);
  
  return (
    <>
      <PageSEO
        title={`Tags - ${siteMetadata.author}`}
        description='Browse all topics and categories covered in my blog posts about software development, startups, and technology.'
      />
      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        {/* Header Section */}
        <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
          <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
            Tags
          </h1>
          <p className='text-lg leading-7 text-gray-500 dark:text-gray-400'>
            Browse through {sortedTags.length} different topics covering {totalPosts} blog posts. 
            Click on any tag to explore related articles about software development, startups, and technology.
          </p>
        </div>

        {/* Tags Grid */}
        <div className='py-8'>
          <div className='flex flex-wrap gap-4'>
            {Object.keys(tags).length === 0 && (
              <p className='text-gray-500 dark:text-gray-400'>No tags found.</p>
            )}
            {sortedTags.map(t => {
              const count = tags[t];
              return (
                <Link
                  key={t}
                  href={`/tags/${kebabCase(t)}`}
                  className='group flex items-center rounded-lg border border-gray-200 px-4 py-2 transition-all hover:border-primary-500 hover:bg-primary-50 dark:border-gray-700 dark:hover:border-primary-400 dark:hover:bg-gray-800'
                >
                  <span className='text-sm font-medium uppercase text-gray-700 group-hover:text-primary-600 dark:text-gray-300 dark:group-hover:text-primary-400'>
                    {t}
                  </span>
                  <span className='ml-2 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-600 dark:bg-gray-700 dark:text-gray-300'>
                    {count}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className='py-8'>
          <h2 className='text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100'>
            About These Topics
          </h2>
          <p className='mt-4 text-gray-600 dark:text-gray-400'>
            These tags represent the main areas I write about. From practical programming tutorials 
            and best practices to insights about startup life and career development in tech. 
            Each tag groups related posts to help you find exactly what you&apos;re looking for.
          </p>
          <div className='mt-6'>
            <Link
              href='/blog'
              className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
            >
              View all posts &rarr;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
