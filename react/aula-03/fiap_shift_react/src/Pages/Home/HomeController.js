import React from 'react'
import HomeView from './HomeView'

class HomeController extends React.Component {

    constructor(props) {
        super(props);

        //gerando logs da props
        console.log(" Chamando constructor() ");
        console.log(props);

        this.state = {
            count: 0,
            statusContador: 'Parado'
        }; //inicializando o state        
    }

    componentDidMount() {
        console.log(" Chamando componentDidMount ");

        //Inicializando o timeout
        
        this.gerenciarInterval = setInterval(() => {            
            if (this.state.statusContador === 'Rodando') {
                //atualizando o contador
                console.log(" Atualizando a classe ");
                this.setState({
                    count: this.state.count + 1
                });
            }
        }, 1000);        
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
        // Só irá atualizar quando o count for diferente de 1
        // if (nextState.count === 1) {
        //     console.log(" Chamando shouldComponentUpdate = false ");
        //     return false;
        // } else {
        //     console.log(" Chamando shouldComponentUpdate = true ");
        //     return true;
        // }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(" Chamando componentDidUpdate ");
    }

    componentWillUnmount() {
        clearInterval(this.interval)
        console.log(" Chamando componentWillUnmount ");
    }
    
    iniciar = () => {
        this.setState({
            statusContador: 'Rodando'
        });
    }

    pausar = () => {
        this.setState({
            statusContador: 'Pausado'
        });
    }

    parar = () => {
        this.setState({
            statusContador: 'Parado',
            count: 0
        });
    }

    render() {
        console.log(" Chamando Render " + this.state.count);
        return (
            //Chamando o View e passando o props count_info
            <HomeView
                count={this.state.count}
                iniciar={this.iniciar}
                pausar={this.pausar}
                parar={this.parar}
                statusContador={this.state.statusContador}
            />
        )
    }

}
export default HomeController;
