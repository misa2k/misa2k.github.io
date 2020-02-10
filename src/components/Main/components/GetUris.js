import React, { useState } from 'react';
import axios from 'axios';

import getId from '../../../function/getId/getId';

import './GetUris.css';


const GetUris = () => {
    const [url, setUrl] = useState('');
    const [isUrl, setIsUrl] = useState(true);
    const [uris, setUris] = useState([]);

    // eslint-disable-next-line
    const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    const updateUrl = (e) => {
        setUrl(e.target.value);
        setIsUrl(urlRegex.test(e.target.value));
    }

    const submit = (e) => {
        e.preventDefault();
        if (isUrl) {
            setUris([]);
            let { itemId, shopId } = getId(url);
            axios.get(`https://cors-anywhere.herokuapp.com/https://shopee.vn/api/v2/item/get?itemid=${itemId}&shopid=${shopId}`)
            .then(async res => {
                let results = [];
                let imagesIds = res.data.item.images;
                await imagesIds.forEach( imagesId => {
                    let uri = `https://cf.shopee.vn/file/${imagesId}`;
                    results.push(uri);
                });
                setUris(results);
            });
        }
    }

    return (
        <div className='GetUris'>
            <form onSubmit={submit}>
                <input type="text" 
                    placeholder='Enter product link...'
                    required
                    onChange={updateUrl}
                />
                <button className='get'>Get</button>
            </form>
            <div className='result'>
                {uris.map(x => {
                    return (
                    <div key={uris.indexOf(x)}>
                        <img src={x} alt='res' />
                    </div>
                    )
                })}
            </div>
        </div>
    );
}

export default GetUris;