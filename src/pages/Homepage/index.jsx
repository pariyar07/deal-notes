import React from 'react'
import {HomeNav} from "components/Homepage/homepage-navbar"
import {HomeBody} from "components/Homepage/homepage-body"
import {Footer} from "components/Homepage/homepage-footer"

export const Homepage = () => {
    return (
        <>
            <HomeNav/>
            <HomeBody/>
            <Footer/>
        </>
    )
}