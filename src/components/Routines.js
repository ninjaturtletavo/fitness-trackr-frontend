import React, { useState, useEffect } from "react";
import RoutinesCard from "./RoutinesCard";
import { getAllRoutines } from "../api";
import { Container, Col, Row } from "reactstrap";


const Routines = () => {
  const [routines, setRoutines] = useState();

  useEffect(() => {
    getAllRoutines()
      .then((response) => setRoutines(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container fluid>
      <div id="routines" className="my-3 mb-3">
        <h1>Routines Page</h1>
        <Row>
          {routines &&
            routines.map((routine) => {
              return (
                <Col sm="4">
                  <RoutinesCard key={routine.id} routine={routine} />
                </Col>
              );
            })}
        </Row>
      </div>
    </Container>
  );
};

export default Routines;
