export type Service = {
  title: string;
  slug: string;
  description: string;
  image: string;
};

export type ServiceProps = {
  index: number;
  service: Service;
};
