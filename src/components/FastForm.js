import React from 'react';
import { Formik, Form, FastField } from 'formik:old';

import Debug from './Debug';
import validationSchema from '../validationSchema';

class CustomField extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidUpdate() {
    this.myRef.current.style.borderColor =
      '#' + (((1 << 24) * Math.random()) | 0).toString(16);
  }

  render() {
    return <input ref={this.myRef} {...this.props.field} />;
  }
}

function FastForm() {
  const initialValues = {
    email: '',
    username: '',
    password: ''
  };

  const customHandleSubmit = (values, actions) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={customHandleSubmit}
      render={props => (
        <Form>
          <h2>Fast form</h2>
          <label>Email Address</label>
          <FastField type="text" name="email" component={CustomField} />
          <label>Username</label>
          <FastField type="text" name="username" component={CustomField} />
          <label>Password</label>
          <FastField type="password" name="password" component={CustomField} />
          <button type="submit">Sign up</button>
          <Debug data={props.values} />
        </Form>
      )}
    />
  );
}

export default FastForm;