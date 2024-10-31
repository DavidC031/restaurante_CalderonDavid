export const MenuAdmin = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-6">
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: "10%" }}>No.</th>
                <th style={{ width: "30%" }}>Nombre de Plato</th>
                <th style={{ width: "20%" }}>Acompañamiento</th>
                <th style={{ width: "19%" }} className="text-center">Precio</th>
                <th style={{ width: "25%" }}>Región</th>
                <th style={{ width: "25%" }}>Opcion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Bandeja Paisa</td>
                <td>Con aguacate</td>
                <td>35000</td>
                <td>Paisa</td>
                <td>
                    <a href="/menactu/1">
                    <i className="fa-solid fa-pen-to-square"></i>
                    </a>
                  
                  &nbsp;
                  <i className="fa-solid fa-eraser"></i>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mute Santendereano</td>
                <td>Con Arroz</td>
                <td>25000</td>
                <td>Andina</td>
                <td>
                <a href="/menactu/2">
                    <i className="fa-solid fa-pen-to-square"></i>
                    </a>
                  &nbsp;
                  <i className="fa-solid fa-eraser"></i>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Ajiaco</td>
                <td>Con Arroz</td>
                <td>15000</td>
                <td>Costa</td>
                <td>
                <a href="/menactu/3">
                    <i className="fa-solid fa-pen-to-square"></i>
                    </a>
                  &nbsp;
                  <i className="fa-solid fa-eraser"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
