import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Banner1 from '../components/banner1'
import Footer4 from '../components/footer4'
import './tools.css'

const Tools = (props) => {
  return (
    <div className="tools-container">
      <Helmet>
        <title>Tools - Stark Nutty Cassowary</title>
        <meta property="og:title" content="Tools - Stark Nutty Cassowary" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="tools-text10 thq-link thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="tools-text11 thq-link thq-body-small">
              Proxies
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="tools-text12 thq-link thq-body-small">
              Unblocked Games
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="tools-text13 thq-link thq-body-small">
              <span>Tools</span>
              <br></br>
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="tools-text16 thq-body-large">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="tools-text17 thq-body-large">Services</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="tools-text18 thq-body-large">About Us</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="tools-text19 thq-body-large">Contact</span>
          </Fragment>
        }
        link31={
          <Fragment>
            <span className="tools-text20 thq-link thq-body-small">
              <span>Tools</span>
              <br></br>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="tools-text23">Sign Up</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="tools-text24">Learn More</span>
          </Fragment>
        }
        logoSrc="https://images.unsplash.com/photo-1553835973-dec43bfddbeb?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODA1MTg3OHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        link2Url="/proxies"
        page1Description={
          <Fragment>
            <span className="tools-text25 thq-body-small">
              Welcome to our Home page
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="tools-text26 thq-body-small">
              Explore our Services
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="tools-text27 thq-body-small">
              Learn more About Us
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="tools-text28 thq-body-small">
              Get in touch with us
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Banner1
        heading1={
          <Fragment>
            <span className="tools-text29 thq-heading-2">Tools</span>
          </Fragment>
        }
      ></Banner1>
      <button type="button" className="button">
        My OP Bookmark Folder
      </button>
      <a
        href="https://schoolizboring.github.io/List-of-Bookmarklets/"
        target="_blank"
        rel="noreferrer noopener"
        className="tools-link button"
      >
        <span>List of Bookmarklets</span>
      </a>
      <Footer4
        termsLink={
          <Fragment>
            <span className="tools-text31 thq-body-small">
              Terms and Conditions
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="tools-text32 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="tools-text33 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Tools
