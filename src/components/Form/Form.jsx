import React, {useCallback, useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [breast, setBreast] = useState('');
    const [hairsColor, setHairsColor] = useState('');
    const [description, setDescription] = useState('');
    const [telephone, setTelephone] = useState('');
    const [telegram, setTelegram] = useState('');
    const [dateCost, setDateCost] = useState('');
    const [photoType, setPhotoType] = useState('');
    const [city, setCity] = useState('');

    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            name,
            age,
            height,
            weight,
            breast,
            hairsColor,
            description,
            telephone,
            telegram,
            dateCost,
            photoType,
            city,
        }
        tg.sendData(JSON.stringify(data));
    }, [name, age, height, weight, breast, hairsColor, description, telephone, telegram, dateCost, photoType, city])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Разместить анкету'
        })
    }, [])

    useEffect(() => {
        if(!name) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [name])

    const onChangeName = (e) => {
        setName(e.target.value)
    }

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

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const onChangeTelephone = (e) => {
        setTelephone(e.target.value)
    }

    const onChangeTelegram = (e) => {
        setTelegram(e.target.value)
    }

    const onChangeDateCost = (e) => {
        setDateCost(e.target.value)
    }

    const onChangePhotoType = (e) => {
        setPhotoType(e.target.value)
    }

    const onChangeCity = (e) => {
        setCity(e.target.value)
    }

    return (
        <div className={"form"}>
            <h3>Заполните анкету</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Имя'}
                value={name}
                onChange={onChangeName}
            />
            <input
                className={'input'}
                type="number"
                placeholder={'Возраст'}
                value={age}
                onChange={onChangeAge}
            />
            <input
                className={'input'}
                type="number"
                placeholder={'Рост'}
                value={height}
                onChange={onChangeHeight}
            />
            <input
                className={'input'}
                type="number"
                placeholder={'Вес'}
                value={height}
                onChange={onChangeWeight}
            />
            <select value={breast} onChange={onChangeBreast} className={'select'}>
                <option value={'lil'}>Миниатюрная</option>
                <option value={'normal'}>Средняя</option>
                <option value={'big'}>Большая</option>
            </select>
            <input
                className={'input'}
                type="text"
                placeholder={'Цвет волос'}
                value={hairsColor}
                onChange={onChangeHairsColor}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'О себе'}
                value={description}
                onChange={onChangeDescription}
            />
            <input
                className={'input'}
                type="number"
                placeholder={'Телефон'}
                value={telephone}
                onChange={onChangeTelephone}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Телеграм'}
                value={telegram}
                onChange={onChangeTelegram}
            />
            <input
                className={'input'}
                type="number"
                placeholder={'Цена'}
                value={dateCost}
                onChange={onChangeDateCost}
            />
            <select value={photoType} onChange={onChangePhotoType} className={'select'}>
                <option value={'real'}>Реальное фото</option>
                <option value={'likeMe'}>Похожее на меня</option>
            </select>
            <select value={city} onChange={onChangeCity} className={'select'}>
                <option value={'Moscow'}>Москва</option>
                <option value={'Paris'}>Париж</option>
            </select>
        </div>
    );
};

export default Form;