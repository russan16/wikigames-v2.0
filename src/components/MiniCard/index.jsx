import React from 'react';
import {Link} from 'react-router-dom';
import {numericFormat} from '../Conversion';

export default function MiniCard(props) {
    const data = props.data;
    const page = props.page;
    return (
        <div className="col-lg-3 p-2 overflow-hidden">
            <Link className="rounded mini-card-wrapper border" to={`/${page}/${data.id}/${data.name}`}>
                <figure className="custom-img-card-mini m-0">
                    <img src={data.image_background} className="img-fluid rounded-0" alt={data.name}/>
                </figure>
                <div className="mini-card-title d-flex flex-column justify-content-center align-items-center">
                    <span className="d-block text-truncate text-light w-100 px-2 text-center">{data.name}</span>
                    <div><span className="badge badge-light badge-pill">{numericFormat(data.games_count)}</span></div>
                </div>
            </Link>
        </div>
    );
}