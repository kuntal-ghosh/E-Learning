import React from "react";
import { Card, Button } from "react-bootstrap";

const Course = (props) => {
  const { name, price, author, img } = props.course;
  // console.log(props.course);
  return (
    <div>
      <Card style={{ width: "18rem" }} className="m-2">
        <Card.Img variant="top" src={img} style={{ height: "175px" }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>by {author}</Card.Text>
          <Card.Text>${price}</Card.Text>
          <Button
            variant="primary"
            onClick={() => props.handleEnroll(props.course)}
          >
            Enroll Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Course;
