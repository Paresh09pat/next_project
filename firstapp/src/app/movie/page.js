
import MovieCard from "../Components/MovieCard";
import styles from "../styles/common.module.css";

const movie = async () => {

// await new Promises(executor: resolve=> setTimeout(resolve, timeout:2000))

  const url = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b804cc89e9msh4f11463cf9f72c5p19398fjsn4535cd0812fb",
      "X-RapidAPI-Host": "netflix-data.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();

  const main_data = data.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series and movies</h1>

          <div className={styles.card_section}>
            {main_data.slice(0,12).map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default movie;
