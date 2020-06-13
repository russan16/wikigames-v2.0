import React from 'react';
import './loading.scss';

export default function Loading(props) {

    const isLoading = props.status;

    return (
        <>
            {isLoading ? (
                <div className="overlay">
                    <div className="spinner"></div>
                    <span className="loading-text">Loading...</span>
                </div>
            ) : ('')}
        </>
    );
}