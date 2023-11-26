import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TelaHome from './Pages/TelaHome/TelaHome';
import SobreNos from './Pages/TelaSobreNos/TelaSobreNos';
import './App.css';
import TelaDeLogin from './Pages/TelaLogin/TelaDeLogin';
import TelaRegistro from './Pages/TelaRegistro/TelaRegistro';
import TelaAluno from './Pages/TelaAluno/TelaAluno'
import TelaEditarPerfil from "./Pages/TelaEditarPerfil/TelaEditarPerfil";
import TelaCurso from "./Pages/TelaCurso/TelaCurso";
import TelaSobreNos from "./Pages/TelaSobreNos/TelaSobreNos"

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TelaDeLogin />,
    },
    {
      path: "/TelaRegistro",
      element: <TelaRegistro />,
    },

    {
      path: "/TelaHome",
      element: <TelaHome />,
    },

    {
      path: "/TelaAluno",
      element: <TelaAluno />,
    },

    {
      path: "/TelaEditarPerfil",
      element: <TelaEditarPerfil />,
    },

    {
      path: "/TelaCurso",
      element: <TelaCurso />,
    },

    {
      path: "/TelaSobreNos",
      element: <TelaSobreNos/>,
    },

  ]);

  return <RouterProvider router={router} />;
}
