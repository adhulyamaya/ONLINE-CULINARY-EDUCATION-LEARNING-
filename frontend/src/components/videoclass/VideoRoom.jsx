// import React from 'react'

// const VideoRoom = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default VideoRoom


import React, { useEffect, useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import VideoPlayer from './VideoPlayer';


const APP_ID = '5faa9deb11234ddd9306a59723f24086';
const TOKEN =
  '007eJxTYLjwJfqHzzvH/nrNnJAe0QfnVqy3qpr549fOfznLf3q25aUqMJimJSZapqQmGRoaGZukpKRYGhuYJZpamhsZpxmZGFiY3X25IrUhkJGhvtyRlZEBAkF8doZgb2d/f+9gBgYA1IMjfg==';
const CHANNEL = 'SKCOOKS';

const client = AgoraRTC.createClient({
  mode: 'rtc',
  codec: 'vp8',
});

export const VideoRoom = () => {
  const [users, setUsers] = useState([]);
  const [localTracks, setLocalTracks] = useState([]);
  let tracks;
  const handleUserJoined = async (user, mediaType) => {
    await client.subscribe(user, mediaType);

    if (mediaType === 'video') {
      setUsers((previousUsers) => [...previousUsers, user]);
    }

    if (mediaType === 'audio') {
      // user.audioTrack.play()
    }
  };

  const handleUserLeft = (user) => {
    setUsers((previousUsers) =>
      previousUsers.filter((u) => u.uid !== user.uid)
    );
  };

  useEffect(() => {
    client.on('user-published', handleUserJoined);
    client.on('user-left', handleUserLeft);

    client
      .join(APP_ID, CHANNEL, TOKEN, null)
      .then((uid) =>
        Promise.all([
          AgoraRTC.createMicrophoneAndCameraTracks(),
          uid,
        ])
      )
      .then(([createdTracks, uid]) => {
        tracks = createdTracks;
        const [audioTrack, videoTrack] = createdTracks;
        setLocalTracks(createdTracks);
        setUsers((previousUsers) => [
          ...previousUsers,
          {
            uid,
            videoTrack,
            audioTrack,
          },
        ]);
        client.publish(createdTracks);
      });
      

    return () => {
      if (tracks){
      for (let localTrack of localTracks) {
        localTrack.stop();
        localTrack.close();
      }
      client.off('user-published', handleUserJoined);
      client.off('user-left', handleUserLeft);
      client.unpublish(tracks).then(() => client.leave());
     }
    };
  }, []);

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 200px)',
        }}
      >
        {users.map((user) => (
          <VideoPlayer key={user.uid} user={user} />
        ))}
      </div>
    </div>
  );
};
