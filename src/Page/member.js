import React, { useEffect, useState } from "react";

import "../components/css/membercheck.css";
import ContentTitle from "../components/ContentTitle";
import SearchForm from "../components/SearchForm";
import MemberCheckListThead from "../components/userCheck/userListThead";
import MemberCheckListTbody from "../components/userCheck/userListTbody";
import UserInput from "../components/userCheck/userinput";

import axios from "axios";

import { API_URL } from "../constant/constant";

import { useDispatch } from "react-redux";
import { logout } from "../modules/changer";

import { Link } from "react-router-dom";
import LogoutButton from "../components/logoutButton";

export default function Member() {
  const dispatch = useDispatch();

  const [memberList, setMemberList] = useState([]);
  const [checkActive, setCheckActive] = useState(false);
  const [emailDis, setEmailDis] = useState(false);
  const getIsActive = checkActive === true;
  const accessToken = window.localStorage.getItem("accessToken");
  const refreshToken = window.localStorage.getItem("refreshToken");
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    approved: false,
  });

  const addUser = () => {
    if (!CheckBoxClick()) {
      if (emailDis) {
        setEmailDis(false);
        return;
      }

      if (
        userData.name === "" ||
        userData.email === "" ||
        userData.password === ""
      ) {
        alert("이름, 이메일, 비밀번호 확인해주세요");
        return;
      }

      alert("승인된 사원이 아닙니다.");
    } else {
      axios
        .post(
          API_URL + "/member",
          {
            id: userData.id,
            name: userData.name,
            email: userData.email,
            password: userData.password,
            isApproved: userData.approved,
          },
          {
            headers: {
              accessToken: accessToken,
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
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
    }
  };

  // 데이터 업데이트 put
  const fixUser = () => {
    axios
      .put(
        API_URL + "/member",
        {
          name: userData.name,
          password: userData.password,
          isApproved: userData.approved,
        },
        {
          headers: {
            accessToken: accessToken,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
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
  };

  // 데이터 조회 get
  useEffect(() => {
    axios
      .get(API_URL + "/member", {
        headers: {
          accessToken: accessToken,
        },
      })
      .then((response) => {
        const resData = response.data;
        setMemberList(resData);
        console.log(response);
      })
      .catch((error) => {
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
  }, []);

  // 체크박스와 버튼 연결
  const CheckBoxClick = () => {
    setCheckActive(!checkActive);
  };

  // 테이블 클릭시 사용자 정보 값 호출
  function tableRowSelect(e) {
    if (e.target.parentElement.tagName === "TR") {
      const clickTdArray = Array.from(e.target.parentElement.childNodes);
      const tdArray = clickTdArray.map((data) => data.textContent);

      setUserData({
        ...userData,
        name: tdArray[0],
        email: tdArray[1],
        approved: tdArray[2] == "○" ? true : false,
      });
      setEmailDis(true);
    }
  }

  return (
    <>
      <div className="content-wrap">
        <div className="content-main">
          <div className="r">
            <LogoutButton>로그아웃</LogoutButton>
            <Link to="/log">
              <button>로그</button>
            </Link>
            <Link to="/notice">
              <button>공지사항</button>
            </Link>
          </div>

          <ContentTitle title="사용자 관리"></ContentTitle>
          <div className="seach-sec">
            <SearchForm title={"검색"} />
          </div>

          <div className="main-sec">
            <div className="list-sec">
              <h3>사용자 목록</h3>
              <table onClick={tableRowSelect}>
                <MemberCheckListThead />
                <MemberCheckListTbody />
                {memberList.map((data) => (
                  <MemberCheckListTbody
                    key={data.id}
                    memberId={data.id}
                    name={data.name}
                    email={data.email}
                    approved={data.isApproved}
                  ></MemberCheckListTbody>
                ))}
              </table>
            </div>

            <div className="newmember-sec">
              <div className="new-title">
                <h3>사용자 정보</h3>
                <div>
                  {" "}
                  <button
                    className={
                      getIsActive ? "btn-3 btn-color" : "btn-color-none"
                    }
                    onClick={addUser}
                  >
                    신규
                  </button>
                  <button className="btn-3 btn-color" onClick={fixUser}>
                    수정
                  </button>
                </div>
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
                          value={userData.name}
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
                          value={userData.email}
                          disalbed={emailDis}
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
                  checked={userData.approved}
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
