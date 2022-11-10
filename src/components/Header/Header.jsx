import React, {useState} from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';
import Filter from "./Filter/Filter";
import {useLocation} from "react-router-dom";

const Header = () => {
    const [modalFilterActive, setFilterModalActive] = useState(false);

    const {onClose} = useTelegram();

    function headerView() {
        const location = useLocation();
        return location.pathname;
    }

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            {(headerView() === '/') ?
                <div className={'filter_btn'}>
                    <Button onClick={() => setFilterModalActive(true)}>Фильтр</Button>
                    <Filter active={modalFilterActive} setActive={setFilterModalActive}/>
                </div> : null
            }
        </div>
    );
};

export default Header;