import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Banner1 from '../components/banner1'
import Footer4 from '../components/footer4'
import './unblocked-games.css'

const UnblockedGames = (props) => {
  return (
    <div className="unblocked-games-container">
      <Helmet>
        <title>Unblocked-Games - Stark Nutty Cassowary</title>
        <meta
          property="og:title"
          content="Unblocked-Games - Stark Nutty Cassowary"
        />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="unblocked-games-text10 thq-link thq-body-small">
              Home
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="unblocked-games-text11 thq-link thq-body-small">
              Proxies
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="unblocked-games-text12 thq-link thq-body-small">
              Unblocked Games
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="unblocked-games-text13 thq-link thq-body-small">
              <span>Tools</span>
              <br></br>
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="unblocked-games-text16 thq-body-large">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="unblocked-games-text17 thq-body-large">
              Services
            </span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="unblocked-games-text18 thq-body-large">
              About Us
            </span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="unblocked-games-text19 thq-body-large">
              Contact
            </span>
          </Fragment>
        }
        link31={
          <Fragment>
            <span className="unblocked-games-text20 thq-link thq-body-small">
              <span>Tools</span>
              <br></br>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="unblocked-games-text23">Sign Up</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="unblocked-games-text24">Learn More</span>
          </Fragment>
        }
        link2Url="/proxies"
        page1Description={
          <Fragment>
            <span className="unblocked-games-text25 thq-body-small">
              Welcome to our Home page
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="unblocked-games-text26 thq-body-small">
              Explore our Services
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="unblocked-games-text27 thq-body-small">
              Learn more About Us
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="unblocked-games-text28 thq-body-small">
              Get in touch with us
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Banner1
        heading1={
          <Fragment>
            <span className="unblocked-games-text29 thq-heading-2">
              Unblocked Games
            </span>
          </Fragment>
        }
      ></Banner1>
      <a
        href="https://cookieclicker.blog/go/retro-bowl.html"
        target="_blank"
        rel="noreferrer noopener"
        className="unblocked-games-link1 button"
      >
        <span>
          <span>Retro Bowl Unblocked</span>
          <br></br>
        </span>
      </a>
      <a
        href="https://bidoofery.github.io/"
        target="_blank"
        rel="noreferrer noopener"
        className="unblocked-games-link2 button"
      >
        <span>
          <span>Bifoodery (Games + Websites)</span>
          <br></br>
        </span>
      </a>
      <a
        href="https://drive.google.com/file/d/0B_mM2f5lb7tTWmFFcHU5dGNVdTA/edit?resourcekey=0-HuKGuBL0vL5uKNNnqSKzjQ"
        target="_blank"
        rel="noreferrer noopener"
        className="unblocked-games-link3 button"
      >
        WebRetro (Online Emulator)
      </a>
      <a
        href="https://theooofficial.github.io/myRETROGAMES/"
        target="_blank"
        rel="noreferrer noopener"
        className="unblocked-games-link4 button"
      >
        <span>
          <span>Retro Games</span>
          <br></br>
        </span>
      </a>
      <Footer4
        termsLink={
          <Fragment>
            <span className="unblocked-games-text39 thq-body-small">
              Terms and Conditions
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="unblocked-games-text40 thq-body-small">
              Cookies Policy
            </span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="unblocked-games-text41 thq-body-small">
              Privacy Policy
            </span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default UnblockedGames
