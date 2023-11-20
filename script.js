fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-10-20&sortBy=publishedAt&apiKey=c552b686cb304c86b9dedcf4b723e4f4&pageSize=4")
.then(res => res.json())
.then(data => renderDataToContent(data.articles));

function renderDataToContent(articles){
    // get element content
    let content = document.getElementById("content");
}