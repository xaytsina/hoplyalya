import React from 'react';
import './componentStyles/Team.scss';
import nikita from '../GAssets/team/nikita.jpeg';
import kira from '../GAssets/team/kira.jpeg';
import viktor from '../GAssets/team/viktor_alive.jpeg';


function Team(props) {

    //here be the fun stuff

    return(
        <div className="team-main-container">
            <div className="highlighted-member">
                <h2 className="teams-heading">Наши преподаватели, компетентные диджеи, искренне заинтересованные в коммуникации с детьми и передачей им собственного опыта. Мы поддерживаем наших учеников, желающих развить в себе увлечение до уровня успешной карьеры.</h2>
            </div>
            <div className="plain-member">
                <img src={nikita} alt="Никита Забелин" id="nikita" className="portrait"></img>
                <h3>Никита Забелин</h3>
                <p>Никита Забелин - один из главных техно-диджеев, основатель объединения Resonance, а также участник различных фестивалей и московского Boiler Room.</p>
            </div>

            <div className="highlighted-member">
                <svg id="big-yellow-circle" width="440" height="440" >
                    <circle 
                        cx="220"
                        cy="220" 
                        r="220" 
                        stroke="none" 
                        fill="yellow"
                        id="css-circle-yellow" />
                </svg>
                
                <img src={kira} alt="Кира Моторина" id="kira" className="portrait"></img>
                <h3>Кира Моторина</h3>
                <p>Кира Моторина - известный диджей, мастер направления smooth jazz, один из создателей независимого питерского радио TESTFM и частый участник лондонского онлайн-радио NTS.</p>
            </div>

            <div className="plain-member">
                <img src={viktor} alt="Виктор Цой" id="viktor" className="portrait"></img>
                <h3>Виктор Цой</h3>
                <p>Виктор Цой - еще один создатель питерского радио TESTFM, бывший резидент известных клубов Санкт-Петербурга.</p>
            </div>

        </div>
    );
}

export default Team