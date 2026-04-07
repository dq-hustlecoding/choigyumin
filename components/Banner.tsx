import Link from '@/components/Link';
import { memo } from 'react';
import { AuthorFrontMatter } from 'types/AuthorFrontMatter';

interface BannerProps {
  frontMatter: AuthorFrontMatter;
}

function Banner(props: BannerProps): React.ReactElement {
  const { frontMatter } = props;

  const expertise = [
    'Applied AI / LLMs',
    'Data Architecture',
    'AI/ML Infrastructure',
    'Technical Leadership',
  ];

  return (
    <div className='fade-in banner flex flex-1 flex-col justify-center py-16 lg:py-24'>
      <p className='mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 dark:text-primary-400'>
        {frontMatter.occupation}
      </p>

      <h1 className='mb-6 text-5xl font-extrabold leading-[1.08] tracking-tight text-gray-900 dark:text-white lg:text-7xl'>
        {frontMatter.name.split(' ').slice(0, 2).join(' ')}
        <br />
        <span className='text-gray-400 dark:text-gray-500'>
          {frontMatter.name.split(' ').slice(2).join(' ')}
        </span>
      </h1>

      <p className='mb-4 max-w-xl text-lg font-light leading-relaxed text-gray-600 dark:text-gray-300 lg:text-xl'>
        Applied AI Engineer building and deploying production LLM systems.
        Specializing in prompt engineering, agent development, and AI technical
        advisory.
      </p>

      <p className='mb-10 max-w-2xl text-sm leading-relaxed text-gray-400 dark:text-gray-500'>
        Ex-CTO · 2× Technical Author · SNU Statistics &amp; CS · SnowPro
        Certified · Seoul · Singapore · New York
      </p>

      <div className='flex flex-wrap items-center gap-8'>
        <Link
          href='/about'
          className='group inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 dark:text-white'
        >
          About me
          <span className='transition-transform duration-200 group-hover:translate-x-1'>
            →
          </span>
        </Link>
        <a
          href='https://calendar.app.google/kChErD82BFsh7AJo8'
          target='_blank'
          rel='noopener noreferrer'
          className='group inline-flex items-center gap-1.5 text-sm font-semibold text-primary-500 dark:text-primary-400'
        >
          Schedule a call
          <span className='transition-transform duration-200 group-hover:translate-x-1'>
            →
          </span>
        </a>
        <Link
          href='/contact'
          className='text-sm font-medium text-gray-400 transition-colors hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300'
        >
          Get in touch
        </Link>
      </div>

      <div className='mt-12 flex flex-wrap gap-2'>
        {expertise.map(skill => (
          <span
            key={skill}
            className='rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400'
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default memo(Banner);
