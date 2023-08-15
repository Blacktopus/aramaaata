'use client'
import React, {useEffect, useState} from 'react';
import {PageModule} from "@/app/(pagess)/home/PageModule";
import {useSelector} from "react-redux";

const Page = () => {
    const [issue, setIssue] = useState(false)
    const [counter, setCounter] = useState(0)
    const {mapMove, mapCordCenter} = useSelector(state => state.userSlice.mapOptions)
    useEffect(() => {
        let interval;
        window.addEventListener('touchstart', () => {
            interval = setInterval(() => {
                setCounter(prevState => {
                    if (prevState === 2) {
                        setIssue(true);

                        return prevState += 1
                    }
                    return prevState += 1
                })
            }, 900)
        })
        window.addEventListener('touchend', () => {
            clearInterval(interval)
            if (!issue) setCounter(0);
        })


        return () => {
            clearInterval(interval)
        }
    }, []);

    return (
        <PageModule className='issue-toggle'>
            <p>hidden {counter} {mapMove ? 'true' : 'false'}</p>

            <div className="mobile-wrapper">
                <h1>Уточните адрес отзыва {mapCordCenter ? mapCordCenter[0] : 'учтон'}</h1>
            </div>
        </PageModule>
    );
};

export default Page;