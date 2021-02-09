import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
            <h2>{window.location.href}r/{shortened}</h2>
            <Link to={`/r/${shortened}`}>Test</Link>
        </>
    )
}