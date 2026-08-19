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
    title: 'Snowflake — Enterprise AI Deployment',
    slug: 'snowflake',
    banner: '/static/projects/snowflake/logo.png',
    website: 'https://www.snowflake.com',
    description:
      "**Challenge**: Tier-1 Korean conglomerates — retail, financial, and construction — wanted to modernize onto an AI-ready data platform, but every deal came down to whether the technical value could be proven quickly and then actually adopted by their engineering teams.\n\n**Solution**: Acted as the primary technical authority across the full customer lifecycle for tier-1 accounts across retail, financial services, and construction. Designed and executed hands-on POCs, engineered an end-to-end MLflow-to-Snowflake production migration framework inside a one-week window, and built an enterprise agentic AI framework on Model Context Protocol (MCP) with custom Python orchestrators — deploying autonomous coding agents that refactored 100+ complex dbt models in 6 hours. Followed through with enablement: the featured AI/ML keynote at Snowflake World Tour Seoul and deep-dive notebook and pipeline workshops for senior engineering teams.\n\n**Impact**: Secured a $250K enterprise contract head-to-head against Databricks, validated 5-10x data processing efficiency gains against legacy cloud platforms in POC, and delivered the event's #1 voted session to 400+ technology executives.",
    shortDescription: 'Agentic AI Deployment & $250K Competitive Win',
    repository: null,
    stack: [
      Stack.snowflake,
      Stack.data_architecture,
      Stack.python,
      Stack.prompt_engineering,
      Stack.llm_evaluation,
      Stack.aws,
    ],
    dimensions: [360, 640],
    screenshots: ['/static/projects/snowflake/snowflake.png'],
    deployment: {
      web: 'https://www.snowflake.com',
    },
    subProjects: [],
  },
  {
    title: 'LLM Automation Pipeline',
    slug: 'llm-automation',
    banner: '/static/projects/llm-automation/banner.svg',
    website: '#',
    description:
      '**Challenge**: Manual operational workflows and documentation processes were creating significant overhead for a fast-moving team.\n\n**Solution**: Designed and implemented Claude-powered automation workflows — including AI-assisted reporting, documentation generation, and process orchestration — integrated directly into the team\'s existing tools.\n\n**Impact**: Reduced operational overhead by 40% and improved team productivity by 30%, establishing a replicable playbook for LLM-powered internal tooling.',
    shortDescription: 'Claude API & LLM Workflow Automation',
    repository: null,
    stack: [
      Stack.claude_api,
      Stack.prompt_engineering,
      Stack.python,
      Stack.data_architecture,
      Stack.gcp,
    ],
    dimensions: [360, 640],
    screenshots: [],
    deployment: {
      web: '#',
    },
    subProjects: [],
  },
  {
    title: 'Momenti — GenAI Media',
    slug: 'momenti',
    banner: '/static/projects/momenti/momenti.png',
    website: 'https://momenti.tv',
    description:
      '**Challenge**: Bridging the gap between static media and AI-driven interactive experiences at a New York-based media startup.\n\n**Solution**: Built a Generative AI pipeline for producing interactive videos from text inputs, leveraging LLM orchestration and advanced prompt engineering. Also implemented a material/texture reasoning module using LLMs to generate real-time haptic responses from image and video inputs.\n\n**Impact**: Pioneered interactive media technology and automated content pipelines, reducing production time by 30%.',
    shortDescription: 'GenAI Pipeline & LLM Orchestration',
    repository: null,
    stack: [
      Stack.gen_ai,
      Stack.prompt_engineering,
      Stack.claude_api,
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
  {
    title: 'Singapore Startup (Ex-CTO)',
    slug: 'singapore-startup',
    banner: '/static/projects/singapore-startup/logo.png',
    website: '#',
    description:
      '**Challenge**: Scalability and cold-start issues in recommendation engines were limiting user growth and investor confidence.\n\n**Solution**: Led a team of 7 as CTO to design and ship high-performance recommendation engines using Deep Learning (LightGCN) and ALS methods.\n\n**Impact**: Secured $20M in Series A funding and improved recommendation accuracy by 35%, enabling the platform to scale.',
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
    title: 'Greybox — Technical Advisory',
    slug: 'greybox',
    banner: '/static/projects/greybox/banner.svg',
    website: '#',
    description:
      '**Challenge**: Enterprise customers needed a trusted technical advisor to unlock the full value of a customer engagement platform.\n\n**Solution**: Served as primary technical advisor, built a custom A/B testing module for enterprise customers, and led developer workshops promoting LLM-powered engagement best practices.\n\n**Impact**: Expanded enterprise customer base by 40% and established a repeatable technical advisory motion.',
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
];
