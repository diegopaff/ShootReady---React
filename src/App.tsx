import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./layout/Header";
import ItemList from "./layout/ItemList";
import Sidebar from "./layout/Sidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <BackgroundHeading />

      <main className="completed">
        <Header />
        <ItemList />
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <button
          className={`btn-open ${sidebarOpen && "btn-open-hidden"}`}
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          <p>+</p>
        </button>
      </main>

      <Footer />
    </>
  );
}

export default App;
