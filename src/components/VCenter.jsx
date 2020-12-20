import React from 'react'

export default function VCenter(props) {
    return (
        <div className="container-fluid h-100">
            <div className="row h-100">
                <div className="col my-auto">
                    {props.children}
                </div>
            </div>
        </div>
    )
}