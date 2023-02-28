import {ProfileType} from "../../store/store";

type ProfileProps = {
    profile: ProfileType
}

function Profile(props: ProfileProps) {
    return (
        <section className={'content profile'}>
            <div className={'profile__info'}>
                <div className={'profile__avatar-ibg'}>
                    <img src={props.profile.info.avatar}/>
                </div>
                <div className={'profile__bg-ibg'}>
                    <img src={props.profile.info.bg}/>
                </div>
                <div className={'profile__about'}>
                    <div className={'profile__line'}>
                        <div className={'profile__label'}>Full name:</div>
                        <div className={'profile__value'}>{props.profile.info.name}</div>
                    </div>
                    <div className={'profile__line'}>
                        <div className={'profile__label'}>Age:</div>
                        <div className={'profile__value'}>{props.profile.info.age}</div>
                    </div>
                    <div className={'profile__line'}>
                        <div className={'profile__label'}>City:</div>
                        <div className={'profile__value'}>{props.profile.info.city}</div>
                    </div>
                    <div className={'profile__line'}>
                        <div className={'profile__label'}>Job title:</div>
                        <div className={'profile__value'}>{props.profile.info.job}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Profile;