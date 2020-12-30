import phonicsPoster from "./assets/live-english.png";
import bookTestimonial from "./assets/booktestimonial.png";
import ageAppropriate from "./assets/age-appropriate.png";
import certifiedTeachers from "./assets/certified.png";
import kutukiApp from "./assets/hero-mobile.png";
import worksheetsAndGames from "./assets/worksheet.png";
import littleLearners from "./assets/LittleLearners.jpg";
import curiousChampions from "./assets/Curious-Champions.jpg";
import mightyGenius from "./assets/Mighty-Genius.jpg";

const phonicsClass = {
    title: "Introducing Live Phonics Classes",
    details: [
      "Speaking, Reading and Writing are among the most important fundamental skills a child can acquire.",
      "We’re excited to launch our Phonics based program with live interactive classes with highly qualified teachers, and featuring examples from your child’s favourite Kutuki stories and rhymes.",
    ],
    image: phonicsPoster,
    url: "/live-phonics",
    program: {
      title: "Kutuki's Phonics Program",
      description:
        "Mastering Phonics is crucial for your little one to become a better reader, speak fluently and build a strong foundation overall.",
      bookTestimonial,
      features: [
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
    },
    packages: [
      {
        image: littleLearners,
        name: "Little Learners",
        nameColor: "#f6962d",
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
        nameColor: "#155283",
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
        nameColor: "#005d0d",
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
    testimonials: [
      {
        content:
          "I have nothing but the highest praise for Kutuki's Phonics program. The teacher is excellent and really knows how to connect with kids and teach them no matter their age or developmental level. My 3 year old has enjoyed the classes and the worksheets as well. It works well for parents also since the classes are just twice a week. The small batch size also ensures that the teacher is constantly interacting with the kids so your child is always engaged. I couldn't be happier with how this program has worked out for my child! Big thumbs up from my side! ​",
        name: "Sharon Sagar",
        gender: "M",
        job: "Parent of a 3 year old",
      },
      {
        content:
          "The classes are very interactive and relaxed. There are lots of games, reading and writing. Because of small batch of 4, every kid gets individual attention. The teacher understands and encourages every kid to speak freely and corrects them very lovingly whenever necessary. Her vocabulary is constantly increasing. Our kid enjoys the class and looks forward to it every week.",
        name: "Prithvi Hegde",
        gender: "F",
        job: "Parent of 4 year old",
      },
    ],
  };
  
  export {phonicsClass};