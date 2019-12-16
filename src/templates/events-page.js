import React from "react";
import PropTypes from "prop-types";
import Section from "../components/Section";

export const EventsPageTemplate = ({ title, description }) => {
  return (
    <section
      className="pt-8 text-white h-full min-h-screen"
      style={{ background: "black" }}
    >
      <div id={title.toLowerCase()}>
        <Section
          title={title}
          description={description}
          titleClassName="text-white block text-center text-4xl font-semibold self-center py-3 w-full"
        />
      </div>
    </section>
  );
};

EventsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string
};

const EventsPage = ({ data }) => {
  const { eventsPage } = data;
  console.log('data', data);

  return (
    <EventsPageTemplate
      title={eventsPage.frontmatter.title}
      description={eventsPage.frontmatter.description}
    />
  );
};

EventsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default EventsPage;

export const eventsPageQuery = graphql`
  query EventsPage($id: String!) {
    eventsPage: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
