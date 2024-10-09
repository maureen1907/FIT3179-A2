var vg_1 = "json/chloro_map.vega.json";
var vg_2 = "json/life_expectancy.json";
var vg_3 = "json/female_to_male.json";

vegaEmbed("#chloro_map", vg_1).then(function(result) {
}).catch(console.error);

vegaEmbed("#life_expectancy", vg_2).then(function(result) {
  let playing = false;
  let year = 2000;

  // Add a Play button
 
  const playButton = document.createElement("button");
  playButton.id = "playButton";
  playButton.innerHTML = "Play";

  document.body.appendChild(playButton);

  // Play button event listener
  playButton.addEventListener('click', function() {
    playing = !playing;
    if (playing) {
        playButton.innerHTML = "Pause";
        year = 2000;
      playAnimation();
    } else {
        playButton.innerHTML = "Play";
    }
  });

  // Function to animate the slider by incrementing the year
  function playAnimation() {
    if (year <= 2021 && playing) {
      result.view.signal('year_slider', year).runAsync().then(()=> {
        year++;
      setTimeout(playAnimation, 1000); // Adjust the time (1000 ms = 1 second) for slower increment
          });
        }
      }
    }).catch(console.error);

    vegaEmbed("#pop_pyramid", vg_3).then(function(result) {
    }).catch(console.error);