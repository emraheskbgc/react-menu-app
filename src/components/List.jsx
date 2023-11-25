import React from "react";
import datas from "../data.json";

const List = ({ selectCategory }) => {
  const filteredData =
    selectCategory !== "All"
      ? datas.filter((data) => data.category === selectCategory)
      : datas;

  return (
    <div className="container listCard mb-5">
      <div className="row d-flex justify-content-evenly">
        {filteredData.map((data) => (
          <div className="card col-md-3 mt-5 mx-2 cardDiv" key={data.id}>
            <div className="card-img-top mt-1">
              <img
                src={data.path}
                style={{ width: "170px", height: "150px" }}
                alt=""
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.price} TL</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
