    'use client'

    import React, { Ref } from "react";
    import { useEffect,useState,useRef } from "react";

    function CustomCursor() {

        const [position, setPosition] = useState({ x: 0, y: 0 });
        const [clicked, setClicked] = useState(false);
        const [cursorColor, setCursorColor] = useState("white");
        const [hovering, setHovering] = useState(false);
        const [border, setBorder] = useState("border-2");
        const cursorRef = useRef(null);

        useEffect(() => {

            const handleMouseMove = (e: MouseEvent) => {
                setPosition({ x: e.clientX, y: e.clientY });
            }

            const handleMouseClick = () => {
                setClicked(true);
                setTimeout(() => {
                    setClicked(false);
                }, 800);
            }

            const handleMouseOver = (e: MouseEvent) => {
                const target = e.target as HTMLElement;
                const tagName = target.tagName.toLowerCase();

                if (target.id === "invis" || target.closest("#invis") !== null) {
                    setBorder("border-none");
                } else {
                    setBorder("border-2");
                }

                if (
                    tagName === "button" ||
                    target.id === "white-bar" ||
                    target.classList.contains("color-change")
                ) {
                    setCursorColor("black");
                } else {
                    setCursorColor("white");
                }

                setHovering(
                    target.id === "hoverable" ||
                    target.classList.contains("hoverable") ||
                    target.closest("#hoverable") !== null
                );
            }

            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("click", handleMouseClick);
            window.addEventListener("mouseover", handleMouseOver);

            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
                window.removeEventListener("click", handleMouseClick);
                window.removeEventListener("mouseover", handleMouseOver);
            }
        }, []);


        return (
            <div ref={cursorRef} style={{ top: position.y - 10, left: position.x - 10, borderColor: cursorColor, }} className={`${border} fixed rounded-full pointer-events-none z-50 ${hovering ? "animate-small-pulse border-dashed" : ""} `}>
                <div ref={cursorRef} className={`w-[1.2rem] h-[1.2rem] bg-${cursorColor} ${clicked ? "opacity-100 scale-100 " : "opacity-0 scale-0"} transition-all duration-500   ease-in-out rounded-full `}></div>
            </div>);
    }

    export default CustomCursor;