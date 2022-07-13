import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
const App = () => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  return loading ? (
    <main>
      <Loading />
    </main>
  ) : (
    <main>
      <Tours />
    </main>
  );
};

export default App;
