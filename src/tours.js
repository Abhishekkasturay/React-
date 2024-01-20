import React, { useState } from "react";
import Tour from "./tour";
const Tours = ({ tours, read }) => {
  return (
    <section>
      <div className="title"></div>
      <div className="underline">
        <h1>Bhagwat Geeta</h1>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} read={read}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
