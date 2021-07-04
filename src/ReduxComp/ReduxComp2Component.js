/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterValue } from "./action";
import "./index.scss";
import ReduxApiComp from "./ReduxApiComp";

const ReduxComp2Component = (props) => {
  const [userId, setUserId] = useState([]);
  const [sortData, setSortData] = useState([]);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(filterValue());
  }, []);

  const filterList = (posts) => {
    var filterListData = posts.map((i) => {
      return i.userId;
    });
    var filterListDataSet = new Set(filterListData);
    return [...filterListDataSet];
  };

  const filteredData = (posts, item, val) => {
    var state = val[0];
    var bb = [];
    if (state.length > 0) {
      state.forEach((i) => {
        var template = { [item[0]]: i };
        var dataNew = posts.filter((person) => {
          return Object.keys(template).every(
            (propertyName) => person[propertyName] === template[propertyName]
          );
        });
        dataNew.every((i) => bb.push(i));
      });
      return bb;
    }
    return posts;
  };
  const onChangeFilter = (elem) => {
    var selected = [];
    for (var option of elem.options) {
      if (option.selected) {
        selected.push(Number(option.value));
      }
    }
    setUserId(selected);
  };
  return (
    <div>
      <h1>Comp 2</h1>
      <div className="product-card-container">
        <div className="col-md-8">
          <div className="row">
            <ReduxApiComp
              cardsClass={props.cardsStyle}
              chunkCount={props.chunkCount}
              itemsAdd={filteredData(posts, ["userId"], [userId])}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <article className="card-group-item">
              <header className="card-header">
                <h6 className="title">User </h6>
              </header>
              <div className="filter-content">
                <div className="card-body">
                  <form>
                    <select
                      multiple
                      className="form-control"
                      onChange={(e) => onChangeFilter(e.target)}
                    >
                      <option value="">Select user id</option>
                      {filterList(posts).map((i) => (
                        <option value={i} key={`val-${i}`}>
                          {i}
                        </option>
                      ))}
                    </select>
                    <label className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <span className="form-check-label">Mersedes Benz</span>
                    </label>
                    <label className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <span className="form-check-label">Nissan Altima</span>
                    </label>
                    <label className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <span className="form-check-label">Another Brand</span>
                    </label>
                  </form>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReduxComp2Component;
