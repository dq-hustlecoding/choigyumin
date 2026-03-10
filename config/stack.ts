import { Colors } from './colors';

export enum Stack {
  // Languages
  go,
  typescript,
  javascript,
  python,

  // Frontend
  react,
  reactnative,

  // Backend
  graphql,
  node,
  django,

  // Cloud & Data
  aws,
  gcp,
  docker,
  kubernetes,
  snowflake,
  sap_hana,
  data_architecture,
  gen_ai,

  // Messaging
  nats,

  // Databases
  arangodb,
  redis,
  postgres,
  mongo,
}

export const WorkStack = [
  Stack.snowflake,
  Stack.sap_hana,
  Stack.gen_ai,
  Stack.data_architecture,
  Stack.python,
  Stack.typescript,
  Stack.react,
  Stack.kubernetes,
  Stack.docker,
  Stack.aws,
  Stack.gcp,
  Stack.postgres,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.snowflake]: {
    value: 'Snowflake',
    color: '#29B5E8',
  },
  [Stack.sap_hana]: {
    value: 'SAP HANA',
    color: '#008FD3',
  },
  [Stack.gen_ai]: {
    value: 'Generative AI',
    color: '#FF5733',
  },
  [Stack.data_architecture]: {
    value: 'Data Architecture',
    color: '#58D68D',
  },
  [Stack.typescript]: {
    value: 'TypeScript',
    color: Colors.typescript,
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  [Stack.go]: {
    value: 'Go',
    color: Colors.go,
  },
  [Stack.react]: {
    value: 'React',
    color: Colors.react,
  },
  [Stack.reactnative]: {
    value: 'React Native',
    color: Colors.reactnative,
  },
  [Stack.graphql]: {
    value: 'GraphQL',
    color: Colors.graphql,
  },
  [Stack.aws]: {
    value: 'AWS',
    color: Colors.aws,
  },
  [Stack.docker]: {
    value: 'Docker',
    color: Colors.docker,
  },
  [Stack.kubernetes]: {
    value: 'Kubernetes',
    color: Colors.kubernetes,
  },
  [Stack.gcp]: {
    value: 'Google Cloud',
    color: Colors.gcp,
  },
  [Stack.python]: {
    value: 'Python',
    color: Colors.python,
  },
  [Stack.node]: {
    value: 'Node',
    color: Colors.node,
  },
  [Stack.django]: {
    value: 'Django',
    color: Colors.django,
  },
  [Stack.nats]: {
    value: 'NATS',
    color: Colors.nats,
  },
  [Stack.arangodb]: {
    value: 'ArangoDB',
    color: Colors.arangodb,
  },
  [Stack.postgres]: {
    value: 'Postgres',
    color: Colors.postgres,
  },
  [Stack.redis]: {
    value: 'Redis',
    color: Colors.redis,
  },
  [Stack.mongo]: {
    value: 'MongoDB',
    color: Colors.mongo,
  },
};
