import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";



const OutputPage = () => {

    const location = useLocation();
    const data = location.state?.data;

    return (
        <>
            <div className='outputWrap'>
                <div className='message'>{data ? data.data : 'empty'}</div>
            </div>

            
            <Link className='navButtons' state={{ data: data }} to={`/input`}>{`<< back`}</Link>
            
        </>
    )
}

export default OutputPage