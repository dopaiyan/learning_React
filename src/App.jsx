import { useEffect, useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import classes from "./CssModules.module.scss";
import styled from "styled-components";
export const App = () => {

    //statet定義
    const [num, setNum] = useState(0);

    //ボタンを押したときに実行する関数を定義
    const onClickButton = () => {
        setNum((prev) => prev + 1 );
        setNum((prev) => prev + 1 );
    };

    return (
    <>
        {/* <h1 style={{color :"red"}}>こんにちは！</h1>
        <ColoredMessage color="blue">受け渡し成功</ColoredMessage>
        <ColoredMessage color="pink">gitにあげたよ</ColoredMessage>
        <button onClick={onClickButton}>ボタン</button>
        <p>{ num }</p> */}

        <SContainer>
            <div>
                <STitle>styled componentsです</STitle>
                <SButton>ボタン</SButton>
            </div>
        </SContainer>

        
        
    </>
    );

};

const SContainer = styled.div`
            border: solid 1px #aaa;
            border-radius: 20px;
            padding : 8px;
            margin : 8px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            `;

        const STitle = styled.p`
        margin: 0;
        color: #aaa;
        `;

        const SButton = styled.button`
        background-color: #bbb;
        border: none;
        padding: 8px;
        border-radius: 8px;
            &:hover {
                background-color: #aaa;
                color: #fff;
                cursor: pointer;
            }
        `;