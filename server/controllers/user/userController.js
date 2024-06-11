module.exports.deleteuser = async (req, res) => {
  const id = req.params.id;
  const index = user.fondIndex(item => item.id == id);
  user.splice(index, 1);
  // let responseBody = { data: [], message: '', error: null };
  return res.status(200).json({ message: `user${id} has been removed` });
};
