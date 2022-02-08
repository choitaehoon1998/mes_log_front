import React from "react";
import Pagination from "react-js-pagination";

const Paging = ({postPerPage, totalPosts, paginate}) =>{
const pageNumbers = [];

for(let i=1; i<=Math.ceil(totalPosts / postPerPage); i++){
    pageNumbers.push(i);
}
return ( <Pagination 
    activePage={pageNumbers} 
    itemsCountPerPage={10} 
    totalItemsCount={totalPosts} 
    pageRangeDisplayed={5} 
    prevPageText={"‹"} 
    nextPageText={"›"}
    /> ); 
};

export default Paging;