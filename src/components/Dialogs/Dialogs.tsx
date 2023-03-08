import c from "./Dialogs.module.css";
import {FC, useState} from "react";
import {DialogsPageType, ProfileInfoType} from "../../store/store";
import DialogsUsers from "./DialogsUsers/DialogsUsers";
import DialogsMessages from "./DialogsMessages/DialogsMessages";


type DialogsPropsType = {
    profileInfo: ProfileInfoType
    dialogsPage: DialogsPageType
}


const Dialogs: FC<DialogsPropsType> = ({dialogsPage, profileInfo}) => {
    const [active, setActive] = useState(0);

    return (
        <div className={c.dialogsPage}>
            <DialogsUsers activeIndex={active} setActive={setActive} dialogs={dialogsPage.dialogs}/>
            <DialogsMessages profileInfo={profileInfo} dialogs={dialogsPage.dialogs} activeDialog={active} theme={dialogsPage.theme} dialogInfo={dialogsPage.dialogs[active]}/>
        </div>
    );
}


export default Dialogs;