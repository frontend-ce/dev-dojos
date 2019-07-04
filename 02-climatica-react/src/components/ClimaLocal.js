import React from "react";

const ClimaLocal = ({ climaAtual }) => {
  const { weather, main, sys, name, wind } = climaAtual || {};
  return (
    <div className="climaatual container">
      {climaAtual ? (
        <>
          <h1>
            {name} - {sys.country}
          </h1>
          <h2>
            {main.temp}°C {weather.description}
          </h2>
          <div className="row">
            <h5 className="col-xs">
              Min: {main.temp_min} - Max: {main.temp_max}{" "}
            </h5>
            <h4 className="col-xs">
              Vento <strong>{wind.speed}km/h</strong>
            </h4>
            <h4 className="col-xs">Humidade {main.humidity}%</h4>
          </div>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default ClimaLocal;
