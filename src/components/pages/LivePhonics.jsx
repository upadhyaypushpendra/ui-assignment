import React from "react";
import { Button, Divider, List, ListItem } from "@material-ui/core";

import Poster from "../Poster";
import phonicsPoster from "./../../assets/live-english.png";
import bookTestimonial from "./../../assets/booktestimonial.png";
import ageAppropriate from "./../../assets/age-appropriate.png";
import certifiedTeachers from "./../../assets/certified.png";
import kutukiApp from "./../../assets/hero-mobile.png";
import worksheetsAndGames from "./../../assets/worksheet.png";
import littleLearners from "./../../assets/LittleLearners.jpg";
import curiousChampions from "./../../assets/Curious-Champions.jpg";
import mightyGenius from "./../../assets/Mighty-Genius.jpg";

import { makeStyles } from "@material-ui/core/styles";
import Content from "../Content";
import Highlight from "../Highlight";
import Package from "../Package";

const phonicsClass = {
  title: "Introducing Live Phonics Classes",
  details: [
    "Speaking, Reading and Writing are among the most important fundamental skills a child can acquire.",
    "We’re excited to launch our Phonics based program with live interactive classes with highly qualified teachers, and featuring examples from your child’s favourite Kutuki stories and rhymes.",
  ],
  image: phonicsPoster,
  url: "/live-phonics",
  program: "Kutuki's Phonics Program",
  programDetail:
    "Mastering Phonics is crucial for your little one to become a better reader, speak fluently and build a strong foundation overall.",
  bookTestimonial,
  programFeatures: [
    "Develop Reading Fluency",
    "Improve Reading Comprehension",
    "Read Independently",
    "Spell Correctly",
    "Most importantly, improve self confidence",
  ],
  highlights: [
    {
      image: ageAppropriate,
      title: "Age Appropriate",
      detail:
        "Kutuki’s program is designed for the youngest of readers, from 3-7 years",
    },
    {
      image: certifiedTeachers,
      title: "Certified Teachers",
      detail:
        "Certified teachers who have benefitted thousands of children across India",
    },
    {
      image: kutukiApp,
      title: "Kutuki App",
      detail:
        "Combines the learning of phonics with Kutuki’s stories and rhymes  ensuring learning and revision is always fun",
    },
    {
      image: worksheetsAndGames,
      title: "Games and Worksheets",
      detail: "Tracing and reading games and printable worksheets",
    },
  ],
  packages: [
    {
      image: littleLearners,
      name: "Little Learners",
      nameColor: "yellow",
      audience: "For 3-4 Year Olds",
      topics: [
        "Listen, Identify and Blend 10  Letter sounds",
        "Form basic CVC words",
        "Letter Writing Practice",
      ],
      numberOfClasses: 10,
      info: "Group Classes (Up to 4 per group)",
      cost: "3,000",
      costPerClass: 300,
      notes: ["1 month subscription to Kutuki’s app free!"],
    },
    {
      image: curiousChampions,
      name: "Curious Champions",
      nameColor: "blue",
      audience: "For 4-5 Year Olds",
      topics: [
        "Listen, Identify and Blend 26 Letter sounds",
        "Master CVC words",
        "Sight Words",
        "Master Short and Long vowel",
        "Letter Writing Practice",
      ],
      numberOfClasses: 25,
      info: "Group Classes (Up to 4 per group)",
      cost: "5,625",
      costPerClass: 225,
      notes: ["3 month subscription to Kutuki’s app free!"],
    },
    {
      image: mightyGenius,
      name: "Mighy Genius",
      nameColor: "green",
      audience: "For 5+ Year Olds",
      topics: [
        "Listen, Identify and Blend 26 Letter sounds",
        "Master CVC and Sight words",
        "Master Short and Long vowel",
        "Master blends and digraphs",
        "Letter Writing Practice",
        "Independently read Simple Sentences",
      ],
      numberOfClasses: 40,
      info: "Group Classes (Up to 4 per group)",
      cost: "7,000",
      costPerClass: 175,
      notes: ["6 month subscription to Kutuki’s app free!"],
    },
  ],
};

const useStyles = makeStyles((theme) => {
  return {
    root: {
      maxWidth: `inherit`,
      paddingBottom: 0,
    },
    marginPadding: {
      margin: "10px",
      padding: "20px",
    },
    column: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      width: "100%",
    },
    row: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
    },
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px",
      "& >": {
        flex: "1 1 0",
        margin: "15px",
      },
    },
    programTitle: {
      color: "#2f63ba",
      fontFamily: "'Open Sans',sans-serif",
      fontSize: "27px",
      fontWeight: "700",
      margin: "20px",
      lineHeight: 1,
    },
  };
});

function LivePhonics(props) {
  const classes = useStyles();
  return (
    <div className={classes.column}>
      <List className={classes.container}>
        <Content title={phonicsClass.title} details={phonicsClass.details} />
        <Poster title={phonicsClass.title} image={phonicsClass.image} />
      </List>
      <hr
        style={{
          border: "1px solid black",
          background: "black",
          margin: 0,
          marginBlockStart: 0,
          marginBlockEnd: 0,
          width: "-webkit-fill-available",
        }}
      />
      <h1 className={classes.programDetail}>{phonicsClass.program}</h1>
      <p>{phonicsClass.programSubTitle}</p>
      <div className={classes.row}>
        <div className={classes.marginPadding}>
          <List>
            {phonicsClass.programFeatures.map((feature) => (
              <ListItem>{feature}</ListItem>
            ))}
          </List>
        </div>
        <div className={classes.marginPadding}>
          <img src={bookTestimonial} alt="Image" />
        </div>
      </div>
      <div className={classes.row}>
        {phonicsClass.highlights.map((highlight) => (
          <Highlight
            title={highlight.title}
            image={highlight.image}
            detail={highlight.detail}
          />
        ))}
      </div>
      <div
        style={{
          backgroundColor: "#d9fffd",
          padding: "20px",
          width: "96%",
          borderTop: "2px solid  #6ec1e4",
        }}
      >
        <h1>Packages</h1>
        <p>We offer 3 packages tailor made to suit different learning levels</p>
      </div>
      <div className={classes.row}>
        {phonicsClass.packages.map((p) => (
          <Package packageDetail={p} />
        ))}
      </div>
    </div>
  );
}

export default LivePhonics;
