import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import useAuth from '../hook/useAuth';
import UserContext from '../context/User';

const Layout = ({ children }) => {
  const { user } = useAuth();
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="flex flex-col text-white min-h-screen">
      <UserContext.Provider value={{ user }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="flex-grow mx-auto w-auto md:px-8 p-8">{children}</main>
        <Footer />
      </UserContext.Provider>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
