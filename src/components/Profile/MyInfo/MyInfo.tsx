import c from "./MyInfo.module.css";
import {ProfileInfoType} from "../../../store/store";
import {FC} from "react";


type MyInfoType = {
    info: ProfileInfoType
}


const MyInfo: FC<MyInfoType> = ({info}) => {
    return (
        <div className={c.info}>
            <div className={c.avatar_ibg}>
                <img src={info.avatar} alt={`${info.name}'s avatar`}/>
            </div>
            <div className={c.bg_ibg}>
                <img src={info.bg} alt={`${info.name}'s image`}/>
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