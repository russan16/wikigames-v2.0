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
            alert('Oops... Ocorreu um erro, tente mais tarde.');
        });
    }, []);

    return (
        <section className="row">
            <div className="col-12">
                <h1 className="text-light text-center">{gameInfo.name}</h1>
            </div>

            <div className="col-12">
                <p className="text-light">
                    <figure className="figure float-none float-md-left mr-md-3 mb-3 p-0 col-12 col-md-6">
                        <img className="img-thumbnail" src={gameInfo.background_image_additional === null ? noImg : gameInfo.background_image_additional} alt=""/>
                    </figure>
                    {gameInfo.description_raw && (<><strong>Descrição:</strong> {gameInfo.description_raw}</>)}</p>
                <ul className="list-unstyled">
                    <li className="text-light">Nota: {gameInfo.rating || 'sem avaliação'}</li>
                    <li className="text-light">Lançamento: {dateFormat(gameInfo.released) || 'sem data'}</li>
                    <li className="text-light">Último patch: {dateFormat(gameInfo.updated) || 'sem atualizações'}</li>
                    <li className="text-light">Desenvolvedor: {gameInfo.developers && gameInfo.developers.map((dev, i) => (
                        <Link key={i} className="badge-pill badge badge-secondary mx-1" to={`/desenvolvedor/${dev.id}/${dev.name}`}>{dev.name}</Link>
                    ))}</li>
                    <li className="text-light">Plataforma: {gameInfo.platforms && gameInfo.platforms.map((item, i) => (
                        <Link key={i} className="badge-pill badge badge-secondary mx-1" to={`/plataforma/${item.platform.id}/${item.platform.name}`}>{item.platform.name}</Link>
                    ))}</li>
                    {gameInfo.website && (
                        <li className="text-light">Site oficial: <a className="text-light" href={gameInfo.website} target="_blank">{gameInfo.website}</a></li>
                    )}

                </ul>
            </div>
            <Loading status={isLoading}/>
        </section>
    );
}