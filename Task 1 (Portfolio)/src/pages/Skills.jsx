import CircleSkills from "../components/CircleSkills";
import { Element } from "react-scroll";
function Skills() {
  return (
    <>
      <Element name="skills" className="element">
        <div id="skills" className="h-screen w-full border-b border-b-gray-700">
          <div className="py-8 md:py-14 w-full h-[15%] md:h-[22%] flex justify-center items-center ">
            <h1 className="skills-heading text-4xl font-bold section-heading">
              Skills
            </h1>
          </div>
          <div className="mx-4 md:mx-20 md:h-[78%] h-[85%] flex justify-center items-center ">
            <div className="gap-10 w-full grid sm:grid-cols-2 ">
              <div className="flex justify-center sm:justify-start md:justify-center items-center order-last sm:order-first ">
                <div className="flex flex-col gap-2 md:gap-6">
                  <div className="">
                    <p className="skills-list pb-1 md:pb-5 font-bold pr-3 whitespace-nowrap">
                      Front-End Development:
                    </p>
                    <p className="skills-list ">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- HTML, CSS, JavaScript,
                      React, Tailwind CSS
                    </p>
                  </div>
                  <div className="">
                    <p className="skills-list pb-1 md:pb-5 font-bold pr-3 whitespace-nowrap">
                      Back-End Development:
                    </p>
                    <p className="skills-list ">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Node.js, Express
                    </p>
                  </div>
                  <div className="">
                    <p className="skills-list pb-1 md:pb-5 font-bold pr-3 whitespace-nowrap">
                      Databases:
                    </p>

                    <p className="skills-list ">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- MongoDB, PostgreSQL
                    </p>
                  </div>
                  <div className="">
                    <p className="skills-list pb-1 md:pb-5 font-bold pr-3 whitespace-nowrap">
                      Version Control:
                    </p>
                    <p className="skills-list ">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Git
                    </p>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden">
                <CircleSkills />
              </div>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}

export default Skills;
