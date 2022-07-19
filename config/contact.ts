export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  youtube = 'youtube',
  email = 'email',
  buymeacoffee = 'buymeacoffee',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@dq_hustlecoding',
  site: 'choigyumin.pages.dev',
  calendly: 'https://calendly.com/choigyumin/30-coffee-chat-with-dq-gyumin',
  links: {
    github: 'https://github.com/dq-hustlecoding',
    linkedin: 'https://linkedin.com/in/gyuminchoi',
    twitter: 'https://twitter.com/dq_hustlecoding',
    youtube: 'https://www.youtube.com/c/hustlecoding',
    email: 'mailto:dq.data.world@gmail.com',
    buymeacoffee: 'https://www.buymeacoffee.com/hustlecoding',
  },
};
