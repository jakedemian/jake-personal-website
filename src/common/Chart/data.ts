import { IconType } from 'react-icons';
import * as Icons from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

type CategoryItem = {
  value: number;
  icon: IconType;
  color: string;
  lightColor?: string;
  lightBgColor?: string;
};

type Category = {
  category: string;
  items: {
    [key: string]: CategoryItem;
  };
};

export const data: Category[] = [
  {
    category: 'Languages',
    items: {
      TypeScript: {
        value: 100,
        icon: Icons.SiTypescript,
        color: '#007acc',
      },
      HTML: {
        value: 100,
        icon: Icons.SiHtml5,
        color: '#e34f26',
      },
      CSS: {
        value: 85,
        icon: Icons.SiCss3,
        color: '#264de4',
      },
      JavaScript: {
        value: 100,
        icon: Icons.SiJavascript,
        color: '#f7df1e',
        lightBgColor: '#000',
      },
    },
  },
  {
    category: 'Frameworks',
    items: {
      React: {
        value: 100,
        icon: Icons.SiReact,
        color: '#61DBFB',
        lightColor: '#4c768d',
      },
      'React Native': {
        value: 90,
        icon: Icons.SiReact,
        color: '#61DBFB',
        lightColor: '#4c768d',
      },
      Expo: {
        value: 65,
        icon: Icons.SiExpo,
        color: 'text',
      },
      '*NestJS': {
        value: 50,
        icon: Icons.SiNestjs,
        color: '#E0234E',
      },
    },
  },
  {
    category: 'Data',
    items: {
      PostgreSQL: {
        value: 90,
        icon: Icons.SiPostgresql,
        color: '#336791',
        lightColor: '#0064a5',
      },
      Prisma: {
        value: 80,
        icon: Icons.SiPrisma,
        color: 'text',
      },
      Redis: {
        value: 70,
        icon: Icons.SiRedis,
        color: '#D82C20',
      },
      '*GraphQL': {
        value: 40,
        icon: Icons.SiGraphql,
        color: '#E10098',
      },
    },
  },
  {
    category: 'Cloud',
    items: {
      AWS: {
        value: 80,
        icon: FaAws,
        color: '#FF9900',
        lightColor: '#252F3E',
      },
      '*GCP': {
        value: 70,
        icon: Icons.SiGooglecloud,
        color: '#0F9D58',
      },
      Azure: {
        value: 50,
        icon: Icons.SiMicrosoftazure,
        color: '#008AD7',
      },
      '*Firebase': {
        value: 80,
        icon: Icons.SiFirebase,
        color: '#FFCA28',
        lightColor: '#FFA000',
      },
    },
  },
  {
    category: 'Other',
    items: {
      Git: {
        value: 100,
        icon: Icons.SiGit,
        color: '#f14e32',
      },
      GitHub: {
        value: 100,
        icon: Icons.SiGithub,
        color: 'text',
      },
      'Github Actions': {
        value: 65,
        icon: Icons.SiGithubactions,
        color: 'text',
      },
      'VS Code': {
        value: 100,
        icon: Icons.SiVisualstudiocode,
        color: '#0078d7',
      },
      Docker: {
        value: 60,
        icon: Icons.SiDocker,
        color: '#0db7ed',
      },
      'Node.js': {
        value: 95,
        icon: Icons.SiNodedotjs,
        color: '#339933',
      },
      Yarn: {
        value: 95,
        icon: Icons.SiYarn,
        color: '#2188b6',
      },
    },
  },
];
