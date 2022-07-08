import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "./../components/Movie";

function Detail() {
  const [images, setImages] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const reponse = await await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await reponse.json();
    setImages(json.data.images);
    console.log(reponse);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {images.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          coverImg={movie.medium_cover_image}
          title={movie.title}
          summary={movie.summary}
          genres={movie.genres}
        />
      ))}
    </div>
  );
}
export default Detail;
