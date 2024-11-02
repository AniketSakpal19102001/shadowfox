import React from "react";

const Timeline = () => {
  return (
    <ol className="relative border-l border-gray-200">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
        <div className="education-list">
          <time className="mb-1 text-sm font-normal leading-none text-white">
            2019 - 2023
          </time>
          <h3 className="text-lg font-semibold text-white">
            B.E in Computer Engineering
          </h3>
          <p className="mb-4 text-base font-normal text-white">
            Shivajirao S. Jondhale College of Engineering, Dombivli.
          </p>
        </div>
      </li>

      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
        <div className="education-list">
          <time className="mb-1 text-sm font-normal leading-none text-white">
            2018 - 2019
          </time>
          <h3 className="text-lg font-semibold text-white">HSC</h3>
          <p className="text-base font-normal text-white">
            K.V. Pendharkar College of Arts, Science and Commerce, Dombivli.
          </p>
        </div>
      </li>

      <li className="ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
        <div className="education-list">
          <time className="mb-1 text-sm font-normal leading-none text-white">
            2016 - 2017
          </time>
          <h3 className="text-lg font-semibold text-white">SSC</h3>
          <p className="text-base font-normal text-white">
            S.I.C.E.S High School, Ambernath.
          </p>
        </div>
      </li>
    </ol>
  );
};

export default Timeline;
