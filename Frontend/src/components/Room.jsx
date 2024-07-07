import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

export const Room = () => {
    const { roomId } = useParams() ;
    const myMeeting = async(element) => {
        const appID = 488024790 ;
        const serverSecret = import.meta.env.VITE_SERVER_SECRET ;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            "Kshitij Todkar"
        );
        const zc = ZegoUIKitPrebuilt.create(kitToken) ;
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: "Copy Link",
                    url: `http://localhost:5173/room/${roomId}`
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall
            },
            showScreenSharingButton: false
        })
    }
    return(
        <div className="room">
            <div ref={myMeeting} />
        </div>
    )
}