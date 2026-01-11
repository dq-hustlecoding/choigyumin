import Link from '@/components/Link';
import { memo } from 'react';
import { AuthorFrontMatter } from 'types/AuthorFrontMatter';

interface BannerProps {
  frontMatter: AuthorFrontMatter;
}

function Banner(props: BannerProps): React.ReactElement {
  const { frontMatter } = props;

  return (
    <div className='fade-in banner flex flex-1 flex-col justify-center px-6 py-12 dark:text-white lg:px-10 lg:py-16'>
      {/* Greeting */}
      <p className='mb-2 text-sm font-medium uppercase tracking-widest text-primary-500 dark:text-primary-400'>
        Welcome
      </p>
      
      {/* Name */}
      <h1 className='text-4xl font-bold leading-tight text-gray-900 dark:text-white lg:text-6xl'>
        Hi, I&apos;m {frontMatter.shortname}
      </h1>
      
      {/* Role */}
      <p className='my-4 text-xl font-medium text-gray-600 dark:text-gray-300 lg:my-5 lg:text-2xl'>
        {frontMatter.occupation}
      </p>
      
      {/* Description */}
      <p className='mb-6 max-w-2xl text-base leading-relaxed text-gray-500 dark:text-gray-400 lg:text-lg'>
        Global Data &amp; AI Solutions Engineer with experience across{' '}
        <span className='font-medium text-gray-700 dark:text-gray-200'>Singapore</span>,{' '}
        <span className='font-medium text-gray-700 dark:text-gray-200'>New York</span>, and{' '}
        <span className='font-medium text-gray-700 dark:text-gray-200'>Seoul</span>.
        Helping enterprises transform their data architecture and accelerate AI initiatives.
      </p>
      
      {/* CTA Buttons */}
      <div className='flex flex-wrap items-center gap-4'>
        <Link 
          className='inline-flex items-center rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-500' 
          href='/about'
        >
          About Me
        </Link>
        
        <Link 
          className='inline-flex items-center rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700' 
          href='/contact'
        >
          Let&apos;s Talk
        </Link>
        
        <a 
          className='inline-flex items-center text-sm font-medium text-primary-500 transition-colors hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300' 
          href='https://calendar.app.google/kChErD82BFsh7AJo8'
          target='_blank'
          rel='noopener noreferrer'
        >
          Schedule a Call →
        </a>
      </div>
      
      {/* Stats/Highlights */}
      <div className='mt-10 flex flex-wrap gap-8 border-t border-gray-200 pt-8 dark:border-gray-700'>
        <div>
          <p className='text-2xl font-bold text-gray-900 dark:text-white lg:text-3xl'>10+</p>
          <p className='text-sm text-gray-500 dark:text-gray-400'>Years Experience</p>
        </div>
        <div>
          <p className='text-2xl font-bold text-gray-900 dark:text-white lg:text-3xl'>3</p>
          <p className='text-sm text-gray-500 dark:text-gray-400'>Countries</p>
        </div>
        <div>
          <p className='text-2xl font-bold text-gray-900 dark:text-white lg:text-3xl'>SNU</p>
          <p className='text-sm text-gray-500 dark:text-gray-400'>Stats &amp; CS</p>
        </div>
        <div>
          <p className='text-2xl font-bold text-primary-500 dark:text-primary-400 lg:text-3xl'>❄️</p>
          <p className='text-sm text-gray-500 dark:text-gray-400'>SnowPro Certified</p>
        </div>
      </div>
    </div>
  );
}

export default memo(Banner);
