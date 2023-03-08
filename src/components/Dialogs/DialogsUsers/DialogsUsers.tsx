import c from "./DialogsUsers.module.css";
import {FC} from "react";
import {DialogsType} from "../../../store/store";


type DialogsUsersPropsType = {
    activeIndex: number
    setActive: (id: number) => void
    dialogs: DialogsType[]
}


const DialogsUsers: FC<DialogsUsersPropsType> = ({activeIndex, setActive, dialogs}) => {
    return (
        <ul className={c.users}>
            {dialogs.map(dialog => {
                return (
                    <li key={dialog.id}>
                        <button onClick={() => setActive(dialog.id)} className={c.user + (activeIndex === dialog.id ? ` ${c.active}` : "")}>
                            <div className={c.image_ibg}>
                                <img src={dialog.avatar} alt={`${dialog.name}'s avatar`}/>
                            </div>
                            <div className={c.name}>{dialog.name}</div>
                            <div className={c.status}>{dialog.status}</div>
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}


export default DialogsUsers;