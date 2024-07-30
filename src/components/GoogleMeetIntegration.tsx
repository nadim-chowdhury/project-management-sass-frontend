const GoogleMeetIntegration = () => {
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Google Meet Integration
      </h2>
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <iframe
          src="https://meet.google.com/your-meeting-id"
          className="w-full h-96"
          allow="microphone; camera; fullscreen"
          title="Google Meet"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMeetIntegration;
