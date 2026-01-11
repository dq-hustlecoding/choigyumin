import Link from '@/components/Link';
import Head from 'next/head';

export default function FourZeroFour() {
  return (
    <>
      <Head>
        <meta name='robots' content='noindex, nofollow' />
        <title>Page Not Found | 404</title>
      </Head>
      <div className='fade-in flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6'>
        <div className='space-x-2 pt-6 pb-8 md:space-y-5'>
          <h1 className='text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14'>
            404
          </h1>
        </div>
        <div className='max-w-md'>
          <p className='mb-4 text-xl font-bold leading-normal md:text-2xl'>
            {"Sorry we couldn't find this page."}
          </p>
          <p className='mb-8'>
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <div className='flex flex-wrap gap-3'>
            <Link href='/'>
              <button className='focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500'>
                Back to homepage
              </button>
            </Link>
            <Link href='/blog'>
              <button className='focus:shadow-outline-blue inline rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium leading-5 text-gray-700 shadow transition-colors duration-150 hover:bg-gray-50 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'>
                Browse Blog
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
