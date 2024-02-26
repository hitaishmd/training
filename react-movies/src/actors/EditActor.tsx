import ActorForm from "./ActorForm";

export default function EditActor(){
    return  (
        <>
            <h3>Edit Actor</h3>
            <ActorForm model={{name:'Tom Holland',dateOfBirth:new Date('1996-06-01T00:00:00'),
                pictureURL: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTwrFoGDxV_jY39G_DmmLYDULeSv32tbKTWf4scKccVz0r0wZrS'
            }}
                onSubmit={values=>console.log(values)}/>
        </>
    )
}