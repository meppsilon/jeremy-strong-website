import React from 'react'
import PropTypes from 'prop-types'
import { TravelPageTemplate } from '../../templates/travel-page'

const TravelPagePreview = ({ entry, widgetFor }) => (
  <TravelPageTemplate
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
    posts={[]}
  />
)

TravelPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TravelPagePreview
