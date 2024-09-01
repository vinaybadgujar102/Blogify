import React from "react";

const Quote = () => {
  return (
    <div className="bg-slate-200 h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="max-w-lg">
          <div className="max-w-md text-3xl font-bold">
            "The customer service I recived was esceptional. The support team
            went above and beyond to address my concerns"
          </div>
          <div className="max-w-md text-xl font-semibold text-start mt-2">
            Julies Winfield
          </div>
          <div className="max-w-md text-sm font-light text-slate-400">
            CEO of Amec Corp
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
