function main() {

  const maze = document.getElementById("maze");
  maze.addEventListener("click", function() {
    window.location.href = "https://thecodewhy.github.io/Maze/";
  });
  const mathclimb = document.getElementById("mathclimb");
  mathclimb.addEventListener("click", function() {
    window.location.href = "https://thecodewhy.github.io/MathClimb/";
  });

  const package = data()
  //var img = document.getElementById("scsh");
  var title = document.getElementById("title");
  title.textContent = package[0];
  //img.src = package[3];


  const outputDiv = document.getElementById("desc");
  const d = package[1].split('|');
  d.forEach((string,index) => {
    const p = document.createElement("p");
    p.textContent = string;
    if(index%2 === 0){
      p.classList.add("listdesc");
    } else {
      p.classList.add("tlistdesc");
    }
    outputDiv.appendChild(p);
  });

  const image = document.getElementById("playstore");

  image.addEventListener("click", function() {
    window.location.href = package[3];
  });

  const pp = document.getElementById("privacy");
  pp.addEventListener("click", function() {
    window.location.href = package[4];
  });
  
}
main();
















function data(){
  const title = "Maze Of Math Riddles";
  const description = "Escape the Puzzle Maze: Embark on an exhilarating journey of logical discovery as you navigate your way out of intricate mazes filled with mind-bending puzzles. Unleash your strategic thinking skills and outsmart the labyrinth by solving each puzzle that lies within. With every triumph, you'll unlock the secrets of solving these challenges and cultivate a newfound ability for logical reasoning."
  +"|Elevate Your Intellectual Pursuits|"
  +"Immerse yourself in a world of enigmatic puzzles concealed within the depths of geometric shapes. Engage in brain games meticulously designed to exercise both hemispheres of your brain, unveiling the intricate relationships hidden within numbers and shapes. Prepare to push the boundaries of your mind and expand your cognitive prowess."
  +"|A Maze for All Seekers|"
  +"The allure of these captivating puzzles transcends age and expertise, captivating minds of all backgrounds. As you delve deeper into the maze, logical puzzles forge new connections, fostering advanced thought processes and honing your problem-solving abilities. Strengthen the synaptic bonds within your brain and become a master of intellectual exploration."
  +"|Unraveling the Puzzle Maze|"
  +"Navigate the labyrinth of brain games that challenge your intellect. Solve the intricate puzzles woven into the maze, deciphering the logical relationships between elements and unraveling their secrets. As you progress through each level, your analytical acumen will allow you to swiftly discern patterns and overcome obstacles."
  +"|Benefits of Logical Puzzle Solving|"
  +"Enhance your focus and attention through captivating logical challenges."
  +"\nDevelop memory retention and sharpen your perception, honing your mental abilities."
  +"\n Unleash your potential in both academic and daily life as you engage in educational games."
  +"\n Expand the horizons of your mind with brain games that unlock your intellectual potential."
  +"\n Discover an entertaining and effective way to manage stress through the power of logical puzzles."
  +"|Embark on a Journey of Intellectual Adventure|"
  +"Forge ahead and accept the challenge of the puzzle maze."
  +"\n Prepare to encounter increasingly complex and stimulating puzzles."
  +"\n Cultivate problem-solving skills and sharpen your logical reasoning."
  +"\n Train both halves of your brain for a well-rounded cognitive experience."
  +"\n Find purpose and fulfillment in your newfound leisure time.";
  const logo = "R/maze/mazeLogo.png";
  const link = "https://play.google.com/store/apps/details?id=com.codewhy.maze";
  const policy = "https://thecodewhy.github.io/maze_pp/"
  return [title,description,logo,link,policy]
}
