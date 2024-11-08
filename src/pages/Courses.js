import React from "react";
import Header from "../components/Header";
import courseslist from "./coursesdata";
function Courses() {
  return (
    <div>
      <Header />
      <div
        className="courses-intro"
        style={{ backgroundImage: `url('./courses.svg')` }}
      >
        <div className="courses-intro-content">
          <h1>LEARNINGS</h1>

          <div>
            <p>
              “I can’t teach people everything they need to know. The best I can
              do is position them where they can find what they need to know
              when they need to know .”
            </p>

            <button className="primary-button"><a href="#courses-list">GET STARTED</a></button>
          </div>
        </div>
      </div>

      <div className="why-shey-parent">
        <div className="why-shey n-box1 flex-with-center">
          <h1>Why I ?</h1>
          <div className="why-shey-content">
            <p>Simple..</p>

            <p>I know how to kiss..</p>

            <p>No No No....Not that kiss</p>

            <p>I know how to</p>

            <p>Keep It Straight , Simple</p>
          </div>
        </div>
      </div>

      <div className="container courses-list mb-5" id='courses-list'>
        <h3 className="font-bold">Take a look of our courses</h3>
        <hr />

        <div className="row mt-5">
          {courseslist.map((course) => {
            return (
              <div className="col-md-4">
                <div className="position-relative course">
                  <img src={course.image} alt="" className='w-100' />
                  <div className="course-content w-100">
                    <h3>{course.title}</h3>
                    <hr />
                    <p>{course.description}</p>
                    <button className="primary-button">DEMO</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Courses;
