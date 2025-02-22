import React from 'react'

const SkillBadge = ({skillIcon, skillName, position}) => {
  return (
    <div className="item" style={{"--position": position}}>
        {skillIcon}
        <span>{skillName}</span>
    </div>
  )
}

export default SkillBadge