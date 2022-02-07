import React from "react";
import "./errorLog.css";
import ContentTitle from "../content/ContentTitel";

export default function ErrorLog() {
    return( 
        <>
        <div className="content-wrap">
            <div className="content">
                <div className="content-main">
                    <ContentTitle title="Error Log"></ContentTitle>
                    <div className="left-frame">
                        <div className="form-frame frame1">
                            <label>
                                목록
                            </label>

                            <div className="form-groups">
                                
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
}