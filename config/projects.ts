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
    title: 'Momenti, Inc',
    slug: 'momenti',
    banner: '/static/projects/momenti/momenti.png',
    website: 'https://momenti.tv',
    description:
      'New Interactive media platform, user interaction data processing and ML/DL serving',
    shortDescription: 'GCP based big data pipeline, data science',
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
    title: 'Class101',
    slug: 'class101',
    banner: '/static/projects/class101/class101.png',
    website: 'https://class101.net/',
    description: `New way of life changing learning, Creative/Money/Craft/Tech lectures`,
    shortDescription: 'Building data team and data infrastructure',
    repository: null,
    stack: [
      Stack.python,
      Stack.node,
      Stack.kubernetes,
      Stack.aws,
      Stack.docker,
      Stack.reactnative,
      Stack.postgres,
    ],
    dimensions: [360, 640],
    screenshots: ['/static/projects/class101/class101.png'],
    deployment: {
      web: 'https://class101.net/',
    },
    subProjects: [],
  },
];
