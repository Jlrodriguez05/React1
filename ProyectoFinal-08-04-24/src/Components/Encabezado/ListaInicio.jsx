import "../Layout/Styles.css"
import { Link } from 'react-router-dom';

const ListaInicio =()=>{
    return(
<ul className="lista">
<li> <Link to="/home"> <button>Home</button></Link></li>
<li> <Link to="/productos"><button>Productos</button></Link></li>
{/*<li> <Link to="/carrito"><button>Carrito</button></Link></li>*/}
</ul>
    );
}
export default ListaInicio;