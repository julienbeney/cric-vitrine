'use client' 
import { useState, CSSProperties } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Loading() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#2A8CFF");

  return (
    <div className="flex justify-center items-center h-screen">
      <BeatLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loading;

