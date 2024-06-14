import './UserCatdList.css'

import UserCard from "../UserCard/UserCard"
import { USER_DATA } from "../../data"

const UserCardList = () => {
    return(
        <div className='user-cards-container'>
        {USER_DATA.map(user => <UserCard key={user.id} userData={user}/> )}
        </div>
    )
}

export default UserCardList