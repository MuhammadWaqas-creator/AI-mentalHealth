import React, { useState, useEffect } from 'react';

function Suggestions() {
    const videos = [
        "https://www.youtube.com/watch?v=V3vhXQy48jo&pp=ygUNbWluZCB0aGVyYXB5IA%3D%3D",
        "https://www.youtube.com/watch?v=zTuX_ShUrw0&pp=ygUNbWluZCB0aGVyYXB5IA%3D%3D",
        "https://www.youtube.com/watch?v=9c_Bv_FBE-c&pp=ygUNbWluZCB0aGVyYXB5IA%3D%3D",
        "https://www.youtube.com/watch?v=c3kznC9m3Nc&pp=ygUNbWluZCB0aGVyYXB5IA%3D%3D",
        "https://www.youtube.com/watch?v=TlIrMnocdH0&pp=ygUNbWluZCB0aGVyYXB5IA%3D%3D",
        "https://www.youtube.com/watch?v=haRSl3mThoY&pp=ygUWbWluZCB0aGVyYXB5ICBleGVyY2lzZQ%3D%3D",
        "https://www.youtube.com/watch?v=VgdAcENXy84&pp=ygUWbWluZCB0aGVyYXB5ICBleGVyY2lzZQ%3D%3D",
        "https://www.youtube.com/watch?v=pCpiteBel8E&pp=ygUWbWluZCB0aGVyYXB5ICBleGVyY2lzZQ%3D%3D",
        "https://www.youtube.com/watch?v=m3-O7gPsQK0&pp=ygUWbWluZCB0aGVyYXB5ICBleGVyY2lzZQ%3D%3D",
    ];

    const [selectedVideos, setSelectedVideos] = useState([]);

    useEffect(() => {
        function getRandomVideos() {
            const shuffled = [...videos].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, 3);
        }
        setSelectedVideos(getRandomVideos());
    }, []);

    const getEmbedUrl = (url) => {
        const videoId = url.split('v=')[1].split('&')[0];
        return `https://www.youtube.com/embed/${videoId}`;
    };

    return (
        <div style={styles.container}>
            {selectedVideos.map((video, index) => (
                <iframe
                    key={index}
                    src={getEmbedUrl(video)}
                    title={`Video ${index + 1}`}
                    style={styles.videoFrame}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ))}
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        padding:'50px',
        margin: 'auto',
    },
    videoFrame: {
        width: '400px',
        height: '315px',
        border: 'none',
    },
};

export default Suggestions;
