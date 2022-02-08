import React from "react"

export default function Thead() {
    return(
        <thead className="h25">
            <tr >
                <th className="w-100 textLeft">NO</th>
                <th className="textLeft">ID</th>
                <th className="textLeft">name</th>
                <th className="w-200 textLeft">Send Date</th>
                <th className="w-40 textLeft">상세</th>
            </tr>
        </thead>
    );
}