// React
import React, { FC, ReactElement, useState, memo } from 'react';

// Atoms
import Typography from 'components/Atoms/Typography';

// Molecules
import List from 'components/Molecules/List';

// Icons
import { BsChevronDown } from 'react-icons/bs';

// Interface
import IDropdown from './interface';

const Dropdown: FC<IDropdown> = ({
    relative,
    icon,
    hover,
    click,
    type,
    transition,
    ...rest
}: IDropdown): ReactElement<IDropdown> => {
    const [dropdown, setDropdown] = useState<boolean>(false);
    const toggleDropdown = (): void => setDropdown(!dropdown);

    return(
        <div className={`${relative ? "relative": ""}`} 
            onMouseOver={() => hover && toggleDropdown()} 
            onMouseOut={() => hover && toggleDropdown()}
            onClick={() => click && toggleDropdown()}>
            {icon ? <div className="flex items-center">
                <div className="flex-1">
                    <Typography type="h4" fontSize="2xl" className="cursor-pointer">{rest.title}</Typography>
                </div>
                <div className="ml-4">
                    <BsChevronDown />
                </div>
            </div> : <Typography type="h4" fontSize="2xl" className="cursor-pointer">{rest.title}</Typography>}

            <div className={`
                ${type === "default" ? "bg-white shadow" : ""} 
                absolute z-10 left-0 top-full w-full 
                ${transition ? "transition ease-in-out delay-200 duration-200" : ""} 
                ${!dropdown ? "opacity-0 invisible" : ""}`}>
                    <List list={rest.list} />
            </div>
        </div>
    );
};

export default memo(Dropdown);