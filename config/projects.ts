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
    title: 'Snowflake Solutions',
    slug: 'snowflake',
    banner: '/static/projects/snowflake/logo.png',
    website: 'https://snowflake.com',
    description:
      'Enterprise AI/ML transformation and data platform modernization. Helping organizations build scalable data architectures, optimize cloud costs, and accelerate AI initiatives with Snowflake.',
    shortDescription: 'Enterprise Data & AI Solutions',
    repository: null,
    stack: [
      Stack.python,
      Stack.typescript,
      Stack.docker,
      Stack.kubernetes,
      Stack.gcp,
      Stack.aws,
    ],
    dimensions: [360, 640],
    screenshots: ['/static/projects/snowflake/logo.png'],
    deployment: {
      web: 'https://snowflake.com',
    },
    subProjects: [],
  },
  {
    title: 'Air Premia Data Platform',
    slug: 'airpremia',
    banner: '/static/projects/airpremia/logo.png',
    website: 'https://airpremia.com',
    description:
      'Built end-to-end data infrastructure for airline operations. Implemented real-time analytics pipelines for flight operations, customer insights, and revenue optimization.',
    shortDescription: 'Airline Data Engineering & Analytics',
    repository: null,
    stack: [
      Stack.python,
      Stack.typescript,
      Stack.node,
      Stack.kubernetes,
      Stack.docker,
      Stack.gcp,
    ],
    dimensions: [360, 640],
    screenshots: ['/static/projects/airpremia/logo.png'],
    deployment: {
      web: 'https://airpremia.com',
    },
    subProjects: [],
  },
  {
    title: 'Momenti - Interactive Media',
    slug: 'momenti',
    banner: '/static/projects/momenti/momenti.png',
    website: 'https://momenti.tv',
    description:
      'New Interactive media platform based in New York. Built data ingestion pipelines from scratch using BigQuery and Cloud Run, designed user behavioral log schemas, and constructed DBT pipelines for analytics.',
    shortDescription: 'GCP-based Big Data Pipeline & ML Serving',
    repository: null,
    stack: [
      Stack.python,
      Stack.typescript,
      Stack.react,
      Stack.node,
      Stack.kubernetes,
      Stack.docker,
      Stack.gcp,
    ],
    dimensions: [360, 640],
    screenshots: ['/static/projects/momenti/momenti.png'],
    deployment: {
      web: 'https://momenti.tv',
    },
    subProjects: [],
  },
  {
    title: 'Singapore Startup (CTO)',
    slug: 'singapore-startup',
    banner: '/static/projects/singapore-startup/logo.png',
    website: '#',
    description:
      'Led technical strategy as CTO for a Singapore-based startup. Designed and deployed recommendation engines using Deep Learning (LightGCN), resolved cold-start problems with ALS methods, and built the entire backend system with NestJS and GraphQL.',
    shortDescription: 'Recommendation Engine & Full-Stack Development',
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
];
