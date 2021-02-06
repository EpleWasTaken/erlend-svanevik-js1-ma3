// Question 2

const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const gamesContainer = document.querySelector(".results");

async function getGames() {
  const response = await fetch(url);

  const data = await response.json();

  const results = data.results;

  gamesContainer.innerHTML = "";

  for (let i = 0; i < results.length; i++) {
    console.log(results[i].name);
    console.log(results[i].rating);
    console.log(results[i].tags);

    gamesContainer.innerHTML += `<div class="gameName">${results[i].name}</div>`;
    gamesContainer.innerHTML += `<div class="gameRating">${results[i].rating}</div>`;
    gamesContainer.innerHTML += `<div class="gameAmountTags">${results[i].tags}</div>`;

    if (i === 7) {
      break;
    }
  }
}

getGames();

// async function getGames() {
//   try {
//     const response = await fetch(
//       "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating"
//     );
//     const results = await response.json();

//     const name = results.name;

//     const rating = results.rating;

//     const tagAmount = results.tags;

//     for (let i = 0; i < results.length; i++) {
//       console.log(results[i].name);
//     }
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Thank you for visiting GameRatings.com");
//   }
// }

// getGames();
