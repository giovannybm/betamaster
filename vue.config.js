module.exports = {
  baseUrl: '/betamaster',
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "org.simulatedgreg.electron-vue",
        artifactName: "${name}-${version}-${arch}.${ext}",
        linux: {
          category: "Development",
          target: [
            {
              target: "AppImage",
              arch:[
                "ia32",
                "x64",
                "armv7l"
              ]
            }
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
            {
              target: "nsis",
              arch:[
                "ia32",
                "x64"
              ]
            }
          ]
        }
      }
    }
  }
}
