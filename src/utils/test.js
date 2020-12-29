const { remote, ipcRenderer } = require('electron')
const BrowserWindow = remote.BrowserWindow

export default () => {
  ipcRenderer.on('ping', (event, arg) => {
    console.log(arg)
  })

  // cria a janela
  const win = new BrowserWindow({
    frame: false,
    transparent: false,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.maximize()
  win.loadFile(`${process.cwd()}/src/test.html`)
  win.show()
}
