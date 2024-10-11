import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    name: "Bug Reproduce",
    web_accessible_resources: [
      {
        matches: ["<all_urls>"],
        resources: ["*"],
      },
    ],
    host_permissions: ["http://*/*", "https://*/*"],
    permissions: ["storage", "contextMenus", "activeTab", "scripting", "notifications"],
  },
  outDir: "dist",
});
