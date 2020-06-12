import React, {useEffect, useState} from 'react';
import {numericFormat} from '../../components/Conversion';
import MiniCard from '../../components/MiniCard';
import api from '../../services/api';

export default function Plataformas() {

    const [platData, setPlatData] = useState([]);
    useEffect(() => {
        api.get('/platforms').then((response) => {
            setPlatData(response.data);
        }).catch((e) => {
            console.log(e);
        });
    });
    return (
        <section className="col-12">
            <h2 className="text-light">Plataformas ({numericFormat(platData.count)})</h2>
            <div className="row">
                {platData.results !== undefined ? (
                    platData.results.map((item, i) => (
                        <MiniCard key={i} data={item}/>
                    ))
                ) : ('')}
            </div>
        </section>
    );
}