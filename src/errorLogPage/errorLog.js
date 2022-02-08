import React, { useEffect, useState } from "react";
import "./errorLog.css";
import axios from "axios";
import ContentTitle from "../content/ContentTitel";
import Thead from "./thead";
import Tbody from "./tbody";

export default function ErrorLog() {
  const [errors, setErrors] = useState([]);
  const [total, setTotal] = useState(1);

  const error = errors.length;

  const pageNumbers=[];
  for(let i=1; i<=Math.ceil(total / error); i++){
    pageNumbers.push(i);
  } 
//웹페이지 표시 도중 문데 발생
  useEffect(() => {
    axios
      .get("http://3465-175-119-149-98.ngrok.io/log?size=10&page=1")
      //   .get("http://localhost:8081/log")
      .then((response) => {
        console.log(errors.length)
        console.log(response.data.totalElements)
        setTotal(response.data.totalElements)
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

            <div className="left-frame">
              <div className="form-frame frame1">
                  
                <input type="text" name="keyword" id="search" placeholder="Search"></input>

                <div className="form-groups">
                
                  <label>목록</label>
                  <table>
                    <Thead></Thead>
                    <Tbody props={errors} />


                  </table>
                  <div text="to"></div>
                </div>
              </div>
            </div>

            

          </div>
        </div>
      </div>
    </>
  );
}
