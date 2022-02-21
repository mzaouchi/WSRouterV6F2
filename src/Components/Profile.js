import { Link, useNavigate, useParams } from "react-router-dom"

const Profile=({users})=>{

    const {id} = useParams()
    const navigate = useNavigate()
    const foundedUser= users.find(user => user.id == id)
    return(
        <div>
            <h1>{foundedUser.name}</h1>
            <h2>{foundedUser.age}</h2>
            <h3>{foundedUser.email}</h3>
           {/* <Link to='/'><h5>retutn</h5></Link>  */}
           <button onClick={()=>navigate('/')}>Return</button>
        </div>
    )
}

export default Profile