import React from "react";

const Psaging = ({postPerPage, totalPosts, paginate}) =>{
const pageNumbers = [];

for(let i=1; i<=Math.ceil(totalPosts / postPerPage); i++){
    pageNumbers.push(i);
}
return(
    <nav>
        <ul className="pagination textMid w-100p pt-5">
            {pageNumbers.map(num =>
                <li key={num}>
                    <a onClick={() => paginate(num)} href='!#'>{num}</a>
                </li>)}
        </ul>
    </nav>
    );
}
export default Psaging;