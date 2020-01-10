import React from 'react';
import PropTypes from 'prop-types';

const EventDetailTemplate = ({ event }) => (
  <section
    className="pt-8 text-white h-full min-h-screen"
  >
    <h1 className="text-white">{event.frontmatter.title}</h1>
  </section>
);

const EventDetail = ({
  data: {
    event
  }
}) => {
  console.log('event', event);
  return <EventDetailTemplate event={event} />;
};

EventDetail.propTypes = {
  data: PropTypes.object.isRequired,
};

export default EventDetail;

export const eventDetailQuery = graphql`
  query EventDetail($id: String!) {
    event: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
    allImages
  }
`;
