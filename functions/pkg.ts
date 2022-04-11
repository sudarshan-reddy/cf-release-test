export const onRequest = () => {
    var page = `<html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Directory listing for /</title>
        </head>
    <body>
    <h1>Directory listing for /</h1>
    <hr>
    <ul>
    <li><a href="https://github.com/sudarshan-reddy/cf-release-test/raw/main/debian/cloudflared-linux-amd64.deb">cloudflared-linux-amd64.deb</a></li>
    <li><a href="https://github.com/sudarshan-reddy/cf-release-test/raw/main/debian/Packages.gz">Packages.gz</a></li>
    </ul>
    <hr>
    </body>
    </html>`
    return new Response(page, {headers: { "Content-Type": "text/html"}})
}
