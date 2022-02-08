import React, {useEffect, useState} from "react";
import "./errorLog.css";
import axios from "axios";
import ContentTitle from "../content/ContentTitel";
import Thead from "./thead";
import Tbody from "./tbody";

export default  function ErrorLog() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://0c4a-175-119-149-98.ngrok.io/log")
        .then(response => setUsers(response.data))
        .catch(err => console.log(err))
    },[]);
    return( 
        <>
        <div className="content-wrap">
            <div className="content">
                <div className="content-main">
                    <ContentTitle title="Error Log"></ContentTitle>

                    <div className="left-frame">
                        <div className="form-frame frame1">
                            
                            <input placeholder="search"></input>

                            <div className="form-groups">
                                
                                <label>
                                    목록
                                </label>

                            <table>
                                <Thead></Thead>

                                <Tbody no="1" id="testidtestid" name="userName" date="00-00-00" link=""></Tbody>

                            </table>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div>
            <ul>
                {users.map(user => <li ket={user._id}>{user.userName}</li>)}
            </ul>
        </div>
        </>
    );
}