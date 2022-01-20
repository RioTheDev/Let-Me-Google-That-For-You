import "./App.css";
import google from "./google.png";
import React, { useEffect, useRef, useState } from "react";
function Typer(props) {
    const txt = props.children;
    const [Index, setIndex] = useState(0);
    const el = document.getElementById(props.id);
    const querystr = window.location.search;
    const urlParams = new URLSearchParams(querystr);
    const executeScroll = () => (el ? el.scrollTo(9999, 0) : null);
    useEffect(() => {
        if (Index <= txt.length) {
            const id = setTimeout(() => {
                setIndex((x) => x + 1);
                executeScroll();
            }, props.time || 150);
            return () => clearTimeout(id);
        } else {
            window.location.href =
                "https://www.google.com/search?q=" +
                urlParams.get("q").split(" ").join("+");
        }
    }, [Index, props.time, txt.length]);
    return (
        <h1 id={props.id} className={props.className}>
            {txt.slice(0, Index)}
        </h1>
    );
}
function App() {
    const [Delay, setDelay] = useState(false);
    const querystr = window.location.search;
    const urlParams = new URLSearchParams(querystr);

    useEffect(() => {
        const id = setTimeout(() => {
            setDelay(true);
        }, 300);
        return () => clearTimeout(id);
    }, []);
    return (
        <>
            <div className="focus:border-none flex justify-center items-center h-[90vh] flex-col ">
                <img src={google} alt="logo" className="p-10 w-80"></img>

                <div className="bg-black/40 h-10 w-[586px] rounded-full flex justify-start items-center relative">
                    <Typer
                        id="scrollthis"
                        className="text-white overflow-hidden ml-5"
                        time={150}
                    >
                        {urlParams.get("q")}
                    </Typer>
                    <div className="h-4 w-px bg-white animate-blink mr-10"></div>
                    <svg
                        height="17"
                        width="17"
                        className="absolute right-4 fill-white top-1/4"
                    >
                        <path
                            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5
                            6.5 0 1 0 9.5 16c1.61 0 3.09-.59
                            4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6
                            0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5
                            11.99 14 9.5 14z"
                        />
                    </svg>
                </div>
                <div className="flex justify-center items-center flex-row ">
                    <button
                        id="clickdis"
                        className="text-sm text-white w-36 h-9 rounded px-4 bg-black/30 m-3"
                    >
                        Google Search
                    </button>
                    <button className="text-sm text-white w-36 h-9 rounded px-4 bg-black/30 m-3">
                        I'm Feeling Lucky
                    </button>
                </div>
            </div>
        </>
    );
}
export { App };
