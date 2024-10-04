import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import Features25 from '../components/features25'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Stark Nutty Cassowary</title>
        <meta property="og:title" content="Stark Nutty Cassowary" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10 thq-link thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11 thq-link thq-body-small">Proxies</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12 thq-link thq-body-small">
              Unblocked Games
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13 thq-link thq-body-small">
              <span>Tools</span>
              <br></br>
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text16 thq-body-large">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text17 thq-body-large">Services</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text18 thq-body-large">About Us</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text19 thq-body-large">Contact</span>
          </Fragment>
        }
        link31={
          <Fragment>
            <span className="home-text20 thq-link thq-body-small">
              <span>Tools</span>
              <br></br>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text23">Sign Up</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text24">Learn More</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text25 thq-body-small">
              Welcome to our Home page
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text26 thq-body-small">
              Explore our Services
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text27 thq-body-small">
              Learn more About Us
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text28 thq-body-small">
              Get in touch with us
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        content1={
          <Fragment>
            <span className="home-text29 thq-body-large">
              <span>Unblocked tools to use at school just for you!</span>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text32 thq-heading-1">Welcome to 3zee</span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text33 thq-heading-2">Timeless Proxies</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text34 thq-heading-2">Unblocked Games</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text35 thq-heading-2">Tools</span>
          </Fragment>
        }
        feature1ImgSrc="https://images.unsplash.com/photo-1619253790960-83acb6df8cc3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODA0OTgyOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        feature1Description={
          <Fragment>
            <span className="home-text36 thq-body-small">
              Internet access from anywhere in the world.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text37 thq-body-small">
              Unblocked web games that usually would not work.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text38 thq-body-small">
              Tools including tab cloaking, bookmarks, and more!
            </span>
          </Fragment>
        }
      ></Features24>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text39 thq-heading-2">
              <span>Un-noticable</span>
              <br></br>
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text42 thq-heading-2">
              No coding involved
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text43 thq-heading-2">24/7 Support</span>
          </Fragment>
        }
        feature1ImgSrc="https://images.unsplash.com/photo-1545975401-1bac6136ec13?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODA1MjQwMnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        feature1Description={
          <Fragment>
            <span className="home-text44 thq-body-small">
              Top-notch security measures to keep your actions hidden
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text45 thq-body-small">
              Free proxy with no coding necessary.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text46 thq-body-small">
              <span>Dedicated support team available round the clock!</span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Features25>
      <Footer4
        termsLink={
          <Fragment>
            <span className="home-text49 thq-body-small">
              Terms and Conditions
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text50 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text51 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
