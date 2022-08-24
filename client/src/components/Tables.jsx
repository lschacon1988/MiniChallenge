import React from "react";
import {  Table } from "react-bootstrap";
/**importo el archivo que contiene la data para la tabla */
import { dataTable } from "../data/DataTable";
import style from './styleTable.module.css'


const TableData = () => {
  return (
    <div className={style.tableContainer}>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Carrera</th>
            <th>Hobbie</th>
          </tr>
        </thead>
        <tbody>
          {/* mapea y renderiza la data en una tabla de bootstrap */}
          {dataTable.map((e, i) => (
            <tr key={i + 1}>
              <td>{i + 1}</td>
              <td>{e.nombre}</td>
              <td>{e.edad}</td>
              <td>{e.carrera}</td>
              <td>{e.hobbie}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableData;
