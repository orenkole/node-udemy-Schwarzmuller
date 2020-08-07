const url = req.url;
if(url === '/') {
  res.write('<html>')
  res.write('<head><title>Enter message</title></head>')
  res.write('<body><form type="text" action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
  res.write('</html>')
  return res.end();
}
if(url === '/message' && req.method === "POST") {
  const body = [];
  req.on('data', (chunk) => {
    console.log(chunk);
    body.push(chunk);
  });
  return req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    // console.log(parsedBody);
    const message = parsedBody.split('=')[1];
    fs.writeFile(
      'message.txt', 
      message, 
      (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      }
    );
  })
}
res.write('<html>')
res.write('<head><title>Enter message</title></head>')
res.write('<body>Hello from Message page</body>')
res.write('</html>')
return res.end();