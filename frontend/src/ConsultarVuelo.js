import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';



export default function ConsultarVuelo() {

   

    const {id, clase} = useParams();
  
    const [loading, setLoading] = useState(true);
    const [loadingAsientos, setLoadingAsientos] = useState(true);
    const [vuelo, setVuelo] = useState([]);
    const [asientos, setAsientos] = useState([]);


    useEffect(() => {


        axios.get(`/api/vuelos/${id}`).then(res=>{
            if(res.status === 200)
            {
                setVuelo(res.data.vuelo)
                setLoading(false);
            }
        });

        axios.get(`/api/asientos/${id}/${clase}`).then(res=>{
            if(res.status === 200)
            {
                setAsientos(res.data.asientos)
                setLoadingAsientos(false);
            }
        });

        

    }, []);





    if(loading)
    {
        return <h4>Cargando vuelo...</h4>
    }

    if(loadingAsientos)
    {
        return <h4>Cargando Asientos Disponibles...</h4>
    }
    else{
        var asientos_HTMLTABLE = "";
       
        asientos_HTMLTABLE = asientos.map( (item, index) => {
            return (
                <tr key={index}>
                    <td>{item.asiento}</td>
                    <td>{item.clase}</td>
                  
                    <td>
                  
                        <Link to={"ReservarAsiento/"+item.id} className="btn btn-success btn-sm">Reservar</Link>
                    </td>
                
                </tr>
            );
        });

    }


    return (
      <div className="container">
          <div className="row">

            <div className="col-12">
                <div className="card card-body">

                    <div className='row'>
                        <h1>Vuelo: {vuelo.id} / Origen: {vuelo.origen} - Destino: {vuelo.destino} </h1>
                        <h2>Salida: {vuelo.fecha_salida} a las {vuelo.hora_salida}</h2>
                        <h3>Aerolinea: {vuelo.aerolinea}</h3>
                        <label><Link to={`ReservarVuelo/${vuelo.id}`} className="btn btn-success btn-sm">Reservar Asientos</Link></label>
                    </div>

                    <div className="table-responsive">

                    <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Asiento</th>
                                            <th>Clase</th>
                                   
                                            <th>Reservar</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {asientos_HTMLTABLE}
                                    </tbody>
                                </table>
                        
                




                    </div>
                </div>
            </div>
          </div>
      </div>
    )
}