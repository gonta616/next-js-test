export default (req, res) => {
  console.log(req.method);
  console.log(req.body);
  res.status(200).json({ text: 'Hello' })
}