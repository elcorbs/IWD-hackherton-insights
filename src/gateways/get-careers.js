export default function getCareers(text){
  const careers = [
    {displayName: "Data Scientist", route: "data-scientist", subTopics: ["technology", "science", "maths", "mathematics", "statistics", "computers"]},
    {displayName: "Data Analyst", route: "data-analyst", subTopics: ["technology", "science", "statistcis", "computers"]},
    {displayName: "Software Engineer", route: "software-engineer", subTopics: ["technology", "science", "development", "programming", "computers"]},
    {displayName: "Database Admin", route: "db-admin", subTopics: ["technology", "devops", "development", "programming", "computers"]},
    {displayName: "UX Designer", route: "ux-designer", subTopics: ["designer", "ux", "technology"]},
    {displayName: "Statistician",  route: "statistician", subTopics: ["science", "maths", "mathematics"]},
    {displayName: "Chef",  route: "chef", subTopics: ["cooking"]},
    {displayName: "Potter",  route: "potter", subTopics: ["artist"]},
  ]

  return careers.filter(({displayName, route, subTopics}) => {
    console.log(displayName)
    if (displayName.toLowerCase().includes(text)) return true;
    if (route.toLowerCase().includes(text)) return true;
    if (subTopics.some(topic => topic.includes(text))) return true;
    return false;
  })
}