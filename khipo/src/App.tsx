import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter} from "react-router-dom"
import { Router } from "./Routes/Router"


function App(){
  return (
    <ChakraProvider>    
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ChakraProvider>

  )
}

export default App