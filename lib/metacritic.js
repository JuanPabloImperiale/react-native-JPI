const API_KEY = "4be2ed928e1d42388d5f7aac8db2b987";

export async function getLatestGames() {
  const LATEST_GAMES = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=10`;
  const rawData = await fetch(LATEST_GAMES);
  const json = await rawData.json();

  const data = json.results;

  return data.map((item) => {
    const { name, slug, id, released, background_image, rating, rating_top } =
      item;
    const img = background_image;

    return {
      id,
      name,
      released,
      slug,
      image: img,
      rating,
      rating_top,
    };
  });
}

export async function getGameDetails(id) {
  console.log("id", id);
  const GAME_DETAILS = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`;

  const rawData = await fetch(GAME_DETAILS);
  const json = await rawData.json();

  const components = json;
  const {
    slug,
    name,
    description_raw,
    background_image_additional,
    rating,
    rating_top,
  } = components;
  const img = background_image_additional;

  return {
    id,
    img,
    name,
    slug,
    description_raw,
    rating,
    rating_top,
  };
}
