import c from "./DialogsMessages.module.css";
import {FC} from "react";
import {DialogsMessagesType, DialogsType, ProfileInfoType} from "../../../store/store";


type DialogsMessagesPropsType = {
    profileInfo: ProfileInfoType
    theme: string
    dialogInfo: DialogsType
    messages: DialogsMessagesType[]
}


const DialogsMessages: FC<DialogsMessagesPropsType> = ({profileInfo, theme, dialogInfo, messages}) => {
    const messagesList = messages.map(dialog => {
        return (
            <li className={c.message + (dialog.fromMe ? ` ${c.mine}` : "")} key={dialog.id}>
                <div className={c.image_ibg}>
                    <img src={dialog.fromMe ? profileInfo.avatar : dialogInfo.avatar}
                         alt={`${dialog.fromMe ? profileInfo.name : dialogInfo.name}'s avatar`}/>
                </div>
                <div className={c.text}>
                    <div>{dialog.text}</div>
                    <div className={c.time}>{dialog.time}</div>
                </div>
            </li>
        );
    });


    return (
        <ul style={{backgroundImage: `url(${theme})`}} className={c.messages}>
            {messagesList}
        </ul>
    );
};


export default DialogsMessages;