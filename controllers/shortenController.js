const { addShortenURL, goToURL } = require('../service/shortenService');

async function shortenURL(req, res, next) {
  try {
    const shortUrl = await addShortenURL(req.body);

    return res.status(201).json(shortUrl);
  } catch (error) {
    next(error);
  }
}

async function redirectToUrl(req, res, next) {
  try {
    const shortUrl = await goToURL(req.params);

    return res.redirect(shortUrl.realUrl);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  shortenURL,
  redirectToUrl,
};
