import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Challenge (Profile Card v2!)</h1>
      <Card />
    </div>
  );
}

const skills = [
  {
    skill: "Go",
    level: "advanced",
    color: "lightblue"
  },
  {
    skill: "React JS",
    level: "intermediate",
    color: "#3283ed"
  },
  {
    skill: "Python",
    level: "intermediate",
    color: "green"
  },
  {
    skill: "Javascript",
    level: "intermediate",
    color: "yellow"
  },
  {
    skill: "Ruby-on-Rails",
    level: "beginner",
    color: "red"
  },
  {
    skill: "Rust",
    level: "beginner",
    color: "orange"
  }
];

function Card() {
  return (
    <div className="card">
      <Avatar src="ryan_suit.jpg" alt="Ryan Suit" />
      <Intro />
    </div>
  );
}

function Intro() {
  return (
    <body className="data">
      <h2 style={{ paddingBottom: "12px" }}>Ryan Finlayson</h2>
      <p style={{ paddingTop: "0px" }}>
        I am a Software Engineer and I am learning how to code in React JS. I
        currently have a degree in Software Engineering and experience with
        back-end development with Go.
      </p>
      <SkillList />
    </body>
  );
}

function Avatar(props) {
  return <img src={props.src} alt={props.alt} className="avatar" />;
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill, index) => <Skill skillName={skill.skill} level={skill.level} color={skill.color} key={index}/>)}
    </div>
  );
}

function Skill({skillName, level,  color}) {
  // var emoji = ''

  // convert level value into an emoji value
  // if (level === 'beginner'){
  //   emoji = '👶';
  // }

  // if(level === 'intermediate'){
  //   emoji = '👍';
  // }

  // if (level === 'advanced'){
  //   emoji = '🦾';
  // }
  
  return (
    <div>
      <h3 className="skill" style={{ backgroundColor: color }}>
        <span>
          {skillName} 
        </span>
        <span>{level === 'beginner' && '👶'}
        {level === 'intermediate' && '👶'}
        {level === 'advanced' && '👶'}</span>
      </h3>
    </div>
  );
}
