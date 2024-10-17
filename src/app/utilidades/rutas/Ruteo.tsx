import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/Inicio";
import { MenuCrear } from "../../componentes/Menu/MenuCrear";
import { MenuListar } from "../../componentes/Menu/MenuListar";
import { MenuAdmin } from "../../componentes/Menu/MenuAdmin";
import { MenuActulizar } from "../../componentes/Menu/MenuActualizar";
import { Acerca } from "../../componentes/otros/Acerca";
import { NoEncontrado } from "../../componentes/NoEncontrado";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      
      <Route path="/mencre" element={<MenuCrear />} />
      <Route path="/menlis" element={<MenuListar />} />
      <Route path="/menadmin" element={<MenuAdmin />} />

      <Route path="/menactu/:codigo" element={<MenuActulizar />} />

      <Route path="/menacer" element={<Acerca />} />

      <Route path="*" element={<NoEncontrado />} />
      
    </Routes>
  );
};
