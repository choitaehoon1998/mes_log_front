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

                    <div>검색창부분</div>

                    <div className="left-frame">
                        <div className="form-frame frame1">
                            <table>
                                <thead className="thead">
                                    <tr>
                                        <th>error</th>
                                        <th>name</th>
                                        <th>date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ㅇ
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