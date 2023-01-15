import { ChakraProvider } from "@chakra-ui/react"
import axios from "axios"
import  { Route, Routes} from "react-router-dom"
import Signin from "../pages/Signin"
import Signup from "../pages/Signup"
import Userarea from "../pages/Userarea"
import ProtectedRoutes from "./ProtectedRoutes"

export function Router() {
      
    return (
        <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/userarea" element={<Userarea />} />
        </Routes>
    )
}