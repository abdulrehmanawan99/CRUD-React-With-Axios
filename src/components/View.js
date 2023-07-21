import { Table, Button, Row, Col, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const View = () => {
  const params = useParams();
  const [studentsView, setStudentsView] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const student = await axios.get(
          `http://localhost:3001/students/${params.id}`
        );

        setStudentsView(student.data);
      } catch (error) {
        console.error("Something went wrong", error);
      }
    };
    fetchData();
  }, [params]);

  return (
    <>
    <Container className="mt-5">
    <Row>
      <Col lg={{span: 8, offset: 2}}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{studentsView.id}</td>
            <td>{studentsView.stuname}</td>
            <td>{studentsView.email}</td>
          </tr>
        </tbody>
      </Table>
      <Link to={'/'}> <Button variant="info">Go Back</Button></Link>
      </Col>
    </Row>
    </Container>
   
     
    </>
  );
};

export default View;
