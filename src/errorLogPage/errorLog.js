import React, { useEffect, useState } from "react";
import "./errorLog.css";
import axios from "axios";
import ContentTitle from "../content/ContentTitel";
import SearchForm from "../components/SearchForm";
import Thead from "./thead";
import Tbody from "./tbody";

export default function ErrorLog() {
  const [errors, setErrors] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
      axios
        .get("http://a50b-175-119-149-98.ngrok.io/log", {
          params: { size: 10, page: page, companyCode: searchKeyword },
      })
      .then((response) => {
        setTotal(Math.ceil(response.data.totalElements / 10) - 1);
        setErrors(response.data.content);
        console.log(response.data.content);
        
      })
      .catch((err) => console.log(err));
  }, [searchKeyword]);
    

  const onPrev = () => {
    if (!(page === 0)) {
      setPage(page > 0 ? page - 1 : page);
      axios
        .get("http://a50b-175-119-149-98.ngrok.io/log", {
          params: { size: 10, page: page - 1, companyCode: searchKeyword },
        })
        .then((response) => {
          setErrors(response.data.content);
        });
    }
  };
  const onNext = () => {
    if (!(page === total)) {
      setPage(page < total ? page + 1 : total);
      axios
        .get("http://a50b-175-119-149-98.ngrok.io/log", {
          params: { size: 10, page: page + 1, companyCode: searchKeyword },
        })
        .then((response) => {
          setErrors(response.data.content);
        });
    }
  };

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
                <button onClick={onPrev} className="btn-2 btn-color-2">
                  이전
                </button>
                &nbsp;{page + 1} / {total + 1}&nbsp;
                <button onClick={onNext} className="btn-2 btn-color-2">
                  다음
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
