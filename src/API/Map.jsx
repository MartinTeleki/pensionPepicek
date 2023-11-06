import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";

const initialLatitude = 49.0370899;
const initialLongitude = 14.1338883;

const MapWithAddress = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const map = L.map(mapRef.current).setView(
        [initialLatitude, initialLongitude],
        14
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        map
      );

      L.marker([initialLatitude, initialLongitude])
        .addTo(map)
        .bindPopup("Adresa: penzion U Pepíčka")
        .openPopup();
    };

    initMap();
  }, [initialLatitude, initialLongitude]);

  return <div ref={mapRef} className={styles.map} />;
};

export default MapWithAddress;
