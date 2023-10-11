export default function HeaderComponent() {
  return (
    <>
      <header className="header">
        <div className="container flex space-between">
          <h1 className="logo">CMGT Home Screen</h1>

          <p className="slogan">
            "Because fancy students need fancy shortcuts"
          </p>
        </div>
      </header>
      <div className="subtitle">
        <div className="container">
          <h1>Where do you want to go?</h1>
        </div>
      </div>
    </>
  );
}
