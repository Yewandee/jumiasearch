
import React,{useState, useEffect, useRef} from 'react';
import { useNavigate, useLocation} from 'react-router-dom';

const SearchInput= ()=>{

    const  navigate= useNavigate();
    const [searchTerm, setSearchTerm]= useState('');
    const InputRef= useRef()
    let location = useLocation();

    const handleFormSubmit=(event)=>{

        event.preventDefault();

        if (location.pathname === '/') {

            if (sessionStorage.getItem('userLogin')) {

                navigate(`/product/${searchTerm}`);

            }else{

                navigate('/signin', {state:{searchTerm}})
            }
            
        }else{

            navigate(`/product/${searchTerm}`);
        }
    }

    useEffect(()=>{
        InputRef.current.focus()
    })

    const handleInputChange=(event)=>setSearchTerm(event.target.value);

    return(
        <form  onSubmit={handleFormSubmit} style={{width:'100%',marginBottom:'32px', display:'flex', justifyContent:'center'}}>
                <input ref={InputRef} onChange={handleInputChange} type='text' placeholder='Search Products' style={{width:'50%',paddingLeft:'10px', height:'50px'}} value={searchTerm}/>
        </form>
    )

}

export default SearchInput;