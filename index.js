export default {
  async scheduled(event, env, ctx) {
    // Google Apps Script Web App URL (배포 후 얻은 URL로 변경)
    const googleAppsScriptURL = "https://script.google.com/macros/s/AKfycbyfYt7APbNXl68mqHWLLqcYfQjJlktNj8XZONLB-tS7c6-UlE7Tp0d0O9o0dHdbimQB/exec";

    try {
      const response = await fetch(googleAppsScriptURL, {
        method: "GET",
      });

      const result = await response.text();
      console.log("Google Apps Script Response:", result);
    } catch (error) {
      console.error("Error calling Google Apps Script:", error);
    }
  },
};
