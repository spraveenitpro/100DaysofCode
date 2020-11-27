import GoogleMapReact from "google-map-react";

const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBblWYUKhUdSCnfzsbriYZziLcqZob1UQQ" }}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
