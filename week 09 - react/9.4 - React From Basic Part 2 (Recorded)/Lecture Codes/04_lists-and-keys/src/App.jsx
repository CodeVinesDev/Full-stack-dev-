// Create a function component named App that will be rendered in the root element
function App() {
  // Create an array of objects with todo items and their status (done or not done)
  const todos = [
    { title: "Get out of bed", done: true },
    { title: "Brush teeth", done: false },
    { title: "Go to the gym", done: false },
    { title: "Eat breakfast", done: true },
  ];

  // Create an array of objects with item names and ids
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  // Return the JSX that will be rendered in the browser
  return (
    // Create a div element with JSX
    <div>
      {/* Render the Todo component for each todo item in the todos array */}
      {todos.map((todo, index) => (
        <Todo key={index} title={todo.title} done={todo.done} />
      ))}

      {/* Render the ItemList component with the items array */}
      <ItemList items={items} />
    </div>
  );
}

// Export the App component as the default export to be used in other files or components
export default App;
