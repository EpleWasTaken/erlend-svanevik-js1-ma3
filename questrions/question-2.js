// Question 2

const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const gamesContainer = document.querySelector(".results");

async function getGames() {
  try {
    const response = await fetch(url);

    const data = await response.json();

    const results = data.results;

    gamesContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      console.log(results[i].name);
      console.log(results[i].rating);
      console.log(results[i].tags.length);

      gamesContainer.innerHTML += `<div class="gameName">Game name: ${results[i].name}</div>`;
      gamesContainer.innerHTML += `<div class="gameRating">Game rating: ${results[i].rating}</div>`;
      gamesContainer.innerHTML += `<div class="gameAmountTags">Amount of tags: ${results[i].tags.length}</div>`;

      if (i === 7) {
        break;
      }
    }
  } catch (error) {
    console.log(error);
    {
      console.log(
        "An error occured trying to call the API, try again later. Sorry for the inconvenience."
      );
      gamesContainer.innerHTML = displayError(
        "An error occured trying to call the API, try again later. Sorry for the inconvenience."
      );
    }
  } finally {
    console.log("Thanks for visiting GameRatings.com");
  }
}

getGames();
