import { useContext } from "react";
import CotizadorContext from "../context/CotizadroProvider";



const useCotizador = ()=>{
    return useContext(CotizadorContext)
}

export default useCotizador