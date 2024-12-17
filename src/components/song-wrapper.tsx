import {NavLink} from "react-router";
import React, {useEffect, useState} from "react";

const SongWrapper = ({children}: {children: React.ReactElement}) => {
    const topMin = 2;
    const topMax = 35;
    const [isScroll, setIsScroll] = useState(false);
    const [top, setTop] = useState(5);
    const [isDebounced, setIsDebounced] = useState(false);

    const handleUpdateTop = (op: "+"|"-" ) => {
        setIsDebounced(true);
        setTimeout(() => {
            setIsDebounced(false);
        }, 1000);
        if ( op === "+" ) {
            setTop((top) =>
                top < topMax ?
                    top >= 5 ? top+10 : top+1
                    : top
            )
        }
        else if ( op === "-" ) {
            setTop((top) =>
                top > topMin ?
                    top > 5 ? top-10 : top-1
                    : top
            );
        }
    }

    useEffect(() => {
        if ( isScroll ) {
            let scrollYMax = 0;
            let scrollYNew = window.scrollY;
            let intervalId: number;
            window.scrollBy({
                top: 1,
                left: 0,
                behavior: "smooth"
            });

            const timerId = setTimeout(() => {
                 intervalId = setInterval(() => {
                    window.scrollBy({
                        top: top,
                        left: 0,
                        behavior: "smooth"
                    });

                    scrollYNew = window.scrollY;

                    if ( scrollYNew > scrollYMax) {
                        scrollYMax = scrollYNew;
                    }
                    else if ( scrollYNew === scrollYMax ) {
                        clearInterval(intervalId);
                        setIsScroll(false);
                    }
                }, 100);

                return () => {
                    clearInterval(intervalId);
                    setIsScroll(false);
                }
            }, 250);

            return () => {
                clearTimeout(timerId);
                clearInterval(intervalId);
            }
        }
    }, [isScroll, top])

    return (
        <>
            <header className="top-sticky">
                <NavLink to="/"> &#8592; </NavLink>
            </header>
            <div id="auto-scroll">
                <div>
                    <button onClick={() => handleUpdateTop("-")} disabled={ isDebounced || !isScroll || top <= topMin }> - </button>
                    <button onClick={() => setIsScroll((isScroll) => !isScroll)} disabled={ isDebounced }>
                        { isScroll ? <>&#9632;</> : <>&#9658;</> }
                    </button>
                    <button onClick={() => handleUpdateTop("+")} disabled={ isDebounced || !isScroll || top >= topMax }> + </button>
                </div>
                <div className="text-small">
                    { top <= topMin && <>&#9888; minimum speed</> }
                    { top >= topMax && <>&#9888; maximum speed</> }
                </div>
            </div>
            <main>
                { children }
            </main>
        </>
    );
}

export default SongWrapper;
