import {useState} from 'react'

const NewsSwitcher = () => {
  const [feed, setFeed] = useState('nytimes');

  const selectFeed = (a) => {
    console.log(a);
    // var x = (a.value || a.options[a.selectedIndex].value);  //crossbrowser solution =)
    // alert(x);
  }
  return (
    <div class="news-switcher">
      <select name="dropdown-list" onChange={ selectFeed(this)}>
        <option value="nytimes">New York Times</option>
        <option value="bbc">BBC News</option>
      </select>
    </div>
  )
}

export default NewsSwitcher;