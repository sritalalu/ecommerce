import Banner from "../Banner/Banner";
const Inicio = () => {
    return (
        <>
            <div className="portada">
            <div className="card bg-dark text-white">
                <img src="./img/inicio.jpg" className="card-img" alt="..."/>
                <div className="card-img-overlay">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">Last updated 3 mins ago</p>
                </div>
            </div>

            </div>
            <Banner/>
        </>
    );
}

export default Inicio;
