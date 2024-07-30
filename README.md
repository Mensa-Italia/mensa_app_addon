# Mensa App Addon Guidelines

[Italian version](README_IT.md)

## Implementation Rules
To ensure the quality and consistency of your addon, please adhere to the following rules:

### General Rules
1. **Functionality:** Your addon must be functional without bugs or errors that render it unusable.
2. **Webapp Requirement:** The addon must be a webapp and will run in a webview within the app.
3. **Server Usage:** If you require a server, you can use the Mensa Server. (More details below)
4. **Open Source:** The addon must be open source, and you can choose any license.
5. **Originality:** Your addon must be original and not a copy of another addon.
6. **No Monetization:** The addon must not display ads or any form of monetization.
7. **No Tracking:** The addon must not include any tracking or analytics.
8. **Appropriate Content:** The subject of the addon must not be offensive or inappropriate.
9. **Metadata File:** A `mensadata.json` file must be present (details below).

### UI Rules
1. **Design Freedom:** You are free to design the UI as you like, but it should be user-friendly.
2. **Responsiveness:** The UI must be responsive and work on any screen size.
3. **Close Button:** The first page of the UI must have a button that redirects to "https://svc.mensa.it/goback", which the app will use to understand when the user wants to close your addon.

## `mensadata.json` File
The `mensadata.json` file contains the metadata of the addon. It must be reachable at the root of the addon URL (e.g., if your addon is hosted at `https://example.com/myaddon`, the `mensadata.json` file must be accessible at `https://example.com/myaddon/mensadata.json`).

### Example of `mensadata.json`:
```json
{
  "id": "oakk7cnnzpi5wlo",
  "name": "Hello World",
  "description": "This is a test addon, intended only for demonstration purposes",
  "icon": "https://mensa-italia.github.io/mensa_app_addon/app_icon.png",
  "version": "1.0.0",
  "permissions": []
}
```

### Fields Description:
- **id:** A unique identifier for the addon.
- **name:** The name of the addon.
- **description:** A short description of the addon.
- **icon:** The URL of the icon of the addon.
- **version:** The version of the addon.
- **permissions:** An array of permissions that the addon needs.

### Live Example:
[https://mensa-italia.github.io/mensa_app_addon/mensadata.json](https://mensa-italia.github.io/mensa_app_addon/mensadata.json)

## Mensa Server
If you choose to use the Mensa Server to host your addon, please follow these additional rules:
1. **Database:** Use sqlite if your addon requires a database.
2. **Server Usage:** The server is only for hosting your addon.
3. **Resource Efficiency:** Use solutions that do not require a lot of resources.
4. **Docker-Ready:** The addon must be docker-ready for easy deployment.
5. **Single Docker Image:** The addon must be a single docker image; we will not run multiple containers for a single addon.

## How to Submit Your Addon
Follow these steps to submit your addon:
1. **Publish on GitHub:** Publish your addon on GitHub.
2. **Create an Issue:** Create a new issue on this repository with the title "Addon submission: [Addon name]".
3. **Provide Details:** In the issue description, provide the link to the GitHub repository of your addon.
4. **Server Details (if needed):** If you need a server, build your addon as a docker image using GitHub Actions so that we can access it directly from the GitHub Container Registry. If you already have a server, provide the link to the server in the issue description.

## Approval Flow
Once you submit your addon, we will review it and decide if it can be added to the app:
1. **Approval:** If your addon is approved, we will add it to the app and close the issue.
2. **Rejection:** If your addon is rejected, we will close the issue and provide the reason for rejection. You can then fix the issues and resubmit it.

## Note
Before you start developing your addon, you can contact us to ask if it have the potential to be approved. This way, you can avoid wasting time on an addon that may not be approved.