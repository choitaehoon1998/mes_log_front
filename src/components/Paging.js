import React from "react";

const Paging = (props) => {
  const num = [];
  if (props.total < 10) {
    for (let i = 0; i < props.total / 10; i++) {
      num.push(i);
    }
  } else if (props.total > 10) {
    let showPage = parseInt(props.page / 10);
    props.page % 10 === 0 ? (showPage = showPage - 1) : (showPage = showPage);

    for (let i = 0 + showPage * 10; i < 10 + 10 * showPage; i++) {
      num.push(i);
    }
  }

  const Prev = () => {
    props.setPage(props.page - 1);
  };
  const Next = () => {
    props.setPage(props.page + 1);
  };

  return (
    <>
      <button onClick={Prev} className="btn-2 btn-color-2 btn-p"></button>
      {num.map((n) => (
        <button
          key={n}
          onClick={() => props.setPage(n)}
          className={
            props.page === n ? "btn-2 btn-color-2-active" : "btn-2 btn-color-2"
          }
        >
          {n + 1}
        </button>
      ))}
      <button onClick={Next} className="btn-2 btn-color-2 btn-n"></button>
    </>
  );
};

export default Paging;
