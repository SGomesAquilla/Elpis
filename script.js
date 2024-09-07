function buttonreading() {
    let songpage = document.getElementById("page");

    let sometext = `
    <div class="titleHeader">
      <h1>The Word of God is living and active</h1>
      <h2>"In the beginning was the Word, and the Word was with God, and the Word was God." - John 1:1 </h2>
    </div>
      <section class="selectorSection">
        <ul>
          <li>
            <a target="_blank" href="https://www.youtube.com/watch?v=JN2oDyqUBN8"><img src="https://i.ytimg.com/vi/JN2oDyqUBN8/hqdefault.jpg"></a>
            <a target="_blank" href="https://www.youtube.com/watch?v=UyscsZufoiI"><img src="https://i.ytimg.com/vi/UyscsZufoiI/hqdefault.jpg"></a>
            <a target="_blank" href="https://www.youtube.com/watch?v=I3SYav4CUr0"><img src="https://i.ytimg.com/vi/I3SYav4CUr0/hqdefault.jpg"></a>
          </li>
        </ul>
        <p>
          let your spirit tuned by listening to some sermons or take some time to read the Word of God. It is important to always focus on Jesus at all times.
        </p>
      </section>
      <section class="searchBox">
        <input type="text" placeholder="What music you're looking for">
        <button onclick="searchingR()">Search</button>
      </section>
      <section id="searchResults" class="searchResults">
        <ul class="result-list">

        </ul>
      </section> `; 
    
    songpage.innerHTML = sometext;
}


function buttonsong() {
    let songpage = document.getElementById("page");

    let sometext = `
    <div class="titleHeader">
      <h1>Don't stop the worship</h1>
      <h2>"be filled with the Spirit, speaking to one another with psalms, hymns, and songs from the Spirit. Sing and make music from your heart to the Lord" - Ephesians 5:18-19 </h2>
    </div>
      <section class="selectorSection">
        <ul>
          <li>
            <a target="_blank" href="https://www.youtube.com/watch?v=K_dokTLm4Jg"><img src="https://i.ytimg.com/vi/K_dokTLm4Jg/hqdefault.jpg"></a>
            <a target="_blank" href="https://www.youtube.com/watch?v=s3TZI4juMIQ"><img src="https://i.ytimg.com/vi/s3TZI4juMIQ/hqdefault.jpg"></a>
            <a target="_blank" href="https://www.youtube.com/watch?v=pb4KwPKJoFM&list=OLAK5uy_me_gi96EgJwULWsiI3r2LdWtPAV_GHmJw"><img src="https://i.ytimg.com/vi/pb4KwPKJoFM/hqdefault.jpg"></a>
          </li>
        </ul>
        <p>
          In the midst of the hustle and bustle of everyday life, take a moment to connect with God through music. Our music section reveals to you the latest and most popular songs, hymns, and tunes that touch the heart and inspire faith.
        </p>
      </section>
      <section class="searchBox">
        <input type="text" placeholder="What music you're looking for">
        <button onclick="searchingS()">Search</button>
      </section>
      <section id="searchResults" class="searchResults">
        <ul class="result-list">

        </ul>
      </section> `; 
    
    songpage.innerHTML = sometext;
}

function searchingR() {

    const resultList = document.querySelector('.result-list');
    resultList.innerHTML = '';
  
    for (let searchInfo of dataReading) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <h2>
          <a href="google.com" target="_blank">${searchInfo.title}</a>
        </h2>
        <h3>
          <p>${searchInfo.theme}</p>
        </h3>
        <p>${searchInfo.summary}</p>
      `;
      resultList.appendChild(listItem);
    }
}

function searchingS() {

    const resultList = document.querySelector('.result-list');
    resultList.innerHTML = '';
  
    for (let searchInfo of dataSongs) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <h2>
          <a href="google.com" target="_blank">${searchInfo.name}</a>
        </h2>
        <h3>
          <p>${searchInfo.autor}</p>
        </h3>
        <p>${searchInfo.lyrics}</p>
      `;
      resultList.appendChild(listItem);
    }
}
