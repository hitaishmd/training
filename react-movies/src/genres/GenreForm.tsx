import { Link } from "react-router-dom";
import Button from "../utils/Button";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from 'yup';
import TextField from "../forms/TextField";
import { genreCreationDTO } from "./genres.model";

export default function GenreForm(props:genreFormProps){
    return (
        <Formik initialValues={props.model}
                onSubmit={props.onSubmit}
                validationSchema={Yup.object({
                    name: Yup.string().required("This field is mandatory").max(50,'Max Length Is 50 Characters')
                })}
            >
                {(formikProps) => (<Form placeholder={undefined}>
                    <TextField field="name" displayName="Name" />
                    <Button disabled ={formikProps.isSubmitting} type='submit'>Save Changes</Button>
                    <Link className="btn btn-secondary" to="/genres">Cancel</Link>
                </Form>)}


            </Formik>
    )
}

interface genreFormProps{
    model:genreCreationDTO;
    onSubmit(value:genreCreationDTO,action:FormikHelpers<genreCreationDTO>):void;
}