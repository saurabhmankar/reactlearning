import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getData, getData1 } from './action';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  if (!values.favoriteColor) {
    errors.favoriteColor = 'Required'
  }
  if (!values.date) {
    errors.date = 'Required'
  }
  return errors
}

const SelectField = ({
  input,
  label,
  meta: { touched, error },
  children
}) => (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <div className={
          'select ' + (touched ? (error ? 'is-danger' : 'is-success') : '')
        }>
          <select {...input} >
            {children}
          </select>
          {touched && (error && <p className="help is-danger">{error}</p>)}
        </div>
      </div>
    </div>
  );

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

class App extends React.Component {

  submitForm(data) {
    alert(JSON.stringify(data))
  }

  load() {

    const data = {
      // used to populate "account" reducer when "Load" is clicked
      firstName: 'Jane',
      lastName: 'Doe',
      age: '42',
      email:'test@gmail.com',
      anniversaryDate: '2018-08-22',
      sex: 'female',
      employed: true,
      favoriteColor: 'Blue',
      bio: 'Born to write amazing Redux code.'
    }

    this.props.initialize(data);
  }

  render() {

    const { handleSubmit, reset } = this.props;


    const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']


    return <form onSubmit={handleSubmit(this.submitForm)}>
      <div>
        <button type="button" onClick={() => this.load()}>
          Load Account
        </button>
      </div>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component={renderField}
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component={renderField}
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>Age</label>
        <div>
          <Field name="age" component={renderField} type="number" placeholder="Age" />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field name="email" component={renderField} type="text" placeholder="Email" />
        </div>
      </div>
      <div>
        <label>Anniversary Date</label>
        <div>
          <Field name="anniversaryDate" component={renderField} type="date" />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component={renderField} type="radio" value="male" />{' '}
            Male
          </label>
          <label>
            <Field name="sex" component={renderField} type="radio" value="female" />{' '}
            Female
          </label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component={SelectField}>
            <option value="">Select a color...</option>
            {colors.map(colorOption => (
              <option value={colorOption} key={colorOption}>
                {colorOption}
              </option>
            ))}
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component={renderField}
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <label>Bio</label>
        <div>
          <Field name="bio" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" >
          Submit
        </button>
      </div>
    </form>
  }
}

App = reduxForm({
  // a unique name for the form
  form: 'contact',
  validate
})(App)

// Connects a React component to a Redux store.
export default App;

