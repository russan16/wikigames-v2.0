import React from 'react';
import './loading.scss';

export const adjusments = () => {
    // scroll top
    document.querySelector('html,body').scrollTop = 0;
    // fecha o menu mobile
    document.querySelector('.navbar-toggler').classList.add('collapsed');
    document.querySelector('.navbar-collapse').classList.remove('show');
};

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