import React, { useState, useEffect } from "react";
import contentData from "../content.json";

async function fetchRepoData(repoApiLink) {
  const response = await fetch(repoApiLink);
  const data = await response.json();
  return data;
}

const Footer = () => {
  const general = contentData.general;
  const repoLink = contentData?.repo_stats?.repo_link;
  const repoApiLink = contentData?.repo_stats?.api_link;

  const email =
    general?.navbar_social_links?.email ||
    general?.email ||
    "contact@example.com";

  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    if (!repoApiLink) return;
    fetchRepoData(repoApiLink).then(setRepoData).catch(() => {});
  }, [repoApiLink]);

  return (
    <footer>
      {/* BlueWalker-style bottom-left contact link */}
      <a href={`mailto:${email}`} className="contact-link-fixed" aria-label="Contact">
        Contact
      </a>

      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="copyright-box">
              <p className="copyright">
                {contentData.footer.line_one}{" "}
                <a href="https://github.com/KevinTrinh1227">
                  <strong>
                    {general.first_name} {general.middle_name} {general.last_name}
                  </strong>
                </a>
              </p>
              <div className="credits">
                {contentData.footer.copyright_line} &copy;
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
