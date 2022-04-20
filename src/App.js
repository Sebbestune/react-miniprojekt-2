import { useEffect, useState } from "react";
import { fetchUsers } from "./api/users";
import "./App.css";

export const sortUsers = (users) => {
  // Skriv en funktion som kopierar den inkommande arrayen, sorterar den i ascending order och returnerar den sorterade arrayen.
  return [];
};

export const countOccurence = (users, initialLetter) => {
  // Skriv en funktion som returnerar de users vars username börjar med "initialLetter".
  return [];
};

export const filteredUsers = (users) => {
  // Skriv en funktion som returnerar alla users med username.length < 10.
  return [];
};

const App = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await fetchUsers();

      setUsers(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <h1>Users</h1>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>User: {user.username}</li>;
        })}
      </ul>
      <h1>Sorted (ascending order)</h1>
      <ul>
        {sortUsers(users).map((user) => {
          return <li key={user.id}>User: {user.username}</li>;
        })}
      </ul>
      <h1>Occurences (username starts with K)</h1>
      <ul>
        {countOccurence(users, "K").map((user) => {
          return <li key={user.id}>User: {user.username}</li>;
        })}
      </ul>
      <h1>Filtered (username.length &#60; 10)</h1>
      <ul>
        {filteredUsers(users).map((user) => {
          return <li key={user.id}>User: {user.username}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
