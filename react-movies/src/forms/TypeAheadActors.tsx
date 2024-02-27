import { actorMovieDTO } from "../actors/actors.model";
import { Typeahead } from "react-bootstrap-typeahead";

export default function TypeAheadActors(props:typeAheadActorsProps){

    const actors:actorMovieDTO[]=[
        {id:1,name:'Juice WRLD',character:'',picture:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTa1_JmHekQc48LsXkrbNUA1QFHR8V3nvOqwqIrRLVjfvCktqVEJQDu7J8sj56ZLy1UuWWiJA'},
        {id:2,name:'Rahul',character:'',picture:''},
        {id:3,name:'Ganesh',character:'',picture:''}
    ]
    return(
        <div className='mb-3'>
            <label>{props.displayName}</label>
            <Typeahead id="typeahead"
                onChange={(actor)=>{console.log(actor);}}
                options={actors}
                labelKey="name"
                filterBy={['name']}
                placeholder="Write the name of the actor"
                minLength={1}
                flip={true}/>
        </div>
    )
}

interface typeAheadActorsProps{
    displayName:string;
    actors:actorMovieDTO[];
}