import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features8.css'

const Features8 = (props) => {
  return (
    <div className="features8-layout226 thq-section-padding">
      <div className="features8-max-width thq-section-max-width thq-grid-auto-300">
        <div className="thq-flex-column">
          <span>
            {props.feature1Slogan ?? (
              <Fragment>
                <span className="features8-text1 thq-body-small">
                  Protecting your data at all costs
                </span>
              </Fragment>
            )}
          </span>
          <div className="thq-flex-column features8-content1">
            <h3>
              {props.feature1Title ?? (
                <Fragment>
                  <h3 className="features8-text2 thq-heading-3">
                    Advanced Security
                  </h3>
                </Fragment>
              )}
            </h3>
            <span>
              {props.feature1Description ?? (
                <Fragment>
                  <span className="features8-text5 thq-body-small">
                    State-of-the-art security measures to safeguard your
                    information
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features8-actions1 thq-flex-row"></div>
        </div>
        <div className="thq-flex-column">
          <span>
            {props.feature2Slogan ?? (
              <Fragment>
                <span className="features8-text4 thq-body-small">
                  Making your workflow smoother than ever
                </span>
              </Fragment>
            )}
          </span>
          <div className="thq-flex-column features8-content2">
            <h3>
              {props.feature2Title ?? (
                <Fragment>
                  <h3 className="features8-text6 thq-heading-3">
                    Seamless Integration
                  </h3>
                </Fragment>
              )}
            </h3>
            <span>
              {props.feature2Description ?? (
                <Fragment>
                  <span className="features8-text7 thq-body-small">
                    Effortlessly connect with your existing tools
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features8-actions2 thq-flex-row"></div>
        </div>
        <div className="thq-flex-column">
          <span>
            {props.feature3Slogan ?? (
              <Fragment>
                <span className="features8-text8 thq-body-small">
                  We&apos;ve got your back, always
                </span>
              </Fragment>
            )}
          </span>
          <div className="thq-flex-column features8-content3">
            <h3>
              {props.feature3Title ?? (
                <Fragment>
                  <h3 className="features8-text9 thq-heading-3">
                    Reliable Customer Support
                  </h3>
                </Fragment>
              )}
            </h3>
            <span>
              {props.feature3Description ?? (
                <Fragment>
                  <span className="features8-text3 thq-body-small">
                    Dedicated support team available 24/7
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features8-actions3 thq-flex-row"></div>
        </div>
      </div>
    </div>
  )
}

Features8.defaultProps = {
  feature1Slogan: undefined,
  feature1Title: undefined,
  feature3Description: undefined,
  feature2Slogan: undefined,
  feature1Description: undefined,
  feature2Title: undefined,
  feature2Description: undefined,
  feature3Slogan: undefined,
  feature3Title: undefined,
}

Features8.propTypes = {
  feature1Slogan: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature2Slogan: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature3Slogan: PropTypes.element,
  feature3Title: PropTypes.element,
}

export default Features8
