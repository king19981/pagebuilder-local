const omdbKey = "9bbde1e8";

const resolve = (props) => {
   const { title } = props;
   return `http://www.omdbapi.com/?apikey=${omdbKey}&t=${title}`;
};

export default {
   resolve,
   params: [{ name: "title", displayName: "Movie title", type: "text" }],
};
