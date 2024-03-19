import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Challenge (Profile Card v1!)</h1>
      <Card />
    </div>
  );
}

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
      <Skill skillName="Go" emoji="👌" color="lightblue" />
      <Skill skillName="React JS" emoji="🤫" color="#3283ed" />
      <Skill skillName="Python" emoji="🐍" color="green" />
      <Skill skillName="JavaScript" emoji="🗣" color="yellow" />
      <Skill skillName="Ruby-on-Rails" emoji="🌬" color="red" />
    </div>
  );
}

function Skill(props) {
  return (
    <div>
      <h3 className="skill" style={{ backgroundColor: props.color }}>
        <span>
          {props.skillName} {props.emoji}
        </span>
      </h3>
    </div>
  );
}
