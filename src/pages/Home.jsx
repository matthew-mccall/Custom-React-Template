import React, { useState } from 'react'
import VCenter from '../components/VCenter'
import DefaultLayout from '../layouts/DefaultLayout'
import $ from 'jquery'

export default function Home(props) {

    const [repos, setRepos] = useState(null);

    /*
    if (repos == null) {
        $.getJSON("https://api.github.com/users/mxtt-mmxix/repos", null, data => {
            setRepos(data);
        });
    }
    */

    return (
        <DefaultLayout>
            <VCenter>
                <div className="container">
                    <h1>Home Page</h1>
                    <p>This page demonstrates the use of this template.</p>
                </div>
            </VCenter>
        </DefaultLayout >
    )
}