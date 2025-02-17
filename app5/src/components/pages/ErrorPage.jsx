import React from 'react'

const ErrorPage = ({ error }) => {
    return (
        error.includes("401") ?
            <p>Per favore effettua nuovamente il login</p>
            :
            <p>Si è verificato un errore: {JSON.stringify(error)}</p>
    )
}

export default ErrorPage