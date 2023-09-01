import { CotizadorProvider } from "./context/CotizadroProvider"
import AppSeguro from "./components/AppSeguro"


function App() {
  return (
    <CotizadorProvider>
      <AppSeguro />
    </CotizadorProvider>
    
  )
}

export default App