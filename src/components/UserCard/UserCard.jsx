/* eslint-disable react/prop-types */
import './UserCard.css'

const UserCard = ({userData}) => {
    return(
            <div className='user-card'>
                {userData.isPro && <div className='pro-badge'><p>Pro</p></div>}
                <div className='profile-border'>
                    <img className='profile-img' src={userData.image}></img>
                </div>
                <h2 className='names'>{userData.firstName} {userData.lastName}</h2>
                <h3>{userData.city}</h3>
                <h3>{userData.description}</h3>
                <div className='butons-wraper'>
                    <button id='message-btn'>Message</button>
                    <button id='follow-btn'>Following</button>
                </div>
                <h4>Skills</h4>
                <ul className='skills-list'>
                    {userData.skills.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
            </div>
            
    )
}

export default UserCard