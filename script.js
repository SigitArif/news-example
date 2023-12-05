fetch("http://localhost:3000/articles")
.then(res => res.json())
.then(data => renderDataToContent(data));

function renderDataToContent(articles){
    // get element content
    let content = document.getElementById("content");
    let id = 1;
    for (article of articles){
        console.log(article);
        content.innerHTML+=`<div class="card" id=${id}>
    <div class="thumb">
        <img src=${article.urlImage} alt="">
    </div>
    <div class="title">
        <a onclick="redirectToDetail(${id})">${article.title}</a>
    </div>
    </div>`
        id++;
    }
    
}

function redirectToDetail(newsId) {
    console.log('redirect to detail');
    // You can use window.location.href to redirect to the detail page
    window.location.href = 'detail.html?id=' + newsId;
}


function postContactUs(event){
    event.preventDefault();
    console.log("test");
    // Ambil data dari form
    // const formBox = document.querySelector('.formbox');
    const form = event.target;
    const name = form.querySelector('[name="name"]').value;
    const email = form.querySelector('[name="email"]').value;
    const message = form.querySelector('[name="message"]').value;

    // simpan ke dalam object javascript
    const data = {
        name: name,
        email: email,
        message: message
      };

    // post ke BE
    fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        form.reset();
        alert(data.message);
    });

}

document.querySelector(".contact-us form")
.addEventListener("submit", postContactUs);

