import "../css/favorite.css";
import { useMovieContext } from "../context/moviecontext";
import Moviecard from "../component/moviecard";

function Favorites() {
    const { favorites } = useMovieContext();

    if (favorites) {
        return  (
        <div  >
        <h2>Your Favoritess movies</h2>
        <div className="movies-grid">
        {favorites.map((movie) => (
            <Moviecard movie= {movie} key={movie.id} />
        ))}
        </div>
        </div>
        );
    }s

    return (
    <div className="favorites-empty">
       <h2>No Favorite Movies Yet</h2> 
       <p>start adding movies to your favorite </p>
    </div>
    );
}
export default Favorites;