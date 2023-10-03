import { useEffect, useState } from "react";
import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import Links from "./assets/links.json";
import LinkComponent from "./components/LinkComponent";

type TLink = {
  id: number;
  name: string;
  href: string;
  logoPath?: string;
};
function App() {
  const [links, setLinks] = useState<TLink[]>([]);

  useEffect(() => {
    loadLinks();
  }, []);

  const loadLinks = () => {
    setLinks(Links);
    console.log(links);
  };

  return (
    <>
      <HeaderComponent />
      <section className="links">
        <div className="container">
          <div className="linkContainer" id="container">
            {links.map((item: TLink) => (
              <LinkComponent
                key={item.id}
                name={item.name}
                href={item.href}
                logoPath={item.logoPath}
              />
            ))}
          </div>
        </div>
      </section>
      <FooterComponent />
    </>
  );
}

export default App;
