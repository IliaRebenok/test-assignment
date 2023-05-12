import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const InputPage = () => {
    // state for data received from input. Must be an object to be passed to another route
    const [data, setData] = useState({ data: 'Ничего не написали' });
    console.log(data)    
    
    return (
        <div>
                <input
                    placeholder={ data.data }
                    type="text"
                    required
                    onChange={(e) => setData({data: e.target.value})}
                />
            <div>
                <Link className='navButtons' to={`/`}>{`<< back`}</Link>
                <Link className='navButtons' to={`/output`} state={{ data: data }}>{`next >>`}</Link>
            </div>
        </div>
    )
}

export default InputPage