import CardUser from "../CardUser"

const Users=({users})=>{
    return(
        <div>
            {
                users.map(user=> <CardUser key={user.id} user={user}/>)
            }
        </div>
    )
}

export default Users