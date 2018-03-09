import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { isFunction } from 'lodash';

import 'react-tippy/dist/tippy.css';
import 'semantic-ui-less/semantic.less';

import Footer from '../components/Footer';
import Header from '../components/Header';

const propTypes = {
  children: PropTypes.func,
};

const defaultProps = {
  children: undefined,
};

const Layout = (props) => {
  const { children } = props;

  return (
    <div>
      <Helmet
        title="Offcourse"
        meta={[
          { name: 'description', content: 'Offcourse sample description' },
        ]}
        link={[
          { href: 'https://use.fontawesome.com/releases/v5.0.8/css/all.css', rel: 'stylesheet'},
        ]}
      />
      <Header />
      <main>
        {isFunction(children) && children()}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
