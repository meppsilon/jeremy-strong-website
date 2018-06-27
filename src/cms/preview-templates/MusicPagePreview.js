import React from 'react'
import PropTypes from 'prop-types'
import { MusicPageTemplate } from '../../templates/music-page'

const MusicPagePreview = ({ entry, widgetFor }) => (
  <MusicPageTemplate
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
    posts={[]}
  />
)

MusicPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MusicPagePreview
