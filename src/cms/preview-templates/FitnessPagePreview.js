import React from 'react'
import PropTypes from 'prop-types'
import { FitnessPageTemplate } from '../../templates/fitness-page'

const FitnessPagePreview = ({ entry, widgetFor }) => (
  <FitnessPageTemplate
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
    posts={[]}
  />
)

FitnessPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FitnessPagePreview
