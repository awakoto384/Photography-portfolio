import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          Hello, my name is Hanyue Shi. I'm a full-time student who is majoring
          in web design :){" "}
        </p>
        <p>
          I designed this website for displaying my photo essay. I've been
          taught myself photography for more than three years, since I got my
          first camera as the birthday gift from my parents.
        </p>
        <p>
          I mainly focus on still life photography and portrait. Making simple
          things look stunning is always what I really enjoy..{" "}
        </p>
        <p>
          My dream is to become a software engineer and one day start my own
          photography studio as a side job.{" "}
        </p>

        <p>
          In the future, I will strive to create better works. Hope you enjoy my
          website!
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
