export default function handler(req, res) {
  const data = [
    { name: "Pavel Velký", oli: 7050993851 },
    { name: "Hugo Malý", oli: 3493649753 },
    { name: "Tlustý Jan", oli: 2699594502 },
  ];
  res.status(200).json({ data });
}
