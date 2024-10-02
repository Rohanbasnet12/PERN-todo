import React, { useEffect, useState } from "react";
import "./App.css";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";
import AddNewItem from "./components/AddNewItem";

function App() {
  const userEmail = "test@gmail.com";
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for errors

  const getData = async () => {
    setLoading(true); // Set loading to true before fetching
    try {
      const response = await fetch(`http://localhost:3000/todos/${userEmail}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      setTodos(json); // Update the todos state
    } catch (err) {
      setError(err.message); // Set the error message
    } finally {
      setLoading(false); // Set loading to false after fetching is done
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Render loading state
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Sort the data to show todos according to the time
  const sortedTasks = todos?.sort((a, b) => {
    return new Date(a.date) - new Date(b.date); // Return the result of the comparison
  });

  return (
    <div id="app">
      <AddNewItem />
      <ListHeader listName={"Holiday Tick List"} />
      {sortedTasks?.map((todo) => (
        <ListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default App;
