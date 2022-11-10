import React, {useState} from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';
import Filter from "./Filter/Filter";

const Header = () => {
    const [modalFilterActive, setFilterModalActive] = useState(false);

    const {onClose} = useTelegram();


    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'filter_btn'}>
                <Button onClick={() => setFilterModalActive(true)}>Фильтр</Button>
            </span>
            <Filter active={modalFilterActive} setActive={setFilterModalActive}>Фильтр</Filter>
        </div>
    );
};

export default Header;