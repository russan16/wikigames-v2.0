import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import {dateFormat} from '../../components/Conversion';
import Loading from '../../components/Loading';

export default function InternaGame(props) {

    const [gameInfo, setGameInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const slug = props.match.params.slug;

    useEffect(() => {
        api.get(`/games/${slug}`).then((response) => {
            setGameInfo(response.data);
            setIsLoading(false);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <section>
            <figure>
                <img className="img-fluid" src={gameInfo.background_image_additional} alt=""/>
            </figure>
            <h1 className="text-light">{gameInfo.name}</h1>
            <p className="text-light">{gameInfo.description_raw}</p>
            <ul className="list-unstyled">
                <li className="text-light">Último patch: {dateFormat(gameInfo.released)}</li>
                <li className="text-light">Site oficial: <a className="text-light" href={gameInfo.website} target="_blank">{gameInfo.website}</a></li>
            </ul>
            <Loading status={isLoading}/>
        </section>
    );
}