import Weather from './Components/Weather-App/Weather'
import Time from './Components/Time/Time'
import News from './Components/News/News'
import Todo from './Components/To-do List/Todo'


function App() {
  /*const date = new Date()
  let formattedDate = date.toLocaleString("en-GB",{
      hour:'numeric',
      minute: 'numeric',
      second: 'numeric'
  })
  const tick = () => {
      formattedDate = date.toLocaleString("en-GB",{
          hour:'numeric',
          minute: 'numeric',
          second: 'numeric'
      })
      ReactDOM.render(
          <Clock formattedDate={formattedDate}/>,
          document.getElementById('root')
      );
  }
    
  setInterval(tick, 1000);*/
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
