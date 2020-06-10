import React, {useEffect, useState} from 'react';

export default function Loading(props) {

    const [isLoading,setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(props.loading);
    },[]);
    return (
        <>
            <div className="spinner-border"></div>
        </>
    );
}