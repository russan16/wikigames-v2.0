import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import {dateFormat} from '../../components/Conversion';
import Loading from '../../components/Loading';
import noImg from '../../assets/images/no-img.jpeg';

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
        <section className="row">
            <div className="col-12">
                <h1 className="text-light text-center">{gameInfo.name}</h1>
            </div>

            <div className="col-12">
                <p className="text-light">
                    <figure className="figure float-left mr-3 mb-3 w-50">
                        <img className="img-thumbnail" src={gameInfo.background_image_additional === null ? noImg : gameInfo.background_image_additional} alt=""/>
                    </figure>
                    <strong>Descrição:</strong> {gameInfo.description_raw === null ? ('não disponível') : (gameInfo.description_raw)}</p>
                <ul className="list-unstyled">
                    <li className="text-light">Último patch: {dateFormat(gameInfo.released)}</li>
                    {gameInfo.website === '' ? ('') : (
                        <li className="text-light">Site oficial: <a className="text-light" href={gameInfo.website} target="_blank">{gameInfo.website}</a></li>
                    )}

                </ul>
            </div>
            <Loading status={isLoading}/>
        </section>
    );
}