import React from 'react'
import spinnerImage from '../../asserts/spinners/loadingDog.gif'

const SpinnerApp = () => {
    return (
        <React.Fragment>
            <div className='spinnerContainer'>
                <img src={spinnerImage} alt=''/>
            </div>

        </React.Fragment>
            
        
    )
}

export default SpinnerApp
