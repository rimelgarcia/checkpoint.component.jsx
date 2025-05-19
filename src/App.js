import React from "react";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import { Card } from 'react-bootstrap';


const firstName = "Rimel"; 

const App = () => {
  return (
    <div className="container mt-5 text-center">
      <Card style={{ width: "18rem", padding: "10px", margin: "auto" }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <h3 className="mt-3">
        {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
      </h3>

    </div>
  );
};
export default App;
