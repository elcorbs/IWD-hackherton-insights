export default function getCareers({text}){
  if(text === "Pot") {
    return [
      "Potter",    
    ]
  }
  if (text == "tech") {
    return [
      "Data Scientist",
      "Data Analyst",
      "Software Engineer",
      "DB Admin",
      "Statistician"
    ]
  } 
}