import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CharacterList = () => {
    const [heroes, setHeroes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchHeroes = async () => {
            try{
                const response = await axios.get('https://gateway.marvel.com/v1/public/characters?limit=5&ts=1&apikey=52fe19c72729414bb04618bbd50dd8f3&hash=e0fdb66c90c7574c9c2d7d3b9fc5c8be')
                console.log(response.data.data.results);
                setHeroes(response.data.data.results);
                setLoading(false);
            } catch (error){
                console.error("error fetching heroes", error);
            }
        }

        fetchHeroes();
    }, [])

    if(loading){
        return <h3>Loading heroes.....</h3>
    }

    return (
        <div>
            <h3>Heroes</h3>
            {heroes.map(hero => (
                <div key={hero.id} className="character">
                    <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                        width="200" alt={hero.name}/>
                    <br/>
                    <Link to={`/characters/${hero.id}`}>{hero.name}</Link>
                </div>
            ))}
        </div>
    )
}



export default CharacterList;