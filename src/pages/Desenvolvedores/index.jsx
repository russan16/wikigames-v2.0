import React, {useEffect, useState} from 'react';
import {numericFormat} from '../../components/Conversion';
import MiniCard from '../../components/MiniCard';
import api from '../../services/api';

export default function Desenvolvedores() {

    const [devData, setDevData] = useState([]);
    useEffect(() => {
        api.get('/developers').then((response) => {
            setDevData(response.data);
        }).catch((e) => {
            console.log(e);
        });
    });
    return (
        <section className="col-12">
            <h2 className="text-light">Desenvolvedores ({numericFormat(devData.count)})</h2>
            <div className="row">
                {devData.results !== undefined ? (
                    devData.results.map((item, i) => (
                        <MiniCard key={i} data={item}/>
                    ))
                ) : ('')}
            </div>
        </section>
    );
}