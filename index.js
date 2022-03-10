const Color = {
    Reset: "\x1b[0m",
    Bright: "\x1b[1m",
    Dim: "\x1b[2m",
    Underscore: "\x1b[4m",
    Blink: "\x1b[5m",
    Reverse: "\x1b[7m",
    Hidden: "\x1b[8m",
    
    FgBlack: "\x1b[30m",
    FgRed: "\x1b[31m",
    FgGreen: "\x1b[32m",
    FgYellow: "\x1b[33m",
    FgBlue: "\x1b[34m",
    FgMagenta: "\x1b[35m",
    FgCyan: "\x1b[36m",
    FgWhite: "\x1b[37m",
    
    BgBlack: "\x1b[40m",
    BgRed: "\x1b[41m",
    BgGreen: "\x1b[42m",
    BgYellow: "\x1b[43m",
    BgBlue: "\x1b[44m",
    BgMagenta: "\x1b[45m",
    BgCyan: "\x1b[46m",
    BgWhite: "\x1b[47m"
  }


function red(string) { return Color.FgRed+string+Color.Reset; }
function black(string) { return Color.FgBlack+string+Color.Reset; }
function green(string) { return Color.FgGreen+string+Color.Reset; }
function yellow(string) { return Color.FgYellow+string+Color.Reset; }
function blue(string) { return Color.FgBlue+string+Color.Reset; }
function magenta(string) { return Color.FgMagenta+string+Color.Reset; }
function cyan(string) { return Color.FgCyan+string+Color.Reset; }
function white(string) { return Color.FgWhite+string+Color.Reset; }

module.exports = { red, black, green, yellow, blue, magenta, cyan, white }