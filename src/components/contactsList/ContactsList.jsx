import { ListGroup, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);
  return (
    <ListGroup className="mt-4" as="ol" numbered>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListGroup.Item
            key={id}
            as="li"
            variant="primary"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{name}</div>
              {number}
            </div>
            <Button variant="outline-danger">Delete</Button>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};
