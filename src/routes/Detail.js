import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  async function getMovie() {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={styles.detail__container}>
      {loading ? (
        <div className={styles.detail__loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.detail__movie}>
          <div className={styles.detail__movie_intro}>
            <div className={styles.detail__movie_intro_img}>
              <img
                src={movie.medium_cover_image}
                alt={movie.title}
                className={styles.detail__movie_img}
              />
            </div>
            <div className={styles.detail__movie_intro_info}>
              <h1
                className={styles.detail__movie_title}
              >{`${movie.title_long}`}</h1>

              <span className={styles.detail__movie_rating}>
                <FontAwesomeIcon
                  className={styles.detail__movie_rating_icon}
                  icon={faStar}
                />{" "}
                {`Rating: ${movie.rating}`} <br></br>
                <br></br>
                <FontAwesomeIcon
                  className={styles.detail__movie_rating_icon}
                  icon={faClock}
                />{" "}
                {`Runtime: ${movie.runtime} minutes`}
              </span>
            </div>
          </div>
          <div className={styles.detail__button}>
            <button className={styles.detail__movie_button}>
              <Navigation />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
