import {ProfileType} from "../../store/store";
import c from './Profile.module.css';


type ProfileProps = {
    profile: ProfileType
}


function Profile({profile}: ProfileProps) {
    return (
        <section className={c.profile}>
            <div className={c.info}>
                <div className={c.avatar_ibg}>
                    <img src={profile.info.avatar}/>
                </div>
                <div className={c.bg_ibg}>
                    <img src={profile.info.bg}/>
                </div>
                <div className={c.about}>
                    <div className={c.line}>
                        <div className={c.label}>Full name:</div>
                        <div>{profile.info.name}</div>
                    </div>
                    <div className={c.line}>
                        <div className={c.label}>Age:</div>
                        <div>{profile.info.age}</div>
                    </div>
                    <div className={c.line}>
                        <div className={c.label}>City:</div>
                        <div>{profile.info.city}</div>
                    </div>
                    <div className={c.line}>
                        <div className={c.label}>Job title:</div>
                        <div>{profile.info.job}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Profile;