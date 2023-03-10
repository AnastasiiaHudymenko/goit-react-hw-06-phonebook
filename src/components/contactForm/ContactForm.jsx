import { Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';

let userSchema = object({
  number: string().required(),
  name: string().required(),
});

export const ContactForm = () => {
  return (
    <Formik
      onSubmit={(values, acrions) => console.log(values, acrions)}
      initialValues={{ name: '', number: '' }}
      validationSchema={userSchema}
    >
      <Form>
        <div className="mb-3">
          <label htmlFor="InputName" className="form-label">
            Name
          </label>
          <Field
            type="text"
            className="form-control"
            id="InputName"
            aria-describedby="namelHelp"
            name="name"
          />
          <ErrorMessage name="name">
            {msg => <div style={{ color: 'red' }}>{msg}</div>}
          </ErrorMessage>
        </div>
        <div className="mb-3">
          <label htmlFor="numberInput" className="form-label">
            Number
          </label>
          <Field
            type="tel"
            className="form-control"
            id="numberInput"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <ErrorMessage name="number">
            {msg => <div style={{ color: 'red' }}>{msg}</div>}
          </ErrorMessage>
        </div>

        <Button variant="outline-primary" type="submit">
          Add contact
        </Button>
      </Form>
    </Formik>
  );
};
