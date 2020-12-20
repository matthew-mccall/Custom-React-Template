import React from 'react'
import { Link } from 'react-router-dom'
import VCenter from '../components/VCenter'
import DefaultLayout from '../layouts/DefaultLayout'

export default function NotFound(props) {
    return (
        <DefaultLayout>
            <VCenter>
                <div className="text-center">
                    <h1 className="display-1">404 - Not Found</h1>
                    <p className="lead">We're sorry, but the page you are looking for was not found.</p>
                    <p>Return to the <Link to="/">home</Link> page.</p>
                </div>
            </VCenter>
        </DefaultLayout>
    )
}