interface PageHeroProps {
  title: string;
  description: string;
}

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
