import Loogo from "../Components/Encabezado/Marca"
import ListaInicio from "../Components/Encabezado/ListaInicio";
import "../Components/Layout/Styles.css"
import { Outlet } from "react-router-dom";

const Layout = ()=>{
    return (
        <div >
            <nav className="header">
            <Loogo/>
            <h1>ECOMMERCE</h1>
            <ListaInicio/>
            </nav>

            <div>
                <Outlet />
            </div>

            <div>
                <h1 className="header2">FOOTER</h1>
            </div>
        </div>


      );
}
export default Layout;