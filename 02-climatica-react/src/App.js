import React, { Component } from "react";
import axios from "axios";

import "../node_modules/flexboxgrid/css/index.min.css";
import "./App.scss";
import ClimaLocal from "./components/ClimaLocal";
import BuscaCidades from "./components/BuscarCidades";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {
        lat: null,
        lon: null,
      },
    };
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(this.updateLocation);
  }

  updateLocation = position => {
    const { latitude, longitude } = position.coords;
    const location = {
      lat: latitude,
      lon: longitude,
    };
    this.getClimaAtualPorPosicao(latitude, longitude);
    this.setState({ ...this.state, location });
  };

  getClimaAtualPorPosicao = (lat, lon) => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?APPID=e26ac13ac93e35d3f18a0fe899791d93&lat=${lat}&lon=${lon}&units=metric&lang=pt`,
      )
      .then(response => {
        this.setState({ ...this.state, climaAtual: response.data });
      });
  };

  getClimaAtualPorCidade = cidade => {
    this.setState({ ...this.state, climaAtual: null });

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?APPID=e26ac13ac93e35d3f18a0fe899791d93&lang=pt&units=metric&q=${encodeURI(
          cidade,
        )},BR`,
      )
      .then(response => {
        this.setState({ ...this.state, climaAtual: response.data });
      });
  };

  render() {
    return (
      <div>
        <ClimaLocal climaAtual={this.state.climaAtual} />
        <BuscaCidades getClimaAtualPorCidade={this.getClimaAtualPorCidade} />
      </div>
    );
  }
}
