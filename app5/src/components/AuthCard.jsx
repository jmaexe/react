import React, {useEffect } from 'react';

function AuthCard({urlAuth,show}) {

    useEffect(()=>{
           if(show) {
            document.getElementById("myButton").click()
            console.log("show true")
           } else {
            document.getElementById("MyButtonClose").click()
           
            console.log("show false")
           }

           return () => {
           // document.getElementById("myButton").click()
            show = false;
            console.log("modal cancellato")
           }
        },[])
    
    return (
        <>
            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdropLabel" id='myButton'>
                Launch demo modal
            </button>

            <div className="modal fade" id="staticBackdropLabel" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Authorization request</h1>
                           
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id='MyButtonClose'></button>
                        </div>
                        <div className="modal-body">
                            <a href={urlAuth} id='linkAuth'>Click here</a>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id='buttonClose'>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default AuthCard;