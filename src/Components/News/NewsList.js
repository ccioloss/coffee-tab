import { useEffect, useState } from "react";
import News from "./News";
let Parser = require('rss-parser');
let parser = new Parser();

const cors_proxy = 'https://thingproxy.freeboard.io/fetch/';
const nytimes = 'https://rss.nytimes.com/services/xml/rss/nyt/World.xml';

const news_feeds = {
  "nytimes" : "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
  "bbc" : "http://feeds.bbci.co.uk/news/world/rss.xml",
  "buzz" : "https://www.buzzfeed.com/world.xml", 
  "cnn" : "http://rss.cnn.com/rss/edition_world.rss"
}

const NewsList = () => {
  const [loader, setLoader] = useState(true);
  const [newsList, setNewsList] = useState([]);
  const [feed, setFeed] = useState('nytimes');


  useEffect(() => {
    const url = cors_proxy + news_feeds[feed];
    console.log(feed);
    setLoader(true);
    parser.parseURL(url).then((feed) => {
      const items = feed.items.splice(0, 20).map(({title, link, pubDate, contentSnippet}) => ({title, link, pubDate, contentSnippet}));
      setNewsList(items);
    }
  ).finally(setLoader(false));
  }, [feed]);
  
  return (<>
    {!loader && !!newsList.length ? 
    (<div>
      <div class="feed-title">
        <h2 class="newsfeed-title">Trending News</h2>
        <select class="feed-select" name="dropdown-list" onChange={(event) => setFeed(event.target.value)}>
          <option value="nytimes">New York Times</option>
          <option value="bbc">BBC News</option>
          <option value="buzz">Buzz Feed</option>
          <option value="cnn">CNN</option>
        </select>
      </div>

      <div class = "wrapper" id="style">
        <ul>{newsList.map((news) => {return (<News props={news}/>)})}</ul>
      </div>
    </div>) : (<div><h1>Loading ... </h1></div>)}
  </>);
  
};

export default NewsList;