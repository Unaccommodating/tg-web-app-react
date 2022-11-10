import React, {useState} from 'react';
import './Filter.css';
import {useTelegram} from "../../../hooks/useTelegram";
import Button from "../../Button/Button";

const Filter = ({active, setActive}) => {

    return (
        <div className={active ? "filter active" : "filter"}>
            <div className={active ? "popup active" : "popup"}>
                <Button onClick={() => setActive(false)}>Назад</Button>
                <div className="filter_settings">
                    <p>Выберите город</p>
                    <p>Выберите цену</p>
                    <p>Выберите рост</p>
                    <p>Выберите метро</p>
                    <p>Выберите город</p>
                </div>
            </div>
        </div>
    );
};

export default Filter;