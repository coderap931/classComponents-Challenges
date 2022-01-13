import React, {Component} from 'react';

export default class Doge extends Component {
    constructor() {
        super()
        this.state = {dogoImg: ''}
    }

    fetchDoge() {
        fetch('https://dog.ceo/api/breeds/image/random', {
            method: 'GET'
        }).then(res => res.json())
            .then(res => {
                this.setState({dogoImg: res.message})
            })
        .catch((err) => console.log(err))
    }

    render(){
        return(
            <div className={'wrapper'}>
                <button className={'fetchDogeBtn'} onClick={() => this.fetchDoge()}>Load new Pupper</button>
                <br />
                <img src={this.state.dogoImg} />
            </div>
        )
    }
}
