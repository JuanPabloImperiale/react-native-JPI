const API_KEY = "4be2ed928e1d42388d5f7aac8db2b987";

export async function getLatestGames() {
  const LATEST_GAMES = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=10`;
  const rawData = await fetch(LATEST_GAMES);
  const json = await rawData.json();

  const data = json.results;

  return data.map((item) => {
    const { name, slug, id, released, background_image } = item;
    const img = background_image;
    console.log("11: ", {
      id,
      name,
      released,
      slug,
      image: img,
    });
    return {
      id,
      name,
      released,
      slug,
      image: img,
    };
  });
}

export async function getGameDetails(id) {
  const GAME_DETAILS = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`;

  const rawData = await fetch(GAME_DETAILS);
  const json = await rawData.json();

  const { components } = json;
  const { slug, name, description_raw, background_image_additional } =
    components;

  // get the card image
  // const cardImage = images.find((image) => image.typeName === "cardImage");
  // const { bucketType, bucketPath } = cardImage;
  const img = background_image_additional;

  // get the reviews
  // const reviews = rawReviews.map((review) => {
  //   const { quote, score, date, publicationName, author } = review;
  //   return { quote, score, date, publicationName, author };
  // });

  return {
    id,
    img,
    name,
    slug,
    description_raw,
  };
}
