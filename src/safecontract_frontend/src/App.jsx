import { useState } from 'react';
import { safecontract_backend } from 'declarations/safecontract_backend';

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
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <form action="#" onSubmit={handleSubmithello}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>
    </main>
  );
}

export default App;
