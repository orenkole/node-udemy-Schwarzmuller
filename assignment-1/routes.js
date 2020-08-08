const requestHandler = (req, res) => {
  const url = req.url;
  if(url === '/') {
    res.write("<html>");
    res.write("<head></head>");
    res.write("<body>");
    res.write("<form action='/create-user' method='POST'><input type='text' name='username'><button>send</button></form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if(url === '/users') {
    res.write("<html>");
    res.write("<body>");
    res.write("<ul><li>Oleh</li><li>Sasha</li></ul>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if(url === '/create-user' && req.method === "POST") {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
    })
  }
  return res.end();
}

module.exports = requestHandler;