import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publicshableKey = 'pk_test_51JExOrSCn4uE4H0ibnarjM5UuKwmcWRk5LcKYSCFsYQ3DqELrxTtNt0tNMSQYgwxWc5uGL99bimoIqEHOOyufFQf00zw1IRbHW'

    const onToken = token => {
        console.log(token);
        alert('Payment is Successful')
    }
    return(
        <StripeCheckout
            label='Pay Now'
            name='Crwn Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}` }
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publicshableKey}
        />
    );
};
export default StripeCheckoutButton;