export type PortfolioCase = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: CaseTag[];
  gradient?: string;
};

export type CaseTag = {
  id: string;
  slug: string;
  title: string;
};
