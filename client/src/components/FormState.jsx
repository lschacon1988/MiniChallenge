import React from "react";
import { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import style from "./styleForm.module.css";
import TableForm from "./TableForm";

const FormState = () => {  
/** declaro el estado input con las propiedades correspondiente  */
  const [input, setInput] = useState({
    nombre: "",
    edad: 0,
    carrera: "",
    hobbie: "",
    show: [],
  });
/** la funcion handleChange captura 
 * el valor de cada input y lo setea en el estado */
  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  /** la funcion handleSubmite concantena todas las propiedades
   *  del estado input en la propiedad show */
  function handleSubmite(e) {
    e.preventDefault();
    setInput({
      ...input,
      show: [...input.show, input],
    });
  }
  return (
    <div className={style.container}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onChange={(e) => handleChange(e)}
            value={input.nombre}
            name="nombre"
            type="text"
            placeholder="Nombre"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Edad</Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e)}
            value={input.edad}
            name="edad"
            type="number"
            placeholder="Edad"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Carrera</Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e)}
            value={input.carrera}
            name="carrera"
            type="text"
            placeholder="Carrera"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Hobbie</Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e)}
            value={input.hobbie}
            name="hobbie"
            type="text"
            placeholder="Hobbie"
          />
        </Form.Group>
        <Button
          onClick={(e) => handleSubmite(e)}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
      
      <TableForm show={input.show}/>
    </div>
  );
};

export default FormState;
