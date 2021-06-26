// Step 1: Import your component
import * as React from 'react'  
// import { Link } from "gatsby"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
// const AboutPage = () => {
//     return (
//         <main>
//             <title>About Me</title>
//             <h1>About Me</h1>
//             <Link to="/">Back to Home</Link>
//             <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
//         </main>
//     )
// }

const PageOne = () => {
    return (
        <Layout pageTitle="Project: Dungeon Rungs">
            <p>This is one of the latest project I built. It is a an Alexa Skill built using Node and Alexa Skills Sdk.</p>
            <StaticImage
                alt="Project Logo"
                src="../images/DGLogo.jpg"
            />
            <p>Go ahead, you can try this game out by scanning the QR code. It will take you to your Alexa app to enable the skill. If you like it or have any suggestions, please leave a review. Thanks!</p>
            <StaticImage
                alt="Access link to the Alexa skill"
                src="../images/DungeonRungsQR.jpg"
            />
            <p>Alternatively, you can access it via this link: </p>
            <p>https://alexa-skills.amazon.com/apis/custom/skills/amzn1.ask.skill.89b9b210-22c0-40e6-bfc7-d74324e8a125/launch</p>
            <h1>What I learned</h1>
            <p>With this project, it was the first time that I decided to build a full fledge game. This required maintaining a state that tracks the users progress, location, stats and more.</p>
            <p>The full game was actually completed much earlier, however, it was too static and did not allow much room for growth in case I wanted to make new updates to the game. 
                I ended up recreating the game from scratch and simplifiying much of the code I first wrote. In addition, I also wanted to future proof it so that I can add new levels and potential multiplayer utilizing much of the code already created for single player.</p>
            <p>One challenge I had was creating a set a commands that were only accessable within different modes of the game.</p>

            <h1>What I plan on further</h1>
            <p>The next step is to implement a visual interface with users that have a display enabled with their devices.</p>
            <p>[Note:] I think in the future I may go more in detail or even a comment section to this site. [6/25/21]</p>

        </Layout>
    )
}
// Step 3: Export your component
export default PageOne