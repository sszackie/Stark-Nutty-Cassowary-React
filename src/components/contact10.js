import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact10-text18 thq-heading-2">Contact Us</h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="contact10-text16 thq-body-large">
                    Feel free to reach out to us for any inquiries or feedback.
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3>
              {props.location1 ?? (
                <Fragment>
                  <h3 className="contact10-text17 thq-heading-3">
                    Headquarters
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <Fragment>
                  <p className="contact10-text20 thq-body-large">
                    123 Main Street, City, Country
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact10-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <h3>
              {props.location2 ?? (
                <Fragment>
                  <h3 className="contact10-text19 thq-heading-3">
                    Support Center
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location2Description ?? (
                <Fragment>
                  <p className="contact10-text21 thq-body-large">
                    456 Support Street, City, Country
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location1ImageSrc:
    'https://images.unsplash.com/photo-1588694926280-3ae414d06ccb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxjbHVqfGVufDB8fHx8MTcxNjI4NjI4N3ww&ixlib=rb-4.0.3&w=1400',
  content1: undefined,
  location2ImageSrc:
    'https://images.unsplash.com/photo-1571979195097-59d223315d89?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxidWNoYXJlc3R8ZW58MHx8fHwxNzE2Mjg2MzE3fDA&ixlib=rb-4.0.3&w=1400',
  location1: undefined,
  heading1: undefined,
  location2: undefined,
  location1Description: undefined,
  location2Description: undefined,
  location1ImageAlt: 'Headquarters Image',
  location2ImageAlt: 'Support Center Image',
}

Contact10.propTypes = {
  location1ImageSrc: PropTypes.string,
  content1: PropTypes.element,
  location2ImageSrc: PropTypes.string,
  location1: PropTypes.element,
  heading1: PropTypes.element,
  location2: PropTypes.element,
  location1Description: PropTypes.element,
  location2Description: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  location2ImageAlt: PropTypes.string,
}

export default Contact10
