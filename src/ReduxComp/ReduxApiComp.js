import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Pagination from "./Pagination";
import Loading from "./Loading";

function ReduxApiComp({
  cartUpdateHanled,
  cardsClass,
  chunkCount,
  itemsAdd,
  priceLabel = false,
}) {
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
  if (!itemsAdd) return <Loading />;
  else {
    var pageList = chunkFn(itemsAdd, chunkCount);
    return (
      <>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageList={pageList}
        />
        <div className={`row ${cardsClass}`}>
          <ul className="cards">
            {pageList.length > 0 &&
              pageList[currentPage].map((eachList, index) => {
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
                    priceLabel={priceLabel}
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
