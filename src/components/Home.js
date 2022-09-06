
import React,{useState,useEffect} from 'react';
import {getProducts} from '../axios/getProducts'
import Product from './Product';
import SearchInput from './SearchInput'

const Home= ()=>{

    const [products, setProduts]= useState([])

    useEffect(()=>{
        getProducts('bestSales',setProduts)
    },[])

    return(
        <div className='container-fluid  d-flex flex-column align-items-center my-3'>

            <SearchInput />
            <h2 className=''>Top Selling Products</h2>
            <div className='container row g-4 justify-content-center mt-2 px-0'>
                <Product products={products} />
            </div>

        </div>
    )
}

export default Home;