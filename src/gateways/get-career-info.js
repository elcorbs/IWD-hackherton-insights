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
        votes: 813,
        descriptionLines: [
          "In simple terms, a data scientist's job is to analyze data for actionable insights.",
          "Data scientists manipulate data to find pattern that can't be achieved by simply presenting the data",
          "We use data to solve any problem you can think of"
        ],
        averageYearsOfExperience: [3, 5],
        averagePayAfter3Years: "$55000",
        numberOfContributors: 1634,
        numberOfVisitors: 156385,
        salary: {junior: 50000, senior: 70000, director: 100000},
        softSkills: [
          "COMMUNICATION",
          "PROBLEM SOLVING",
          "CREATIVITY",
          "CURIOSITY",
          "BUSINESS ACUMEN",
          "STORY TELLING",
          "ADAPTABILITY",
          "PRODUCT UNDERSTANDING",
          "TEAMWORK",
          "TIME MANAGEMENT"
        ],
        hardSkills: { 
          "Python": 85,
          "R": 70 ,
          "Statistics": 45,
          "machineLearning": 54,
          "dataVisualization": 23,
          "programming": 87,
        }
      }
    )
  }
}