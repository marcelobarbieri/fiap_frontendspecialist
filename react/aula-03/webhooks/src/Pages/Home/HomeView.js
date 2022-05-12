import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Button} from '@mui/material';

export default function HomeView({count, iniciar, pausar, parar, statusContador}) {

    let botaoIniciar = null
    let botaoPausar = null
    let botaoParar = null

    if (statusContador === 'Parado') {
        botaoIniciar = <Button onClick={iniciar}>Iniciar</Button>
    }

    if (statusContador === 'Pausado') {
        botaoIniciar = <Button onClick={iniciar}>Iniciar</Button>
        botaoParar = <Button onClick={parar}>Parar</Button>   
    }

    if (statusContador === 'Rodando') {
        botaoParar = <Button onClick={parar}>Parar</Button>   
        botaoPausar = <Button onClick={pausar}>Pausar</Button>     
    }

    return (
        <Container maxWidth="xl">
            {statusContador}
            <Typography variant="h1">Contador = {count} </Typography>  
            {botaoIniciar}
            {botaoPausar}
            {botaoParar}
        </Container>
    );
}
