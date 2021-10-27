import {Link} from "react-router-dom"


export default function GroupArticulos({articulos}) {
    console.log(articulos)
    
    return (

       <div> 
           

            <div className="container">
                <div className="row mt-2">
                    {articulos.content.map((arti, i) => (
                        <div className="col-12 col-lg-4 col-md-6 col-xl-4" key={1}>
                            <div className="magic  card border border-secondary border border-3 text-center">
                                <div className="overflow">
                                    <img 
                                        src={arti.productoFoto}
                                        className="card-img-top"
                                        alt={arti.productoNombre}
                                    />
                                </div>    
                                    <div className="card-body bg-light">
                                        <h6 className="card-title text-center fw-bold">
                                            {arti.productoNombre}
                                        </h6>
                                        <p className="card-text text-secondary">
                                            S/ {arti.productoPrecio}
                                        </p>
                                        <Link href="#" className="btn btn btn-outline-success" to={`/producto/${arti.productoId}`}>
                                        Comprar
                                        </Link>
                                    </div>
                            </div> 
                        </div>    
                    ))}
                </div>
            </div>

       </div>                 

    )
}
