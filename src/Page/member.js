import React, { useEffect, useState } from "react";

import "../components/css/membercheck.css";
import ContentTitle from "../components/ContentTitle";
import SearchForm from "../components/SearchForm";
import MemberCheckListThead from "../components/userCheck/userListThead";
import MemberCheckListTbody from "../components/userCheck/userListTbody";
import UserInput from "../components/userCheck/userinput";

import axios from "axios";

import { API_URL } from "../constant/constant";

export default function Member() {
  const [memberList, setMemberList] = useState([]);
  const [checkActive, setCheckActive] = useState(false);
  const getIsActive = checkActive === true;

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    approved: false,
  });

  const addUser = () => {
    if (!CheckBoxClick()) {
      alert("승인된 사원이 아닙니다.");
    } else {
      axios
        .post(
          API_URL + "/member",
          {
            name: userData.name,
            email: userData.email,
            password: userData.password,
            approved: userData.approved,
          },
          {
            headers: {
              accessToken:
                "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiaWF0IjoxNjQ0ODExOTQ5LCJleHAiOjE2NDQ4MTkxNDl9.PRPJ1o42kaf9XMwv3gplVlts5RRqIOlMb4ZjHWXDGA0",
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    axios
      .get(API_URL + "/member", {
        headers: {
          accessToken:
            "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiaWF0IjoxNjQ0ODExOTQ5LCJleHAiOjE2NDQ4MTkxNDl9.PRPJ1o42kaf9XMwv3gplVlts5RRqIOlMb4ZjHWXDGA0",
        },
      })
      .then((response) => {
        const resData = response.data;
        setMemberList(resData);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const CheckBoxClick = () => {
    setCheckActive(!checkActive);
  };

  function debuggerFnc(e) {
    debugger;
  }

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
              <table onClick={debuggerFnc}>
                <MemberCheckListThead />
                {memberList.map((data) => (
                  <MemberCheckListTbody
                    key={data.id}
                    memberId={data.id}
                    name={data.name}
                    email={data.email}
                  ></MemberCheckListTbody>
                ))}
              </table>
            </div>

            <div className="newmember-sec">
              <div className="new-title">
                <h3>사용자 정보</h3>
                <button
                  className={getIsActive ? "btn-3 btn-color" : "btn-color-none"}
                  onClick={addUser}
                >
                  신규
                </button>
              </div>
              <div className="user-sec">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label className="user-label">이름</label>
                      </td>
                      <td>
                        <UserInput
                          handleChange={(value) => {
                            setUserData({ ...userData, name: value });
                          }}
                        />
                      </td>
                      <td>
                        <label className="user-label">이메일</label>
                      </td>
                      <td>
                        <UserInput
                          handleChange={(value) => {
                            setUserData({ ...userData, email: value });
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>비밀번호</td>
                      <td>
                        <UserInput
                          handleChange={(value) => {
                            setUserData({ ...userData, password: value });
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <input
                  type="checkbox"
                  value={userData.approved}
                  onClick={CheckBoxClick}
                  onChange={(e) => {
                    setUserData({ ...userData, approved: e.target.checked });
                  }}
                />
                <label> 승인된 사용자 입니다.</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
