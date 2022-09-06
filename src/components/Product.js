
import React from 'react';


const renderOldPrice=(product)=>{

    if(product.oldPrice){
        return (
            <span style={{textDecoration:'line-through', marginRight:'15px'}}>
                {product.oldPrice}
            </span>
        )
    }
    
}

const renderProducts=(products)=>{

    if (!products.length) {
        
        return <p style={{fontWeight:'bold', fontSize:'32px', textAlign:'center',  marginTop:'20px'}}>Loading!</p>
    }

    return(
    
            <div className="container row  justify-content-center" style={{gap:'20px', padding:'0px', marginTop:'20px', marginBottom:'150px'}}>
                {
                    products.map(product=>{
                        return(
                            <div className="card p-0" key={product.url} style={{width:'30%'}}>
                                <img src={product.image} className="card-img-top" alt={product.name} style={{borderBottom:'solid thin grey', marginTop:'10px',}}/>
                                <div className="card-body">
                                    <div className="card-text">
                                        <span style={{display:'block',fontWeight:'bold'}}>{product.name}
                                        </span>
                                        <p style={{marginTop:'10px'}}> Price: {renderOldPrice(product)} 
                                             {product.price}
                                        </p>
                                    </div>
                                </div>                    
                            </div>
                        )
                    })
                }                        
            </div>)        
}

 
const Product= ({products})=>{

    return (
        renderProducts(products)
    )
}

export default Product;
