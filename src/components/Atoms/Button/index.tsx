// React
import React, { ReactElement, memo } from 'react';

// Next
import Link from 'next/link'

// Interface
import IButton from './interface';

const Button:React.FC<IButton> = ({
    type, 
    href, 
    target,
    display,
    textAlign,
    rel,
    children, 
    className, 
    icon, 
    border, 
    xSize, 
    ySize, 
    weight, 
    fontSize, 
    fontFamily,
    letterSpacing, 
    borderRadius, 
    uppercase, 
    animation,
    fullWidth, 
    textColor,
    decoration,
    bgColor, 
    borderColor,
    onChange,
    onClick,
    onDoubleClick,
    onKeyUp,
    onKeyDown,
    onKeyPress,
    onMouseOver,
    onMouseOut,
    onMouseDown,
    onMouseUp,
    onBlur,
    onFocus,
    onSubmit
}: IButton): ReactElement<IButton> => {
    return(
        type === "link" ? <Link href={href}>
        <a target={target ? target : ""}
        rel={rel ? rel : ""}
        className={`
            focus:outline-none
            cursor-pointer
            ${animation ? "transition delay-300 duration-300 ease-in-out" : ""}
            ${fontFamily === "font1" ? "font-SF-PRO" : ""}
            ${fontFamily === "font2" ? "font-GOTHIC": ""}
            ${display ? display : ""}
            ${textAlign ? `text-${textAlign}` : ""}
            ${border && border === 1 ? `border`: border ? `border-${border}` : ""}
            ${xSize ? `px-${xSize}` : ""}
            ${ySize ? `py-${ySize}` : ""}
            ${fontSize ? `text-${fontSize}` : ""}
            ${decoration ? decoration : ""}
            ${icon ? "flex items-center" : ""}
            ${letterSpacing ? `tracking-${letterSpacing}`: ""}
            ${fullWidth ? "w-full block" : ""}
            ${className ? className : ""}
            ${fontFamily === "font1" ? "font-SF-PRO" : "font-GOTHIC"}
            ${uppercase ? "uppercase" : ""}
            ${weight ? `font-${weight}` : ""}
            ${textColor ? `text-${textColor}` : ""}
            ${bgColor ? `bg-${bgColor}` : ""}
            ${borderRadius && borderRadius == "normal" ? `rounded-${borderRadius}`: borderRadius ? `rounded-${borderRadius}`: ''}
            ${borderColor ? `border-${borderColor}` : ""}`}
            onClick={() => onClick && onClick()}
            onChange={() => onChange && onChange()}
            onDoubleClick={() => onDoubleClick && onDoubleClick()}
            onKeyUp={() => onKeyUp && onKeyUp()}
            onKeyDown={() => onKeyDown && onKeyDown()}
            onKeyPress={() => onKeyPress && onKeyPress()}
            onMouseOver={() => onMouseOver && onMouseOver()}
            onMouseOut={() => onMouseOut && onMouseOut()}
            onMouseDown={() => onMouseDown && onMouseDown()}
            onMouseUp={() => onMouseUp && onMouseUp()}
            onBlur={() => onBlur && onBlur()}
            onFocus={() => onFocus && onFocus()}
            onSubmit={() => onSubmit && onSubmit()}>
                {children}
            </a></Link> : 
        <button 
            type={type}
            className={`focus:outline-none cursor-pointer
            ${border && border === 1 ? `border`: border ? `border-${border}` : ""}
            ${xSize ? `px-${xSize}` : ""}
            ${ySize ? `py-${ySize}` : ""}
            ${display ? display : ""}
            ${animation ? "transition delay-300 duration-300 ease-in-out" : ""}
            ${fontFamily === "font1" ? "font-SF-PRO" : ""}
            ${fontFamily === "font2" ? "font-GOTHIC": ""}
            ${fontSize ? `text-${fontSize}` : ""}
            ${decoration ? decoration : ""}
            ${icon ? "flex items-center" : ""}
            ${letterSpacing ? `tracking-${letterSpacing}`: ""}
            ${fullWidth ? "w-full block" : ""}
            ${className ? className : ""}
            ${uppercase ? "uppercase" : ""}
            ${weight ? `font-${weight}` : ""}
            ${textColor ? `text-${textColor}` : ""}
            ${bgColor ? `bg-${bgColor}` : ""}
            ${borderRadius && borderRadius == "normal" ? `rounded-${borderRadius}`: borderRadius ? `rounded-${borderRadius}`: ''}
            ${borderColor ? `border-${borderColor}` : ""}`}
            onClick={() => onClick && onClick()}
            onChange={() => onChange && onChange()}
            onDoubleClick={() => onDoubleClick && onDoubleClick()}
            onKeyUp={() => onKeyUp && onKeyUp()}
            onKeyDown={() => onKeyDown && onKeyDown()}
            onKeyPress={() => onKeyPress && onKeyPress()}
            onMouseOver={() => onMouseOver && onMouseOver()}
            onMouseOut={() => onMouseOut && onMouseOut()}
            onMouseDown={() => onMouseDown && onMouseDown()}
            onMouseUp={() => onMouseUp && onMouseUp()}
            onBlur={() => onBlur && onBlur()}
            onFocus={() => onFocus && onFocus()}
            onSubmit={() => onSubmit && onSubmit()}>{children}</button>
    );
};

export default memo(Button);