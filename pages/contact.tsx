import { Header } from '@/components/Form';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import { useRandomColorPair } from '@/lib/hooks/useRandomColorPair';
import { contact } from 'config/contact';
import { openPopupWidget } from 'react-calendly';
import { RoughNotation } from 'react-rough-notation';

function Contact(): React.ReactElement {
  const [randomColor, randomColor2] = useRandomColorPair();

  function onScheduleMeeting(): void {
    if (!contact.calendly) {
      console.error('err: calendly link was not provided.');
      return;
    }

    const config = {
      url: contact.calendly,
    };

    openPopupWidget(config);
  }

  return (
    <>
      <PageSEO
        title={`Contact - ${siteMetadata.author}`}
        description='Get in touch for collaboration, consulting, or just a friendly chat about technology and startups.'
      />
      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        <Header title='Contact' />
        <div className='container py-12'>
          {/* Introduction */}
          <div className='prose max-w-none dark:prose-dark'>
            <p className='text-lg'>
              Do you have a project in mind?
              <br />
              Are you running early stage start-up and need technical advice?
              <br />
              or simply wanna chat?
              <br />
              Feel free to
              <span
                className='ml-2 cursor-pointer !font-normal !text-black !no-underline dark:!text-white'
                onClick={onScheduleMeeting}
                role='button'
                tabIndex={0}
              >
                <RoughNotation
                  show
                  type='underline'
                  strokeWidth={2}
                  animationDelay={250}
                  animationDuration={2000}
                  color={randomColor}
                >
                  schedule a meeting
                </RoughNotation>
              </span>
            </p>
          </div>

          {/* Services Section */}
          <div className='mt-12'>
            <h2 className='text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100'>
              What I Can Help With
            </h2>
            <div className='mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              <div className='rounded-lg border border-gray-200 p-6 dark:border-gray-700'>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
                  Technical Consulting
                </h3>
                <p className='mt-2 text-gray-600 dark:text-gray-400'>
                  Architecture reviews, technology stack recommendations, and best practices for building scalable applications.
                </p>
              </div>
              <div className='rounded-lg border border-gray-200 p-6 dark:border-gray-700'>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
                  Startup Mentoring
                </h3>
                <p className='mt-2 text-gray-600 dark:text-gray-400'>
                  Early-stage technical guidance, MVP development strategies, and helping founders navigate tech decisions.
                </p>
              </div>
              <div className='rounded-lg border border-gray-200 p-6 dark:border-gray-700'>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
                  Code Review & Audit
                </h3>
                <p className='mt-2 text-gray-600 dark:text-gray-400'>
                  Comprehensive code reviews, security audits, and performance optimization recommendations.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className='mt-12'>
            <h2 className='text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100'>
              Other Ways to Reach Me
            </h2>
            <div className='mt-6 space-y-4'>
              <p className='text-gray-600 dark:text-gray-400'>
                <strong className='text-gray-900 dark:text-gray-100'>Email:</strong>{' '}
                <a
                  href={`mailto:${siteMetadata.email}`}
                  className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                >
                  {siteMetadata.email}
                </a>
              </p>
              <p className='text-gray-600 dark:text-gray-400'>
                <strong className='text-gray-900 dark:text-gray-100'>GitHub:</strong>{' '}
                <a
                  href={siteMetadata.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                >
                  {siteMetadata.github}
                </a>
              </p>
              <p className='text-gray-600 dark:text-gray-400'>
                <strong className='text-gray-900 dark:text-gray-100'>Twitter:</strong>{' '}
                <a
                  href={siteMetadata.twitter}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                >
                  @dq_hustlecoding
                </a>
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className='mt-12'>
            <h2 className='text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100'>
              Frequently Asked Questions
            </h2>
            <div className='mt-6 space-y-6'>
              <div>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
                  What is your typical response time?
                </h3>
                <p className='mt-2 text-gray-600 dark:text-gray-400'>
                  I typically respond to inquiries within 24-48 hours during weekdays.
                </p>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
                  Do you take on freelance projects?
                </h3>
                <p className='mt-2 text-gray-600 dark:text-gray-400'>
                  It depends on the project scope and timeline. Schedule a meeting to discuss your project details.
                </p>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
                  What technologies do you specialize in?
                </h3>
                <p className='mt-2 text-gray-600 dark:text-gray-400'>
                  I specialize in full-stack development with expertise in React, Next.js, Node.js, Python, Go, and cloud infrastructure (AWS, GCP).
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
