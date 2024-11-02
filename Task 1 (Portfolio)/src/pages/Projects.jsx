import { Element } from "react-scroll";
function Projects() {
  return (
    <>
      <Element name="projects" className="element">
        <div
          id="projects"
          className=" min-h-screen flex flex-col justify-around pb-8 border-b border-b-gray-700"
        >
          <div className="py-8 md:py-14 w-full flex justify-center items-center">
            <h1 className="project-heading text-4xl font-bold section-heading">
              Projects
            </h1>
          </div>
          <div className=" w-full  flex justify-center items-center">
            <div className="mx-4 sm:mx-16 w-full grid md:grid-cols-2 gap-6 justify-center items-center">
              <div className="outer">
                <div className="card-1 flex flex-col justify-around rounded-lg border border-gray-600 gap-4 p-2">
                  <div>
                    <img src="blog.png" alt="" />
                  </div>
                  <div>
                    <p className="text-xl py-2 font-bold">Blog Website</p>
                    <p>
                      Fully functional blog website built using the MERN stack.
                      It features user authentication, allowing users to create
                      accounts, log in, and manage their posts. The website
                      includes functionalities for creating, editing, and
                      deleting blog entries. The responsive design ensures a
                      seamless user experience across devices. This project
                      showcases my ability to develop dynamic web applications
                      and implement RESTful APIs, demonstrating a solid
                      understanding of full-stack development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="outer">
                <div className="card-2 flex flex-col justify-around rounded-lg border border-gray-600 gap-4 p-2">
                  <div>
                    <img src="dashboard.png" alt="" />
                  </div>
                  <div>
                    <p className="text-xl py-2 font-bold">Dashboard Website</p>
                    <p>
                      Dashboard website created using the MERN stack and Google
                      Charts. It visualizes key data insights, including "Sales
                      by Region" through bar graphs and pie charts, and
                      "Customer Feedback by Products" using bar charts and
                      stacked column charts. The interactive filter
                      functionality allows users to customize their view
                      enhancing usability and analysis. This project highlights
                      my skills in data visualization and full-stack development
                      to create dynamic and user-centric web applications.
                    </p>
                  </div>
                </div>
              </div>
              <div className="outer">
                <div className="card-3 flex flex-col justify-around rounded-lg border border-gray-600 gap-4 p-2">
                  <div>
                    <img src="weather.png" alt="" />
                  </div>
                  <div>
                    <p className="text-xl py-2 font-bold">Weather Website</p>
                    <p>
                      Weather application built with React that provides
                      real-time weather updates based on the user's location.
                      Utilizing Axios for API calls to the OpenWeatherMap API,
                      the app fetches and displays detailed weather data,
                      including temperature, humidity etc. The intuitive
                      interface allows users to easily input their location and
                      receive accurate weather information. This project
                      showcases my proficiency in React and API integration,
                      highlighting my ability to create responsive and
                      user-friendly applications.
                    </p>
                  </div>
                </div>
              </div>
              <div className="outer">
                <div className="card-4 flex flex-col justify-around rounded-lg border border-gray-600 gap-4 p-2">
                  <div>
                    <img src="todo.png" alt="" />
                  </div>
                  <div>
                    <p className="text-xl py-2 font-bold">Todo Website</p>
                    <p>
                      Todo website developed using React, featuring a simple and
                      intuitive interface for task management. Users can easily
                      add, delete, and mark tasks as complete, enhancing their
                      productivity. I implemented Redux for state management,
                      ensuring a smooth and efficient user experience as the
                      application scales. This project demonstrates my ability
                      to create responsive web applications and effectively
                      manage state in complex UIs, showcasing my skills in React
                      and modern web development practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}

export default Projects;
