import c from "./Dialogs.module.css";
import {FC, useEffect, useState} from "react";
import {DialogsPageType, ProfileInfoType} from "../../store/store";
import DialogsUsers from "./DialogsUsers/DialogsUsers";
import DialogsMessages from "./DialogsMessages/DialogsMessages";
import FormContent from "../common/FormContent/FormContent";


type DialogsPropsType = {
    profileInfo: ProfileInfoType
    dialogsPage: DialogsPageType
}


const Dialogs: FC<DialogsPropsType> = ({dialogsPage, profileInfo}) => {
    const [width, setWidth] = useState(document.body.clientWidth);

    const [active, setActive] = useState(() => width > 769 ? 0 : null);


    useEffect(() => {
        window.addEventListener("resize", () => setWidth(document.body.clientWidth));
    }, [width]);

    if (width > 769 && active === null) {
        setActive(0);
    } else if (width < 769 && typeof active === "number") {
        setActive(null);
    }


    return (
        <div className={c.dialogsPage}>
            <DialogsUsers activeIndex={active} setActive={setActive} dialogs={dialogsPage.dialogs}/>
            {typeof active === "number" &&
                <>
                    <DialogsMessages profileInfo={profileInfo} dialogs={dialogsPage.dialogs} activeDialog={active} theme={dialogsPage.theme} dialogInfo={dialogsPage.dialogs[active]}/>
                    <FormContent parentClass={c.form} inputText="Write something" btnText="Send"/>
                </>
            }
        </div>
    );
};


export default Dialogs;