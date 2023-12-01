import ProjectCard from "./ProjectCard";
export default function Projects() {
  return (
    <div className="container" id="projects">
      <h2>Projects</h2>
      <div className="project-group">
        <ProjectCard
          project={{
            image: "./projects/party_master.png",
            projectName: "PartyMaster",
            projectDescription:
              "Add events, invite guests, manage contributions, track RSVPs, and share information all in one app.",
            deployedLink:
              "https://stark-hamlet-78991-77b45feb1011.herokuapp.com/",
            githubLink:
              "github.com/Albyhua/PartyMaster",
          }}
        />
        <ProjectCard
          project={{
            image: "./projects/cookbookmark.png",
            projectName: "CookBookmark",
            projectDescription:
              "Find new recipes, save them to your account, and print them with perfect formatting.",
            deployedLink:
              "https://vast-badlands-21401-8850fb886623.herokuapp.com/",
            githubLink:
              "https://github.com/sjones-njones/Recipe-Book-Group-3-Project-2.git",
          }}
        />
        <ProjectCard
          project={{
            image: "./projects/grapevine.png",
            projectName: "Grapevine",
            projectDescription:
              "Grapevine combines safety statistics from several APIs to provide a detailed evaluation of travel destinations.",
            deployedLink:
              "https://lucygouvin.github.io/grapevine/",
            githubLink:
              "github.com/lucygouvin/grapevine",
          }}
        />
         <ProjectCard
          project={{
            image: "/cookbookmark.png",
            projectName: "Venn Words",
            projectDescription:
              "Solve 3 puzzles simultaneously in this inventive word game",
            deployedLink:
              "",
            githubLink:
              "",
          }}
        />
        <ProjectCard
          project={{
            image: "./projects/weather_dashboard.png",
            projectName: "Weather Dashboard",
            projectDescription:
              "Search and save locations to see a five-day weather forecast.",
            deployedLink:
              "https://lucygouvin.github.io/weather-dashboard/",
            githubLink:
              "https://github.com/lucygouvin/weather-dashboard",
          }}
        />
        <ProjectCard
          project={{
            image: "./projects/tech_blog.png",
            projectName: "Tech Blog",
            projectDescription:
              "Simple blog featuring user accounts, posts, comments and conditional content depending on user state.",
            deployedLink:
              "https://immense-crag-45111-1f41768257e1.herokuapp.com/",
            githubLink:
              "https://github.com/lucygouvin/tech-blog",
          }}
        />
        <ProjectCard
          project={{
            image: "./projects/note_taker.png",
            projectName: "Note Taker",
            projectDescription:
              "Make, save, edit, and delete notes online.",
            deployedLink:
              "https://shielded-garden-90964-33d2fc836739.herokuapp.com/",
            githubLink:
              "https://github.com/lucygouvin/note-taker",
          }}
        />
        <ProjectCard
          project={{
            image: "./projects/workday_scheduler.png",
            projectName: "Work Day Scheduler",
            projectDescription:
              "Schedule activities for each hour of your work day.",
            deployedLink:
              "https://lucygouvin.github.io/work-day-scheduler/",
            githubLink:
              "https://github.com/lucygouvin/work-day-scheduler",
          }}
        />
        <ProjectCard
          project={{
            image: "./projects/code_quiz.png",
            projectName: "Code Quiz",
            projectDescription:
              "Interactive quiz that tracks time spent on each question, calculates score, and updates high score leaderboard.",
            deployedLink:
              "https://lucygouvin.github.io/code-quiz/",
            githubLink:
              "https://github.com/lucygouvin/code-quiz",
          }}
        />
       
      </div>
    </div>
  );
}
