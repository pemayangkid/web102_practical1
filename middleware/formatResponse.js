function formatResponse(req, res, next) {
  const originalJson = res.json;

  res.json = function (obj) {
    const acceptHeader = req.headers.accept || '';

    if (acceptHeader.includes('application/xml')) {
      const convertToXml = (obj) => {
        let xml = '<?xml version="1.0" encoding="UTF-8"?><response>';

        const buildXml = (obj) => {
          for (const key in obj) {
            const value = obj[key];

            if (Array.isArray(value)) {
              xml += `<${key}>`;
              value.forEach((item) => {
                xml += `<item>`;
                if (typeof item === 'object' && item !== null) {
                  buildXml(item);
                } else {
                  xml += item;
                }
                xml += `</item>`;
              });
              xml += `</${key}>`;

            } else if (typeof value === 'object' && value !== null) {
              xml += `<${key}>`;
              buildXml(value);
              xml += `</${key}>`;

            } else {
              xml += `<${key}>${value}</${key}>`;
            }
          }
        };

        buildXml(obj);
        xml += '</response>';
        return xml;
      };

      res.set('Content-Type', 'application/xml');
      return res.send(convertToXml(obj));
    } else {
      res.set('Content-Type', 'application/json');
      return originalJson.call(this, obj);
    }
  };

  next();
}

module.exports = formatResponse;