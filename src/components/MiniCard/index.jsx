import React from 'react';
import {Link} from 'react-router-dom';
import {numericFormat} from '../Conversion';

export default function MiniCard(props) {
    const data = props.data;
    return (
        <div className="col-lg-3 p-2 overflow-hidden">
            <figure className="custom-img-card-mini m-0">
                <img src={data.image_background} className="img-fluid rounded-0" alt={data.name}/>
            </figure>
            <Link className="btn btn-block btn-primary rounded-0" to={`/${data.slug}`} title={data.name}><span className="d-block text-truncate">{data.name}</span> <div><span className="badge badge-light">{numericFormat(data.games_count)} jogos</span></div></Link>
        </div>
    );
}