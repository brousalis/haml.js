
var sys = require('sys'),
    fs = require('fs'),
    haml = require('../lib/haml')
    
var options = {
  locals: {
    title: 'Welcome',
    body: 'wahoo',
    usersOnline: 15
  }
}

sys.puts(haml.render(fs.readFileSync('examples/page.haml'), options))