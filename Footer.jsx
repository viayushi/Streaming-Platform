import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client';

const Footer = () => {
    const userVideoRef = useRef(null);
    const startButtonRef = useRef(null);
    const stopButtonRef = useRef(null);
    const socketRef = useRef(null);

    useEffect(() => {
        const userVideo = userVideoRef.current;
        const startButton = startButtonRef.current;
        const stopButton = stopButtonRef.current;

        const handleStartClick = async () => {
            try {
                const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
                userVideo.srcObject = mediaStream;
                userVideo.play();
                socketRef.current = io('http://localhost:3000');
                socketRef.current.emit('binarystream', mediaStream);
            } catch (error) {
                console.error('Error accessing media devices:', error);
            }
        };

        const handleStopClick = () => {
            const tracks = userVideo.srcObject.getTracks();
            tracks.forEach(track => track.stop());
            userVideo.srcObject = null;
            if (socketRef.current) {
                socketRef.current.disconnect();
            }
        };

        startButton.addEventListener('click', handleStartClick);
        stopButton.addEventListener('click', handleStopClick);

        return () => {
            startButton.removeEventListener('click', handleStartClick);
            stopButton.removeEventListener('click', handleStopClick);
        };
    }, []);

    return (
        <div>
            <div>
                <video id="user-video" autoPlay muted ref={userVideoRef} className="w-full h-64 bg-gray-800"></video>
                <div id="controls" className="flex justify-center mt-4 space-x-4">
                    <button
                        id="start-btn"
                        ref={startButtonRef}
                        className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300"
                    >
                        Start
                    </button>
                    <button
                        id="stop-btn"
                        ref={stopButtonRef}
                        className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300"
                    >
                        Stop
                    </button>
                </div>
                <div className="sidebar mt-4">
                    <label htmlFor="stream-url" className="block text-gray-700">Enter Stream URL</label>
                    <input
                        type="url"
                        id="stream-url"
                        placeholder="Stream URL"
                        className="w-full mt-2 p-2 border border-gray-300 rounded"
                    />
                    <label htmlFor="stream-key" className="block text-gray-700 mt-4">Enter Stream Key</label>
                    <input
                        type="password"
                        id="stream-key"
                        placeholder="Stream Key"
                        className="w-full mt-2 p-2 border border-gray-300 rounded"
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
