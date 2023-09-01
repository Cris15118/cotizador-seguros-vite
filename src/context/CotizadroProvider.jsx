import { createContext, useState } from "react";
import {
  obtenerDifereciaYear,
  calcularMarca,
  calcularPlan,
  formatearDinero,
} from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState("");
  const [resultado, setResultado]=useState(0)
  const [cargando, setCargando] = useState(false)

  const handleChangeDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  const cotizarSeguro = () => {
    // una base
    let resultado = 2000;
    // obtener diferecia de años
    const diferencia = obtenerDifereciaYear(datos.year);
    //hay que restar el 3% por cada año
    resultado -= (diferencia * 3 * resultado) / 100;
    //Americano 15% , Europeo 30% , Asiatico 5%
    resultado *= calcularMarca(datos.marca);
    //Basica 20%
    //completto 50%
    resultado *= calcularPlan(datos.plan);
    resultado = formatearDinero(resultado);
    setCargando(true)
    setTimeout(()=>{
        setResultado(resultado)
        setCargando(false)
    },3000)
    
  };

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguro,
        resultado,
        cargando
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };
export default CotizadorContext;
