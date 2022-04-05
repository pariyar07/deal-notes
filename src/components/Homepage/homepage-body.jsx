import React from 'react'
import { BsFillPlayFill, BsFillLightbulbFill } from 'react-icons/bs'

export const HomeBody = () => {
    return (
        <div className="home-body-wrapper">
            <div className="home-top-section">
                <div className="body-card">
                    <img className="body-card-img" src="assets/lightbulb.png" alt="light bulb" />
                    <p className="body-card-para">Do your</p>
                    <p className="body-card-para-brand">DEAL...</p>
                </div>
                <div className="body-info">
                    <h1 className="body-feature">Easy.</h1>
                    <h1 className="body-feature">Productive.</h1>
                    <h1 className="body-feature">Minimalistic.</h1>
                    <div className="body-tagline">
                        <img className="target-img" src="assets/target.png" alt="target" />
                        <p>We keep everything together in one place. So you can focus on what you love.</p>
                    </div>
                    <div className="body-btn">
                        <div className='how-it-works'>
                            <BsFillPlayFill />
                            <button>How it Works</button>
                        </div>
                        <div className='learn-more'>
                            <BsFillLightbulbFill />
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
                <img className="home-img" src="assets/home-img.png" alt="achievement" />
        </div>
    )
}