// React
import React, { ReactElement, memo } from 'react';

// Interface
import ISelect from './interface';

const Select: React.FC<ISelect> = ({
    options,
    className,
    id,
    border,
    borderColor,
    borderRadius,
    bgColor,
    fontSize,
    letterSpacing,
    textColor,
    uppercase,
    weight,
    xSize,
    ySize,
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
}: ISelect): ReactElement<ISelect> => {
    return(
        <select className={` focus:outline-none w-full
            ${border && border === 1 ? `border`: border ? `border-${border}` : ""}
            ${xSize ? `px-${xSize}` : ""}
            ${ySize ? `py-${ySize}` : ""}
            ${fontSize ? `text-${fontSize}` : ""}
            ${letterSpacing ? `tracking-${letterSpacing}`: ""}
            ${className ? className : ""}
            ${uppercase ? "uppercase" : ""}
            ${weight ? `font-${weight}` : ""}
            ${textColor ? `text-${textColor}` : ""}
            ${bgColor ? `bg-${bgColor}` : ""}
            ${borderRadius && borderRadius == "normal" ? `rounded-${borderRadius}`: borderRadius ? `rounded-${borderRadius}`: ''}
            ${borderColor ? `border-${borderColor}` : ""}
            ${className ? className : ""}`}
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
            {options.map((option, index) => (
                <option key={index} value={option.value}>{option.text}</option>
            ))}</select>
    );
};

export default memo(Select);