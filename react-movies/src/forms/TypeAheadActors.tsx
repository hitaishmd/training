import  {actorMovieDTO}  from "../actors/actors.model";
import {RenderMenuItemChildren, Typeahead} from "react-bootstrap-typeahead";

export default function TypeAheadActors(props:typeAheadActorsProps){

    const actors:actorMovieDTO[]=[
        {id:1,name:'Juice WRLD',character:'',picture:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTa1_JmHekQc48LsXkrbNUA1QFHR8V3nvOqwqIrRLVjfvCktqVEJQDu7J8sj56ZLy1UuWWiJA'},
        {id:2,name:'NLE Choppa',character:'',picture:'https://e.snmc.io/i/600/s/0dd67a06a257c31c83de955db21cd067/8359568/nle-choppa-top-shotta-cover-art.jpg'},
        {id:3,name:'King Von',character:'',picture:'https://s.yimg.com/ny/api/res/1.2/hArQylsPW2DfVOPETfShog--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://media.zenfs.com/en/complex584/c3cfd6daa08c25aa24875ee2d3172662'}
    ]
    return(
        <div className='mb-3'>
            <label>{props.displayName}</label>
            <Typeahead 
                id="typeahead"
                onChange={(actor)=>{

                    if(props.actors.findIndex(x=>x.id===actors[0].id)===-1){
                        if(props.onAdd){
                        props.onAdd(actors[0])
                        }
                    }
                    console.log(actor)}}
                options={actors}
                labelKey="name"
                filterBy={['name']}
                placeholder="Write the name of the actor"
                minLength={1}
                flip={true}
                renderMenuItemChildren={renderMenuItemChildren}
            />
        </div>
    )
}

interface typeAheadActorsProps{
    displayName:string;
    actors:actorMovieDTO[];
    onAdd?(actors:actorMovieDTO):void
}

const renderMenuItemChildren: RenderMenuItemChildren = (option) => {
    const actor = option as actorMovieDTO; // Casting option to actorMovieDTO
    return (
        <>
            <img 
                alt="actor" 
                src={actor.picture}
                style={{
                    height: '64px',
                    marginRight: '10px',
                    width: '64px'
                }}
            />
            <span>{actor.name}</span>
        </>
    );
};