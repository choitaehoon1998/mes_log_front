import React, { useEffect, useState } from "react";
import "./errorLog.css";
import axios from "axios";

import ContentTitle from "../content/ContentTitel";
import SearchForm from "../components/SearchForm";
import Thead from "./thead";
import Tbody from "./tbody";
import { API_URL } from "../constant/constant";
import DateRange from "../components/daterange";
export default function ErrorLog() {
  const [errors, setErrors] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState({
    companyCode: "",
    userName: "",
    exceptionClass: "",
    exceptionMessage: "",
    methodType: "",
    requestUri: "",
    remoteHost: "",
    startDate: new Date().toISOString().substring(0, 10),
    endDate: new Date().toISOString().substring(0, 10),
  });

  useEffect(() => {
    console.log(searchKeyword);
    axios
      .get(API_URL + "/log", {
        params: {
          size: 10,
          page: page,
          companyCode: searchKeyword.companyCode,
          userName: searchKeyword.userName,
          exceptionClass: searchKeyword.exceptionClass,
          exceptionMessage: searchKeyword.exceptionMessage,
          method: searchKeyword.methodType,
          requestUri: searchKeyword.requestUri,
          remoteHost: searchKeyword.remoteHost,
          startDate: searchKeyword.startDate,
          endDate: searchKeyword.endDate,
        },
      })
      .then((response) => {
        setTotal(Math.ceil(response.data.totalElements / 10) - 1);
        setErrors(response.data.content);
      })
      .catch((err) => console.log(err));
  }, [searchKeyword]);

  const onPrev = () => {
    if (!(page === 0)) {
      setPage(page > 0 ? page - 1 : page);
      axios
        .get(API_URL + "/log", {
          params: { size: 10, page: page - 1 },
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
        .get(API_URL + "/log", {
          params: { size: 10, page: page + 1 },
        })
        .then((response) => {
          setErrors(response.data.content);
        });
    }
  };
  const onFirst = () => {
    axios
      .get(API_URL + "/log", {
        params: { size: 10, page: 0 },
      })
      .then((response) => {
        setErrors(response.data.content);
        setPage(0);
      });
  };

  return (
    <>
      <div className="content-wrap">
        <div className="content-main">
          <ContentTitle title="Error Log"></ContentTitle>
          <SearchForm
            title={"회사 코드"}
            onchangeFunction={(value) => {
              setSearchKeyword({ ...searchKeyword, companyCode: value });
            }}
          ></SearchForm>
          <SearchForm
            title={"유저 명"}
            onchangeFunction={(value) => {
              setSearchKeyword({ ...searchKeyword, userName: value });
            }}
          ></SearchForm>
          <SearchForm
            title={"예외 클래스"}
            onchangeFunction={(value) => {
              setSearchKeyword({ ...searchKeyword, exceptionClass: value });
            }}
          ></SearchForm>
          <SearchForm
            title={"예외 메세지"}
            onchangeFunction={(value) => {
              setSearchKeyword({ ...searchKeyword, exceptionMessage: value });
            }}
          ></SearchForm>
          <SearchForm
            title={"원격 호스트"}
            onchangeFunction={(value) => {
              setSearchKeyword({ ...searchKeyword, remoteHost: value });
            }}
          ></SearchForm>
          <SearchForm
            title={"요청 URL"}
            onchangeFunction={(value) => {
              setSearchKeyword({ ...searchKeyword, requestUri: value });
            }}
          ></SearchForm>
          <SearchForm
            title={"메소드 종류"}
            onchangeFunction={(value) => {
              setSearchKeyword({ ...searchKeyword, methodType: value });
            }}
          ></SearchForm>
          <DateRange
            onchangeFunction={(name, value) => {
              setSearchKeyword({ ...searchKeyword, [name]: value });
            }}
          ></DateRange>
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
                <button onClick={onFirst} className="btn-2 btn-color-2">
                  1페이지
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
