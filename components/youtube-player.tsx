"use client";

import { VideoPlayer } from "@/components/video-player";

export function FeaturedVideoSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <VideoPlayer
          source={{ type: "youtube", videoId: "RJScvkUMt-8" }}
          title="3D Product Animation Showreel"
          description="A collection of our best 3D product animations and visualizations"
        />
        <VideoPlayer
          source={{ type: "youtube", videoId: "QZUP9k45EXk" }}
          title="3D Animation Demo"
          description="Showcase of advanced 3D modeling and animation techniques"
        />
        <VideoPlayer
          source={{ type: "youtube", videoId: "KBtI8m3zzKw" }}
          title="3D Product Visualization Techniques"
          description="Advanced lighting and rendering techniques for photorealistic product visualization"
        />
      </div>
    </div>
  );
}
