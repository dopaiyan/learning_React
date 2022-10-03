import { useEffect, useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {

    //statet定義
    const [num, setNum] = useState(0);

    //ボタンを押したときに実行する関数を定義
    const onClickButton = () => {
        setNum((prev) => prev + 1 );
        setNum((prev) => prev + 1 );
    };

    useEffect(() => {
        alert();
    }, [num]);

    return (
    <>
        <h1 style={{color :"red"}}>こんにちは！</h1>
        <ColoredMessage color="blue">受け渡し成功</ColoredMessage>
        <ColoredMessage color="pink">元気そうです！</ColoredMessage>
        <button onClick={onClickButton}>ボタン</button>
        <p>{ num }</p>
    </>
    );

};