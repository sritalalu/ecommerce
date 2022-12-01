import React from 'react';

const Banner = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="./img/cartel.png" className="d-block w-25 nube_promo" alt="promoción" />
                    </div>
                <div className="carousel-item">
                    <img src="./img/carru.png" className="d-block w-25 nube_promo" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./img/centro.png" className="d-block w-25 nube_promo" alt="..." />
                </div>
                </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Banner;
