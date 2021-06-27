import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const ActivitiesCard = ({ activity }) => {
  // const { id, name, description } = props;

  console.log(activity);

  return (
    <div>
      <Card className="card-activities">
        <CardBody>
          <CardTitle
            tag="h5"
            // className="text-muted"
          >{`Activity ${activity.id}`}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {activity.name}
          </CardSubtitle>
          <CardText className="text-muted">{activity.description}</CardText>
          <Button className="btn-primary">Add to Routine</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ActivitiesCard;
