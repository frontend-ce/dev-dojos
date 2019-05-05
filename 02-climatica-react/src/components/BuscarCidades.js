import React, { Component } from "react";
import axios from "axios";

export default class BuscaCidades extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cidades: [],
    };
  }

  buscarCidades = event => {
    axios
      .get(
        `https://br-cidade-estado-nodejs.glitch.me/cidades?_page=1&_limit=5&q=${
          event.target.value
        }`,
      )
      .then(response => {
        this.setState({ cidades: response.data });
      });
  };

  render() {
    const { cidades } = this.state;

    return (
      <div>
        <div className="input-busca">
          <input type="text" onChange={this.buscarCidades} />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966">
            <path d="M55.146 51.887L41.588 37.786c3.486-4.144 5.396-9.358 5.396-14.786 0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837 1.192-1.147 1.23-3.049.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z" />
          </svg>
        </div>
        <div className="lista-cidades">
          <ul>
            {cidades.map((item, index) => (
              <li
                key={index}
                onClick={() => this.props.getClimaAtualPorCidade(item.cidade)}
              >
                {item.cidade}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
