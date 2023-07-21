import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [studentEdit, setStudentEdit] = useState({
    stuname: "",
    email: "",
  });

  useEffect(() => {
    const getStudents = async () => {
      try {
        const student = await axios.get(
          `http://localhost:3001/students/${params.id}`
        );
        setStudentEdit(student.data);
        // console.log(studentEdit);
      } catch (error) {
        console.log("Something is Wrong");
      }
    };
    getStudents();
  }, [params]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setStudentEdit({ ...studentEdit, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:3001/students/${params.id}`,
        studentEdit
      );
      navigate("/");
    } catch (error) {
      console.log("Something is Wrong");
    }
  };

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <h2>Edit Students</h2>
            <Form onSubmit={onSubmitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="stuname"
                  value={studentEdit.stuname}
                  onChange={onChangeHandler}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={studentEdit.email}
                  onChange={onChangeHandler}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Edit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Edit;
