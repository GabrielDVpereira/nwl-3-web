import React from "react";
import mapMarkerImg from "../assets/marker.svg";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/all";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "dotenv/config";

import "../styles/pages/orphanages-map.css";

export default function OrphanagesMap() {
  console.log(process.env.MAP_TOKEN);
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="marker" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita :)</p>
        </header>
        <footer>
          <strong>Brasília</strong>
          <span>Df</span>
        </footer>
      </aside>

      <Map
        center={[-16.0133785, -48.0818218]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_TOKEN}`}
        />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}
