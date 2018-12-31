module.exports = {
  baseUrl: '/betamaster',
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "org.simulatedgreg.electron-vue",
        linux: {
          category: "Development",
          target: [
            "zip",
            "AppImage"
          ]
        },
        mac: {
          target: [
            "zip",
            "dmg"
          ]
        },
        win: {
          target: [
            "zip",
            "nsis"
          ]
        }
      }
    }
  }
}
