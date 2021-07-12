// React
import React from 'react'

// Interface
import IHead from './head/interface';

export default interface ILayout extends IHead {
    Header?: React.FC;
    Footer?: React.FC;
    children: React.ReactNode;
}