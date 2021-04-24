import React, { useEffect, useState } from "react";
import Cards from "./Cards";

function ReduxApiComp({ cartUpdateHanled, cardsClass, chunkCount, itemsAdd }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const chunkFn = function (arr, chunk) {
    var arrTemp = [];
    for (var i = 0; i < arr.length; i += chunk) {
      let tempArr;
      tempArr = arr.slice(i, i + chunk);
      arrTemp.push(tempArr);
    }
    return arrTemp;
  };
  console.log(itemsAdd);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    itemsAdd(url);
  }, []);

  const pagination = items.map((eachList, index) => {
    // eachList.length;
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
  });
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="justify-content-end">
          <ul className="pagination col-sm-12">
            <li
              style={{ display: "inline" }}
              className={currentPage === 0 ? "disabled" : ""}
            >
              <span onClick={() => setCurrentPage(0)}>Previous</span>
            </li>
            {pagination}
            <li
              style={{ display: "inline" }}
              className={currentPage === items.length - 1 ? "disabled" : ""}
            >
              <span onClick={() => setCurrentPage(items.length - 1)}>Last</span>
            </li>
          </ul>
        </div>
        <div className={`row ${cardsClass}`}>
          <ul className="cards">
            {items.length > 0 &&
              items[currentPage].map((eachList, index) => {
                const { albumId, id, url, title } = eachList;
                return (
                  <Cards
                    key={title + index}
                    cartUpdateHanled={cartUpdateHanled}
                    eachList={eachList}
                    albumId={albumId}
                    id={id}
                    url={url}
                    title={title}
                  />
                );
              })}
          </ul>
        </div>
      </>
    );
  }
}

export default ReduxApiComp;
