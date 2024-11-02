import Timeline from "../components/Timeline";
import { Element } from "react-scroll";
function Education() {
  return (
    <>
      <Element name="education" className="element">
        <div
          id="education"
          className="h-screen w-full border-b border-b-gray-700"
        >
          <div className="py-8 md:py-14 w-full h-[22%] flex justify-center items-center ">
            <h1 className="education-heading text-4xl font-bold section-heading">
              Education
            </h1>
          </div>
          <div className="mx-4 md:mx-20 h-[78%] flex justify-center items-center ">
            <Timeline />
          </div>
        </div>
      </Element>
    </>
  );
}

export default Education;
