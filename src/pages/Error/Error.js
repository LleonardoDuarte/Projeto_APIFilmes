import { Link } from "react-router-dom";
import './Erro.css'

function Error() {
  return (
    <div className="erro">
      <h1>Ops.. A página que você está procurando não existe.</h1>
      <Link to="/">Veja todos filmes aqui!</Link>
    </div>
  );
}

export default Error;
