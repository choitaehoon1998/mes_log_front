import React from "react";

export default function Tbody({props}) {
    return(
        <tbody className=" ">
            {props.map(post =>             
            <tr>
                <td className="w-30p br-1 verMid p-5 h25">{post._id}</td>
                <td className="br-1 verMid p-5 h25">{post.userName}</td>
                <td className="br-1 verMid p-5 h25">{post.sendDateTime}</td>
                <td className="br-1 textMid verMid p-5 h25">
                    <button className="btn-color btn-small">보기</button>
                </td>
            </tr>
            )}
        </tbody>
    );
}