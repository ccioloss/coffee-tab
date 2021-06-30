import React from 'react'

const News = ({props}) => {
  let time = props.pubDate;

  if (time !== undefined) {
    time = time.slice(0, time.length - 6);
  } else {
    time = "";
  }
  return (
    <li class="news-component">
      <a class="news-link" href= { props.link } target="_blank" rel="noreferrer">
        <p class="news-title">{props.title}</p>
        <p class="news-content">{ props.contentSnippet }</p>
        <p class="news-pubdate">{ time }</p>
      </a>
    </li>

  );
}

export default News