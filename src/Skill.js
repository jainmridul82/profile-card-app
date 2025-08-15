const Skill = ({skill, level, color}) => {
    return (
        <li className="skill" style={{backgroundColor: color}}>
            <span>{skill}</span>
            <span>{level === "beginner" ? '👶' : level === "intermediate" ? '👍' : '💪'}</span>
        </li> 
    )
}

export default Skill;