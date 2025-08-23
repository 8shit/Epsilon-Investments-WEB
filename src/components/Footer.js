import React from "react";
import contentData from "../content.json";

const Footer = () => {
  const general = contentData.general;
  const email =
    general?.navbar_social_links?.email ||
    general?.email ||
    "contact@example.com";

  return (
    <footer>
      {/* Bottom-left minimal contact link (BlueWalker style) */}
      <a href={`mailto:${email}`} className="contact-link-fixed" aria-label="Contact">
        Contact
      </a>

      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="copyright-box">
              <p className="copyright">
                {contentData.footer.line_one}{" "}
                  <strong>
                    {general.first_name} {general.middle_name} {general.last_name}
                  </strong>
              </p>
              <div className="credits">
                {contentData.footer.copyright_line} &copy;
              </div>
              {/* repoLink/repoData UI removed to avoid eslint no-unused-vars */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
