import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./errorLog.css";
import ContentTitle from "../content/ContentTitel";
import ErrorModal from "../component/errormodalpop";
import NameInput from "../component/nameinput"

function ErrorLog() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  


  return (
    <>
      <div className="content-wrap">
        <div className="content">
          <div className="content-main">
            <ContentTitle title="Error Log"></ContentTitle>
            <div className="left-frame">
              <React.Fragment>
                <button className="btn btn-color" onClick={openModal}>모달팝업</button>
                <ErrorModal
                  open={modalOpen}
                  close={closeModal}
                  header="Error Popup"
                  main={
                    <div>
                      <label>이름</label>
                      <NameInput />
                    </div>
                  }
                >
                </ErrorModal>
              </React.Fragment>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorLog;