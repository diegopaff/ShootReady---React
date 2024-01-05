import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./layout/Header";
import ItemList from "./layout/ItemList";
import Sidebar from "./layout/Sidebar";
import { defaultGear } from "./lib/constants";

function App() {
  const [gearList, setGearList] = useState(defaultGear);

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList gearList={gearList} setGearList={setGearList} />
        <Sidebar setGearList={setGearList} />
      </main>

      <Footer />
    </>
  );
}

export default App;
