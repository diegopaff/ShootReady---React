import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import GearContextProvider from "./context/GearContextProvider";
import Header from "./layout/Header";
import ItemList from "./layout/ItemList";
import Sidebar from "./layout/Sidebar";

function App() {
  return (
    <>
      <BackgroundHeading />

      <main>
        <GearContextProvider>
          <Header />
          <ItemList />
          <Sidebar />
        </GearContextProvider>
      </main>

      <Footer />
    </>
  );
}

export default App;
