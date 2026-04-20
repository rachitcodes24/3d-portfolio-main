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
                <h5>GeeksforGeeks, Noida</h5>
              </div>
              <h3>09/2025 - 11/2025</h3>
            </div>
            <p>
              Analyzed complex datasets with Python and SQL, then built
              interactive Power BI dashboards to track key business metrics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Summer Intern (AI & Data)</h4>
                <h5>IBM (Remote)</h5>
              </div>
              <h3>07/2025 - 09/2025</h3>
            </div>
            <p>
              Completed an intensive AI and data modeling internship, improving
              workflows and supporting deployment of algorithmic models.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder & President</h4>
                <h5>Aarambh Coding Club</h5>
              </div>
              <h3>02/2026 - Present</h3>
            </div>
            <p>
              Leading coding events, technical sessions, and mentorship
              initiatives to strengthen student developer communities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>TPO Coordinator</h4>
                <h5>FGIET</h5>
              </div>
              <h3>2026 - Present</h3>
            </div>
            <p>
              Coordinating placement and training activities while supporting
              student-facing career readiness initiatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
