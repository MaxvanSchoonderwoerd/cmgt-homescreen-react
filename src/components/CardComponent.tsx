type TCardProps = {
  name: string;
  href: string;
  logoPath?: string;
};

export default function CardComponent(props: TCardProps) {
  const { name, href, logoPath } = props;
  return (
    <div className="card">
      <a href={href} target="_blank">
        <img src={logoPath} alt={`${name} logo`} className="linkImage image" />
        <h3>{name}</h3>
      </a>
    </div>
  );
}
