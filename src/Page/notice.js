import React, { useState, useMemo, useRef } from "react";
import ContentTitle from "../components/ContentTitle";
import SearchForm from "../components/SearchForm";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Input from "../components/errors/errorinput";
import { Link } from "react-router-dom";
import LogoutButton from "../components/logoutButton";

const Notis = () => {
  const quillRef = useRef();
  const [content, setContent] = useState({
    header: "",
    body: "",
  });

  const modules = useMemo(() => {
    return {
      toolbar: [
        //[{ 'font': [] }],
        [{ header: [1, 2, 3, 4, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
        ["clean"],
      ],
    };
  });

  const formats = [
    //'font',
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];

  const handleChangeHeader = (e) => {
    let newContent = { ...content };
    newContent.header = e;
    setContent(newContent);
  };

  const handleChangeBody = (e) => {
    let newContent = { ...content };
    newContent.body = e;
    setContent(newContent);
  };

  const submitNotice = () => {
    // axios put 전송
    const dataBody = { ...content };
    if (content.header === "") {
      console.log("글 제목 입력하세요.");
    }
    console.log(content);
  };

  return (
    <>
      <div className="content-wrap">
        <div className="content-main">
          <div className="r">
            <LogoutButton>로그아웃</LogoutButton>
            <Link to="/log">
              <button>로그</button>
            </Link>
            <Link to="/member">
              <button>멤버</button>
            </Link>
          </div>
          <ContentTitle title="Notice"></ContentTitle>
          <section>
            <div className="search-group">
              <SearchForm
                title={"글 제목"}
                onchangeFunction={(e) => {
                  handleChangeHeader(e);
                }}
              ></SearchForm>
              <div style={{ marginLeft: "auto" }}>
                <button onClick={submitNotice}>전송</button>
              </div>
            </div>
          </section>
          <ReactQuill
            value={content.body}
            modules={modules}
            formats={formats}
            onChange={handleChangeBody}
          />
        </div>
      </div>
    </>
  );
};

export default Notis;
