import React from "react";
import contentData from "../content.json";
import { Fade } from "react-awesome-reveal";

const Intro = () => {
  const introContent = contentData.intro_screen;

  const introBio = introContent.intro_bio.map((paragraph) => {
    return <p key={paragraph}>{paragraph}</p>;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <section className="intro_section">
            <Fade direction="down" triggerOnce={true}>
              <h1>{introContent.main_header}</h1>
              <p>
                <strong>{introContent.main_subtitle}</strong>
              </p>
            </Fade>
            <Fade triggerOnce={true}>
              <div className="introParagraph">{introBio}</div>
            </Fade>

            {/* Contact button removed from hero to match BlueWalker style.
                Bottom-left 'Contact' lives in Footer instead. */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Intro;
