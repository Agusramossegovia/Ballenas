import './contacto.css';

export default function Contacto (){
    return(
        <>
        <h1>Contacto</h1>

        <form action="" method="">
            <label>
                Nombre:
                <input type="text"/>
            </label>
            <label>
                Mail:
                <input type="text"/>
            </label>
            <label>
                Comentario:
                <textarea></textarea>
            </label>
            <button type='submit'>Enviar</button>



        </form>
        </> 
    )
}