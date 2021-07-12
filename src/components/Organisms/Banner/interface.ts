import React from 'react';
import IPicture from '../../Molecules/Picture/interface'

export default interface IBanner extends IPicture {
    children?: React.ReactNode;
    className?: string;
    container?: boolean;
    contentXPosition?: "left" | "right" | "center";
    contentYPosition?: "top" | "bottom" | "center";
}