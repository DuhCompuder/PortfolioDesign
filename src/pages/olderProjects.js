// Step 1: Import your component
import * as React from 'react'  
// import { Link } from "gatsby"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const PageTwo = () => {
    return (
        <Layout pageTitle="Project: Stock View">
            <p>This was the first Alexa skill I ever published for public use. This skill allows users to retrieve the current price of the stock by saying the stock name or ticker symbol.</p>
            <p>Built with Node and Alexa Skills SDK.</p>
            <p>This skill also utilizes Alexa Presentation Language which is kind of similar to CSS in syntax and function. If you have a device with display, you will also be able to use touch functionality with this skill as well.</p>
            <StaticImage
                alt="Project Logo"
                src="../images/SVLogo.png"
            />
            <p>You can try this game out by scanning the QR code below. It will take you to your Alexa app to enable the skill. If you like it or have any suggestions, please leave a review. Thanks!</p>
            <StaticImage
                alt="Project Logo"
                src="../images/SVQRCode.png"
            />
            <p>Alternatively, you can access it via this link: </p>
            <p>https://alexa-skills.amazon.com/apis/custom/skills/amzn1.ask.skill.89c808be-48c3-4e5a-97d0-5fdb81c9d045/launch</p>
            <h1>What I learned</h1>
            <p>I learned how to leverage voice design in addition with visual and touch. I also learned how to make external api calls to retrieve live stock data. More details later...</p>
        </Layout>
    )
}
// Step 3: Export your component
export default PageTwo