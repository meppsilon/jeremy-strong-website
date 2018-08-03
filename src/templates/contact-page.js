import React from 'react';

export const ContactPageTemplate = ({ categories }) => (
  <div id="contact" className="pt-8">
    <h1 className="text-white music-title text-center text-4xl font-semibold self-center py-6">Contact</h1>
    <div className="text-center">
      {categories.map(({ name, contacts }) => (
        <div className="text-white" style={{ marginBottom: '2rem' }} key={name}>
          <div className="text-xl font-bold mb-2">{name}</div>
          {contacts.map(contact => (
            <div className="mb-4" key={`${name}-${contact.name}`}>
              <p className="text-white text-sm font-semibold block mb-1">
                {contact.name}
              </p>
              {contact.email && (
                <a
                  className="text-white text-sm font-medium block mb-1"
                  href={`mailto:${contact.email}`}
                >
                  {contact.email}
                </a>
              )}
              {contact.phone && (
                <p className="text-white block text-sm font-medium">
                  {contact.phone}
                </p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const ContactPage = ({
  data: {
    markdownRemark: {
      frontmatter: { categories },
    },
  },
}) => <ContactPageTemplate categories={categories} />;

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        categories {
          name
          contacts {
            name
            phone
            email
          }
        }
      }
    }
  }
`;
