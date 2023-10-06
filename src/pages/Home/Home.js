import "./Home.css";
import { useState, useEffect } from "react";
import url from "../../Services/api";
import { Link } from "react-router-dom";

// URL DA API: movie/now_playing?api_key=c2b6491d0e05a93a05e73eafb5596fea

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await url.get("movie/now_playing", {
        params: {
          api_key: "c2b6491d0e05a93a05e73eafb5596fea",
          language: "pt-BR",
          page: 1,
        },
      });

      // console.log(response.data.results.slice(0, 10));
      setFilmes(response.data.results.slice(0, 10));
      setLoading(false);
    }

    loadFilmes();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando Filmes...</h2>
      </div>
    );
  }

  return (
    <div className="home">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
