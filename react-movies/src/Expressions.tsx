export default function Expressions(){
    const subtext="This is a subtext";
    
    const reactLogoURL="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png";

    const duplicate=(value:number)=>value*2;

    return(
        <>
            <h1>Expressions Sample</h1>
            <h2>{subtext.toUpperCase()}</h2>
            <h3>The double of 3 is {duplicate(3)}</h3>
            <img src={reactLogoURL} alt="react logo"/>
        </>

    )

}