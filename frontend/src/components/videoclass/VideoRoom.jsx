// // import React from 'react'

// // const VideoRoom = () => {
// //   return (
// //     <div>
      
// //     </div>
// //   )
// // }

// // export default VideoRoom 


// import React, { useEffect, useState } from 'react';
// import AgoraRTC from 'agora-rtc-sdk-ng';
// import VideoPlayer from './VideoPlayer';


// const APP_ID = '5faa9deb11234ddd9306a59723f24086';
// const TOKEN =
//   '007eJxTYLjwJfqHzzvH/nrNnJAe0QfnVqy3qpr549fOfznLf3q25aUqMJimJSZapqQmGRoaGZukpKRYGhuYJZpamhsZpxmZGFiY3X25IrUhkJGhvtyRlZEBAkF8doZgb2d/f+9gBgYA1IMjfg==';
// const CHANNEL = 'SKCOOKS';

// const client = AgoraRTC.createClient({
//   mode: 'rtc',
//   codec: 'vp8',
// });

// // ... (imports and constant declarations)

// export const VideoRoom = () => {
//   const [users, setUsers] = useState([]);
//   const [localTracks, setLocalTracks] = useState([]);

//   useEffect(() => {
//     const init = async () => {
//       try {
//         await client.join(APP_ID, CHANNEL, TOKEN || null, null);

//         const [audioTrack, videoTrack] = await AgoraRTC.createMicrophoneAndCameraTracks();
//         const uid = await client.getLocalUid();

//         setLocalTracks([audioTrack, videoTrack]);
//         setUsers((previousUsers) => [...previousUsers, { uid, videoTrack, audioTrack }]);

//         client.publish([audioTrack, videoTrack]);
//       } catch (error) {
//         console.error("Error joining the channel:", error);
//         // Handle the error appropriately
//       }
//     };

//     init();

//     return () => {
//       if (localTracks.length > 0) {
//         for (let localTrack of localTracks) {
//           localTrack.stop();
//           localTrack.close();
//         }

//         client.unpublish(localTracks).then(() => {
//           client.leave();
//         }).catch((error) => {
//           console.error("Error during unpublish or leave:", error);
//           // Handle the error appropriately
//         });
//       }
//     };
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center' }}>
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 200px)' }}>
//         {users.map((user) => (
//           <VideoPlayer key={user.uid} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// };
