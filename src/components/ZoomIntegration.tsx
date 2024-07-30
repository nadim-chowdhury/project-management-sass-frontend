"use client";

import { useEffect } from "react";

const ZoomIntegration = () => {
  useEffect(() => {
    const ZoomMtg = window.ZoomMtg; // ZoomMtg should be loaded from Zoom Web SDK script

    ZoomMtg.setZoomJSLib("https://source.zoom.us/1.9.0/lib", "/av"); // Replace with the Zoom Web SDK script URL
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();

    ZoomMtg.init({
      leaveUrl: "https://your-website.com",
      isSupportAV: true,
      success: (success) => {
        ZoomMtg.join({
          meetingNumber: "your-meeting-number",
          userName: "Your Name",
          apiKey: "your-api-key",
          signature: "your-signature",
          userEmail: "your-email",
          passWord: "your-password",
          success: (success) => {
            console.log(success);
          },
          error: (error) => {
            console.error(error);
          },
        });
      },
      error: (error) => {
        console.error(error);
      },
    });

    return () => {
      ZoomMtg.endMeeting();
    };
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Zoom Integration
      </h2>
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <div id="zmmtg-root"></div>
      </div>
    </div>
  );
};

export default ZoomIntegration;
