import axios from "axios"
import { server } from "../server"



export const getAllProducts = () => async(dispatch) => {

    try{

        dispatch({
            type:"getAllProductRequest"
        })
        const {data} = await axios.get(
            `${server}/product/getAllProduct`, 
            {
                withCredentials:true
            }
        )

        dispatch({
            type:"getAllProductSuccess",
            payload:data.products
        })

        
    }catch(error){
        dispatch({
            type:"getAllProductFail",
            payload:error.response.data.message
        })
    }
}