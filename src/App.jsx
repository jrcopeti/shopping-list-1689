import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const getitemsFromLocalStorage = () => {
    const savedItems = localStorage.getItem("shoppingList1689");
    return savedItems ? JSON.parse(savedItems) : [];
  };
  const [items, setItems] = useState(getitemsFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("shoppingList1689", JSON.stringify(items));
  }, [items]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleToggleItems = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, bought: !item.bought } : item
    );

    setItems(updatedItems);
  };

  const handleDeleteItems = (id) => {
    const deletedItem = items.filter((item) => item.id !== id);
    setItems(deletedItem);
  };

  return (
    <div>
      <Header />
      <Form handleAddItem={handleAddItem} />
      <List
        items={items}
        handleToggleItems={handleToggleItems}
        handleDeleteItems={handleDeleteItems}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
