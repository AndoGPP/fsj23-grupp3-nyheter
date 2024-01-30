import { key } from "./configApi";
import "./style.css";
import axios from "axios";
import { setupCategoryEventListeners } from './category';

const searchDefault = "javascript&css&html&react.js";
const articleElement = document.querySelector("#article");
const CSS = "CSS"
const HTML = "HTML"
const React = "react.js"

async function getNews(searchWord) {
  try {
    const url = `https://newsapi.org/v2/everything?language=en&q=${searchWord}&apiKey=${key.API_KEY_3}`;
    const response = await axios.get(url);
    console.log(response.data.articles);
    // console.log(url);
    displayArticles(response.data.articles);
  } catch (error) {
    console.error(error);
  }
}

setupCategoryEventListeners(getNews);
getNews(searchDefault);




function displayArticles(articles) {
  const html = articles.map(article => `
    <div class="articleCard"> 
      <div class="cardHeader">Category
        <div class="Marked"><img src="star.png" style="width:20px; height:20px"></div>
      </div>
       ${article.urlToImage ? `<img src="${article.urlToImage}" class="card-img-top" alt="..." />` : ''}
        <div class="cardBody">
          <h5 class="cardTitle">${article.title}</h5>
          <p class="cardText">${article.description}</p>
          <a href="${
            article.url
          }" class="btn btn-primary">Read the full article</a>
        <span>Source:${article.name}</span>
        </div>
      </div>
    </div>
  `
  );

  articleElement.innerHTML = html;
}

/* 
const display = (response) => {
const titleName = respone.articles[0].title
} 
getNews(exampleurl).then(display);*/
