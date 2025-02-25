function readingPage() {
    let mainpage = document.getElementById("page");

    let sometext = `
    <div class="container">
      <div class="titleHeader">
        <h1>The Word of God is living and active</h1>
        <h2>"In the beginning was the Word, and the Word was with God, and the Word was God." - John 1:1 </h2>
      </div>
        <section class="selectorSection">
          <ul>
            <li>
              <a target="_blank" href="https://www.youtube.com/watch?v=JN2oDyqUBN8"><img alt="video-link" src="https://i.ytimg.com/vi/JN2oDyqUBN8/hqdefault.jpg"></a>
              <a target="_blank" href="https://www.youtube.com/watch?v=UyscsZufoiI"><img alt="video-link" src="https://i.ytimg.com/vi/UyscsZufoiI/hqdefault.jpg"></a>
              <a target="_blank" href="https://www.youtube.com/watch?v=I3SYav4CUr0"><img alt="video-link" src="https://i.ytimg.com/vi/I3SYav4CUr0/hqdefault.jpg"></a>
            </li>
          </ul>
          <p>
            let your spirit tuned by listening to some sermons or take some time to read the Word of God. It is important to always focus on Jesus at all times.
          </p>
        </section>
        <section class="searchBox">
          <input id="searchInput" type="text" placeholder="What music you're looking for">
          <button onclick="searchResultR()">Search</button>
        </section>
        <section id="searchResults" class="searchResults">
          <ul class="result-list" id="result-list">

          </ul>
        </section>
      </div> `; 
    
    mainpage.innerHTML = sometext;
}


function songPage() {
    let songpage = document.getElementById("page");

    let sometext = `
    <div class="container">
      <div class="titleHeader">
        <h1>Don't stop the worship</h1>
        <h2>"be filled with the Spirit, speaking to one another with psalms, hymns, and songs from the Spirit. Sing and make music from your heart to the Lord" - Ephesians 5:18-19 </h2>
      </div>
        <section class="selectorSection">
          <ul>
            <li>
              <a target="_blank" href="https://www.youtube.com/watch?v=K_dokTLm4Jg"><img alt="video-link" src="https://i.ytimg.com/vi/K_dokTLm4Jg/hqdefault.jpg"></a>
              <a target="_blank" href="https://www.youtube.com/watch?v=s3TZI4juMIQ"><img alt="video-link" src="https://i.ytimg.com/vi/s3TZI4juMIQ/hqdefault.jpg"></a>
              <a target="_blank" href="https://www.youtube.com/watch?v=pb4KwPKJoFM&list=OLAK5uy_me_gi96EgJwULWsiI3r2LdWtPAV_GHmJw"><img alt="video-link" src="https://i.ytimg.com/vi/pb4KwPKJoFM/hqdefault.jpg"></a>
            </li>
          </ul>
          <p>
            In the midst of the hustle and bustle of everyday life, take a moment to connect with God through music. Our music section reveals to you the latest and most popular songs, hymns, and tunes that touch the heart and inspire faith.
          </p>
        </section>
        <section class="searchBox">
          <input id="searchInput" type="text" placeholder="What music you're looking for">
          <button onclick="searchResultS()">Search</button>
        </section>
        <section id="searchResults" class="searchResults">
          <ul class="result-list" id="result-list">

          </ul>
        </section>
      </div> `; 
    
    songpage.innerHTML = sometext;
}

function communityPage() {
    let mainpage = document.getElementById("page");

    let sometext = `
    <div class="container">
        <div class="titleHeader">
          <h1>Two are better than one. Time to unity !</h1>
          <h2>"How good and pleasant it is when God’s people live together in unity!" - Psalms 133:1 </h2>
        </div>
            <form id="survey-form">
                <fieldset>
                    <div id="form-group">
                        <label id="name-label">
                            Name: <input required placeholder="Type Your Name and Surname" id="name" type="text">
                        </label>
                        <label id="age-label">
                            Age: <input required placeholder="Also Type Your Country and State Prefix All Toghether" id="number" type="number" min="13" max="120">
                        </label>
                        <label id="email-label">
                            Email: <input required placeholder="Type Your Email Adress" id="email" type="email">
                        </label>
                    </div>
                    <div id="form-group">
                        <select id="dropdown">
                            <option>op1</option>
                            <option>op2</option>
                        </select>
                    </div>
                    <div id="form-group">
                        <!-- <button type="menu"></button> -->
                        <input type="radio" name="radio"> op1
                        <input type="radio" name="radio"> op2
                    </div>
                    <div id="form-group">
                        <label>
                            <input type="checkbox" value="1"> 1
                        </label>
                        <label>
                            <input type="checkbox" value="2"> 2
                        </label>
                        <label>
                            <input type="checkbox" value="3"> 3
                        </label>
                        <label>
                            <input type="checkbox" value="4"> 4
                        </label>
                        <label>
                            <input type="checkbox" value="5"> 5
                        </label>
                    </div>
                    <div id="form-group">
                        <p>textarea</p>
                        <textarea></textarea>
                    </div>
                    <button id="submit">Submit</button>
                </fieldset>
            </form>
    </div>`; 
    
    mainpage.innerHTML = sometext;
}



function searchResultR() {

  let searchInput = document.getElementById("searchInput").value; // declares the value of the search input
  let resultExist = false; // declares the variable that we'll use to define if the result is existent or not
  document.getElementById("result-list").innerHTML = ''; // remove previous results for fresh start
  
    for (let searchInfo of dataReading) { // declares the search information, whom will get a different value for each index in the array of the Data Reading
      title = searchInfo.title; 
      theme = searchInfo.theme;
      summary = searchInfo.summary;
      allResultText = title + theme + summary; // here we define some variables just for not typing excessively as you can see in the "if" below

      if (allResultText.includes(searchInput) || allResultText.toLowerCase().includes(searchInput)) { // this part of the script will verify if the word digited on the search input exists in our data and if so, will inject the correspoding information

        resultExist = true;
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <h2>
            <a href="${searchInfo.link}" target="_blank">${searchInfo.title}</a>
          </h2>
          <h3>
            <p>${searchInfo.theme}</p>
          </h3>
          <p>${searchInfo.summary}</p>
        `;
        document.getElementById('result-list').appendChild(listItem); 
      }
    }
    if (resultExist == false) {
      document.getElementById("result-list").innerHTML = "No results found"; // if the information on the search input is non existent in our database, "no results found" will be printed on the screen
    }
}

function searchResultS() {

  let searchInput = document.getElementById("searchInput").value; // declares the value of the search input
  let resultExist = false; // declares the variable that we'll use to define if the result is existent or not
  document.getElementById("result-list").innerHTML = ''; // remove previous results for fresh start
  
    for (let searchInfo of dataSongs) { // declares the search information, whom will get a different value for each index in the array of the Data Reading
      title = searchInfo.title; 
      autor = searchInfo.autor;
      lyrics = searchInfo.lyrics;
      allResultText = title + autor + lyrics; // here we define some variables just for not typing excessively as you can see in the "if" below

      if (allResultText.includes(searchInput) || allResultText.toLowerCase().includes(searchInput)) { // this part of the script will verify if the word digited on the search input exists in our data and if so, will inject the correspoding information

        resultExist = true;
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <h2>
            <a href="${searchInfo.link}" target="_blank">${searchInfo.title}</a>
          </h2>
          <h3>
            <p>${searchInfo.autor}</p>
          </h3>
          <p>${searchInfo.lyrics}</p>
        `;
        document.getElementById('result-list').appendChild(listItem); 
      }
    }
    if (resultExist == false) {
      document.getElementById("result-list").innerHTML = "No results found"; // if the information on the search input is non existent in our database, "no results found" will be printed on the screen
    }
}

function register() { //for now, just presentetional

    const resultList = document.querySelector('.result-list');
    resultList.innerHTML = '';
  

    const listItem = document.createElement('section');
    listItem.innerHTML = `
    <h2>
        Niiice! We'll send you an e-mail with a confirmation code;
        <input type="number" placeholder="insert the confirmation code here">
    </h2>`;
    resultList.appendChild(listItem);

}