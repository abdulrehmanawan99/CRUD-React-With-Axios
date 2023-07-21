import { Table, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 

const List = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const student = await axios.get("http://localhost:3001/students");
      //  console.log(student, "hello")
        setStudents(student.data);
      } catch (error) {
        console.error("Something went wrong", error);
      }
    };
    fetchData();
  }, []);

const delHandler = async (id) => {
  await axios.delete(`http://localhost:3001/students/${id}`);
  var remainingStudents = students.filter((item)=> {
      return item.id !== id
    
  })
  setStudents(remainingStudents)
}

  return (
    <>
     <h2>Total Students</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((element, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{element.stuname}</td>
                <td>{element.email}</td>
                <td>
                  {" "}
                <Link to={`/View/${element.id}`}> <Button variant="primary">View</Button></Link> {" "}
                <Link to={`/Edit/${element.id}`}> <Button variant="info">Edit</Button></Link>{" "}
                  <Button variant="danger" onClick={()=> delHandler(element.id)} >Delete</Button>
                </td>
              </tr>
            );
          })}
         
        </tbody>
      </Table>
    </>
  );
};

export default List;
