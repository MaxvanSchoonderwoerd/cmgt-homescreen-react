type TLinkProps = {
  name: string;
  href: string;
  logoPath?: string;
};

export default function LinkComponent(props: TLinkProps) {
  const { name, href, logoPath } = props;
  return (
    <div className="card">
      <a href={href} target="_blank">
        <img
          src={logoPath ?? "https://login.hr.nl/v1/assets/svg/logo/logo.svg"}
          alt={`${name} logo`}
          className="linkImage image"
        />
        <h3>{name}</h3>
      </a>
    </div>
  );
}
