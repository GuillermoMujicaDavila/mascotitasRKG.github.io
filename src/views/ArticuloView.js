
import { useState, useEffect,useContext } from 'react'
import {CarritoContext} from '../context/carritoContext'
import {useParams} from 'react-router-dom'
import { obtenerArticulosPorId } from '../services/articulosService'  
import Loading from '../components/Loading'
import { Link } from "react-router-dom";
import Swal from "sweetalert2"
// import Prueba from "../components/Prueba"
import { useHistory } from 'react-router'
// import Narvbar from '../components/Narvbar'
import Narbarkev from '../components/Narbarkev'
export default function ArticuloView() {
    const [articulo, setArticulo] = useState({})
    const [cargando, setCargando] = useState(true)
    const {anadirACarrito} = useContext(CarritoContext)
    const { id } = useParams()

    const history = useHistory()
    const getArticulo = async () => {
        try {
            let articuloObtenido = await obtenerArticulosPorId(id)
            setArticulo(articuloObtenido)
            setCargando(false)
        } catch (error) {
            console.error(error)
        }

    }
    const anadirACarritoContext = async() => {
        anadirACarrito(articulo)
        const resultado = await Swal.fire({
            icon:'success',
            title:"¡Producto añadido con éxito!",
            showConfirmButton:true,
            showDenyButton:true,
            denyButtonText:'Procesar compra',
            confirmButtonText:'Seguir comprando'})
        if(resultado.isConfirmed){
            history.push('/tienda')
        }else if(resultado.isDenied){
            history.push('/carrito')
        }
    }

    useEffect(() => {
        getArticulo()
    }, )

    return (
       
        <div>
            <Narbarkev ></Narbarkev>
            {cargando ? 
            (<Loading />) : 
            (<div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                           <img
                                className="img-fluid"
                                src={articulo.productoImagen}
                                alt={articulo.productoNombre}
                            />
                        </div> 
                        <div className="col-sm-12 col-md-6">
                            <h3 className="fw-bold">{articulo.productoNombre}</h3>
                            
                            {/* <h3 className="fw-bold">{Prueba}</h3> */}

                            <div className="py-3 d-flex justify-content-between">
                                <span className="fw-bold" style={{

                                    color: 'green',
                                    fontSize: '20px'
                                    
                                }}>
                                    Precio: S/ {articulo.productoPrecio}
                                </span>
                            </div>
                            <h5 className="fw-bold" style={{
                               

                            }}>Descripción</h5>
                            <p style={{

                                textAlign: 'justify',
                                textJustify: 'inter-word',
                                

                            }}>{articulo.arti_descripcion}</p>
                            <button className="btn btn-dark btn-lg" onClick={anadirACarritoContext} style={{
                                    background: 'linear-gradient(to top, rgb(40, 113, 27), rgb(121, 206, 102))',
                                    border:'none'
                            }}>
                            <i className="fas fa-shopping-cart me-2"/>
                     <Link  style={{
                         textDecoration:'none',
                         color:'white'
                     }}>Añadir a carrito</Link>
                            </button>
                           
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}
