import Weather from './Components/Weather-App/Weather'
import Time from './Components/Time/Time'
import News from './Components/News/News'
import Todo from './Components/To-do List/Todo'


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

  if (localStorage.length !== 0) {
      Name = localStorage.getItem("name");
  } else {
      Name = localStorage.setItem("name", prompt("Introdu numele:"));
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
      <div className="Header">
        <Weather />
        <Time text={Headings[i]}/>
      </div>
      <div className="Content">
        <News />
        <Todo />
      </div>
    </div>
  );
}

export default App;
