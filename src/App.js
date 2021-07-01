import Weather from './Components/Weather-App/Weather'
import Time from './Components/Time/Time'
import Todo from './Components/To-do List/Todo'
import NewsList from './Components/News/NewsList';
import { useEffect, useState } from 'react';


function App() {
  // const [name, setName] = useState(localStorage.getItem("name"));
  //Part of the day generator
  const today = new Date();
  const gentime= today.getHours();
  let name = "";
  let zone

  const period = () => {
      if (gentime<12) {
          zone = 'morning'
      } else if (gentime>12 && gentime<17) {
          zone = 'afternoon'
      } else {
          zone = 'night'
      }
  }
  period()

    if (localStorage.length !== 0) {

      name = localStorage.getItem("name");
    } else {
      name = localStorage.setItem("name", prompt("What's your name?"));
    }


  //Addresses
  const Headings=[
      `Hi ${name}!`,
      `Hello ${name}!`,
      `Greetings, ${name}!`,
      `Hi there, ${name}!`,
      `Good ${zone} ${name}!`,
      `Hope you have a good time, ${name}!`,
      `Great to hear from you, ${name}!`,
      `Thanks for getting back to me, ${name}!`
  ]
  const i = Math.floor(Math.random() * Headings.length);

  return (
    <div className="App">
      <div className="Time">
        <Time text={Headings[i]}/>
      </div>
      <div className="Header">
        <Weather/>
      </div>
      <div className="Content">
        {/* <NewsSwitcher /> */}
        <NewsList />
        <Todo />
      </div>
    </div>
  );
}

export default App;
