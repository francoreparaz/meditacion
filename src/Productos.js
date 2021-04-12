import React from "react";
import { Card } from "react-bootstrap";
import "./Productos.css"
export const Productos = () => {
  let productos = [
    {
      nombre: "sahumerio",
      precio: "120",
    },
    {
      nombre: "sahumo",
      precio: "250",
    },
    {
      nombre: "perfume",
      precio: "500",
    },
    {
        nombre: "perfume",
        precio: "500",
      },
      {
        nombre: "perfume",
        precio: "500",
      },
      {
        nombre: "perfume",
        precio: "500",
      },
      {
        nombre: "perfume",
        precio: "500",
      },
      {
        nombre: "perfume",
        precio: "500",
      },
      {
        nombre: "perfume",
        precio: "500",
      },
      {
        nombre: "perfume",
        precio: "500",
      },
      {
        nombre: "perfume",
        precio: "500",
      },
      {
        nombre: "perfume",
        precio: "500",
      },
      {
        nombre: "perfume",
        precio: "500",
      }, 
  ];
  return (
    <div>
      <h1>Productos</h1>
      {productos.map((x) => 
        <Card border="primary" className="card">
          <Card.Body>
            <Card.Title>{x.nombre}</Card.Title>
            <Card.Text>
              Productos hechos por Conciencia Activa
            </Card.Text>
            <p> ${x.precio}</p>
          </Card.Body>
          <button onClick={()=>alert(`${x.nombre} añadido al carrito`)}> comprar</button>
        </Card>
      )}
    </div>
  );
};

export default Productos;
