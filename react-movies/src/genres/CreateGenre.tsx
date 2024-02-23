import GenreForm from "./GenreForm";


export default function CreateGenre() {

    return (
        <>
            <h3>Create Genres</h3>
            <GenreForm model={{name:''}}
                onSubmit={async value=>{
                await new Promise(r=>setTimeout(r,100));
                console.log(value);
             }}
            />
        </>
    )
}