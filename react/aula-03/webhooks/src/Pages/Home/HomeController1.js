import React, { useState, useEffect, useRef } from 'react'
import HomeView from './HomeView'

const HomeController = () => {

    const [count, setCount] = useState(0);
    let gerenciaInterval = null;

    useEffect(() => {
        console.log('Montagem do Componente');
        gerenciaInterval = setInterval(() => {
            console.log('Atualizando o contador');
            setCount((count) => { return count + 1 });
        },1000);

        return () => {
            console.log('Desmontagem do Componente');
            clearInterval(gerenciaInterval);
        }
    },[]);
    // sem o segundo parametro, executa sempre que o componente for renderizado
    // com o segundo parametro vazio, na montagem e desmontagem do componente
    // com o segundo parametro com informação, executa na alteração da informação

    useEffect(() => {
        console.log('Depois de renderizar');       
        return () => {
            console.log('Antes de renderizar');
        }
    });

    useEffect(() => {
        console.log('Depois de alterar o count');       
        return () => {
            console.log('Antes de renderizar ao mudar o count');
        }
    },[count]);    

    const alteraCount = () => {
        // setCount((count) => { return count + 1 });
    }

    console.log(" Chamando Render " + count);
    return (
        //Chamando o View e passando o props count_info
        <HomeView
            count={count}
            alteraCount={alteraCount}
        />
    )
}
export default HomeController;