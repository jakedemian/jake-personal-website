import { IconType } from 'react-icons';
import * as Icons from 'react-icons/si';
import { FaAws, FaTerminal, FaWindows } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
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
      'Next.js': {
        value: 90,
        icon: Icons.SiNextdotjs,
        color: '#000',
      },
      Vue: {
        value: 90,
        icon: Icons.SiVuedotjs,
        color: '#41b883',
      },
    },
  },
  {
    category: 'Data & Server-Side',
    items: {
      'Node.js': {
        value: 100,
        icon: Icons.SiNodedotjs,
        color: '#339933',
      },
      PostgreSQL: {
        value: 90,
        icon: Icons.SiPostgresql,
        color: '#336791',
        lightColor: '#0064a5',
      },
      Redis: {
        value: 85,
        icon: Icons.SiRedis,
        color: '#D82C20',
      },
      GraphQL: {
        value: 80,
        icon: Icons.SiGraphql,
        color: '#E10098',
      },
    },
  },
  {
    category: 'Cloud & DevOps',
    items: {
      Docker: {
        value: 100,
        icon: Icons.SiDocker,
        color: '#0db7ed',
      },
      Vercel: {
        value: 90,
        icon: Icons.SiVercel,
        color: 'text',
      },
      'Github Actions': {
        value: 90,
        icon: Icons.SiGithubactions,
        color: 'text',
      },
      AWS: {
        value: 80,
        icon: FaAws,
        color: '#FF9900',
        lightColor: '#252F3E',
      },
    },
  },
  {
    category: 'OS',
    items: {
      Linux: {
        value: 100,
        icon: Icons.SiLinux,
        color: '#000',
      },
      Windows: {
        value: 100,
        icon: FaWindows,
        color: '#0078d7',
      },
      MacOS: {
        value: 100,
        icon: Icons.SiApple,
        color: '#000',
      },
    },
  },
  {
    category: 'AI',
    items: {
      'OpenAI / ChatGPT': {
        value: 100,
        icon: Icons.SiOpenai,
        color: '#000',
      },
      'Claude / Sonnet': {
        value: 100,
        icon: Icons.SiAnthropic,
        color: '#000',
      },
    },
  },
  {
    category: 'General Tooling',
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
      'VS Code': {
        value: 100,
        icon: VscVscode,
        color: '#0078d7',
      },
      'JetBrains IDEs': {
        value: 100,
        icon: Icons.SiJetbrains,
        color: '#000',
      },
      Bash: {
        value: 100,
        icon: FaTerminal,
        color: '#f14e32',
      },
    },
  },
];
