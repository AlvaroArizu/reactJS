import React, {useState, useEffect} from 'react'

function ContenidoFuncion(){   
    const [texto,setTexto] = useState('')
    /*const arrayHook = useState('');
    const texto = arrayHook[0];
    const setTexto = arrayHook[1]*/
    const [titulo,setTitulo]=useState('Clase React')


    
    // const titulo = 'Funcion'
    useEffect(
        () => {
            console.log('componentDidMount - hook equivalente');
        }, 
        []
    );    

    useEffect(
        () => {
            console.log('componentDidUpdate - hook equivalente - Solo si cambia el estado texto o titulo',texto);
        }, 
        [texto, titulo]
    );   
    useEffect(
        () => {
            console.log('componentDidUpdate - hook equivalente - Solo si cambia el estado titulo',titulo);
        }, 
        [titulo]
    );
         

    useEffect(
        () => {
            return ()=>{
                console.log('componentWillUnmount - hook equivalente');
            }
        },
        []);
       
    return(
        <div>
            <h1>Titulo {titulo} </h1>
            <p>Contenido Función {texto}</p>
            <button onClick={()=>setTexto('HOLA')}>Agregar hola</button>
            <button onClick={()=>setTexto('')}>Quitar hola</button>

            <button onClick={()=>setTitulo('HOLA')}>Cambiar Titulo</button>
        </div>
    )
}
export default ContenidoFuncion