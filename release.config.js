module.exports = {
    branches: "master",
    repositoryUrl:  "https://github.com/georges-hayek/nodeApp.git",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        ["@semantic-release/github", {
          "assets": [
            {"path": "dist/asset.min.css", "label": "CSS distribution"},
            {"path": "dist/asset.min.js", "label": "JS distribution"}
          ]
        }],
      ]

}