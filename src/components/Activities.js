import React, { useState, useEffect } from "react";
import ActivitiesCard from "./ActivitiesCard";
import axios from "axios";
import { Container, Col, Row, Spinner } from "reactstrap";
import { BASE_URL } from "../api";

const Activities = () => {
  const [isLoading, setLoading] = useState(true);
  const [activities, setActivities] = useState();

  const getAllActivities = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/activities`);

      console.log(data);
      if (data) {
        setActivities(data);
      }

      return data || [];
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllActivities();
  }, []);

  if (isLoading) {
    return (
      <div className="App">
        <Spinner type="grow" color="primary" />
      </div>
    );
  }

  const activityCards = activities.map((activity) => {
    return (
      <Col sm="4">
        <ActivitiesCard key={activity.name} activity={activity} />
      </Col>
    );
  });

  return (
    <Container fluid>
      <div id="activities" className="my-3 mb-3">
        <h1>Activities Page</h1>
        <Row>{activityCards}</Row>
      </div>
    </Container>
  );
};

export default Activities;
