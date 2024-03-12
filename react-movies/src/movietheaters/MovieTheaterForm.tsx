import { Form, Formik, FormikHelpers } from "formik";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import { movieTheaterCreationDTO } from "./MovieTheater.model";
import * as Yup from 'yup';
import Map from "../utils/Map";
import MapField from "../forms/Mapfield";
import { coordinateDTO } from "../utils/coordinate.model";

export default function MovieTheaterForm(props:movieTheaterForm){

    function transformCoordinates():coordinateDTO[] {
        if(props.model.latitude&&props.model.longitude){
            const response:coordinateDTO={lat:props.model.latitude,lng:props.model.longitude}
            return [response];
        }
        return [];
    }

    return(
        <Formik 
        initialValues={props.model} 
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
            name:Yup.string().required('This Field is mandatory').firstLetterUppercase()
        })}
        >
            {(formikProps)=>(
                <Form placeholder={undefined}>
                    <TextField displayName="Name" field="name"/>
                    <div style={{marginBottom:'1rem'}}>
                        <MapField latField={"latitude"} lngField={"longitude"} coordinates={transformCoordinates()}/>
                    </div>
                    <Button disabled={formikProps.isSubmitting} type="submit">Save Changes</Button>
                    <Link className="btn btn-secondary" to="/movietheaters">Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}

interface movieTheaterForm{
    model:movieTheaterCreationDTO;
    onSubmit(values:movieTheaterCreationDTO,actions:FormikHelpers<movieTheaterCreationDTO>):void;
}