import React from "react";

export default function VideoPlayer({vidLink}) {
  return (
    <video width="100%" autoPlay playsInline loop muted>
      <source src={vidLink} type="video/mp4" />
    </video>
  );
}
