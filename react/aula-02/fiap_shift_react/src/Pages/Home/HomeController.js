import React, { Component } from 'react';
import HomeView from './HomeView'

class HomeController extends Component {

    constructor() {
        super();
        this.state = {
            count: 0,
            estaCarregando: false
        };

        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000);
    }


    addCount = () =>  {
        this.setState({
            count: this.state.count + 10
        })
    }

    iniciaLogin = () => {        
        this.setState({
            estaCarregando: !this.state.estaCarregando
        })        
    };


    render() {
        return (
            <HomeView 
                count={this.state.count} 
                add10={this.addCount} 
                estaCarregando={this.state.estaCarregando} 
                iniciaLogin={this.iniciaLogin} 
            /> //Chamando o View
        )
    }
}
export default HomeController;