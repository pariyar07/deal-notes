import React from 'react'
import {LandingNav} from "components/Landingpage/landingpage-navbar"
import {LandingPageBody} from "components/Landingpage/landingpage-body"
import {Footer} from "components/Landingpage/landingpage-footer"

export const LandingPage = () => {
    return (
        <>
            <LandingNav/>
            <LandingPageBody/>
            <Footer/>
        </>
    )
}