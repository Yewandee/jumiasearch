
import Axios from 'axios';

export async function  getProducts(path,functn) {

    try {

        const fetchedProducts= await Axios.get(`https://jumia-service.p.rapidapi.com/api/${path}`,{
            headers: {
                'X-RapidAPI-Key': '2565c29410msh5d5d2f756f9eed5p130a89jsn0a7a959312b9',
                'X-RapidAPI-Host': 'jumia-service.p.rapidapi.com'
            }
        })
        
        const newArray=fetchedProducts.data.splice(0,11);
        functn(()=>newArray);

    } catch (error) {
         
        console.log(error.message)
    }
    
}