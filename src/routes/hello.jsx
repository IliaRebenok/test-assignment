import React from 'react'
import { Link } from 'react-router-dom'


const HelloPage = () => {
    return (
        <>
            <h2>Hello, World!</h2>
          
                <Link className='navButtons' to={`input`}>{`next >>`}</Link>
            
        </>
    )
}

export default HelloPage