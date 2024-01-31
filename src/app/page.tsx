'use client'
import React from 'react';
import Header from './Components/Header/Header';
import SubscribeButton from './SubscribeButton';
import PhotoViewer from './PhotoViewer';
function Page() {
  return (
    <>
    <div className="container">
      <Header />
      <SubscribeButton />
    </div>
    <div className="photo-viewer">
        <PhotoViewer />
      </div></>
  );
}

export default Page;