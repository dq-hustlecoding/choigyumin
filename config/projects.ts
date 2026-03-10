import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
};

export interface SubProject {
  title: string;
  description: string;
  repository: Maybe<string>;
  deployment: Deployment;
}

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  slug: string;
  website: string;
  banner: string;
  description: string;
  shortDescription?: string;
  repository?: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment: Deployment;
  subProjects: SubProject[];
}

export const projects: Project[] = [
  {
    title: 'Snowflake Enterprise VE',
    slug: 'snowflake',
    banner: '/static/projects/snowflake/logo.png',
    website: 'https://snowflake.com',
    description:
      '**Challenge**: GS Engineering & Construction needed to modernize their ML infrastructure and centralize data for $250K deal closure.\n\n**Solution**: Orchestrated a large-scale migration from MLflow to Snowflake and designed a multi-cloud data architecture.\n\n**Value**: Successfully closed the $250K enterprise deal and reduced data silos, enabling AI-driven construction management.',
    shortDescription: '$250K GS E&C Deal & ML Modernization',
    repository: null,
    stack: [
      Stack.snowflake,
      Stack.sap_hana,
      Stack.data_architecture,
      Stack.python,
      Stack.aws,
      Stack.gcp,
    ],
    dimensions: [360, 640],
    screenshots: ['/static/projects/snowflake/logo.png'],
    deployment: {
      web: 'https://snowflake.com',
    },
    subProjects: [],
  },
  {
    title: 'Singapore Startup (Ex-CTO)',
    slug: 'singapore-startup',
    banner: '/static/projects/singapore-startup/logo.png',
    website: '#',
    description:
      '**Challenge**: Scalability and cold-start issues in recommendation engines were hindering user growth and Series A valuation.\n\n**Solution**: Led a team of 7 as CTO to build high-performance recommendation engines using Deep Learning (LightGCN) and ALS.\n\n**Value**: Secured $20M Series A funding and improved recommendation accuracy by 35%.',
    shortDescription: 'CTO Leadership & $20M Series A',
    repository: null,
    stack: [
      Stack.python,
      Stack.node,
      Stack.react,
      Stack.postgres,
      Stack.docker,
      Stack.aws,
    ],
    dimensions: [360, 640],
    screenshots: ['/static/projects/singapore-startup/logo.png'],
    deployment: {
      web: '#',
    },
    subProjects: [],
  },
  {
    title: 'Greybox Value Engineering',
    slug: 'greybox',
    banner: '/static/projects/greybox/logo.png',
    website: '#',
    description:
      '**Challenge**: Needed to expand the enterprise customer base by proving tangible product value.\n\n**Solution**: Developed custom A/B testing modules and data-driven product strategies.\n\n**Value**: Expanded enterprise customer base by 40% and improved conversion rates significantly.',
    shortDescription: '40% Enterprise Customer Growth',
    repository: null,
    stack: [
      Stack.typescript,
      Stack.react,
      Stack.node,
      Stack.postgres,
      Stack.gen_ai,
    ],
    dimensions: [360, 640],
    screenshots: [],
    deployment: {
      web: '#',
    },
    subProjects: [],
  },
  {
    title: 'Momenti - GenAI Media',
    slug: 'momenti',
    banner: '/static/projects/momenti/momenti.png',
    website: 'https://momenti.tv',
    description:
      '**Challenge**: Bridging the gap between static media and interactive AI experiences.\n\n**Solution**: Introduced GenAI pipelines (Text-to-Interactive Video) and built robust data cultures from scratch in New York.\n\n**Value**: Pioneered interactive media technology and automated content pipelines, reducing production costs by 30%.',
    shortDescription: 'GenAI & Data Culture Leadership',
    repository: null,
    stack: [
      Stack.gen_ai,
      Stack.data_architecture,
      Stack.gcp,
      Stack.kubernetes,
      Stack.python,
    ],
    dimensions: [360, 640],
    screenshots: ['/static/projects/momenti/momenti.png'],
    deployment: {
      web: 'https://momenti.tv',
    },
    subProjects: [],
  },
];
