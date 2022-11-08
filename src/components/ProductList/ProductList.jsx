import React, {useState} from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";
import {useCallback, useEffect} from "react";

const products = [
    {id: '1', title: 'Алина', price: 5000, description: '40 лет, блондинка'},
    {id: '2', title: 'Настя', price: 10000, description: '22 лет, шатенка'},
    {id: '3', title: 'Полина', price: 5000, description: '19 лет, рыжая'},
    {id: '4', title: 'Вика', price: 2500, description: '25 лет, блондинка'},
    {id: '5', title: 'Ирина', price: 5000, description: '18 лет, брюнетка'},
    {id: '6', title: 'Вероника', price: 4600, description: '21 лет, брюнетка'},
    {id: '7', title: 'Стася', price: 5500, description: '32 лет, блондинка'},
    {id: '8', title: 'Оля', price: 3000, description: '40 лет, шатенка'},
]

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            queryId,
        }
        fetch('http://85.119.146.179:8000/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }, [addedItems])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Позвонить`
            })
        }
    }

    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;