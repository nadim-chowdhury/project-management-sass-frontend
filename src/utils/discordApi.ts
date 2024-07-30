const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/your/webhook/url";

export const sendDiscordMessage = async (message: string) => {
  try {
    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: message }),
    });
    if (!response.ok) {
      throw new Error("Failed to send Discord message");
    }
  } catch (error) {
    console.error("Error sending Discord message:", error);
  }
};
