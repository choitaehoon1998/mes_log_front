import React, { useEffect, useState } from "react";
import "./errorLog.css";
import axios from "axios";
import ContentTitle from "../content/ContentTitel";
import Thead from "./thead";
import Tbody from "./tbody";

export default function ErrorLog() {
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios
      .get("http://6bcb-175-119-149-98.ngrok.io/log")
      //   .get("http://localhost:8081/log")
      .then((response) => {
        setErrors(response.data.content);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="content-wrap">
        <div className="content">
          <div className="content-main">
            <ContentTitle title="Error Log"></ContentTitle>

            <input className="ml-1000"></input>

            <div className="left-frame">
              <div className="form-frame frame1">
                <div className="form-groups">
                  <label>목록</label>
                  <table>
                    <Thead></Thead>
                    {errors.map((error) => (
                      <Tbody
                        no={error._id}
                        id={error._id}
                        name={error.userName}
                        date={error.sendDateTime}
                        link=""
                      ></Tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul></ul>
      </div>
    </>
  );
}
