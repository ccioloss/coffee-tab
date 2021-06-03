import Weather from './Components/Weather-App/Weather'
import Time from './Components/Time/Time'
import News from './Components/News/News'
import Todo from './Components/To-do List/Todo'


function App() {
  
  return (
    <div className="App">
      <div className="Header">
        <Weather />
        <Time />
      </div>
      <div className="Content">
        <News />
        <Todo />
      </div>
    </div>
  );
}

export default App;
