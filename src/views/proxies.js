import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Banner1 from '../components/banner1'
import Footer4 from '../components/footer4'
import './proxies.css'

const Proxies = (props) => {
  return (
    <div className="proxies-container">
      <Helmet>
        <title>Proxies - Stark Nutty Cassowary</title>
        <meta property="og:title" content="Proxies - Stark Nutty Cassowary" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="proxies-text10 thq-link thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="proxies-text11 thq-link thq-body-small">
              Proxies
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="proxies-text12 thq-link thq-body-small">
              Unblocked Games
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="proxies-text13 thq-link thq-body-small">
              <span>Tools</span>
              <br></br>
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="proxies-text16 thq-body-large">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="proxies-text17 thq-body-large">Services</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="proxies-text18 thq-body-large">About Us</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="proxies-text19 thq-body-large">Contact</span>
          </Fragment>
        }
        link31={
          <Fragment>
            <span className="proxies-text20 thq-link thq-body-small">
              <span>Tools</span>
              <br></br>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="proxies-text23">Sign Up</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="proxies-text24">Learn More</span>
          </Fragment>
        }
        link2Url="/proxies"
        page1Description={
          <Fragment>
            <span className="proxies-text25 thq-body-small">
              Welcome to our Home page
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="proxies-text26 thq-body-small">
              Explore our Services
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="proxies-text27 thq-body-small">
              Learn more About Us
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="proxies-text28 thq-body-small">
              Get in touch with us
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Banner1
        heading1={
          <Fragment>
            <span className="proxies-text29 thq-heading-2">Proxies</span>
          </Fragment>
        }
      ></Banner1>
      <a
        href="https://monke-six.vercel.app/app"
        target="_blank"
        rel="noreferrer noopener"
        className="proxies-link1 button"
      >
        Doge v4
      </a>
      <a
        href="https://holyunblocker.org/"
        target="_blank"
        rel="noreferrer noopener"
        className="proxies-link2 button"
      >
        Holy Unblocker
      </a>
      <a
        href="https://drive.google.com/file/d/0B_mM2f5lb7tTWmFFcHU5dGNVdTA/edit?resourcekey=0-HuKGuBL0vL5uKNNnqSKzjQ"
        target="_blank"
        rel="noreferrer noopener"
        className="proxies-link3 button"
      >
        Proxy List - Google Docs (most may not work)
      </a>
      <a
        href="https://watercats.fr.to/"
        target="_blank"
        rel="noreferrer noopener"
        className="proxies-link4 button"
      >
        <span>
          <span>Interstellar</span>
          <br></br>
        </span>
      </a>
      <Footer4
        termsLink={
          <Fragment>
            <span className="proxies-text33 thq-body-small">
              Terms and Conditions
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="proxies-text34 thq-body-small">
              Cookies Policy
            </span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="proxies-text35 thq-body-small">
              Privacy Policy
            </span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Proxies
