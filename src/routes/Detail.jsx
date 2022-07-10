import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Movie from "./../components/Movie";
function Detail() {
  const [Movies, setMovies] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovies(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="background">
      <div className="Main_img">
        <img className="img" src={Movies.large_cover_image} alt="" />
      </div>
      <div className="description">
        <h1 className="title">{Movies.title}</h1>

        <h4 className="genres">
          {Movies.year + " / "} {Movies.genres + " / "} {Movies.runtime}Min
        </h4>

        <span className="desc">{Movies.description_intro}</span>
      </div>
    </div>
  );
}
export default Detail;
