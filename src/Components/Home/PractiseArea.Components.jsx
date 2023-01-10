import React from "react";
import { Container } from "react-bootstrap";
import "./PractiseArea.Component.css";

export const PractiseAreaComponents = () => {
  const obj = [
    { id: 1, img: "RealEstateIcon", text: "Real Estate" },
    { id: 2, img: "revenueMattersIcom", text: "Revenue Matters" },
    { id: 3, img: "cooperativeSocietyIcon", text: "Co-operative Society" },
    { id: 4, img: "propertyLawIcon", text: "Property Law" },
    { id: 5, img: "civilLitigation", text: "Civil Litigation" },
  ];

  return (
    <>
      <Container>
        <div className="mt-3 practiseArea">
          <h2 className="title">Practise Area</h2>
          <div className="">
            <div className="row my-2">
              {obj.map((data) => (
                <div key={data.id} className="col-md-4 my-4" style={{ textAlign: "center" }}>
                  <img
                    className="practiseIcon"
                    src={process.env.PUBLIC_URL + `Images/${data.img}.png`}
                    alt="real estate icon"
                  />
                  <p className="practiseText">{data.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
