import React, {useEffect, useState} from 'react';
import {numericFormat} from '../../components/Conversion';
import MiniCard from '../../components/MiniCard';
import api from '../../services/api';
import Loading from "../../components/Loading";

export default function Plataformas() {

    const [platData, setPlatData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        api.get('/platforms').then((response) => {
            setPlatData(response.data);
            setIsLoading(false);
        }).catch((e) => {
            alert('Oops, aconteceu um erro, tente mais tarde.');
            setIsLoading(false);
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
            <Loading status={isLoading}/>
        </section>
    );
}