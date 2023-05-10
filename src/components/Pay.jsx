import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const KEY = "pk_test_51N5o6SGQ2RjwokUafGOgsMc6YjX0N3muSls8d4YbEzbrwftfmRVauZXo3xuzP9HKM5gUZQSKI04wDCrF3ibZyxll00ZBCmbJNC"

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null)
  const onToken = (token) => {
    setStripeToken(token)
  }

  useEffect(() => {
   const makeReq = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/checkout/payment', {
        tokenId: stripeToken.id,
        amount: 2000
      })
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
   }
   stripeToken && makeReq()
  }, [stripeToken])

   return (
      <div
         style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
         }}>
         <StripeCheckout
          name='E-Shop'
          image=''
          billingAddress
          shippingAddress
          description='total is $20'
          amount={2000}
          token={onToken}
          stripeKey={KEY}
         >
            <button
               style={{
                  border: 'none',
                  width: '120px',
                  borderRadius: '5px',
                  padding: '20px',
                  backgroundColor: 'black',
                  color: 'white',
                  cursor: 'pointer',
               }}>
               PayOut
            </button>
         </StripeCheckout>
      </div>
   );
};

export default Pay;
