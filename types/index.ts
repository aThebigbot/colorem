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

// Fg
function red(string) { return Color.FgRed+string+Color.Reset; }
function black(string: string) { return Color.FgBlack+string+Color.Reset; }
function green(string: string) { return Color.FgGreen+string+Color.Reset; }
function yellow(string: string) { return Color.FgYellow+string+Color.Reset; }
function blue(string: string) { return Color.FgBlue+string+Color.Reset; }
function magenta(string: string) { return Color.FgMagenta+string+Color.Reset; }
function cyan(string: string) { return Color.FgCyan+string+Color.Reset; }
function white(string: string) { return Color.FgWhite+string+Color.Reset; }

// Bg
function BgRed(string: string) { return Color.BgRed+string+Color.Reset; }
function BgBlack(string: string) { return Color.BgBlack+string+Color.Reset; }
function BgGreen(string: string) { return Color.BgGreen+string+Color.Reset; }
function BgYellow(string: string) { return Color.BgYellow+string+Color.Reset; }
function BgBlue(string: string) { return Color.BgBlue+string+Color.Reset; }
function BgMagenta(string: string) { return Color.BgMagenta+string+Color.Reset; }
function BgCyan(string: string) { return Color.BgCyan+string+Color.Reset; }
function BgWhite(string: string) { return Color.BgWhite+string+Color.Reset; }

// ??
function bright(string: string) { return Color.Bright+string+Color.Reset; }
function dim(string: string) { return Color.Dim+string+Color.Reset; }
function underscore(string: string) { return Color.Underscore+string+Color.Reset; }
function blink(string: string) { return Color.Blink+string+Color.Reset; }
function reverse(string: string) { return Color.Reverse+string+Color.Reset; }
function hidden(string: string) { return Color.Hidden+string+Color.Reset; }

export { red, black, green, yellow, blue, magenta, cyan, white, BgRed, BgBlack, BgGreen, BgYellow, BgBlue, BgMagenta, BgCyan, BgWhite, bright, dim, underscore, blink, reverse, hidden }
