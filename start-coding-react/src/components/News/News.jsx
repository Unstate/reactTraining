import './News.module.css';
import classes from './News.module.css'
import { useState } from 'react';
import Randomizer from './../Randomizer/Randomizer'


const Square = () => {

    const [value, setValue] = useState(null);

    let handleClick = () => {
        setValue('X');
    }

    return (
        <button className='square' onClick={handleClick}>{value}</button>
    );
}

const News = (props) => {
    return (
        <>
            <div className="board-row">
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </div>
            <div className="board-row">
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </div>
            <div className="board-row">
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </div>
            <div className="">
                <Randomizer></Randomizer>
            </div>
        </>
    );
}

export default News;