import Weather from './Components/Weather-App/Weather'
import Time from './Components/Time/Time'
import Todo from './Components/To-do List/Todo'
import NewsList from './Components/News/NewsList';
import {useState} from 'react';

function App() {
  const [name, setName] = useState(localStorage.getItem("name"));
  const [location, setLocation] = useState(localStorage.getItem("location"));
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

  function configure(){
    if (document.getElementById("location").value !== "" && document.getElementById("name").value !== ""){
      localStorage.setItem("name", document.getElementById("name").value)
      localStorage.setItem("location", document.getElementById("location").value)
      setName(localStorage.getItem("name"))
      setLocation(localStorage.getItem("location"))
    }
}

  if (name !== null && location !== null){
    console.log(location)
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
  else{
    return (
    <div>
      <div class="card">
        <div class="card-image">	
          <h1 class="card-heading">
            Coffee-Tab
          </h1>
        </div>
        <form class="card-form">
          <div class="input">
            <input id = "name"  type="text" class="input-field"required/>
            <label class="input-label">How should we call you?</label>
          </div>
                <div class="input">
            <input id = "location"  type="text" class="input-field"required/>
            <label class="input-label">Where are you from?</label>
          </div>
          <div class="action">
            <button class="action-button" onClick = {() => configure()}>Get started</button>
          </div>
        </form>
      </div>
    </div>

    )
  }
}

export default App;
