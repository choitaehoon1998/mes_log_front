import React, { useEffect, useState } from "react";
import "./errorLog.css";
import axios from "axios";
import ContentTitle from "../content/ContentTitel";
import Thead from "./thead";
import Tbody from "./tbody";

export default function ErrorLog() {
  const [errors, setErrors] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
     axios.get('http://a50b-175-119-149-98.ngrok.io/log',{
      params: {size: 10, page: (page)}
      })
      // .get("http://localhost:8081/log")
      .then((response) => {
        setTotal(Math.ceil(response.data.totalElements/10)-1 );
        setErrors(response.data.content);
        console.log("total",total)
      })
      .catch((err) => console.log(err)); 
  }, []);

  const onPrev=()=>{
    if(!(page === 0) ){
      setPage(page>0 ? page-1 : page )
      axios.get('http://a50b-175-119-149-98.ngrok.io/log',{
       params: {size: 10, page: (page-1)}
       })
       .then((response) => {
         setErrors(response.data.content);
       })
    } 
  }
  const onNext=()=>{
     if(!(page === total)){
      setPage((page<total) ? page+1 : total )
      axios.get('http://a50b-175-119-149-98.ngrok.io/log',{
       params: {size: 10, page: (page+1)}
       })
       .then((response) => {
         setErrors(response.data.content);
       })
     }
  }

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
                    <Thead />
                    <Tbody props={errors} />
                    <button onClick={onPrev} >이전</button>
                    &nbsp;{page+1} / {total+1}&nbsp;
                    <button onClick={onNext} >다음</button>
                  </table>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
