import React from "react";

import { Button } from "semantic-ui-react";

const Time = () => {
  //Todo: Move this to its own file
  const ButtonTest = () => {
    return (
      <div
        className="button"
        style={{
          display: "flex",
          justifyContent: "space-between",
          border: "1px solid",
          borderRadius: "5px",
          padding: "5px",
          margin: "10px",
          boxShadow: "1px 2px  ",
        }}
      >
        <span>Time here</span> <span> Open slots</span>
        <span>{">"}</span>
      </div>
    );
  };

  //Todo: Refactor code
  //Todo: Make buttons clickable
  return (
    <>
      <h1>Wahlen sie die Uhrzeit aus:</h1>
      <div
        style={{
          borderBottom: "2px solid black",
          width: "400px",
          margin: "auto",
          marginBottom: "30px",
        }}
      />
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          margin: "10px",
        }}
      >
        <div className="Morgens" style={{ width: "350px" }}>
          <h2>Morgens</h2>
          <div className="times_container">
            <ButtonTest />
            <ButtonTest />
          </div>
        </div>
        <div className="Mittags " style={{ width: "350px" }}>
          <h2>Mittags</h2>
          <div className="times_container">
            <ButtonTest />
            <ButtonTest />
          </div>
        </div>
        <div className="Abends" style={{ width: "350px" }}>
          <h2>Abends</h2>
          <div className="times_container">
            <ButtonTest />
            <ButtonTest />
          </div>
        </div>
      </div>
      <div className="_button" style={{ marginTop: "50px" }}>
        <Button positive size="large">
          Weiter zur Registration
        </Button>
      </div>
    </>
  );
};

export default Time;
