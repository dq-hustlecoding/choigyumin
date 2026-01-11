import { Header } from '@/components/Form';
import Link from '@/components/Link';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import { useRandomColorPair } from '@/lib/hooks/useRandomColorPair';
import { RoughNotation } from 'react-rough-notation';

const CALENDAR_LINK = 'https://calendar.app.google/kChErD82BFsh7AJo8';

function Contact(): React.ReactElement {
  const [randomColor] = useRandomColorPair();

  return (
    <>
      <PageSEO
        title={`Contact - ${siteMetadata.author}`}
        description='Get in touch for data architecture consulting, AI transformation strategy, or enterprise data platform discussions.'
      />
      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        <Header title='Contact' />
        <div className='container py-12'>
          {/* Introduction */}
          <div className='prose max-w-none dark:prose-dark'>
            <p className='text-lg leading-relaxed'>
              Looking to modernize your data infrastructure?
              <br />
              Exploring AI/ML transformation for your enterprise?
              <br />
              Need guidance on cloud data platform strategy?
              <br />
              <br />
              Feel free to{' '}
              <a
                href={CALENDAR_LINK}
                target='_blank'
                rel='noopener noreferrer'
                className='!font-medium !text-primary-500 !no-underline hover:!text-primary-600 dark:!text-primary-400 dark:hover:!text-primary-300'
              >
                <RoughNotation
                  show
                  type='underline'
                  strokeWidth={2}
                  animationDelay={250}
                  animationDuration={2000}
                  color={randomColor}
                >
                  schedule a call
                </RoughNotation>
              </a>
              {' '}— I&apos;m happy to chat.
            </p>
          </div>

          {/* CTA Button */}
          <div className='mt-8'>
            <a
              href={CALENDAR_LINK}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center rounded-lg bg-primary-500 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-500'
            >
              📅 Schedule a Meeting
            </a>
          </div>

          {/* Services Section */}
          <div className='mt-16'>
            <h2 className='text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100'>
              What I Can Help With
            </h2>
            <div className='mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              <div className='rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md dark:border-gray-700'>
                <div className='mb-3 text-2xl'>❄️</div>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
                  Data Platform Strategy
                </h3>
                <p className='mt-2 text-gray-600 dark:text-gray-400'>
                  Cloud data warehouse architecture, Snowflake implementation, and modern data stack design for scalable analytics.
                </p>
              </div>
              <div className='rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md dark:border-gray-700'>
                <div className='mb-3 text-2xl'>🤖</div>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
                  AI/ML Transformation
                </h3>
                <p className='mt-2 text-gray-600 dark:text-gray-400'>
                  Enterprise AI readiness assessment, MLOps infrastructure, and building AI-ready data foundations.
                </p>
              </div>
              <div className='rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md dark:border-gray-700'>
                <div className='mb-3 text-2xl'>💰</div>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
                  TCO Optimization
                </h3>
                <p className='mt-2 text-gray-600 dark:text-gray-400'>
                  Cloud cost analysis, multi-cloud strategy review, and data governance consolidation for cost reduction.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className='mt-16'>
            <h2 className='text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100'>
              Other Ways to Reach Me
            </h2>
            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              <a
                href={`mailto:${siteMetadata.email}`}
                className='flex items-center rounded-lg border border-gray-200 p-4 transition-colors hover:border-primary-500 dark:border-gray-700 dark:hover:border-primary-400'
              >
                <span className='mr-3 text-xl'>📧</span>
                <div>
                  <p className='font-medium text-gray-900 dark:text-gray-100'>Email</p>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>{siteMetadata.email}</p>
                </div>
              </a>
              <a
                href='https://linkedin.com/in/gyuminchoi'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center rounded-lg border border-gray-200 p-4 transition-colors hover:border-primary-500 dark:border-gray-700 dark:hover:border-primary-400'
              >
                <span className='mr-3 text-xl'>💼</span>
                <div>
                  <p className='font-medium text-gray-900 dark:text-gray-100'>LinkedIn</p>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>linkedin.com/in/gyuminchoi</p>
                </div>
              </a>
              <a
                href={siteMetadata.github}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center rounded-lg border border-gray-200 p-4 transition-colors hover:border-primary-500 dark:border-gray-700 dark:hover:border-primary-400'
              >
                <span className='mr-3 text-xl'>🐙</span>
                <div>
                  <p className='font-medium text-gray-900 dark:text-gray-100'>GitHub</p>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>github.com/dq-hustlecoding</p>
                </div>
              </a>
              <a
                href={siteMetadata.twitter}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center rounded-lg border border-gray-200 p-4 transition-colors hover:border-primary-500 dark:border-gray-700 dark:hover:border-primary-400'
              >
                <span className='mr-3 text-xl'>🐦</span>
                <div>
                  <p className='font-medium text-gray-900 dark:text-gray-100'>Twitter</p>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>@dq_hustlecoding</p>
                </div>
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <div className='mt-16'>
            <h2 className='text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100'>
              Frequently Asked Questions
            </h2>
            <div className='mt-6 space-y-6'>
              <div className='rounded-lg bg-gray-50 p-6 dark:bg-gray-800'>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
                  What is your typical response time?
                </h3>
                <p className='mt-2 text-gray-600 dark:text-gray-400'>
                  I typically respond to inquiries within 24-48 hours during weekdays. For urgent matters, scheduling a call is the fastest way to connect.
                </p>
              </div>
              <div className='rounded-lg bg-gray-50 p-6 dark:bg-gray-800'>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
                  What industries do you work with?
                </h3>
                <p className='mt-2 text-gray-600 dark:text-gray-400'>
                  I&apos;ve worked across various industries including fintech, media, aviation, and e-commerce. The data challenges are often similar across sectors.
                </p>
              </div>
              <div className='rounded-lg bg-gray-50 p-6 dark:bg-gray-800'>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
                  Do you offer technical consulting independently?
                </h3>
                <p className='mt-2 text-gray-600 dark:text-gray-400'>
                  While I work full-time at Snowflake, I&apos;m happy to have informal conversations about data architecture and career advice. For official Snowflake engagements, please reach out through official channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
