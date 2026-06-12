// import "./WelcomeChild.cs
import waving from './../waving.png'

import call_center from './../Call_Center.json'
import Lottie from 'lottie-react'
import full_support from './../full_support.json'



function WelcomeChild() {
    return (
        <div
            style={{
                width: "300px",
                margin: "0 auto",
            }}
        >
            <Lottie
                animationData={full_support}
                loop={true}
            />
        </div>
    );
}


export default WelcomeChild;