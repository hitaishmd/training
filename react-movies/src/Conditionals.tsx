export default function Conditionals(){
    const canSee=false;
    return (
        <>
            <h1>Conditionals Examples</h1>
            {canSee ? <div>You are seeing the secret 420</div>:<span>You cannot see this secret</span>}
        </>
    );
}