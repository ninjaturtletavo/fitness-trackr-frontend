export const BASE_URL = "https://gentle-woodland-79828.herokuapp.com/api";
// export const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const headers = () => {
  if (getToken()) {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    };
  } else {
    return { "Content-Type": "Application/JSON" };
  }
};

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({
        username,
        password,
      }),
    });
    console.log(response);
    const data = await response.json();

    if (data && data.token) {
      setToken(data.token);
    }

    return data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const data = await response.json();

    if (data && data.token) {
      setToken(data.token);
    }

    return data;
  } catch (error) {
    throw error;
  }
};

export const getMe = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: headers(),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const getRoutinesByUser = async (username) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}/routines`, {
      method: "GET",
      headers: headers(),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const getAllActivities = async () => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      method: "GET",
      headers: headers(),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const createActivity = async (name, description) => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({
        name,
        description,
      }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const updateActivity = async (id, name, description) => {
  try {
    const response = await fetch(`${BASE_URL}/activities/${id}`, {
      method: "PATCH",
      headers: headers(),
      body: JSON.stringify({
        name,
        description,
      }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const getRoutinesByActivity = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/activities/${id}/routines`, {
      method: "GET",
      headers: headers(),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const getAllRoutines = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      method: "GET",
      headers: headers(),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const createRoutine = async (name, goal, isPublic) => {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({
        name,
        goal,
        isPublic,
      }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const updateRoutine = async (id, name, goal, isPublic) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/${id}`, {
      method: "PATCH",
      headers: headers(),
      body: JSON.stringify({
        name,
        goal,
        isPublic,
      }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteRoutine = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/${id}`, {
      method: "DELETE",
      headers: headers(),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const addActivityToRoutine = async (
  routineId,
  activityId,
  duration,
  count
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/routines/${routineId}/activities`,
      {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({
          activityId,
          duration,
          count,
        }),
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const updateRoutineWithNewActivity = async (id, count, duration) => {
  try {
    const response = await fetch(`${BASE_URL}/routine_activities/${id}`, {
      method: "PATCH",
      headers: headers(),
      body: JSON.stringify({
        count,
        duration,
      }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteActivityFromRoutine = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/routine_activities/${id}`, {
      method: "DELETE",
      headers: headers(),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
