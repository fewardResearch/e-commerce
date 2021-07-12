// React
import React, { ReactElement, memo } from 'react';

// Interface
import ITypography from './interface';

const Typography:React.FC<ITypography> = ({ 
    margin, 
    children, 
    type, 
    align, 
    fontSize,
    fontFamily,
    decoration,
    xSize,
    ySize,
    weight, 
    textColor, 
    bgColor,
    letterSpacing,
    lineHeight,
    display,
    animation,
    className,
    htmlFor
}: ITypography): ReactElement<ITypography> => {
    return(
        type === "h1" ? <h1 className={`
        ${align ? `text-${align}` : ""}
        ${fontSize ? `text-${fontSize}` : ""}
        ${margin ? `mb-${margin}` : ""}
        ${animation ? "transition delay-300 duration-300 ease-in-out" : ""}
        ${fontFamily === "font1" ? "font-SF-PRO" : ""}
        ${fontFamily === "font2" ? "font-GOTHIC": ""}
        ${decoration ? decoration : ""}
        ${xSize ? `px-${xSize}` : ""}
        ${ySize ? `py-${ySize}` : ""}
        ${weight ? `font-${weight}` : ""}
        ${letterSpacing ? `tracking-${letterSpacing}`: ""}
        ${lineHeight ? `leading-${lineHeight}` : ""}
        ${className ? className : ""}
        ${display ? display : ""}
        ${textColor ? `text-${textColor}` : ""}
        ${bgColor ? `bg-${bgColor}` : ""}
        `}>{children}</h1> : 
        type === "h2" ? <h2 className={` 
        ${align ? `text-${align}`: ""}
        ${animation ? "transition delay-300 duration-300 ease-in-out" : ""}
        ${fontSize ? `text-${fontSize}`: ""}
        ${fontFamily === "font1" ? "font-SF-PRO" : ""}
        ${fontFamily === "font2" ? "font-GOTHIC": ""}
        ${decoration ? decoration : ""}
        ${xSize ? `px-${xSize}` : ""}
        ${ySize ? `py-${ySize}` : ""}
        ${margin ? `mb-${margin}`: ""}
        ${weight ? `font-${weight}`: ""}
        ${letterSpacing ? `tracking-${letterSpacing}`: ""}
        ${lineHeight ? `leading-${lineHeight}`: ""}
        ${className ? className: ""}
        ${textColor ? `text-${textColor}` : ""}
        ${bgColor ? `bg-${bgColor}` : ""}
        ${display ? display: ""}`}>{children}</h2> : 
        type === "h3" ? <h3 className={` 
        ${align ? `text-${align}`: ""}
        ${fontSize ? `text-${fontSize}`: ""}
        ${margin ? `mb-${margin}`: ""}
        ${weight ? `font-${weight}`: ""}
        ${letterSpacing ? `tracking-${letterSpacing}`: ""}
        ${lineHeight ? `leading-${lineHeight}`: ""}
        ${animation ? "transition delay-300 duration-300 ease-in-out" : ""}
        ${fontFamily === "font1" ? "font-SF-PRO" : ""}
        ${fontFamily === "font2" ? "font-GOTHIC": ""}
        ${decoration ? decoration : ""}
        ${xSize ? `px-${xSize}` : ""}
        ${ySize ? `py-${ySize}` : ""}
        ${className ? className: ""}
        ${textColor ? `text-${textColor}` : ""}
        ${bgColor ? `bg-${bgColor}` : ""}
        ${display ? display: ""}`}>{children}</h3> : 
        type === "h4" ? <h4 className={` 
        ${align ? `text-${align}`: ""}
        ${fontSize ? `text-${fontSize}`: ""}
        ${margin ? `mb-${margin}`: ""}
        ${animation ? "transition delay-300 duration-300 ease-in-out" : ""}
        ${fontFamily === "font1" ? "font-SF-PRO" : ""}
        ${fontFamily === "font2" ? "font-GOTHIC": ""}
        ${decoration ? decoration : ""}
        ${xSize ? `px-${xSize}` : ""}
        ${ySize ? `py-${ySize}` : ""}
        ${weight ? `font-${weight}`: ""}
        ${letterSpacing ? `tracking-${letterSpacing}`: ""}
        ${textColor ? `text-${textColor}` : ""}
        ${bgColor ? `bg-${bgColor}` : ""}
        ${lineHeight ? `leading-${lineHeight}`: ""}
        ${className ? className: ""}
        ${display ? display: ""}`}>{children}</h4> : 
        type === "h5" ? <h5 className={` 
        ${align ? `text-${align}`: ""}
        ${animation ? "transition delay-300 duration-300 ease-in-out" : ""}
        ${fontFamily === "font1" ? "font-SF-PRO" : ""}
        ${fontFamily === "font2" ? "font-GOTHIC": ""}
        ${decoration ? decoration : ""}
        ${xSize ? `px-${xSize}` : ""}
        ${ySize ? `py-${ySize}` : ""}
        ${fontSize ? `text-${fontSize}`: ""}
        ${margin ? `mb-${margin}`: ""}
        ${weight ? `font-${weight}`: ""}
        ${letterSpacing ? `tracking-${letterSpacing}`: ""}
        ${lineHeight ? `leading-${lineHeight}`: ""}
        ${className ? className: ""}
        ${textColor ? `text-${textColor}` : ""}
        ${bgColor ? `bg-${bgColor}` : ""}
        ${display ? display: ""}`}>{children}</h5> : 
        type === "h6" ? <h6 className={` 
        ${align ? `text-${align}`: ""}
        ${fontSize ? `text-${fontSize}`: ""}
        ${margin ? `mb-${margin}`: ""}
        ${animation ? "transition delay-300 duration-300 ease-in-out" : ""}
        ${fontFamily === "font1" ? "font-SF-PRO" : ""}
        ${fontFamily === "font2" ? "font-GOTHIC": ""}
        ${decoration ? decoration : ""}
        ${xSize ? `px-${xSize}` : ""}
        ${ySize ? `py-${ySize}` : ""}
        ${weight ? `font-${weight}`: ""}
        ${letterSpacing ? `tracking-${letterSpacing}`: ""}
        ${lineHeight ? `leading-${lineHeight}`: ""}
        ${className ? className: ""}
        ${display ? display: ""}`}>{children}</h6> : 
        type === "span" ? <span className={` 
        ${align ? `text-${align}`: ""}
        ${fontSize ? `text-${fontSize}`: ""}
        ${margin ? `mb-${margin}`: ""}
        ${animation ? "transition delay-300 duration-300 ease-in-out" : ""}
        ${fontFamily === "font1" ? "font-SF-PRO" : ""}
        ${fontFamily === "font2" ? "font-GOTHIC": ""}
        ${decoration ? decoration : ""}
        ${xSize ? `px-${xSize}` : ""}
        ${ySize ? `py-${ySize}` : ""}
        ${weight ? `font-${weight}`: ""}
        ${letterSpacing ? `tracking-${letterSpacing}`: ""}
        ${lineHeight ? `leading-${lineHeight}`: ""}
        ${className ? className: ""}
        ${display ? display: ""}`}>{children}</span> : 
        type === "article" ? <article className={` 
        ${align ? `text-${align}`: ""}
        ${fontSize ? `text-${fontSize}`: ""}
        ${margin ? `mb-${margin}`: ""}
        ${animation ? "transition delay-300 duration-300 ease-in-out" : ""}
        ${fontFamily === "font1" ? "font-SF-PRO" : ""}
        ${fontFamily === "font2" ? "font-GOTHIC": ""}
        ${decoration ? decoration : ""}
        ${xSize ? `px-${xSize}` : ""}
        ${ySize ? `py-${ySize}` : ""}
        ${weight ? `font-${weight}`: ""}
        ${letterSpacing ? `tracking-${letterSpacing}`: ""}
        ${lineHeight ? `leading-${lineHeight}`: ""}
        ${className ? className: ""}
        ${display ? display: ""}`}>{children}</article> : 
        type === "label" ? <label htmlFor={htmlFor && htmlFor} className={` 
        ${align ? `text-${align}`: ""}
        ${fontSize ? `text-${fontSize}`: ""}
        ${margin ? `mb-${margin}`: ""}
        ${animation ? "transition delay-300 duration-300 ease-in-out" : ""}
        ${fontFamily === "font1" ? "font-SF-PRO" : ""}
        ${fontFamily === "font2" ? "font-GOTHIC": ""}
        ${decoration ? decoration : ""}
        ${xSize ? `px-${xSize}` : ""}
        ${ySize ? `py-${ySize}` : ""}
        ${weight ? `font-${weight}`: ""}
        ${letterSpacing ? `tracking-${letterSpacing}`: ""}
        ${textColor ? `text-${textColor}` : ""}
        ${bgColor ? `bg-${bgColor}` : ""}
        ${lineHeight ? `leading-${lineHeight}`: ""}
        ${className ? className: ""}
        ${display ? display: ""}`}>{children}</label> :
        type === "strong" ? <strong className={` 
        ${align ? `text-${align}`: ""}
        ${fontSize ? `text-${fontSize}`: ""}
        ${margin ? `mb-${margin}`: ""}
        ${animation ? "transition delay-300 duration-300 ease-in-out" : ""}
        ${fontFamily === "font1" ? "font-SF-PRO" : ""}
        ${fontFamily === "font2" ? "font-GOTHIC": ""}
        ${decoration ? decoration : ""}
        ${xSize ? `px-${xSize}` : ""}
        ${ySize ? `py-${ySize}` : ""}
        ${weight ? `font-${weight}`: ""}
        ${letterSpacing ? `tracking-${letterSpacing}`: ""}
        ${textColor ? `text-${textColor}` : ""}
        ${bgColor ? `bg-${bgColor}` : ""}
        ${lineHeight ? `leading-${lineHeight}`: ""}
        ${className ? className: ""}
        ${display ? display: ""}`}>{children}</strong> :
        type === "b" ? <b className={` 
        ${align ? `text-${align}`: ""}
        ${animation ? "transition delay-300 duration-300 ease-in-out" : ""}
        ${fontFamily === "font1" ? "font-SF-PRO" : ""}
        ${fontFamily === "font2" ? "font-GOTHIC": ""}
        ${decoration ? decoration : ""}
        ${xSize ? `px-${xSize}` : ""}
        ${ySize ? `py-${ySize}` : ""}
        ${fontSize ? `text-${fontSize}`: ""}
        ${margin ? `mb-${margin}`: ""}
        ${weight ? `font-${weight}`: ""}
        ${letterSpacing ? `tracking-${letterSpacing}`: ""}
        ${textColor ? `text-${textColor}` : ""}
        ${bgColor ? `bg-${bgColor}` : ""}
        ${lineHeight ? `leading-${lineHeight}`: ""}
        ${className ? className: ""}
        ${display ? display: ""}`}>{children}</b> :
        type === "i" ? <i className={` 
        ${align ? `text-${align}`: ""}
        ${fontSize ? `text-${fontSize}`: ""}
        ${margin ? `mb-${margin}`: ""}
        ${weight ? `font-${weight}`: ""}
        ${letterSpacing ? `tracking-${letterSpacing}`: ""}
        ${animation ? "transition delay-300 duration-300 ease-in-out" : ""}
        ${fontFamily === "font1" ? "font-SF-PRO" : ""}
        ${fontFamily === "font2" ? "font-GOTHIC": ""}
        ${decoration ? decoration : ""}
        ${xSize ? `px-${xSize}` : ""}
        ${ySize ? `py-${ySize}` : ""}
        ${textColor ? `text-${textColor}` : ""}
        ${bgColor ? `bg-${bgColor}` : ""}
        ${lineHeight ? `leading-${lineHeight}`: ""}
        ${className ? className: ""}
        ${display ? display: ""}`}>{children}</i> : 
        type === "figcaption" ? <figcaption className={` 
        ${align ? `text-${align}`: ""}
        ${fontSize ? `text-${fontSize}`: ""}
        ${margin ? `mb-${margin}`: ""}
        ${animation ? "transition delay-300 duration-300 ease-in-out" : ""}
        ${fontFamily === "font1" ? "font-SF-PRO" : ""}
        ${fontFamily === "font2" ? "font-GOTHIC": ""}
        ${decoration ? decoration : ""}
        ${xSize ? `px-${xSize}` : ""}
        ${ySize ? `py-${ySize}` : ""}
        ${weight ? `font-${weight}`: ""}
        ${letterSpacing ? `tracking-${letterSpacing}`: ""}
        ${textColor ? `text-${textColor}` : ""}
        ${bgColor ? `bg-${bgColor}` : ""}
        ${lineHeight ? `leading-${lineHeight}`: ""}
        ${className ? className: ""}
        ${display ? display: ""}`}>{children}</figcaption> :
        type === "del" ? <del className={` 
        ${align ? `text-${align}`: ""}
        ${fontSize ? `text-${fontSize}`: ""}
        ${animation ? "transition delay-300 duration-300 ease-in-out" : ""}
        ${fontFamily === "font1" ? "font-SF-PRO" : ""}
        ${fontFamily === "font2" ? "font-GOTHIC": ""}
        ${decoration ? decoration : ""}
        ${xSize ? `px-${xSize}` : ""}
        ${ySize ? `py-${ySize}` : ""}
        ${margin ? `mb-${margin}`: ""}
        ${weight ? `font-${weight}`: ""}
        ${letterSpacing ? `tracking-${letterSpacing}`: ""}
        ${textColor ? `text-${textColor}` : ""}
        ${bgColor ? `bg-${bgColor}` : ""}
        ${lineHeight ? `leading-${lineHeight}`: ""}
        ${className ? className: ""}
        ${display ? display: ""}`}>{children}</del> :
        <p className={` 
        ${align ? `text-${align}`: ""}
        ${fontSize ? `text-${fontSize}`: ""}
        ${margin ? `mb-${margin}`: ""}
        ${animation ? "transition delay-300 duration-300 ease-in-out" : ""}
        ${fontFamily === "font1" ? "font-SF-PRO" : ""}
        ${fontFamily === "font2" ? "font-GOTHIC": ""}
        ${decoration ? decoration : ""}
        ${xSize ? `px-${xSize}` : ""}
        ${ySize ? `py-${ySize}` : ""}
        ${weight ? `font-${weight}`: ""}
        ${letterSpacing ? `tracking-${letterSpacing}`: ""}
        ${lineHeight ? `leading-${lineHeight}`: ""}
        ${className ? className: ""}
        ${textColor ? `text-${textColor}` : ""}
        ${bgColor ? `bg-${bgColor}` : ""}
        ${display ? display: ""}`}>{children}</p>

    );
};

export default memo(Typography);