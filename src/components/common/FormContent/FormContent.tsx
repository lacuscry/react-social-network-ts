import c from "./FormContent.module.css";
import {ChangeEvent, KeyboardEvent, FC, MouseEvent, useState} from "react";


type FormContentPropsType = {
    setArrayHandler: (text: string) => void
    inputText: string
    btnText: string
    parentClass?: string
    errorText: string
}


const FormContent: FC<FormContentPropsType> = ({setArrayHandler, inputText, btnText, parentClass, errorText}) => {
    const [inputValue, setInputValue] = useState<string>("");

    const [error, setError] = useState<string>("");


    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.currentTarget.value);

        if (inputValue.trim()) setError("");
    }

    const setArray = () => {
        if (inputValue.trim()) {
            setArrayHandler(inputValue);

            setInputValue("");
        } else {
            setError(errorText);
        }
    }

    const onClickButtonHandler = (e: MouseEvent) => {
        e.preventDefault();

        setArray();
    }

    const onKeyDownHandler = (e: KeyboardEvent) => {
        if (e.key === "Enter") setArray();
    }

    const onBlurHandler = () => {
        if (!inputValue.trim()) setError(errorText);
    }


    return(
        <form className={`${c.form} ${parentClass}`}>
            <textarea onBlur={onBlurHandler} onKeyDown={onKeyDownHandler} onChange={onChangeInputHandler} className={c.textarea + (error ? ` ${c.error_border}` : "")} placeholder={inputText} value={inputValue}/>
            <div className={c.buttons}>
                <button onClick={onClickButtonHandler} className={c.button} disabled={!inputValue} type="submit">{btnText}</button>
                <label className={c.file}>
                    <input accept=".jpg, .png, .jpeg" type="file"/>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M14.6072 3.52886L5.1178 13.0182C5.1178 13.0182 1.53984 16.5962 4.72182 19.7782C7.9038 22.9601 11.4818 19.3822 11.4818 19.3822L20.9711 9.89282C21.36 9.50391 20.6529 8.7968 20.264 9.18571L10.7747 18.6751C10.7747 18.6751 8.16093 21.8031 5.42893 19.0711C2.95406 16.5962 5.82491 13.7253 5.82491 13.7253L15.3143 4.23597C15.3143 4.23597 17.0962 2.45405 18.864 4.22182C20.6317 5.98959 18.8498 7.7715 18.8498 7.7715L9.36044 17.2609C9.36044 17.2609 8.24496 18.3764 7.21316 17.3446C6.18136 16.3128 7.23912 15.1396 7.23912 15.1396L16.2618 6.11686C16.6507 5.72795 15.9436 5.02085 15.5547 5.40976L6.53201 14.4324C6.53201 14.4324 4.50687 16.1939 6.43534 18.1224C8.17425 19.8613 10.0675 17.968 10.0675 17.968L19.5569 8.47861C19.5569 8.47861 22.0459 5.98959 19.5711 3.51471C17.0962 1.03984 14.6072 3.52886 14.6072 3.52886Z"
                              fill="#fff"/>
                    </svg>
                </label>
                <button className={c.voice} type="button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M12.5 21V18.5884C17.4375 18.3544 18 14.6503 18 13.3692V10.6616C18 10.6616 18.0126 10 17.5041 10C16.9955 10 16.9955 10.6616 16.9955 10.6616V13.3077C16.9955 14.6308 16.3955 17.6179 12 17.6179C7.60445 17.6179 7.0022 14.6308 7.0022 13.3077V10.502C7.0022 10.502 7 10 6.5 10C6 10 6 10.502 6 10.502V13.3692C6 14.6503 6.56251 18.3544 11.5 18.5884V21H7.89999V22H15.9V21H12.5ZM12 2C9 2 9 4.59998 9 4.59998V12.4C9 12.4 9 15 12 15C15 15 15 12.4 15 12.4V4.59998C15 4.59998 15 2 12 2Z"
                              fill="#fff"/>
                    </svg>
                </button>
            </div>
            {error && <div className={c.error}>{error}</div>}
        </form>
    )
}


export default FormContent;