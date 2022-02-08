import React, { useEffect, useState } from "react";
import "./errorLog.css";
import axios from "axios";
import ContentTitle from "../content/ContentTitel";
import Thead from "./thead";
import Tbody from "./tbody";
import Pagination from "./pagination";
import Paging from "./paging";

export default function ErrorLog() {
  const [errors, setErrors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  useEffect(() => {
    axios
      .get("http://6bcb-175-119-149-98.ngrok.io/log")
      //   .get("http://localhost:8081/log")
      .then((response) => {
        setErrors(response.data.content);
      })
      .catch((err) => console.log(err));
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = errors.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNum => setCurrentPage(pageNum);

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
                    <Tbody props={currentPosts} />
                  </table>
                  <Pagination
                    postPerPage={postPerPage}
                    totalPosts={errors.length}
                    paginate={paginate}
                    />

                </div>
              </div>
            </div>

            

          </div>
        </div>
      </div>
    </>
  );
}
