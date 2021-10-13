
// Triggers

function toggleTrigger(){
    document.getElementById('navt').classList.toggle('close');
    document.getElementById('navt').classList.toggle('open');
    
}
let overlayVisible = false,finit = true;
let tl = gsap.timeline();
function toggleNavpane(){
    
    if(overlayVisible){
        //hide it
        overlayVisible = false
        tl.reverse()
        console.log("Reversed")   
    }   
    else{
        overlayVisible = true
        if(finit){
            tl.to('.pagechange', {left:'0',opacity:1, filter:'grayscale(100%)', duration: 1.5, ease:'expo'})
            .to('.nav', {top:'0', opacity:'1', duration:0})
            .to('.pagechange', {left:'100%', duration: 1.5, ease:'expo'})
            .from('.anim1',{opacity:0,x:50,duration:0.3,stagger:0.1}, '<')
            finit = false
        }
        else{
            tl.play()
        }
    }

}


// Events...
document.getElementById('togglenav-trigger').addEventListener('click',()=>{
    toggleTrigger()
    toggleNavpane()
})


// Particle JS

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

var count_particles, stats, update;
// stats = new Stats;
// stats.setMode(0);
// stats.domElement.style.position = 'absolute';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector('.js-count-particles');
// update = function() {
  // stats.begin();
  // stats.end();
  // if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
  //   count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  // }
  // requestAnimationFrame(update);
// };
// requestAnimationFrame(update);