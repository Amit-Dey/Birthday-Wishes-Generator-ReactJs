import { useState, useRef, useEffect } from 'react';

function BirthdayWisher() {
    const [name, setName] = useState(''); // State to hold the person's name
    // input ref
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    // Array of pre-written birthday wishes it can be fetched from an API

    const wishes = [ // Array of pre-written birthday wishes
        'Happy Birthday, {name}! Wishing you a day filled with joy and laughter.',
        'May your birthday be as special as you are, {name}. Have a wonderful day!',
        'Here\'s to another year of amazing adventures, {name}. Happy Birthday!',
        'Wishing you health, happiness, and love on your special day, {name}. Happy Birthday!',
        'Happy Birthday, {name}! May all your dreams and wishes come true.',
        'Sending you warm birthday wishes and a big virtual hug, {name}. Have a great day!',
        'Happy Birthday, {name}! May your day be as beautiful and bright as you are.',
        'Here\'s to celebrating you today, {name}. Have a fantastic birthday!',
        'Wishing you a day filled with love, laughter, and everything you desire, {name}. Happy Birthday!',
        'Happy Birthday, {name}! May your day be as wonderful as you are to me.',
        'Sending you smiles for every moment of your special day, {name}. Happy Birthday!',
        'Happy Birthday, {name}! May your day be full of surprises and wonderful moments.',
        'Wishing you a day filled with love, laughter, and everything you desire, {name}. Happy Birthday!',
        'Happy Birthday, {name}! May your day be as wonderful as you are to me.',
        'Sending you smiles for every moment of your special day, {name}. Happy Birthday!',
        'Happy Birthday, {name}! May your day be full of surprises and wonderful moments.',
        'Wishing you a day filled with love, laughter, and everything you desire, {name}. Happy Birthday!',
        'Happy Birthday, {name}! May your day be as wonderful as you are to me.',
    ];

    // Function to handle name input change
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    // Function to copy the text
    const handelCopy = (e) => {
        const text = e.target.previousSibling.innerText;
        navigator.clipboard.writeText(text);

        // add a flash class to the element for a short duration
        e.target.classList.add('flash');
        setTimeout(() => {
            e.target.classList.remove('flash');
        }, 400);
    }

    return (
        <div className="birthday-wisher">
            <h1 className='title'>Birthday Wisher</h1>
            <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter a name..."
                className='input'
                ref={inputRef}
            />
            {name && ( // Render cards only if a name is entered
                <div className="cards-container">

                    {/* put 6 random card */}
                    {
                        wishes
                            .sort(() => Math.random() - 0.5)
                            .slice(0, 6)
                            .map((wish, index) => (
                                <div key={index} className="card">
                                    <p>{wish.replace('{name}', name)}</p>
                                    <span className='copy' onClick={handelCopy}>Copy</span>
                                </div>
                            ))
                    }
                </div>
            )}
        </div>
    );
}

export default BirthdayWisher;
