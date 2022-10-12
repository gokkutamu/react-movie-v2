/**
 * The stone dam built the house of (Tam) likes.
 * @version 2.
 * @package parts/VideoList.
*/
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";

import services from '../../../containers/services/services';

const VideoList = props => {
    const { category } = useParams();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            const res = await services.getVideos(category, props.id);
            setVideos(res.results.slice(0, 5));
        }
        getVideos();
    }, [category, props.id]);

    return (
        <>
            {
                videos.map((item, i) => (
                    <Video key={i} item={item} />
                ))
            }
        </>
    );
}

const Video = props => {
    const item = props.item;
    const iframeRef = useRef(null);

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);

    return (
        <div className="video">
            <div className="video__title">
                <h2>{item.name}</h2>
            </div>
            <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                ref={iframeRef}
                width="100%"
                title="video"
            />
        </div>
    )
}

export default VideoList;