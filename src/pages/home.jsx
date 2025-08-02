import Moviecard from "../component/moviecard";
import { useState } from "react";   

function Home(){
    const [searchQuery, setSearchQuery] = useState("");


    const movies = [
        { id :1,title:"jhon wick",release_date:2020},
        { id :2,title:"avengers",release_date:2019},
        { id :3,title:"spiderman",release_date:2021}
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for a movie..."
                 className="search-input"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                />
                 <button type="submit" className="search-button">Search</button>
            </form>
         <div className="movies-grid">
            {movies.map(
                (movie) => 
                 movie.title.toLowerCase().startsWith(searchQuery)&&(
                    <Moviecard movie= {movie} key={movie.id} />
                )
                )}
        </div>
    </div>
    );
}
export default Home;