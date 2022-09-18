import React from "react";
import "../ItemDetail/ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";



const ItemDetail = ({ item }) => {

    const [agregarAlCarrito, setagregarAlCarrito] = useState(false);


    const agregarProducto = (quantity) => {
        setagregarAlCarrito(true);
  };

    return (
        <>
        <div key={item.id} className="container">
            <ul>
                <li>
                    <div className="container conten-detalle">
                    <img src={'/images/' + item.img} className="card-img-top card-ItemD" width="150px" alt={item.name} />
                        <div className="conetenedor-detalle">
                            <h2>{item.name}</h2>
                                <p>
                                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor 
                                     sit amet.
                                 </p>
                                <h3>$ {item.precio}</h3>
                                <hr />
                             
                                {
                                    agregarAlCarrito ? <Link to="/cart">Finalizar Compra</Link> : <ItemCount stock={5} inicial={1} agregarProducto={agregarProducto}/> 
                                }
                            
                                
                                
                        </div>
                    </div>
                </li>        
                <li>

                </li>
            </ul>
        </div>
        </>
    )
};

export default ItemDetail;

