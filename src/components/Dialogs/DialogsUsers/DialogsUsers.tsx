import c from "./DialogsUsers.module.css";
import {FC, MouseEvent} from "react";
import {DialogsType} from "../../../store/store";


type DialogsUsersPropsType = {
    activeDialog: number
    setActiveDialog: (id: number) => void
    dialogs: DialogsType[]
}


const DialogsUsers: FC<DialogsUsersPropsType> = ({activeDialog, setActiveDialog, dialogs}) => {
    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => setActiveDialog(+e.currentTarget.value);


    const usersList = dialogs.map((dialog, i) => {
        return (
            <li key={dialog.id}>
                <button onClick={onClickHandler} value={i} className={c.user + (activeDialog === i ? ` ${c.active}` : "")}>
                    <div className={c.image_ibg}>
                        <img src={dialog.avatar} alt={`${dialog.name}'s avatar`}/>
                    </div>
                    <div className={c.name}>{dialog.name}</div>
                    <div className={c.status}>{dialog.status}</div>
                </button>
            </li>
        );
    });


    return (
        <ul className={c.users}>
            {usersList}
        </ul>
    );
};


export default DialogsUsers;