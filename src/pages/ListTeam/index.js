import React from 'react';
import Switch from '../../components/Switch';
import logoTeam from '../../assets/picture.svg';
import listTeam from '../../api/listTeam';

import './styles.css';

const ListTeam = () => {
  return (
    <>
      <h1>Teams Engines</h1>
      {listTeam.map(team => (
        <div key={team.id} id="card-list-teams">
          <div className="team-container">
            <img src={ team.image === null ? logoTeam : team.image } alt="Logo Team"/>
            <strong>{ team.name }</strong>
          </div>
          <span>{ team.player }</span>
          <div className="switch">
            <Switch render={({
              active, setActive }) => (
                <input onChange={() => setActive(!active)} type="checkbox" />
                )
              } />
          </div>
        </div>
      ))}
    </>
  )
}

export default ListTeam;