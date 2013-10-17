# BusGlue

A "gluing" service that gets the [BusDroid][busdroid] app work with the
frontend WordPress interface of the StartupBus Europe 2013.

The basic premise is to forward the logged information as received
to a database where the frontend can pull it out to display.

It's to be hosted on something like Heroku.

The required settings (bus names, id, auth codes) are all configured
via config files, that are not to be checked in. Example config
file should be included, and current configuration should be available
to view over a web interface for veryfication.

The app has to handle submitting a large number of updates (eg. after
network blackout the app will send all the things that happened since
then).


## License

(TL;DR: MIT license, do whatever)

Copyright (C) 2013 Gergely Imreh <gergely@imreh.net>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[busdroid]: https://github.com/imrehg/busdroid "BusDroid repo"



