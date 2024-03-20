import PropTypes from 'prop-types';

const UserData=[
    {
        name:"Murugan",
        place:"Searching",
        role:"God",
        online:true,
        follow:true,
        src:"1.jpg",
        skills:["arano",
            "arano",
            "arano",
            "arano",
            "arano",
            "arano",
            "arano"
        ]
    },
    {
        name:"Murugan",
        place:"Searching",
        role:"God",
        online:false,
        follow:true,
        src:"1.jpg",
        skills:["arano",
            "arano",
            "arano",
            "arano",
            "arano",
            "arano",
            "arano"
        ]
    },
    {
        name:"Murugan",
        place:"Searching",
        role:"God",
        online:true,
        follow:false,
        src:"1.jpg",
        skills:["arano",
            "arano",
            "arano",
            "arano",
            "arano",
            "arano",
            "arano"
        ]
    }
]

function User(props){
    return(
        <>
            <div className="card-container">
                <img className="img" width="150" height="150" src={props.src} alt="hlo" />
                <span className={props.online ? "pro-on":"pro-of"}>{props.online ? "online" : "offline"}</span>
                <h3>{props.name}</h3>
                <h4>{props.place}</h4>
            <p>{props.role}</p>
            <div className="button">
                <button className="btn-primary" >Message</button>
                <button className={props.follow ? "btn-secondary" : "btn-primary"}>Follow</button>
            </div>
            <div className="skills">
                <h2>Skills</h2>
                <ul>
                    {props.skills.map((skill,index) =>(
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
            </div>
        </>
    )
}

export const UserCard = () => {
  return (
    <>
        {UserData.map((user,index)=>(
            <User key={index} name={user.name} src={user.src} online={user.online}
            follow={user.follow} skills={user.skills} place={user.place}
            role={user.role}
            />
        ))}
    </>
  )
}
{/* <User name="terminal" place="bottom" role="presentation" online={true}
            follow={false} skills={["React JS","Angular","Django","JavaScript","Python",
            "Java","Mongo DB"]}
/> */}

User.propTypes={
    name: PropTypes.string.isRequired,
    place:PropTypes.string.isRequired,
    role:PropTypes.string.isRequired,
    src:PropTypes.string.isRequired,
    online:PropTypes.bool.isRequired,
    follow:PropTypes.bool.isRequired,
    skills:PropTypes.array.isRequired,
}

