import React from "react";

function useEffect() {
  //render when function/variable changes
  useEffect(() => {
    DoOperation();
  }, [Renderfunctionorvar]);

  //renders every time
  useEffect(() => {
    DoOperation();
  });

  //Renders ever 1000 seconds
  useEffect(() => {
    DoOperation();
  }, 1000);

  return <div></div>;
}

export default useEffect;
