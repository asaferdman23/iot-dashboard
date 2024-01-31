"use client"
import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

export default function PhotoViewer() {
  return (
    <PhotoProvider>
      <div className="foo">
          <PhotoView>
          </PhotoView>
      </div>
    </PhotoProvider>
  );
}
// import React, { useState, useEffect } from 'react';
// //import { database, storage } from './firebase'; // Import your Firebase configuration

// function PhotoViewer() {
//   const [userData, setUserData] = useState(null);
//   const [photoURL, setPhotoURL] = useState('');

//   useEffect(() => {
//     // Fetch user data from Realtime Database
//     const userId = 'YOUR_USER_ID'; // Replace with the actual user ID
//     const userRef = database.ref(`users/${userId}`);

//     userRef.on('value', (snapshot) => {
//       const data = snapshot.val();
//       setUserData(data);
//     });

//     return () => {
//       // Unsubscribe from the listener when the component unmounts
//       userRef.off('value');
//     };
//   }, []);

//   useEffect(() => {
//     // Fetch photo URL from Firebase Storage
//     if (userData && userData.photoURL) {
//       const photoRef = storage.refFromURL(userData.photoURL);

//       photoRef.getDownloadURL().then((url) => {
//         setPhotoURL(url);
//       });
//     }
//   }, [userData]);

//   return (
//     <div>
//       <h1>Photo Viewer</h1>
//       {userData && (
//         <div>
//           <h2>User Details</h2>
//           <p>Name: {userData.name}</p>
//           <p>ID: {userData.id}</p>
//         </div>
//       )}
//       {photoURL && (
//         <div>
//           <h2>Photo</h2>
//           <img src={photoURL} alt="User ID" style={{ maxWidth: '300px' }} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default PhotoViewer;