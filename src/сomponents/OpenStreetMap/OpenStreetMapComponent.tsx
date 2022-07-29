import { useState } from "react";
import SearchBox from "./SearchBox";
import Maps from "./Maps";
import { IPlaces, IAdressLatLon } from "./types";
import "./style.css";

interface MapsProps {
  setAddressLatLon: React.Dispatch<React.SetStateAction<IAdressLatLon | null>>;
}

export const OpenStreetMapComponent = ({ setAddressLatLon }: MapsProps) => {
  const [selectPosition, setSelectPosition] = useState<IPlaces | null>(null);

  return (
    <div className="container-map">
      <div className="container-search">
        <SearchBox
          setSelectPosition={setSelectPosition}
          setAddressLatLon={setAddressLatLon}
        />
      </div>
      <div className="map">
        <Maps
          selectPosition={selectPosition}
          setAddressLatLon={setAddressLatLon}
        />
      </div>
    </div>
  );
};
