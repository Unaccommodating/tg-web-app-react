import React, {useState} from 'react';
import './Filter.css';
import {useTelegram} from "../../../hooks/useTelegram";
import Button from "../../Button/Button";
import {useCallback, useEffect} from "react";
import "../Filter/Filter.css"

const Filter = ({active, setActive}) => {
    const [sex, setSex] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [breast, setBreast] = useState('');
    const [hairsColor, setHairsColor] = useState('');
    const [dateCost, setDateCost] = useState('');
    const [city, setCity] = useState('');
    const [metro, setMetro] = useState('');
    const [nationality, setNationality] = useState('');

    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            age,
            height,
            weight,
            breast,
            hairsColor,
            dateCost,
            city,
            sex,
            metro,
            nationality
        }
        tg.sendData(JSON.stringify(data));
    }, [name, age, height, weight, breast, hairsColor, dateCost, city, sex, metro, nationality])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Найти'
        })
    }, [])

    const onChangeAge = (e) => {
        setAge(e.target.value)
    }

    const onChangeHeight = (e) => {
        setHeight(e.target.value)
    }

    const onChangeWeight = (e) => {
        setWeight(e.target.value)
    }

    const onChangeBreast = (e) => {
        setBreast(e.target.value)
    }

    const onChangeHairsColor = (e) => {
        setHairsColor(e.target.value)
    }
    
    const onChangeDateCost = (e) => {
        setDateCost(e.target.value)
    }

    const onChangeCity = (e) => {
        setCity(e.target.value)
    }

    const onChangeSex = (e) => {
        setSex(e.target.value)
    }

    const onChangeMetro = (e) => {
        setMetro(e.target.value)
    }

    const onChangeNationality = (e) => {
        setNationality(e.target.value)
    }

    return (
        <div className={active ? "filter active" : "filter"}>
            <div className={active ? "popup active" : "popup"}>
                <Button onClick={() => setActive(false)}>Назад</Button>
                <div className="form">
                    <h3>Выберите параметры</h3>
                    <select value={sex} onChange={onChangeSex} className={'select'}>
                        <option value disabled selected>Пол</option>
                        <option value={'M'}>Девушка</option>
                        <option value={'F'}>Парень</option>
                    </select>
                    <select value={city} onChange={onChangeCity} className={'select'}>
                        <option value disabled selected>Город</option>
                        <option value={'Moscow'}>Москва</option>
                        <option value={'Paris'}>Казань</option>
                    </select>
                    <select value={metro} onChange={onChangeMetro} className={'select'}>
                        <option value disabled selected>Метро</option>
                        <option value={'Kr'}>Кремлёвская</option>
                        <option value={'M'}>Горки</option>
                    </select>
                    <select value={dateCost} onChange={onChangeDateCost} className={'select'}>
                        <option value disabled selected>Цена</option>
                        <option value={'2000'}>До 2000</option>
                        <option value={'2000-3000'}>2000-3000</option>
                        <option value={'3000-5000'}>3000-5000</option>
                        <option value={'5000-7000'}>5000-7000</option>
                        <option value={'7000'}>Выше 7000</option>
                    </select>
                    <select value={age} onChange={onChangeAge} className={'select'}>
                        <option value disabled selected>Возраст</option>
                        <option value={'1820'}>18-20</option>
                        <option value={'2125'}>21-25</option>
                        <option value={'2630'}>26-30</option>
                        <option value={'3135'}>31-35</option>
                        <option value={'3640'}>36-40</option>
                        <option value={'4075'}>40-75</option>
                    </select>
                    <select value={height} onChange={onChangeHeight} className={'select'}>
                        <option value disabled selected>Рост</option>
                        <option value={'lil'}>Миниатюрные</option>
                        <option value={'normal'}>Средние</option>
                        <option value={'height'}>Высокие</option>
                    </select>
                    <select value={weight} onChange={onChangeWeight} className={'select'}>
                        <option value disabled selected>Телосложение</option>
                        <option value={'tall'}>Худые</option>
                        <option value={'fat'}>В теле</option>
                    </select>
                    <select value={breast} onChange={onChangeBreast} className={'select'}>
                        <option value disabled selected>Размер</option>
                        <option value={'lil'}>Миниатюрная</option>
                        <option value={'normal'}>Средняя</option>
                        <option value={'big'}>Большая</option>
                    </select>
                    <select value={hairsColor} onChange={onChangeHairsColor} className={'select'}>
                        <option value disabled selected>Цвет волос</option>
                        <option value={'blonde'}>Блондинки</option>
                        <option value={'brunette'}>Брюнетки</option>
                        <option value={'brown'}>Шатенки</option>
                        <option value={'red'}>Рыжие</option>
                        <option value={'fair'}>Русые</option>
                    </select>
                    <select value={nationality} onChange={onChangeNationality} className={'select'}>
                        <option value disabled selected>Национальность</option>
                        <option value={'ru'}>Славянки</option>
                        <option value={'az'}>Азиатки</option>
                        <option value={'br'}>Негритянки</option>
                        <option value={'east'}>Восточная</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Filter;