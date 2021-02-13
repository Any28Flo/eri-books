import React from 'react';

import {useFirebaseApp} from "reactfire";

function App() {
  const firebase = useFirebaseApp();
  console.log(firebase)
  return (
    <div className="App">
      {
       <h2>Bienvenido</h2>
      }
    </div>
  );
}

export default App;
