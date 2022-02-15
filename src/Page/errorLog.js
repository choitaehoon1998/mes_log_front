import React, { useEffect, useState } from "react";
import "../components/css/errorLog.css";
import axios from "axios";

import ContentTitle from "../components/ContentTitle";
import SearchForm from "../components/SearchForm";
import Thead from "../components/errors/errorsThead";
import Tbody from "../components/errors/errorTbody";
import { API_URL } from "../constant/constant";
import DateRange from "../components/daterange";
import Paging from "../components/Paging";
import LogoutButton from "../components/logoutButton";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../modules/changer";

export default function ErrorLog() {
  const dispatch = useDispatch();
  let startDate = new Date();

  const status = useSelector((state) => state.changer);

  startDate.setMonth(startDate.getMonth() - 1);
  const [errors, setErrors] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState({
    companyCode: "",
    userName: "",
    exceptionClass: "",
    exceptionMessage: "",
    methodType: "",
    requestUri: "",
    remoteHost: "",
    startDate: startDate.toISOString().substring(0, 10),
    endDate: new Date().toISOString().substring(0, 10),
  });

  useEffect(() => {
    const accessToken = window.localStorage.getItem("accessToken");
    const refreshToken = window.localStorage.getItem("refreshToken");
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
        headers: {
          accessToken: accessToken,
        },
      })
      .then((response) => {
        setTotal(Math.ceil(response.data.totalElements));
        setTotalPage(Math.ceil(response.data.totalPages));
        setErrors(response.data.content);
      })
      .then(() => {
        if (page > total) {
          setPage(0);
        }
      })
      .catch((e) => {
        axios
          .get(API_URL + "/newAccessToken", {
            headers: {
              refreshToken: refreshToken,
            },
          })
          .then((response) => {
            window.localStorage.setItem(
              "accessToken",
              response.data.accessToken
            );
          })
          .catch((e) => {
            dispatch(logout());
          });
      });
  }, [searchKeyword, page, total, status]);

  return (
    <>
      <div className="content-wrap">
        <div className="content-main">
          <div className="r">
            <LogoutButton>로그아웃</LogoutButton>
          </div>

          <ContentTitle title="Error Log"></ContentTitle>

          <section>
            <div className="search-group">
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
                  setSearchKeyword({
                    ...searchKeyword,
                    exceptionMessage: value,
                  });
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
                title={"날짜"}
                onchangeFunction={(name, value) => {
                  setSearchKeyword({ ...searchKeyword, [name]: value });
                }}
              ></DateRange>
            </div>
          </section>

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

                <Paging
                  page={page}
                  total={total}
                  setPage={setPage}
                  totalPage={totalPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
