import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createcard(con) {
  return (
    <Card
      key={con.id}
      id={con.id}
      name={con.name}
      img={con.imgURL}
      tel={con.phone}
      email={con.email}
    />
  );
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createcard)}
    </div>
  );
}

export default App;
