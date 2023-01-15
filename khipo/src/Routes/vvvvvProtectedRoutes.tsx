import React from 'react';
import { Router } from './Router';
import UserServices from '../Services/UserService';

const userService = new UserServices();

const ProtectedRoutes = ({children}: any) => {
  const usuarioAutenticado = userService.usuarioAutenticado()
  console.log('usuarioAutenticado', usuarioAutenticado)
  return usuarioAutenticado ? children : <Router/>
}
 
export default ProtectedRoutes;