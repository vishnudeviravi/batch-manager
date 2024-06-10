module.exports.deleteRequest = (req, res) => {
  let responseBody = { data: [], message: '', error: null };
  return res.status(200).json(responseBody);
};
