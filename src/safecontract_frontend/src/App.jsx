import { useState } from 'react';
import { safecontract_backend } from 'declarations/safecontract_backend';
import BaseLayout from './components/layout/BaseLayout';
import MyContracts from './components/ui/MyContracts';
import {
  BrowserRouter as Router,
  Route,
  createBrowserRouter,
  Routes,
} from "react-router-dom";
import MainMenu from './components/ui/MainMenu';
import LogIn from './components/ui/LogIn';
import AddContract from './components/ui/AddContract';
import Error from './error/Error';
import RoadMap from './components/ui/RoadMap';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    safecontract_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }
  function handleSubmithello(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    safecontract_backend.sayhello(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <Router>
    <Routes>

      // Main Page
      <Route path="/" element={<MainMenu />}  errorElement={<Error />}/>

      //Login Page
      <Route path="/login" element={<LogIn />}  errorElement={<Error />}/>

      //Add Contract
      <Route
        path="/addcontract"
        element={
          <BaseLayout>
            <AddContract />
          </BaseLayout>
        }
        errorElement={<Error />}
      />
      //My Contracts
      <Route
        path="/mycontracts"
        element={
          <BaseLayout>
            <MyContracts />
          </BaseLayout>
        }
        errorElement={<Error />}
      />
      // RoadMap
      <Route
        path="/roadmap"
        element={
          <BaseLayout>
            <RoadMap />
          </BaseLayout>
        }
        errorElement={<Error />}
      />
    </Routes>
  </Router>
  );
}

export default App;




// <main>
//   <img src="/logo2.svg" alt="DFINITY logo" />
//   <br />
//   <br />
//   <form action="#" onSubmit={handleSubmit}>
//     <label htmlFor="name">Enter your name: &nbsp;</label>
//     <input id="name" alt="Name" type="text" />
//     <button type="submit">Click Me!</button>
//   </form>
//   <form action="#" onSubmit={handleSubmithello}>
//     <label htmlFor="name">Enter your name: &nbsp;</label>
//     <input id="name" alt="Name" type="text" />
//     <button type="submit">Click Me!</button>
//   </form>
//   <section id="greeting">{greeting}</section>
// </main>