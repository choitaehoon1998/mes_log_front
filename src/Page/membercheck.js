import React, { useEffect } from "react";

import ContentTitle from "../components/ContentTitle";
import SearchForm from "../components/SearchForm";
import MemberCheckListThead from "../components/userCheck/userListckThead";
import MemberCheckListTbody from "../components/userCheck/userListckTbody";
import axios from "axios";

import { API_URL } from "../constant/constant";

const MemberCheck = () => {
  const headers = {
    "content-type": "application/json;charset=UTF-8",
    accessToken:
      "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiaWF0IjoxNjQ0Nzk3ODg0LCJleHAiOjE2NDQ4MDUwODR9.Mm0gAsqd1ZKHBuNZbHV2iSz_JipzH_mXz9rP6VgXnJ8",
  };

  useEffect(() => {
    axios
      .put(
        API_URL + "/member",
        {},
        {
          headers,
        }
      )
      .then((response) => {
        const dateList = response;
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div className="content-wrap">
      <div className="content-main">
        <ContentTitle title="사용자 승인"></ContentTitle>
        <div className="seach-sec">
          <SearchForm title={"검색"} />
        </div>

        <div className="membercheck-maim">
          <h3>사용자 목록</h3>
          <table>
            <MemberCheckListThead />
            <MemberCheckListTbody />
          </table>
        </div>
      </div>
    </div>
  );
};

export default MemberCheck;
