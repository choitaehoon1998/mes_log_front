import React from "react";

export default function Tbody(props) {
    return(
        <tbody className="h25 ">            
            <tr>
                <td className="br-1 verMid">{props.no}</td>
                <td className="w-30p br-1 verMid">{props.id}</td>
                <td className="br-1 verMid">{props.name}</td>
                <td className="br-1 verMid">{props.date}</td>
                <td className="br-1 textMid verMid "><button>보기</button></td>
            </tr>
        </tbody>
    );
}