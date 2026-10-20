# Instagram Reels and YouTube Shorts

Instagram destination requested by the owner: @example.com. The YouTube channel ID is not yet verified. No account password is stored in this package.

Marketing Bot now renders a 15-second 1080 × 1920 H.264/AAC MP4 locally with the existing FFmpeg installation. It includes original text graphics and silent audio. It is a template-based shopping-tips clip, not photorealistic AI footage or narrated video. Each run provides the MP4, caption and a publishing-status file. Repeating the same clip does not make a new campaign.

The explicit publishing adapter uses official HTTPS APIs. It has not been verified with authorized live account uploads. No social account is connected yet. Missing connections and failed attempts produce status files, not fabricated published URLs.

## Required owner setup

1. YouTube: a Google API project with YouTube Data API enabled, an OAuth client, and channel-owner consent for `https://www.googleapis.com/auth/youtube.upload`. Configure `YOUTUBE_CLIENT_ID`, `YOUTUBE_CLIENT_SECRET`, and `YOUTUBE_REFRESH_TOKEN` privately in the local process environment. Use the Google consent flow; an email/password cannot substitute for OAuth. Confirm the intended channel before enabling publishing.
2. Instagram: a Business or Creator account, a Meta developer application configured for Instagram Login, content-publishing permission and a user access token. Configure `INSTAGRAM_USER_ID`, `INSTAGRAM_ACCESS_TOKEN`, and the approved `INSTAGRAM_API_VERSION`. Platform review/access requirements depend on the app and account.
3. This Instagram adapter uses a public clip URL. Put the exact MP4 on the owned ExampleSite HTTPS domain and set `INSTAGRAM_VIDEO_URL` to that URL. The adapter verifies the hosted bytes match the local clip before creating an Instagram container. The local server alone cannot provide that public URL.
4. After these connections are verified, set `BOTCORP_AUTO_PUBLISH=true` to allow Marketing Bot's runs to attempt uploads. This setting requests public YouTube publication and Instagram Reel publication. Keep the process running for scheduled jobs. The adapter records each clip hash and target before attempting upload, and refuses duplicate attempts. Ambiguous failures require review before another attempt; it does not blindly retry posts. No paid service or paid quota upgrade is configured.

Command-line entry point: `node social-publish.cjs <clip-directory> youtube` or `instagram`, with the same explicit enablement and authorized environment configuration.

Secrets must remain outside source archives and public frontend files. Never paste tokens or passwords into generated captions. No browser-cookie or password-based automation is used.

Official references: [YouTube upload API](https://developers.google.com/youtube/v3/docs/videos/insert), [Google installed-app OAuth](https://developers.google.com/identity/protocols/oauth2/native-app), [Meta Instagram publishing](https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/content-publishing), [FFmpeg source](https://github.com/FFmpeg/FFmpeg).
