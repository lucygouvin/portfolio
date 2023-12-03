import SkillIcon from "./SkillIcon"
export default function Skills (){
    return (
        <div className="container skill-section" id="skills">
        <h2>Skills</h2>
        <div className="skill-group">
            <SkillIcon icon="./skills/html5.png"/>
            <SkillIcon icon="./skills/css3.webp"/>
            <SkillIcon icon="./skills/javascript.png"/>
            <SkillIcon icon="./skills/react.png"/>
            <SkillIcon icon="./skills/express.png"/>
            <SkillIcon icon="./skills/node.png"/>
            <SkillIcon icon="./skills/handlebars.webp"/>
            <SkillIcon icon="./skills/mongodb.png"/>
            <SkillIcon icon="./skills/mongoose.jpg"/>
            <SkillIcon icon="./skills/MySQL.png"/>
            <SkillIcon icon="./skills/sequelize.png"/>
            <SkillIcon icon="./skills/graphQL.png"/>
            <SkillIcon icon="./skills/apollo.svg"/>
            <SkillIcon icon="./skills/jquery.png"/>
            <SkillIcon icon="./skills/bootstrap.svg"/>
            <SkillIcon icon="./skills/python.png"/>
            <SkillIcon icon="./skills/jira.png"/>
            <SkillIcon icon="./skills/trello.png"/>
            <SkillIcon icon="./skills/agile.png"/>
        </div>
        <p>See my <a href="/Gouvin_Lucy_WebDev_Resume_2023.pdf" download="Lucy Gouvin Resume" id="resume-link">resume</a> for more information on my experience and skills.</p>
        </div>
    )
}