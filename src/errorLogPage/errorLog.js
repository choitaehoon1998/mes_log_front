import React, { useEffect, useState } from "react";
import "./errorLog.css";
import axios from "axios";

import ContentTitle from "../content/ContentTitel";
import SearchForm from "../components/SearchForm";
import Thead from "./thead";
import Tbody from "./tbody";
import { API_URL } from "../constant/constant";

export default function ErrorLog() {
  const [errors, setErrors] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    axios
      .get(API_URL + "/log", {
        params: { size: 10, page: page, companyCode: searchKeyword },
      })
      .then((response) => {
        setTotal(Math.ceil(response.data.totalElements / 10) - 1);
        setErrors(response.data.content);
        console.log(response.data.content);
      })
      .catch((err) => console.log(err));
  }, [searchKeyword, page]);


const PageNum = () => {
  const num = []
  for(let i = 0; i <= total; i++ ){
    num.push(i);
  }  
  return(
    <>
      {num.map(n => 
      <button onClick={() => setPage(n)} >
        {n+1}
      </button>
      )}
    </>
  );
}

  return (
    <>
      <div className="content-wrap">
        <div className="content-main">
          <ContentTitle title="Error Log"></ContentTitle>
          <SearchForm
            title={"회사코드"}
            onchangeFunction={setSearchKeyword}
          ></SearchForm>

          <div className="main-frame">
            <div className="form-frame">
              <div className="form-groups">
                <label>목록</label>
                <table>
                  <Thead />
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

                <PageNum></PageNum>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
