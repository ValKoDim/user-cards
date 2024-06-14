import './UserCatdList.css'

import UserCard from "../UserCard/UserCard"
import { USER_DATA } from "../../data"

const UserCardList = () => {
    return(
        <div className='user-cards-container'>
        <UserCard userData={USER_DATA}/>
        </div>
    )
}

export default UserCardList