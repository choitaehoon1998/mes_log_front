import React from "react";
import "../components/css/membercheck.css";
import ContentTitle from "../components/ContentTitle";
import SearchForm from "../components/SearchForm";
import MemberCheckListThead from "../components/userCheck/userListThead";
import MemberCheckListTbody from "../components/userCheck/userListTbody";
import UserName from "../components/userCheck/userName";
import UserPassWord from "../components/userCheck/userPassword";
import UserEmail from "../components/userCheck/userEmail";

export default function MemberCheck() {
  return (
    <>
      <div className="content-wrap">
        <div className="content-main">
          <ContentTitle title="사용자 관리"></ContentTitle>
          <div className="seach-sec">
            <SearchForm title={"검색"} />
          </div>

          <div className="main-sec">
            <div className="list-sec">
              <h3>사용자 목록</h3>
              <table>
                <MemberCheckListThead />
                <MemberCheckListTbody />
              </table>
            </div>

            <div className="newmember-sec">
              <div className="new-title">
                <h3>사용자 정보</h3>
                <button className="btn-3 btn-color">신규</button>
              </div>
              <div className="user-sec">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label className="user-label">이름</label>
                      </td>
                      <td>
                        <UserName />
                      </td>
                      <td>
                        <label className="user-label">이메일</label>
                      </td>
                      <td>
                        <UserEmail />
                      </td>
                    </tr>
                    <tr>
                      <td>비밀번호</td>
                      <td>
                        <UserPassWord />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
