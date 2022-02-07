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
                            <div className="form-groups">
                                <label>
                                    목록
                                </label>
                            <table>
                                <thead >
                                        <tr >
                                            <th>ID</th>
                                            <th>name</th>
                                            <th>Send Date</th>
                                        </tr>
                                </thead>
                            

                                <tbody >

                                    
                                        <tr>
                                            <td>61f1fc28a7e6af781d4f179d</td>
                                            <td>userName</td>
                                            <td>sendDate</td>
                                        </tr>

                                </tbody>

                                <tbody >

                                    
                                        <tr>
                                            <td>61f1fc28a7e6af781d4f179d</td>
                                            <td>userName</td>
                                            <td>sendDate</td>
                                        </tr>

                                </tbody>


                            </table>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
}