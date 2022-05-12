import React, { useState, useEffect, useRef } from 'react'
import HomeView from './HomeView'

const HomeController = () => {

    const [count, setCount] = useState(0);
    const [statusContador, setStatusContador] = useState("Parado");
    
    let gerenciaInterval = null;

    useEffect(() => {                
        console.log('Montagem do Componente');
        gerenciaInterval = setInterval(() => {
            if (statusContador === "Rodando") {
                console.log('Atualizando o Contador');
                setCount((count) => { return count + 1 });
            }
        },1000);

        return () => {
            console.log('Desmontagem do Componente');
            clearInterval(gerenciaInterval);
        }
    },[]); 

    const iniciar = () => {
        setStatusContador("Rodando");
    }

    const pausar = () => {
        setStatusContador("Parado");
    }

    const parar = () => {
        setStatusContador("Parado");
        setCount(0);
    }    
    
    return (
        //Chamando o View e passando o props count_info
        <HomeView
            count={count}
            statusContador={statusContador}
            iniciar={iniciar}
            pausar={pausar}
            parar={parar}            
        />
    )
}
export default HomeController;