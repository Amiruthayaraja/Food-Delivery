import React, {useRef, useEffect} from 'react'
import { useSelector } from 'react-redux';




export default function () {
    const paypal = useRef()
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    useEffect(()=>{
        window.paypal.Buttons({
            createOrder: (data, actions, err) =>{
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase: [
                        {
                            description: "PickFood",
                            amount: {
                                currency_code: "LKR",
                                value: {totalAmount},
                            },
                        },
                    ],
                });
            },
            onApprove: async (data, actions) =>{
                const order = await actions.order.capture();
                console.log(order);
            },
            onError: (err)=>{
                console.log(err);
            }
        })
        .render(paypal.current)
    }, [])
  return (
    <div>
        <div ref={paypal}></div>
    </div>
  )
}

