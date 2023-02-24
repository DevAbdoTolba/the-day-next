import data from "../../Data/data.json";

export default function handler(req, res) {
  // get params
  const { subject } = req.query;
  // filter data
  console.log(data.semesters[0]["subjects"]);
  const filtered = data.semesters.map((semester) => {
    semester.subjects = semester.subjects.filter((subjectFiltered) => {
      return subjectFiltered.abbreviation === subject;
    });
  });
  res.status(200).json(filtered);
}
