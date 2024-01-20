import React, { useState } from "react";

const Tour = ({ chapter_number, chapter_summary, id, name, read }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article key={id} className="main">
      <h2>Chapter {chapter_number}</h2>
      <h3>{name}</h3>
      <button
        onClick={() => {
          read(chapter_number);
        }}
      >
        Read
      </button>
      <p>
        {readMore ? chapter_summary : `${chapter_summary.substring(0, 300)}`}
        <button
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          {readMore ? "show less" : "read more"}
        </button>
      </p>
      <hr />
    </article>
  );
};

export default Tour;
