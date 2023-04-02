import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import cookies from "js-cookie";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import AddTaskPage from "./AddTaskPage";
export default function LogInPage() {
  const [loggedIn, SetloggedIn] = useState(false);
  const [data, Setdata] = useState([]);
  const [storeddata,Setstoreddata]=useState({});

const store = (item)=>{
 
  console.log(item);
 Setstoreddata(item);

}

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/checkuser",
         values
      );

      if (response.status === 200 && response.data.token) {
        const token = response.data.token;
        const expires = new Date();
        expires.setTime(expires.getTime() + 5 * 60 * 1000); // 5 minutes
        document.cookie = `token=${token};expires=${expires.toUTCString()};path=/`;
        SetloggedIn(true);
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
      // handle error
    }};
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/gettasks")
      .then((res) => {
        console.log(res.data);
        Setdata(res.data.findtask);
      })
      .catch((error) => {
        console.log(error, "error");
      });
  }, []);

  const deletetask = async (_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/deletetasks/${_id}`
      );
      Setdata(data.filter(item => item._id !== _id)); 
    } catch (error) {
      console.error(error);
    }
  };

  const initialValues = {
    Email: "",
    Password: "",
  };

  const validationSchema = Yup.object({
    Email: Yup.string()
      .email("Invalid email address")
      .required("Email must required"),
    Password: Yup.string().min(5).required("please enter Password"),
  });

  const {values,errors,handleBlur,touched,handleChange,resetForm,isValid,} = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    resetForm: () => {
      resetForm();
    },
  });


  const handleLogout = () => {
    cookies.remove("token");
    SetloggedIn(false);
  };
  const token = cookies.get("token");
  if (loggedIn || (token && new Date(token.expires) > new Date())) {
    return (
      
      <>
  
        <div className="maindashboard">
          <h1 className="dashboard">Welcome to the dashboard!</h1>
          <button className="logoutbutton" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="main">
          <div className="left">
            <button id="select">
              <Link to="/AddTaskPage">Add task</Link>{" "}
            </button>
          </div>
          <div className="right">
            {data.length > 0 &&
              data.map((item) => {
                return (
                  <Card key={item.id} style={{width: "28%",backgroundColor: "black",border: "1px solid blue",marginLeft: "2rem",
                         }}>
                    <Card.Body style={{ padding: "20px 10px" }}>
                      <Card.Title>
                        <p className="tasknames">---Task_Name</p>
                        <p id="tasknames">{item.Task_Name}</p>
                      </Card.Title>
                      <Card.Text>
                        <p className="tasknames">---Description</p>
                        <h2 id="tasknames">{item.Description}</h2>
                      </Card.Text>
                      <Card.Text>
                        <p className="tasknames">---Start_Date_Time</p>
                        <h2 id="tasknames">{item.Start_Date_Time}</h2>
                      </Card.Text>
                      <Card.Text>
                        <p className="tasknames">---Duration</p>
                        <h2 id="tasknames">{item.Duration}</h2>
                      </Card.Text>
                      <Card.Text>
                        <p className="tasknames">---End_Date_Time</p>
                        <h2 id="tasknames">{item.End_Date_Time}</h2>
                      </Card.Text>
                      <Card.Text>
                        <button className="button1"  onClick={() => store(item)}><Link to="/AddTaskPage"> Update</Link></button>
                        <button className="button1" onClick={() => deletetask(item._id)}> Delete</button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="maindiv">
        <form onSubmit={handleSubmit}>
          <div className="inner">
            <h2 style={{ marginLeft: "65px" }} className="logintag">
              {" "}
              Login-Form{" "}
            </h2>
            <div className="centerform">
              <label id="tag">Email :</label>
              <input
                type="text"
                id="Email"
                className="bars"
                autoComplete="off"
                name="Email"
                value={values.Email}
                onChange={handleChange}
                onBlur={handleBlur}
              />{" "}
              {errors.Email && touched.Email ? (
                <p className="form-error">{errors.Email}</p>
              ) : null}
              <label id="tag">Password :</label>
              <input
                className="bars"
                id="Password"
                autoComplete="off"
                type="password"
                name="Password"
                value={values.Password}
                onChange={handleChange}
                onBlur={handleBlur}
              />{" "}
              {errors.Password && touched.Password ? (
                <p className="form-error">{errors.Password}</p>
              ) : null}
              <button
                className="butt1"
                id="ad"
                type="submit"
                disabled={!isValid}
              >
                LOGIN
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
