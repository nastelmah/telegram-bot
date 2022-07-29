import React, { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import iconUrl from "./location_marker.svg";
import L from "leaflet";
import { IAdressLatLon, IPlaces } from "./types";

const icon = L.icon({
  iconUrl: iconUrl,
  iconSize: [38, 38],
});

function ResetCenterView(props: any) {
  const { selectPosition } = props;
  const map = useMap();

  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(selectPosition?.lat, selectPosition?.lon),
        map.getZoom(),
        {
          animate: true,
        }
      );
    }
  }, [selectPosition, map]);

  return null;
}

export interface IPropsMaps {
  selectPosition: IPlaces | null;
  setAddressLatLon: React.Dispatch<React.SetStateAction<IAdressLatLon | null>>;
}

export default function Maps({ selectPosition, setAddressLatLon }: IPropsMaps) {
  let locationSelection = null;
  if (selectPosition) {
    locationSelection = {
      lat: selectPosition.lat,
      lng: selectPosition.lon,
    };
  }

  const center = {
    lat: 53.893009,
    lng: 27.567444,
  };

  const [position, setPosition] = useState(null);

  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker: any = markerRef.current;
        if (marker != null) {
          console.log("current position", marker.getLatLng());
          setPosition(marker.getLatLng());
          setAddressLatLon(marker.getLatLng());
        }
      },
    }),
    []
  );

  return (
    <MapContainer
      center={center}
      zoom={8}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        <Marker
          position={
            position ? position : locationSelection ? locationSelection : center
          }
          icon={icon}
          draggable={true}
          eventHandlers={eventHandlers}
          ref={markerRef}
        >
          <Popup>Delivery location.</Popup>
        </Marker>
      }

      <ResetCenterView selectPosition={selectPosition} />
    </MapContainer>
  );
}
