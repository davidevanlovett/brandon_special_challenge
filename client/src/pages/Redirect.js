import axios from "axios";
import { useEffect } from 'react';
import {
    useParams
} from "react-router-dom";

export default function Redirect() {
    const {eId} = useParams();
    
    useEffect(() => {
        axios.get(`/api/urls/${eId}`).then(({ data }) => {
            window.location.href = data.url;
        })
    })

    return (
        <>
            <h2>Redirecting you.....</h2>
        </>
    )

}