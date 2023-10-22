const url = require('../models/urlSchema');
const { startSession } = require('mongoose');

async function addShortenURL(req) {
  const session = await startSession();
  session.startTransaction();
  try {
    const newURL = await url.create([req], { session });

    await session.commitTransaction();
    session.endSession();

    return { data: newURL };
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
}

async function goToURL(req) {
  const session = await startSession();
  session.startTransaction();
  try {
    const shortURL = await url.findOne(req, 'realUrl', {}, { session });

    await session.commitTransaction();
    session.endSession();

    return shortURL;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
}

module.exports = {
  addShortenURL,
  goToURL,
};
