import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'


import './Reactphone';

function ReactPhone() {
    const [value, setValue] = useState()


    return (
        <section className='object'>
            <h2 className="object__title">Оставить заявку</h2>
            <div className='input-areas'>
                <form>
                    <PhoneInput
                        placeholder="Enter phone number"
                        defaultCountry='KG'
                        value={value}
                        onChange={setValue}
                    />
                </form>
            </div>
        </section>
    )
}

export default ReactPhone
