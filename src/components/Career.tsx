import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>GeeksforGeeks</h5>
              </div>
              <h3>09/2025 - 11/2025</h3>
            </div>
            <p>
              Worked on analytics-focused tasks and data-driven reporting to
              support business decisions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Summer Intern</h4>
                <h5>IBM</h5>
              </div>
              <h3>07/2025 - 09/2025</h3>
            </div>
            <p>
              Completed internship projects with a focus on software
              implementation and practical problem solving.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>CodeAlpha</h5>
              </div>
              <h3>09/2024 - 10/2024</h3>
            </div>
            <p>
              Contributed to assigned development tasks and gained hands-on
              exposure to software project workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>TPO Coordinator</h4>
                <h5>Feroz Gandhi Institute of Engineering and Technology</h5>
              </div>
              <h3>12/2026 - Present</h3>
            </div>
            <p>
              Supporting training and placement activities while coordinating
              student-facing initiatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
