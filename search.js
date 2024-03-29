import { displayArticles, newsArr } from "./main.js";
const displaySavedNews = document.querySelector(".display-saved-news");

//Search on word
//Convert to lower cases and check if search word is contained.
export const checkManyWords = function (artikelObjekt, sokord) {
  let lowCaseArticle;
  if (artikelObjekt === null || artikelObjekt === undefined) {
    lowCaseArticle = "null";
  } else {
    lowCaseArticle = artikelObjekt.toLowerCase();
  }
  const lowCaseSokord = sokord.toLowerCase(); // Konvertera sökordet till små bokstäver

  return lowCaseArticle.includes(lowCaseSokord);
};

//Check if the articles author or title contain search word
export const checkSearch = function (article, searchInput) {
  if (checkManyWords(article.author, searchInput)) {
    return true;
  } else if (checkManyWords(article.title, searchInput)) {
    return true;
  } else if (checkManyWords(article.description, searchInput)) {
    return true;
  } else {
    return false;
  }
};

//Filter articles
export const search = (searchInputField) => {
  const filteredArticles = newsArr.filter((article) =>
    checkSearch(article, searchInputField)
  );
  //console.log(filteredArticles);
  displayArticles(filteredArticles);
  displaySavedNews.style.display = "none";
};
