const FeedbackForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to handle form submission
    console.log("Submitting feedback:", e.target.elements);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto mt-8 p-4 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-xl font-semibold mb-4">Send Feedback</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Feedback Message
        </label>
        <textarea
          name="feedback"
          rows={4}
          className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-400 focus:border-blue-400"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none"
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
