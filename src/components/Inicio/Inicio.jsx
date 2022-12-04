import { Link } from "react-router-dom";
const Inicio = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="./img/lila.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5 className="portada">DISEÑOS EXCLUSIVOS</h5>
                </div>
                </div>
                <div className="carousel-item">
                    <img src="./img/pastel.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5 className="portada">NUEVAS TENDENCIAS</h5>
                </div>
                </div>
                <div className="carousel-item">
                    <img src="./img/navidad.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5 className="portada">DECORACIÓN NAVIDEÑA</h5>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        <div className="card-group">
            <div className="card">
                <Link className="card_tres" to='/category/sillones'>
                <img src="./img/rositas.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">Sillones</h4>
                    <p className="card-text">Diseños que armonizan y visten cada hogar.</p>
                </div>
                </Link>
                
            </div>
            <div className="card">
                <Link className="card_tres" to='/category/sofas'>
                <img src="./img/sofaverde.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">Sofás</h4>
                    <p className="card-text">Tenemos las últimas tendencias en sofás.</p>
                </div>
                </Link>        
            </div>
            <div className="card">
                    <Link className="card_tres" to='/category/decoracion'>
                        <img src="./img/decorativos.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">Decoración</h4>
                            <p className="card-text">La deco más linda la encontrás en Nube Lila</p>
                        </div>
                    </Link>
                    
                
            </div>
        </div>
        </>
    );
}

export default Inicio;
