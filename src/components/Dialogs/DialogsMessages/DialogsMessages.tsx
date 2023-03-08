import c from "./DialogsMessages.module.css";
import {FC} from "react";
import {DialogsType, ProfileInfoType} from "../../../store/store";


type DialogsMessagesPropsType = {
    dialogs: DialogsType[]
    activeDialog: number
    profileInfo: ProfileInfoType
    theme: string
    dialogInfo: DialogsType
}


const DialogsMessages: FC<DialogsMessagesPropsType> = ({dialogs, activeDialog, profileInfo, theme, dialogInfo}) => {
    return (
        <ul style={{backgroundImage: `url(${theme})`}} className={c.messages}>
            {dialogs[activeDialog].messages.map(dialog => {
                return (
                    <li className={c.message + (dialog.fromMe ? ` ${c.mine}` : "")} key={dialog.id}>
                        <div className={c.image_ibg}>
                            <img src={dialog.fromMe ? profileInfo.avatar : dialogInfo.avatar} alt={`${dialog.fromMe ? profileInfo.name : dialogInfo.name}'s avatar`}/>
                        </div>
                        <div className={c.text}>
                            <div>{dialog.text}</div>
                            <div className={c.time}>{dialog.time}</div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}


export default DialogsMessages;