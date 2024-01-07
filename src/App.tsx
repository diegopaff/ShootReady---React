import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./layout/Header";
import ItemList from "./layout/ItemList";
import Sidebar from "./layout/Sidebar";

function App() {
  return (
    <>
      <BackgroundHeading />

      <main>
        <Header
          NumberOfPackedItems={NumberOfPackedItems}
          NumberOfTotalItems={gearList.length}
        />
        <ItemList
          gearList={gearList}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
