import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero17.css'

const Hero17 = (props) => {
  return (
    <div className="hero17-header78">
      <div className="hero17-column thq-section-max-width thq-section-padding">
        <div className="hero17-content1">
          <h1>
            {props.heading1 ?? (
              <Fragment>
                <h1 className="hero17-text4 thq-heading-1">
                  Welcome to our Landing Page
                </h1>
              </Fragment>
            )}
          </h1>
          <p>
            {props.content1 ?? (
              <Fragment>
                <p className="hero17-text3 thq-body-large">
                  Discover amazing products and services tailored just for you.
                </p>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions"></div>
      </div>
      <div className="hero17-content2"></div>
      <div>
        <div className="hero17-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  content1: undefined,
  heading1: undefined,
}

Hero17.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Hero17
