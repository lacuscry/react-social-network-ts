import c from "./Dialogs.module.css";
import {FC, useEffect, useState} from "react";
import {v1} from "uuid";
import {DialogsMessagesType, DialogsPageType, ProfileInfoType} from "../../store/store";
import DialogsUsers from "./DialogsUsers/DialogsUsers";
import DialogsMessages from "./DialogsMessages/DialogsMessages";
import FormContent from "../common/FormContent/FormContent";


type DialogsPropsType = {
    profileInfo: ProfileInfoType
    dialogsPage: DialogsPageType
}


const Dialogs: FC<DialogsPropsType> = ({dialogsPage, profileInfo}) => {
    const [width, setWidth] = useState<number>(document.body.clientWidth);

    const [activeDialog, setActiveDialog] = useState<number>(0);

    const [messages, setMessages] = useState<DialogsMessagesType[]>(dialogsPage.dialogs[activeDialog].messages);


    const setMessageHandler = (text: string) => setMessages([...messages, {
        id: v1(),
        text,
        fromMe: true,
        time: `${new Date().getHours()}:${new Date().getMinutes()}`
    }]);


    useEffect(() => window.addEventListener("resize", () => setWidth(document.body.clientWidth)), [width]);

    useEffect(() => setMessages(dialogsPage.dialogs[activeDialog].messages), [activeDialog]);


    return (
        <div className={c.dialogsPage}>
            {width > 769 ?
                <>
                    <DialogsUsers activeDialog={activeDialog} setActiveDialog={setActiveDialog} dialogs={dialogsPage.dialogs}/>
                    <DialogsMessages profileInfo={profileInfo} theme={dialogsPage.theme} dialogInfo={dialogsPage.dialogs[activeDialog]} messages={messages}/>
                    <FormContent setArrayHandler={setMessageHandler} parentClass={c.form} inputText="Write something" btnText="Send" errorText="Fill message"/>
                </> : <div>Мобильной версии нет. Позже...</div>
            }
        </div>
    );
};


export default Dialogs;