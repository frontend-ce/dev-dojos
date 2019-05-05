import React, { Component } from 'react';
import axios from 'axios';

export default class ClimaCapitais extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cidades: []
        };
    }

    buscarCapitais = (event) => {
        axios
            .get(`https://br-cidade-estado-nodejs.glitch.me/cidades?_page=1&_limit=5&q=${event.target.value}`)
            .then(response => {
                this.setState({ cidades: response.data })
            });
    }

    render() {
        const { cidades } = this.state;

        return (
            <div>
                {/* <div className="input-busca">
                    <input type="text" onChange={this.buscarCidades} />
                </div>
                <div className="lista-cidades">
                    <ul>
                        {cidades.map((item, index) =>
                            <li key={index}><a href="#" onClick={() => this.props.getClimaAtualPorCidade(item.cidade)} >{item.cidade}</a></li>
                        )}
                    </ul>
                </div> */}
            </div>
        );
    }
}
