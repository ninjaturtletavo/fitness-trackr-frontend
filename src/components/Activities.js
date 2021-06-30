import React, { useState, useEffect } from "react";
import ActivitiesCard from "./ActivitiesCard";
import { getAllActivities, getToken, createActivity } from "../api";
import { Container, Col, Row } from "reactstrap";
import { useHistory } from "react-router";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [token, setToken] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  let history = useHistory();

  useEffect(() => {
    getAllActivities()
      .then((response) => setActivities(response))
      .catch((error) => console.log(error));

    // const token = getToken();
    // if (token) {
    //   setToken(token);
    // }
  }, []);

  const handleCreateActivity = async (e) => {
    e.preventDefault();

    try {
      const result = await createActivity(name, description);
      history.push("/activities");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container fluid>
      <div id="activities" className="my-3 mb-3">
        <button
          type="button"
          className="btn btn-primary btn-med btn-block"
          onClick={setIsActive}
        >
          Create New Activity
        </button>
        <div className="container">
          <form className="activityForm">
            <div className="form-group">
              <label>Name</label>
              <input
                type="email"
                className="form-control"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                type="email"
                className="form-control"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></input>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleCreateActivity}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <h1>Activities Page</h1>
        <Row>
          {activities &&
            activities.map((activity) => {
              return (
                <Col sm="4">
                  <ActivitiesCard key={activity.name} activity={activity} />
                </Col>
              );
            })}
        </Row>
      </div>
    </Container>
  );
};

export default Activities;
