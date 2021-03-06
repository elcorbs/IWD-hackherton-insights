export default function getCareer(career){
  if(career === "potter") {
    return (
      {
        displayName: "Potter",
        averageYearsOfStudy: 2,
        averagePayAfter3Years: "$35000"
      }
    )
  }

  if(career === "data-scientist") {
    return (
      {
        displayName: "Data Scientist",
        averageYearOfExperience: 3,
        averagePayAfter3Years: "$55000",
        skills: { 
          "Python": 85,
          "R": 70 ,
          "Statistics": 45
        }
      }
    )
  }
}