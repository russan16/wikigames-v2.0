import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';
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
        <section>
            <div className="w-100">
                <h1 className="text-light text-center">{gameInfo.name}</h1>
            </div>

            <div className="w-100">
                <ul className="list-unstyled w-100">
                    <li className="text-light">Último patch: {dateFormat(gameInfo.released)}</li>
                    <li className="text-light">Nota: {gameInfo.rating !== 0 ? gameInfo.rating : 'sem nota'}</li>
                    <li className="text-light">Plataforma: {gameInfo.platforms ? (
                        gameInfo.platforms.map((item,i) => (
                            <Link key={i} to={`/plataforma/${item.platform.id}/${item.platform.name}`} className="badge badge-secondary badge-pill mx-1">{item.platform.name}</Link>
                        ))
                    ) : ('')}</li>
                    <li className="text-light">Gênero: {gameInfo.genres ? (
                        gameInfo.genres.map((item,i) => (
                            <Link key={i} to={`/genero/${item.id}/${item.name}`} className="badge badge-secondary badge-pill mx-1">{item.name}</Link>
                        ))
                    ) : ('')}</li>
                    <li className="text-light">Desenvolvedor: {gameInfo.developers ? (
                        gameInfo.developers.map((item,i) => (
                            <Link key={i} to={`/desenvolvedor/${item.id}/${item.name}`} className="badge badge-secondary badge-pill mx-1">{item.name}</Link>
                        ))
                    ) : ('')}</li>
                    {gameInfo.website === '' ? ('') : (
                        <li className="text-light">Site oficial: <a className="text-light" href={gameInfo.website} target="_blank">{gameInfo.website}</a></li>
                    )}

                </ul>
                <p className="text-light">
                    <figure className="figure float-left mr-3 mb-3 w-50">
                        <img className="img-thumbnail" src={gameInfo.background_image_additional === null ? noImg : gameInfo.background_image_additional} alt=""/>
                    </figure>
                    <strong>Descrição:</strong> {gameInfo.description_raw === null ? ('não disponível') : (gameInfo.description_raw)}</p>
            </div>
            <Loading status={isLoading}/>
        </section>
    );
}