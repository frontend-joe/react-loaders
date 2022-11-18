import { useLayoutEffect } from "react";

function App() {
  useLayoutEffect(() => {
    const loader = document.getElementById("loader")!;
    setTimeout(() => {
      loader.classList.add("loaded");
      setTimeout(() => {
        document.body.removeChild(loader);
      }, 300);
    }, 2000);
  }, []);

  return (
    <main>
      <header>
        <h1 className="appear">Website</h1>
        <nav className="appear" style={{ animationDelay: "0.2s" }}>
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
        </nav>
      </header>
    </main>
  );
}

export default App;
