var vg_1 = "json/chloro_map/chloro_map.vega.json";
var vg_2 = "json/life_expectancy.json";
var vg_3 = "json/female_to_male.json";
var vg_4 = "json/fert_rate.json";
var vg_5 = "json/65_overtake.json";


vegaEmbed("#chloro_map", vg_1, {renderer: "svg", actions: false}).then(function(result) {
}).catch(console.error);

vegaEmbed("#life_expectancy", vg_2, {renderer: "svg", actions: false}).then(function(result) {
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

    vegaEmbed("#pop_pyramid", vg_3, {renderer: "svg", actions: false}).then(function(result) {
    }).catch(console.error);

    vegaEmbed("#fert_rate", vg_4, {renderer: "svg", actions: false}).then(function(result) {
    }).catch(console.error);
    
    vegaEmbed("#overtake_chart", vg_5, {renderer: "svg", actions: false}).then(function(result) {
    }).catch(console.error);