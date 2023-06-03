


const home = document.getElementById("home");
const business = document.getElementById('business');
const sports = document.getElementById('sports');
const tech = document.getElementById('tech');
const entertainment = document.getElementById('entertainment');
const newstype = document.getElementById('newstype');
const newsdetails = document.getElementById('newsdetails');


var newsData = new Array();
// all api

//business entertainment general health science sports technology

// const apikey = '1c3860f6429c48eb82670713639d87c2';
// const apihome = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=';
// const apibusiness = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=';
// const apisports = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=';
// const apitech = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=';
// const apientertainment = 'https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=';

// const apiweather = 'https://newsapi.org/v2/top-headlines?country=in&category=weather&apiKey=';





const apikey = '1c3860f6429c48eb82670713639d87c2';
const apihome = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=';
const apibusiness = 'https://newsapi.org/v2/top-headlines/sources?category=business&apiKey=';
const apisports = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=';
const apitech = 'https://newsapi.org/v2/top-headlines/sources?category=technology&apiKey=';
const apientertainment = 'https://newsapi.org/v2/top-headlines/sources?category=entertainment&apiKey=';

// const apikey = '1c3860f6429c48eb82670713639d87c2';
// const countryCode = 'in'; // Replace 'in' with the desired country code

// const apihome = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=`;
// const apibusiness = `https://newsapi.org/v2/top-headlines/sources?category=business&apiKey=`;
// const apisports = `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=sports&apiKey=`;
// const apitech = `https://newsapi.org/v2/top-headlines/sources?country=${countryCode}&category=technology&apiKey=`;
// const apientertainment = `https://newsapi.org/v2/top-headlines/sources?country=${countryCode}&category=entertainment&apiKey=`;



home.addEventListener('click', () => {
    console.log("home");
    fetchhome();
});

business.addEventListener('click', () => {
    fetchbusiness();
    console.log("business");
});

sports.addEventListener('click', () => {
    fetchsports();
    console.log("sports");
});

tech.addEventListener('click', () => {
    fetchtech();
    console.log("tech");
});

entertainment.addEventListener('click', () => {
    fetchenter();
    console.log("enter");
});





const fetchhome = async () => {
    const response = await fetch(apihome + apikey);
    newsData = [];
    if (response.status >= 200 && response.status < 300) {
        const data = await response.json();
        newsData = data.articles;
        console.log(newsData);
        displaynews();

    }
    else {
        console.log("error fetching");
    }
};

const fetchbusiness = async () => {
    const response = await fetch(apibusiness + apikey);
    newsData = [];
    if (response.status >= 200 && response.status < 300) {
        const data = await response.json();
        newsData = data.sources;
        displaynews();
        console.log(newsData);
    } else {
        console.log("error fetching the business news");
    }
}


const fetchsports = async () => {
    const response = await fetch(apisports + apikey);
    newsData = [];
    if (response.status >= 200 && response.status < 300) {
        const data = await response.json();
        newsData = data.articles;
        displaynews();
        console.log(newsData);
    } else {
        console.log("error while fetching the sports news");
    }
};


const fetchtech = async () => {
    const response = await fetch(apitech + apikey);
    newsData = [];
    if (response.status >= 200 && response.status < 300) {
        const data = await response.json();
        newsData = data.sources;
        displaynews();
        console.log(newsData);

    } else {
        console.log("error while fetching the tech news")
    }

}


const fetchenter = async () => {
    const response = await fetch(apientertainment + apikey);
    newsData = [];
    if (response.status >= 200 && response.status < 300) {
        const data = await response.json();
        newsData = data.sources;
        displaynews();
        console.log(newsData);

    } else {
        console.log("error while fetching the entertainment data");
    }
}


displaynews = () => {
    newsdetails.innerHTML = "";

    if (newsData.length == 0) {
        newsdetails.innerHTML = "<h3>NO DATA FOUND</h3>";
    }

    newsData.forEach((news) => {
        var card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${news.urlToImage}" alt="image" style="width:100%">
            <div class="container">
                <h4><b>${news.title}</b></h4>
                <p>${news.description}</p>
            </div>`;
        newsdetails.appendChild(card);
    });
}
fetchhome()

