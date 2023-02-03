import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID iBAbjsOssGal0z52UkKJI--fUza4Hm69VFJ6vYQulGE",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
