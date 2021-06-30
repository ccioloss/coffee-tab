import Weather from './Components/Weather-App/Weather'
import Time from './Components/Time/Time'
import Todo from './Components/To-do List/Todo'
import NewsList from './Components/News/NewsList';
import { useEffect } from 'react';


function App() {
  //Part of the day generator
  const today = new Date();
  const gentime= today.getHours();
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

  //Name generator
  let Name = "";
  let City = "Amsterdam";

  if (localStorage.length !== 0) {
      Name = localStorage.getItem("name");
      City = localStorage.getItem("city");
  } else {
      Name = localStorage.setItem("name", prompt("What's your name?"));
      City = localStorage.setItem("city", prompt("Where are you from?"))
  }

  //Addresses
  const Headings=[
      `Hi ${Name}!`,
      `Hello ${Name}!`,
      `Greetings, ${Name}!`,
      `Hi there, ${Name}!`,
      `Good ${zone} ${Name}!`,
      `Hope you have a good time, ${Name}!`,
      `Great to hear from you, ${Name}!`,
      `Thanks for getting back to me, ${Name}!`
  ]
  const i = Math.floor(Math.random() * Headings.length);

  return (
    <div className="App">
      <div className="Time">
        <Time text={Headings[i]}/>
      </div>
      <div className="Header">
        <Weather props={City}/>
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
