import '../styles/products.css'
import Slider from './slider'
import React from 'react'



const Product = ({product}) => {
    


    const {title,price,price_max,description,images,id,options} = product




    return (


        <div class='contenedor' id="contenedor">

  
     <div class="imagenes">
            
            
                <Slider
                
                    props={images}
                
                
                />
          
          </div> 
          
          
          <div class="content">
          
            <div class="id">{id} </div>
            <div class="titulo">{title} </div>
                <div class="prices">
                    <div class="price">${price}</div>
                    <div class="price_max"> <strike>${price_max}</strike></div></div>
            {/* <div class="colores"><div class= "color">{options}</div></div> */}
            {/* <div class="tallas"><div class="talla">{options} </div></div> */}
                <div class="botones">
                <div class="agg"><button id="boton" class="btn" type="reset" onclick="">Agregar</button></div>
            <div class="like"><button id="boton" class="btn" type="reset" onclick="">like</button></div>
        </div>
            <div class="description">{description}</div>
          
            </div>
          
        
            </div>

    )
    

  
}




export default Product