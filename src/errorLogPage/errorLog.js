import React, { useEffect, useState } from "react";
import "./errorLog.css";
import axios from "axios";
import ContentTitle from "../content/ContentTitel";
import SearchForm from "../components/SearchForm";
import Thead from "./thead";
import Tbody from "./tbody";

export default function ErrorLog() {
  const [errors, setErrors] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  useEffect(() => {
    axios
      .get(
        "http://a50b-175-119-149-98.ngrok.io/log?companyCode=" + searchKeyword
      )
      .then((response) => {
        setErrors(response.data.content);
        console.log(response.data.content);
      })
      .catch((err) => console.log(err));
  }, [searchKeyword]);
  return (
    <>
      <div className="content-wrap">
        <div className="content">
          <div className="content-main">
            <ContentTitle title="Error Log"></ContentTitle>
            <SearchForm
              title={"회사코드"}
              onchangeFunction={setSearchKeyword}
            ></SearchForm>

            {/* <input className="ml-1000"></input> */}

            <div className="left-frame">
              <div className="form-frame frame1">
                <div className="form-groups">
                  <label>목록</label>
                  <table>
                    <Thead></Thead>
                    {errors.map((error) => (
                      <Tbody
                        key={error._id}
                        companyCode={error.companyCode}
                        name={error.userName}
                        date={error.sendDateTime.substring(0, 10)}
                        time={error.sendDateTime.substring(11, 19)}
                        link={error._id}
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
