import React from 'react'

const LoadingPage = () => {
    return (
        <div className='position-absolute top-50 start-50 translate-middle' >
            <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }}>
            </div>
        </div>)
}

export default LoadingPage