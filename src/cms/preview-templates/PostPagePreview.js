import React from 'react'
import PropTypes from 'prop-types'
import { PostDetailTemplate } from '../../templates/music-page'

const PostPagePreview = ({ entry, widgetFor }) => (
  <PostDetailTemplate
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
    link={entry.getIn(['data', 'link'])}
    section={entry.getIn(['data', 'section'])}
    nextPosts={[]}
  />
)

PostPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PostPagePreview
