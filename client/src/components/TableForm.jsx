import React from 'react';
import { Table } from 'react-bootstrap';



const TableForm = ({show}) => {
    return (

       < Table striped bordered hover>
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
          {/* mapea y renderiza en una tabla la propiedad
           show del stado input */}
          {show?.map((e, i) => (
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
    );
}



export default TableForm;