import React, {useEffect, useState} from 'react';
import {numericFormat} from '../../components/Conversion';
import MiniCard from '../../components/MiniCard';
import api from '../../services/api';
import Loading from '../../components/Loading';

export default function Desenvolvedores() {

    const [devData, setDevData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        api.get('/developers').then((response) => {
            setDevData(response.data);
            setIsLoading(false);
        }).catch(() => {
            alert('Oops, aconteceu um erro, tente mais tarde.');
            setIsLoading(false);
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
            <Loading status={isLoading}/>
        </section>
    );
}