const SLACK_WEBHOOK_URL = "https://hooks.slack.com/services/your/webhook/url";

export const sendSlackMessage = async (message: string) => {
  try {
    const response = await fetch(SLACK_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: message }),
    });
    if (!response.ok) {
      throw new Error("Failed to send Slack message");
    }
  } catch (error) {
    console.error("Error sending Slack message:", error);
  }
};
