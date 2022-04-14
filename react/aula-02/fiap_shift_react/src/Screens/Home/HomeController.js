import React from 'react';
import HomeView from './HomeView'
import HomeModel from './HomeModel'

class HomeController extends React.Component {

    constructor() {
        super();
        this.homeModel = new HomeModel();//inicializando o view    
        this.homeModel.getSomeInfo();
        this.state = {
            count: 0
        };

        // setInterval(() => {
        //     this.setState({
        //         count: this.state.count + 1
        //     })
        // }, 1000);
    }

    soma10 = () => {
        return (
            this.setState({
                count: this.state.count + 10
            })
        );
    }

    render() {
        return (
            <HomeView count={this.state.count} soma10={this.soma10}/> //Chamando o View
        )
    }
}
export default HomeController;