import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';



export default function Vuelos() {

    const [loading, setLoading] = useState(true);
    const [vuelos, setVuelos] = useState([]);

    useEffect(() => {

        axios.get(`/api/vuelos`).then(res=>{
            if(res.status === 200)
            {
                setVuelos(res.data.vuelos)
                setLoading(false);
            }
        });

    }, []);



    if(loading)
    {
        return <h4>Buscando vuelos...</h4>
    }
    else
    {
        var vuelos_HTMLTABLE = "";
       
        vuelos_HTMLTABLE = vuelos.map( (item, index) => {
            return (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.origen}</td>
                    <td>{item.destino}</td>
                    <td>{item.hora_salida}</td>
                   
                    <td>

                        <Link to={"consultarVuelo/"+item.id+"/Económico"} className="btn btn-success btn-sm">Económica (${item.precio_normal})</Link> |
                        <Link to={"consultarVuelo/"+item.id+"/Normal"} className="btn btn-success btn-sm">Normal (${(item.precio_normal*1.35).toFixed(2)})</Link> | 
                        <Link to={"consultarVuelo/"+item.id+"/Ejecutivo"} className="btn btn-success btn-sm">Ejecutiva (${(item.precio_normal*1.45).toFixed(2)})</Link>
                    </td>
                
                </tr>
            );
        });
    }


    return (
      <div className="container">
          <div className="row">
            <div className='col-12'>
                
            </div>

            <div className="col-12">
                <div className="card card-body">
                    <div className="table-responsive">
                        
                    <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Origen</th>
                                            <th>Destino</th>
                                            <th>Salida</th>
                                          
                                            <th>Clase</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {vuelos_HTMLTABLE}
                                    </tbody>
                                </table>





                    </div>
                </div>
            </div>
          </div>
      </div>
    )
}