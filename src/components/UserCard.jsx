import { USER_DATA } from "../data"

const UserCard = () => {
    return(
        <div className='user-cards-container'>
            {USER_DATA.map(user => 
            <div className='user-card' key={user.id}>
                {user.isPro && <div className='pro-badge'><p>Pro</p></div>}
                <div className='profile-border'>
                    <img className='profile-img' src={user.image}></img>
                </div>
                <h2 className='names'>{user.firstName} {user.lastName}</h2>
                <h3>{user.city}</h3>
                <h3>{user.description}</h3>
                <div className='butons-wraper'>
                    <button id='message-btn'>Message</button>
                    <button id='follow-btn'>Following</button>
                </div>
                <h4>Skills</h4>
                <ul className='skills-list'>
                    {user.skills.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
            </div>
            )}
        </div>
    )
}

export default UserCard