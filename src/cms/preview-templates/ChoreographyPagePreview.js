import React from 'react'
import PropTypes from 'prop-types'
import { ChoreographyPageTemplate } from '../../templates/choreography-page'

const ChoreographyPagePreview = ({ entry, widgetFor }) => (
  <ChoreographyPageTemplate
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
    posts={[]}
  />
)

ChoreographyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ChoreographyPagePreview
