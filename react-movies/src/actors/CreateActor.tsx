import ActorForm from "./ActorForm";

export default function CreateActor(){
    return  (
        <>
            <h3>Create Actor</h3>
            <ActorForm model={{name:'',dateOfBirth:new Date('1996-06-01T00:00:00')}}
                onSubmit={values=>console.log(values)}/>
        </>
    )
}