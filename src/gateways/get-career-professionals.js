export default function getProfessionals(career){
  if (career === "ux-designer") {
    return [
      {
        name: "",
        skills: "my skill"
      }
    ]
  }

  if (career === "software-engineer") {
    return [
      {
        name: "",
        skills: "my skill"
      }
    ]
  }

  if (career === "data-scientist") {
    return [
      {
        name: "Julie Baker",
        coupleOfWords: "Energetic. Lover of Lizards",
        mostRewardingAspect: "Getting into the nitty gritty of a difficult problem",
        biggestChallenge: "",
        industryInsight: "",
        education: "Masters degree in Statistics",
        location: "Dublin"
      },
      {
        name: "Adelina Durand",
        coupleOfWords: "My happy place is ...",
        mostRewardingAspect: "",
        biggestChallenge: "Getting into the nitty gritty of a difficult problem",
        industryInsight: "",
        education: "Masters degree in Economics and Mathematics",
        location: "Vancouver"
      },
      {
        name: "Daniella Sutton",
        coupleOfWords: "Aspiring rockstar in my spare time",
        mostRewardingAspect: "Being a trusted expert in the field",
        biggestChallenge: "Data wrangling",
        industryInsight: "",
        education: "Bachelors degree in Mathematics",
        location: "London"
      },
      {
        name: "Rosie Robertson",
        coupleOfWords: "I'm passionate about teaching",
        mostRewardingAspect: "Seeing your models make a difference",
        biggestChallenge: "Managing people. It's a big responsibility",
        industryInsight: "",
        education: "PhD in Chemistry",
        location: "Sydney"
      }
    ]
  }
  return [];
}