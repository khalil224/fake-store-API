import React, { useState } from 'react';

const Test = (props) => {
    // console.log(count)
    const [count, setCount] = useState(0)
    const minus = () => setCount(count - 1)

    const plus = () => setCount(count + 1)
    return (
        <div>

            <h1>{count}  </h1>
            <div className='count mt-5 ' >
                <button onClick={plus} className='ms-3 p-3'>+</button>
                <button onClick={minus} className='ms-3 p-3'>-</button>
            </div>
        </div>
    );
};

export default Test;