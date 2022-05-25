import { useState } from "react";
import "./App.css";
import MovieList from "./component/MovieList";
import Search from "./component/Search";
import AddMovie from "./component/AddMovie";

function App() {
  const [film, setFilm] = useState([
    {
      id: Math.random(),
      title: "Hangover",
      description: "Trois jeunes hommes cherchent un ami qui a disparu au cours d'une super fête à Las Vegas... ",
      posterUrl: "https://zupimages.net/up/22/21/pi3q.jpg",
      rate: 4,
    },
    {
      id: Math.random(),
      title: "Dear John",
      description: "Issus de deux milieux différents, Savannah, une étudiante idéaliste, et John, un soldat , tombent pourtant éperdument amoureux....",
      posterUrl:
        "https://zupimages.net/up/22/21/n4hz.png",
      rate: 1,
    },
    {
      id: Math.random(),
      title: "Before you ",
      description: "Jeune et riche banquier, Will Traynor était un garçon plein d'audace et d'optimisme jusqu'à ce qu'il se retrouve paralysé....",
      posterUrl:
        "https://zupimages.net/up/22/21/9k5r.jpg",
      rate: 3,
    },
    {
      id: Math.random(),
      title: "Soul ",
      description: "Passionné de jazz et professeur de musique dans un collège, Joe Gardner a enfin l'opportunité de réaliser son rêve",
      posterUrl:
        "https://zupimages.net/up/22/21/ew0f.png",
      rate: 4,
    },
    {
      id: Math.random(),
      title: "Avatar",
      description: "Malgré sa paralysie, Jake Sully, un ancien marine immobilisé dans un fauteuil roulant, est resté un combattant au plus profond de son être...",
      posterUrl:
        "https://zupimages.net/up/22/21/xnjn.jpg",
      rate: 3,
    },
    {
      id: Math.random(),
      title: "Joker",
      description: "Arthur Fleck, comédien raté, rencontre des voyous violents en errant dans les rues de Gotham City déguisé en clown...",
      posterUrl:
        "https://zupimages.net/up/19/40/ayrk.jpg",
      rate: 3,
    },
    {
      id: Math.random(),
      title: "Tomb Raider",
      description: "Lara Croft, 21 ans, n'a ni projet, ni ambition : fille d'un explorateur excentrique porté disparu depuis sept ans, cette jeune femme rebelle et indépendante",
      posterUrl:
        "https://zupimages.net/up/22/21/47q7.png",
      rate: 3,
    },
    {
      id: Math.random(),
      title: "House of Gucci",
      description: "Retour sur l'assassinat de Maurizio Gucci le 27 mars 1995, petit-fils héritier de Guccio Gucci, le fondateur de la célèbre marque de luxe italienne...",
      posterUrl:
        "https://zupimages.net/up/22/21/g9lq.jpg",
      rate: 5,
    },
    {
      id: Math.random(),
      title: "intouchable",
      description: "Tout les oppose et il était peu probable qu'ils se rencontrent un jour. Philippe, un riche aristocrate devenu tétraplégique après un accident de parapente va engager Driss..",
      posterUrl:
        "https://zupimages.net/up/22/21/b53a.jpg",
      rate: 2,
    },
  ]);
  const [search, setSearch] = useState("");
  const [rateSearch, setRateS] = useState(1);
  const hundelClick = ({ title, rate, description, posterUrl }) => {
    setFilm([...film, { title, rate, description, posterUrl }]);
  };

  return (
    <div className="App">
      <div className="ap">
        <AddMovie hundelClick={hundelClick} />
        <Search
          hundelClick={hundelClick}
          setSearch={setSearch}
          searchByRate={rateSearch}
          setRats={setRateS}
        />
      </div>

      <MovieList film={film} search={search} searchByRate={rateSearch} />
    </div>
  );
}

export default App;