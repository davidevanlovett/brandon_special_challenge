import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Home() {

    const [url, setUrl] = useState('');
    const [shortened, setShortened] = useState('');


    function shortenURL() {
        axios.post('/api/urls', {url: url}).then(({data}) => {
            setShortened(data);
        });
    }
    return (
        <>
            <h2>Enter URL to shorten</h2>
            <input type="text" onChange={event => setUrl(event.target.value)} />
            <button onClick={shortenURL}>Shorten </button>
            <h2>localhost:3001/r/{shortened}</h2>
            <a href={`localhost:3001/r/${shortened}`} target='_blank' rel='noreferrer'>Test</a>
        </>
    )
}