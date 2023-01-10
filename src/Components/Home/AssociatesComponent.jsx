import React from "react";
import lstAssociates from "../../Models/AssociatesData.json";

export const AssociatesComponent = () => {
  const componentHTML = (
    <div className="mt-3 associates">
      <h2 className="title">Our Associates</h2>
      <div className="container-fluid">
        <div className="row my-2">
          {lstAssociates.map((data) => (
            <div
              key={data.id}
              className="col-md-4 my-4"
              style={{ textAlign: "center" }}
            >
              <img
                className="associateProfile"
                style={{ height: "450px" }}
                src={process.env.PUBLIC_URL + `Images/Profile/${data.img}.png`}
                alt="real estate icon"
              />
              <p className="practiseText">
                {data.text} <br /> {data.qualification}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return componentHTML;
};
