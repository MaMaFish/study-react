import React, {useState, useEffect} from 'react'

function SearchPanel({param, setParam}) { 
  
    const [users, setUsers] = useState([])
   

    return (
        <div>
            <input val={param.name} onChange={evt => setParam({
                ...param,
                name: evt.target.value
            })}/>
            <select value={param.personId} onChange={evt => setParam({
                ...param,
                personId: evt.target.value
            })}>
                <option value={''}>负责人</option>
                {
                    users.map(user => <option value={user.id}>user.name</option>)
                }
            </select>
        </div>
    )
}

export default SearchPanel
