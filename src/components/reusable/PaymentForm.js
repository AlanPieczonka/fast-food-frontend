import React from 'react'
import { useDispatch } from "react-redux"

import { saveOrder } from "../../actionCreators/order"
import { calculateSum } from "./../../utils/order"

export default function PaymentForm({ order, closeModal }) {
        const sum = calculateSum(order)
        const dispatch = useDispatch()

        return (
            <div>
                <ul>
                    {order.map(({ name, quantity}) =>
                        <li key={name}>
                            Name: {name}, quantity: {quantity}
                        </li>
                    )}
                </ul>
                Sum: {sum} zł
                <button className='btn -block' onClick={() => dispatch(saveOrder()).then(() => closeModal())}>Pay</button>
            </div>
        )
}