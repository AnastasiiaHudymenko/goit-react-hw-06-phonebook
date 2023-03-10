import { Form } from 'react-bootstrap';

export const Fillter = () => {
  return (
    <div>
      <Form.Label>Find contacts by name</Form.Label>
      <Form.Control type="email" placeholder="find contact" />
    </div>
  );
};
