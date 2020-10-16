import React, { useEffect, useState } from "react";
import mapMarkerImg from "../assets/marker.svg";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/all";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "dotenv/config";

import "../styles/pages/orphanages-map.css";
import happyMapIcon from "../utils/mapIcon";
import api from "../config/api";

interface IOrphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  open_on_weekends: boolean;
  opening_hours: string;
}
export default function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<IOrphanage[]>();

  useEffect(() => {
    getOrphanages();
  }, []);

  const getOrphanages = async () => {
    const response = await api.get("/orphanages");
    setOrphanages(response.data);
  };

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

        {orphanages?.map((orphanage: IOrphanage) => (
          <Marker
            key={orphanage.id}
            position={[orphanage.latitude, orphanage.longitude]}
            icon={happyMapIcon}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#fff" />
              </Link>
            </Popup>
          </Marker>
        ))}
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}
