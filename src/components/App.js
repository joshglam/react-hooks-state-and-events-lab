import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import items from "../data/items";

function App() {
  const [appClass, setAppClass] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
const filterCategory = items.filter(item => {
  return item.category.toLowerCase().includes(
    selectedCategory.toLowerCase()
  ) || selectedCategory === "All"
  
})
  function handleClick() {
    setAppClass((appClass) => !appClass)
  }

  return (
    <div className={appClass ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={filterCategory} setSelectedCategory={setSelectedCategory}/>
    </div>
  );
}

export default App;
