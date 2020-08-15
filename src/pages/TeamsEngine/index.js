import React from 'react';
import Switch from '../../components/Switch';
import logoTeam from '../../assets/picture.svg';
import listTeam from '../../api/listTeam';

import './styles.css';

function TeamsEngine() {
  return (
    <>
      <h1>Teams Engines</h1>
      {listTeam.map(team => (
        <div key={team.id} id="card-list-teams">
          <div className="team-container">
            <img src={ team.image === null ? logoTeam : team.image } alt="Logo Team"/>
          </div>
          <strong>{ team.name }</strong>
          <span>{ team.player }</span>
          <Switch />
        </div>
      ))}
    </>
  )
}

export default TeamsEngine;