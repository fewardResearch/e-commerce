// React
import React, { FC, ReactElement, useState, useEffect, memo } from 'react';

// Next
import useTranslation from 'next-translate/useTranslation'

// Interface
import ICountDown, { RemainingTime } from './interface';

// Atoms
import Typography from 'components/Atoms/Typography';

// Data
import Months from './data';

const Countdown: FC<ICountDown> = ({
    month,
    day,
    year,
    time,
    className
}: ICountDown): ReactElement<ICountDown> => {
    const { t } = useTranslation();

    const [remainingTime, setRemainingTime] = useState<RemainingTime>(Object);
    const countDownDate = new Date(`${Months.filter((item) => item.id === month)[0].title} ${day}, ${year ? year : new Date().getFullYear()} ${time ? `${time.hour}:${time.minute}:${time.second}`: new Date().getTime()}`).getTime();

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
    
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
            setRemainingTime({
                day: days,
                hour: hours,
                minute: minutes,
                second: seconds
            });
    
            if(distance === 0) {
                clearInterval(timer);
            }
        });
    }, []);

    return(
        <div className={`text-center flex items-center px-2 py-3 ${className ? className : ""}`}>
            <div className="px-5 py-2 flex-1 mr-2 rounded-xl bg-white">
                <Typography type="strong" display="block" fontSize="3xl">{remainingTime.day}</Typography>
                <Typography type="span" display="block" fontSize="xl">{t("common:day")}</Typography>
            </div>
            <div className="px-5 py-2 flex-1 mr-2 rounded-xl bg-white">
                <Typography type="strong" display="block" fontSize="3xl">{remainingTime.hour}</Typography>
                <Typography type="span" display="block" fontSize="xl">{t("common:hour")}</Typography>
            </div>
            <div className="px-5 py-2 flex-1 mr-2 rounded-xl bg-white">
                <Typography type="strong" display="block" fontSize="3xl">{remainingTime.minute}</Typography>
                <Typography type="span" display="block" fontSize="xl">{t("common:minute")}</Typography>
            </div>
            <div className="px-5 py-2 flex-1 rounded-xl bg-white">
                <Typography type="strong" display="block" fontSize="3xl">{remainingTime.second}</Typography>
                <Typography type="span" display="block" fontSize="xl">{t("common:second")}</Typography>
            </div>
        </div>
    );
};

export default memo(Countdown);