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
      'C#': 75,
      Java: 50,
      Python: 30,
    },
  },
  {
    category: 'Frameworks',
    items: {
      React: 100,
      'React Native': 90,
      Ionic: 50,
    },
  },
  {
    category: 'Data',
    items: {
      PostgreSQL: 90,
      Redis: 70,
      GraphQL: 40,
    },
  },
  {
    category: 'Cloud',
    items: {
      AWS: 80,
      GCP: 80,
      Azure: 50,
    },
  },
];
