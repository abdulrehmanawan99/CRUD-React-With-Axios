import { Form, Button, Container, Row, Col } from "react-bootstrap";
import List from "./List";
import { useState } from "react";
import axios from "axios";

function Home() {
  const [students, setStudents] = useState({
    stuname: "",
    email: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setStudents({ ...students, [name]: value });
    // console.log(students);
  };

  const handleSubmit = async () => {
    try {
      const student = await axios.post(
        "http://localhost:3001/students",
        students
      );
      console.log(student.data);
    } catch (error) {
      console.log("Something is Wrong");
    }
  };

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col lg={6}>
            <h2>Add Students</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="stuname"
                  value={students.name}
                  onChange={onChangeHandler}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={students.email}
                  onChange={onChangeHandler}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Add
              </Button>
            </Form>
          </Col>
          <Col lg={6}>
            <List />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Home;
