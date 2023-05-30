type CategoryItem = {
  [key: string]: number;
};

type Category = {
  category: string;
  items: CategoryItem;
};

export const data: Category[] = [
  {
    category: 'Languages',
    items: {
      TypeScript: 100,
      HTML: 100,
      CSS: 85,
      JavaScript: 100,
    },
  },
  {
    category: 'Frameworks',
    items: {
      React: 100,
      'React Native': 90,
      Expo: 65,
      NestJS: 50,
    },
  },
  {
    category: 'Data',
    items: {
      PostgreSQL: 90,
      Prisma: 80,
      Redis: 70,
      GraphQL: 40,
    },
  },
  {
    category: 'Cloud',
    items: {
      AWS: 80,
      GCP: 70,
      Azure: 50,
      Firebase: 80,
    },
  },
  {
    category: 'Other',
    items: {
      Git: 100,
      GitHub: 100,
      'Github Actions': 65,
      'VS Code': 100,
      Docker: 60,
    },
  },
];
