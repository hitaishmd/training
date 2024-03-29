
import { useFormik, useFormikContext } from "formik";
import Map from "../utils/Map"
import { coordinateDTO } from "../utils/coordinate.model";


export default function MapField(props:mapFieldProps){

    const {values}=useFormikContext<any>();


    function handleMapClick(coordinates:coordinateDTO){
        values[props.latField]=coordinates.lat;
        values[props.lngField]=coordinates.lng;
    }

    return (
        <Map
            coordinates={props.coordinates}
            handleMapClick={handleMapClick} readOnly={false}        />
    )
}

    interface mapFieldProps{
        coordinates:coordinateDTO[];
        latField:string;
        lngField:string;
    }