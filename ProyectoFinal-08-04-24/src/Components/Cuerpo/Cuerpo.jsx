import Imgcompras from '../Img/Compras.png';
import Img2 from '../Img/portadacarrito.png';
import "../Layout/Styles.css"


const Cuerpo =()=>{
return(
    <div className='cuerpo'>
       
    <img src={Imgcompras } alt="Cuerpo" className='im'/>
    <div className='circulo'>
    <h2  className='texto'>Bienvenidos a su Tienda!</h2>
    <p className='texto'>Entreg Proyecto Final ReactJS-1</p>
    <img src={Img2} alt="Cuerpwo" className='im2 , texto'/>
    </div>
       
        
    </div>
)
}
export default Cuerpo;