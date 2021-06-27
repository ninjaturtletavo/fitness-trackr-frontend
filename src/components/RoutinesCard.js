import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const RoutinesCard = ({ routine }) => {
  // const { id, name, description } = props;

  console.log(routine);

  return (
    <div>
      <Card className="card-routines">
        <CardBody>
          <CardTitle
            tag="h4"
            // className="text-muted"
          >{`Routine ${routine.name}`}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Created by {routine.creatorName}
          </CardSubtitle>
          <CardText className="text-muted">Goal: {routine.goal}</CardText>
          <Button className="btn-primary">Add to Routine</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default RoutinesCard;
