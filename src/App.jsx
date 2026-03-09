import { useEffect } from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.documentElement.classList.remove("preload");
      document.documentElement.classList.add("loaded");
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="wrapper">
		<Header/>
		<Main/>
        <Footer />
      </div>
    </>
  );
}

export default App;
