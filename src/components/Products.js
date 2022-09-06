
import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import {getProducts} from '../axios/getProducts'
import Product from './Product';
import SearchInput from './SearchInput'

const SearchProduct=()=>{
    
    const {productName}= useParams();
    const [products, setProducts]= useState([]);

    useEffect(()=>{
        getProducts(`product/search/${productName}/10`,setProducts)
    },[productName])

    return(
        <div className='container-fluid  d-flex flex-column align-items-center my-3'>

            <SearchInput />       

            <Product products={products}/>    

        </div>
    )
}

export default SearchProduct;