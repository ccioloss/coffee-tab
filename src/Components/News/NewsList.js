import { useEffect, useState } from "react";
import News from "./News";
let Parser = require('rss-parser');
let parser = new Parser();

const cors_proxy = 'https://thingproxy.freeboard.io/fetch/';
const nytimes = 'https://rss.nytimes.com/services/xml/rss/nyt/World.xml';

const NewsList = () => {
  const [loader, setLoader] = useState(true);
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const url = cors_proxy + nytimes;
    setLoader(true);
    parser.parseURL(url).then((feed) => {
      console.log(feed.items[0]);
      const items = feed.items.splice(0, 10).map(({title, link, pubDate, contentSnippet}) => ({title, link, pubDate, contentSnippet}));
      setNewsList(items);
    }
  ).finally(setLoader(false));
  }, []);
  
  return (<>
    {!loader && !!newsList.length ? 
    (<div>
      <h2 class="newsfeed-title">Trending News</h2>
      {newsList.map((news) => {return (<News props={news}/>)})}

    </div>) : (<div><h1>Loading ... </h1></div>)}
  </>);
  
};

export default NewsList;