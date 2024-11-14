import { useState } from "react";
import { ARREGLO_PLATOS } from "../../mocks/Plato-mocks";
import { Plato } from "../../modelos/Plato";
import { ARREGLO_PLATOS_REGION } from "../../utilidades/dominios/DomRegion";

export const MenuListar = () => {
  const [arrPlatos] = useState<Plato[]>(ARREGLO_PLATOS);
  const obtenerNombre =(valor: string)=>{
    for(const objRegion of ARREGLO_PLATOS_REGION){
    if(objRegion.codRegion==valor){
      return objRegion.nombreRegion;
    } 
    }
  }
  return (
    <>
    <div className="pt-5 d-flex justify-content-center">
    <div className="col-md-6">
      <table className="table">
        <thead>
          <tr>
            <th style={{width:"20%"}}>No.</th>
            <th style={{width:"30%"}}>Nombre de Plato</th>
            <th style={{width:"20%"}}>Precio</th>
            <th style={{width:"25%"}} className="text-center">Región</th>
            <th style={{width:"25%"}}>Imagen</th>
            

          </tr>
        </thead>
        <tbody>
          {arrPlatos.map((miPla: Plato)=>(
            <tr>
            <td >{miPla.codPlato}</td>
            <td>{miPla.nombrePlato}</td>
            <td>{miPla.precioPlato}</td>
            <td className="text-center">{obtenerNombre(miPla.regionPlato)}</td>
            <td>
              <img src={miPla.imagenPlatoBase64} alt={miPla.nombrePlato} className="imagenListado"/> 
              <br/>
              {miPla.imagenPlato}
              </td>
          </tr>
          ))}
          
          

         
        </tbody>
      </table>
    </div>
    </div>  
    </>
  );
};
