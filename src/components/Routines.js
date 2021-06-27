import React, { useState, useEffect } from "react";
import axios from "axios";
import RoutinesCard from "./RoutinesCard";
import { Container, Col, Row, Spinner } from "reactstrap";

const Routines = () => {
  const [isLoading, setLoading] = useState(true);
  const [routines, setRoutines] = useState();

  const getAllRoutines = async () => {
    try {
      const { data } = await axios.get(
        `https://gentle-woodland-79828.herokuapp.com/api/routines`
      );

      console.log(data);
      if (data) {
        setRoutines(data);
      }

      return data || [];
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllRoutines();
  }, []);

  if (isLoading) {
    return (
      <div className="App">
        <Spinner type="grow" color="primary" />
      </div>
    );
  }

  const routineCards = routines.map((routine) => {
    return (
      <Col sm="4">
        <RoutinesCard key={routine.id} routine={routine} />
      </Col>
    );
  });

  return (
    <Container fluid>
      <div id="routines" className="my-3 mb-3">
        <h1>Routines Page</h1>
        <Row>{routineCards}</Row>
      </div>
    </Container>
  );
};

export default Routines;
