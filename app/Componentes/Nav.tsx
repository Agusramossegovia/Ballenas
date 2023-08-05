import './nav.css';

export default function Nav(){
    return(
        <nav className='nav'>
            <ul className='nav-lista'>
                <li className='nav-item'>Inicio</li>                
                <li className='nav-item'>Informacion</li>
                <li className='nav-item'>Nosotros</li>
                <li className='nav-item'>Sumate</li>
            </ul>
        </nav>
        )
}