import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function CharacterDetail() {
    // these uses destructuring to pull out the value
    // of id and set it equal to a variable called id
    const {id} = useParams();
    const [hero, setHero] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchHero = async () => {
            try{
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=52fe19c72729414bb04618bbd50dd8f3&hash=e0fdb66c90c7574c9c2d7d3b9fc5c8be`)

                console.log(response.data);
                setHero(response.data.data.results[0]);
                setLoading(false);
            } catch (error){
                console.error("error fetching heroes", error);
            }
        }

        fetchHero();
    }, [id])

    // forcing the component to re-render
    // so useEffect will run again
    if(loading){
        return <h3>Loading hero.....</h3>
    }

    return (
        <div>
            <br/>
            <Link to={'/characters'}>Go Back to Characters</Link>
            <br/>

            <div>
                <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                    width="200" alt={hero.name}/>

                <h3>{hero.name}</h3>

                {hero.description &&
                    <div>
                        <h4>Description</h4>
                        <p>{hero.description}</p>
                    </div>
                }

                <h4>Comics:</h4>
                {hero.comics.items.map(comic => (
                    <div key={comic.resourceURI}>
                        {comic.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CharacterDetail;