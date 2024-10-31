export const MenuListar = () => {
  return (
    <>
    <div className="pt-5 d-flex justify-content-center">
    <div className="col-md-6">
      <table className="table">
        <thead>
          <tr>
            <th style={{width:"20%"}}>No.</th>
            <th style={{width:"30%"}}>Nombre de Plato</th>
            <th style={{width:"20%"}}>Acompañamiento</th>
            <th style={{width:"25%"}} className="text-center">Precio</th>
            <th style={{width:"25%"}}>Región</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td >1</td>
            <td>Bandeja Paisa</td>
            <td>Con aguacate</td>
            <td>35000</td>
            <td>Paisa</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mute Santendereano</td>
            <td>Con Arroz</td>
            <td>25000</td>
            <td>Andina</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Mojarra</td>
            <td>Con Arroz</td>
            <td>15000</td>
            <td>Costa</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>  
    </>
  );
};
