export type PostMetadata = {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
};

export type Experience = {
  id: string | number;
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  skills?: string[];
};
