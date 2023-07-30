import React from 'react';
import "./image.scss";

const Image = ({src, width, height, bRadius, shaddow, mLeft, mRight, mTop, mBottom, zIndex, objectFit,minWidth, minHeight}) => {
  return (
    <div className={shaddow? "image" : ""} style={{
      width: width, height: height, display: "flex", marginLeft: mLeft, marginTop: mTop, marginRight: mRight, marginBottom: mBottom,
      zIndex: zIndex, minWidth: minWidth, minHeight: minHeight
    }}>
        <img src={src} alt="software development digital marketing" style={{
            width: "100%", height: "100%", objectFit: objectFit? objectFit :"cover",
            borderRadius: bRadius, margin: 0
            
        }}/>
    </div>
  )
}

export default Image