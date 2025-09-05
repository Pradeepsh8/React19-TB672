import { memo } from 'react';
import offerimage from '../assets/discount-special-offer.jpg';

function Offer(){

    console.log('Offer Component loaded');

    return(<>
    <div>
        <img src={offerimage} style={{width:'100px', height: '100px'}}/>
    </div>
    </>)
}

export default memo(Offer);