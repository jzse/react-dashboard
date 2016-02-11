/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ContactPage.scss';
import { Button } from 'react-bootstrap';

const title = 'Contact Us';

class ContactPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={`container ${s.container}`}>
          <h1>{title}</h1>
          <p>...</p>
          <Button><i className='glyphicon glyphicon-user'></i> React Bootstrap</Button>
        </div>
      </div>
    );
  }

}

export default withStyles(ContactPage, s);
