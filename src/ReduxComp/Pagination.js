import React from "react";

function Pagination({ currentPage, setCurrentPage, pageList }) {
  const pagination = (pageList) =>
    pageList.map((eachList, index) => {
      let currentItemId = index;
      let activevalue =
        currentPage === index - 1 ||
        currentPage === index ||
        currentPage === index + 1;

      if (activevalue)
        return (
          <li
            key={index}
            style={{
              display:
                currentPage === index - 1 ||
                currentPage === index ||
                currentPage === index + 1
                  ? "inline"
                  : "none",
            }}
            className={currentPage === index ? "active" : ""}
          >
            <span onClick={() => setCurrentPage(currentItemId)}>
              {currentItemId + 1}
            </span>
          </li>
        );
      else return null;
    });
  return (
    <div className="justify-content-end">
      <ul className="pagination col-sm-12">
        <li
          style={{ display: "inline" }}
          className={currentPage === 0 ? "disabled" : ""}
        >
          <span onClick={() => setCurrentPage(0)}>Previous</span>
        </li>
        {pagination(pageList)}
        <li
          style={{ display: "inline" }}
          className={currentPage === pageList.length - 1 ? "disabled" : ""}
        >
          <span onClick={() => setCurrentPage(pageList.length - 1)}>Last</span>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
