import c from "./MyInfo.module.css";
import {ProfileInfoType} from "../../../store/store";


type MyInfoType = {
    info: ProfileInfoType
}


function MyInfo({info}: MyInfoType) {
    return (
        <div className={c.info}>
            <div className={c.avatar_ibg}>
                <img src={info.avatar}/>
            </div>
            <div className={c.bg_ibg}>
                <img src={info.bg}/>
            </div>
            <div className={c.about}>
                <div className={c.line}>
                    <div className={c.label}>Full name:</div>
                    <div>{info.name}</div>
                </div>
                <div className={c.line}>
                    <div className={c.label}>Age:</div>
                    <div>{info.age}</div>
                </div>
                <div className={c.line}>
                    <div className={c.label}>City:</div>
                    <div>{info.city}</div>
                </div>
                <div className={c.line}>
                    <div className={c.label}>Job title:</div>
                    <div>{info.job}</div>
                </div>
            </div>
        </div>
    );
}


export default MyInfo;