
export default function RecordsPerPageSelect(props:recordsPerPageSelectProps){
    return (
        <div className="mb-3" style={{width:'150px'}}>
        <label>Records per page : </label>
        <select className="form-control"
                defaultValue={5}
                onChange={e=>{
                    props.onChange(parseInt(e.currentTarget.value,10))
                }}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
        </select>
    </div>
    )
}

interface recordsPerPageSelectProps{
        onChange(setRecordsPerPage:number):void;
}