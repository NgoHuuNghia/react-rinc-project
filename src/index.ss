@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
html::-webkit-scrollbar {
  display: none;
}

html {
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  font-family: "Roboto", sans-serif;
  -ms-overflow-style: none;
  scrollbar-width: none;
  font-size: 100%;
}
html body {
  height: 100%;
  background-color: #151515;
  color: #c6d4df;
}
html a {
  color: #c6d4df;
}

*, *:before, *:after {
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
  outline: none;
}

#root {
  position: relative;
}

body #main-container.overlay {
  height: 100vh;
  overflow: hidden;
}
body #main-container header {
  transition: all 0.3s linear;
  position: relative;
  background: #151515;
  padding: 0.5em 0;
}
body #main-container header::after {
  opacity: 5;
  content: "";
  position: absolute;
  transition: all 0.3s linear;
  top: 70px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(3, 3, 3, 0.7);
}
body #main-container header.overlay::after {
  opacity: 1;
  z-index: 1;
}
body #main-container header.dropdown-active {
  height: 80vh;
}
body #main-container header.transparent {
  background: none;
}
body #main-container header nav {
  position: relative;
  display: grid;
  grid-template-rows: none;
  grid-template-columns: repeat(8, 1fr);
  gap: 0.5em;
  align-items: center;
}
@media (min-width: 1000px) {
  body #main-container header nav {
    width: 950px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: none;
    grid-template-columns: repeat(16, 1fr);
    gap: 0.5em;
  }
}
body #main-container header nav > div:nth-child(1) {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0;
  grid-column: span 1;
  padding-left: 1em;
}
@media (min-width: 1000px) {
  body #main-container header nav > div:nth-child(1) {
    grid-column: span 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0;
    padding: 0;
  }
}
body #main-container header nav > div:nth-child(1) > a > img {
  width: 3.5em;
}
body #main-container header nav > form {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  gap: 0.2em;
  grid-column: span 6;
  background-color: #313438;
  border-radius: 1em;
  transition: 0.3s;
  overflow: hidden;
  position: relative;
}
@media (min-width: 1000px) {
  body #main-container header nav > form {
    grid-column: span 8;
  }
}
body #main-container header nav > form:hover {
  background-color: #f2ecff;
}
body #main-container header nav > form > svg {
  flex: 1;
  cursor: pointer;
  transition: all 0.1s linear;
}
body #main-container header nav > form > svg:first-child {
  padding: 0.25em 0;
  color: #c6d4df;
  font-size: 2.3em;
}
body #main-container header nav > form > svg:first-child:hover {
  color: #9b0027 !important;
}
body #main-container header nav > form > svg:last-child {
  opacity: 0;
  color: #d90037;
  font-size: 1.5em;
  z-index: -5;
}
body #main-container header nav > form > svg:last-child:hover {
  opacity: 1 !important;
}
body #main-container header nav > form > input {
  flex: 11;
  background: none;
  border: none;
  color: #c6d4df;
  font-size: 1.15em;
}
body #main-container header nav > form:hover > input, body #main-container header nav > form:hover > svg:first-child {
  color: black;
}
body #main-container header nav > div:nth-child(3) {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  grid-column: span 1;
  padding-right: 1em;
}
@media (min-width: 1000px) {
  body #main-container header nav > div:nth-child(3) {
    grid-column: span 7;
    gap: 1em;
    padding-right: 0;
  }
}
body #main-container header nav > div:nth-child(3) #bars {
  width: 30px;
  height: 22.5px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}
body #main-container header nav > div:nth-child(3) #bars span {
  display: block;
  position: absolute;
  height: 4.5px;
  width: 100%;
  background: #9b0027;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}
body #main-container header nav > div:nth-child(3) #bars span:nth-child(1) {
  top: 0px;
}
body #main-container header nav > div:nth-child(3) #bars span:nth-child(2) {
  top: 9px;
}
body #main-container header nav > div:nth-child(3) #bars span:nth-child(3) {
  top: 18px;
}
body #main-container header nav > div:nth-child(3) #bars.open span:nth-child(1) {
  top: 9px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}
body #main-container header nav > div:nth-child(3) #bars.open span:nth-child(2) {
  opacity: 0;
  left: -30px;
}
body #main-container header nav > div:nth-child(3) #bars.open span:nth-child(3) {
  top: 9px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}
body #main-container header nav > div:nth-child(3) #bars {
  order: 2;
}
@media (min-width: 1000px) {
  body #main-container header nav > div:nth-child(3) #bars {
    display: none;
  }
}
body #main-container header nav > div:nth-child(3) > ul {
  display: none;
  order: 1;
}
@media (min-width: 1000px) {
  body #main-container header nav > div:nth-child(3) > ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0.8em;
  }
}
body #main-container header nav > div:nth-child(3) > ul > li {
  display: inline-block;
}
body #main-container header nav > div:nth-child(3) > ul > li > a {
  color: #c6d4df;
  text-transform: uppercase;
  font-size: 1.1em;
  font-weight: 700;
}
body #main-container header nav > div:nth-child(3) > ul > li > a:hover {
  color: white;
}
body #main-container header nav > div:nth-child(3) > img {
  height: 2.5em;
  border-radius: 25px;
  order: 1;
}
body #main-container header nav > div:nth-child(4) {
  position: absolute;
  top: 62px;
  right: 0;
  transition: all 0.3s linear;
  grid-column: span 8;
  height: 0;
  overflow: hidden;
}
body #main-container header nav > div:nth-child(4) > ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0;
}
body #main-container header nav > div:nth-child(4) > ul > li {
  width: 60vw;
  background: #151515;
}
body #main-container header nav > div:nth-child(4) > ul > li:nth-child(1n+2) {
  border-top: 1px solid white;
}
body #main-container header nav > div:nth-child(4) > ul > li > a {
  text-align: center;
  display: block;
  padding: 0.75em 0;
  width: 100%;
  height: 100%;
  font-size: 1.3em;
}
body #main-container header nav > div:nth-child(4) > ul > li:hover {
  background-color: #f2ecff;
}
body #main-container header nav > div:nth-child(4) > ul > li:hover > a {
  color: black;
}
@media (min-width: 1000px) {
  body #main-container header nav > div:nth-child(4) {
    height: 0 !important;
  }
}

.hero {
  margin-bottom: 1.5em;
}
.hero > a.hero-bg-mobile {
  display: block;
}
.hero > a.hero-bg-mobile > video {
  height: auto;
  width: 100%;
}
.hero > a.hero-bg {
  display: none;
}
.hero > a.hero-bg > video {
  height: auto;
  width: 100%;
}
@media (min-width: 600px) {
  .hero > a.hero-bg-mobile {
    display: none;
  }
  .hero > a.hero-bg {
    display: block;
  }
}

.main-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.5em;
  margin: 0 0.5em;
}
@media (min-width: 1000px) {
  .main-section {
    width: 950px;
    margin: 0 auto;
  }
  .main-section > * {
    width: 100%;
  }
}
.main-section > .main-card-container {
  position: relative;
}
@media (min-width: 1000px) {
  .main-section > .main-card-container {
    height: 380px;
    max-width: 950px;
  }
}
.main-section > .main-card-container > div:first-child {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  margin-bottom: 0.5em;
}
.main-section > .main-card-container > div:first-child > h5 {
  font-size: 1.1em;
  text-transform: uppercase;
}
.main-section > .main-card-container > div:first-child > a {
  color: #4c565d;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  transition: 0.3s;
}
.main-section > .main-card-container > div:first-child > a:hover {
  color: #c6d4df;
}
.main-section > .main-card-container > button.previous, .main-section > .main-card-container button.next {
  display: none;
  border: none;
}
@media (min-width: 1000px) {
  .main-section > .main-card-container > button.previous, .main-section > .main-card-container button.next {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0;
    position: absolute;
    top: 38%;
    width: 7%;
    height: 7em;
    border-radius: 4px;
  }
}
.main-section > .main-card-container > button.previous > svg, .main-section > .main-card-container button.next > svg {
  font-size: 4em;
  color: #c6d4df;
}
.main-section > .main-card-container > button.previous {
  left: -7%;
  background: transparent;
  background: linear-gradient(270deg, transparent 40%, #313438 100%);
}
.main-section > .main-card-container > button.previous:hover {
  background: transparent;
  background: linear-gradient(270deg, transparent 15%, #565b61 100%);
}
.main-section > .main-card-container > button.next {
  right: -7%;
  background: transparent;
  background: linear-gradient(90deg, transparent 40%, #313438 100%);
}
.main-section > .main-card-container > button.next:hover {
  background: transparent;
  background: linear-gradient(90deg, transparent 15%, #565b61 100%);
}
.main-section > .main-card-container > div.slider {
  box-shadow: black 0px 20px 30px -10px;
  overflow: hidden;
  position: relative;
}
.main-section > .main-card-container > div.slider > a {
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s linear;
  background: #151515;
  background: linear-gradient(180deg, #151515 65%, #313438 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 0;
}
@media (min-width: 800px) {
  .main-section > .main-card-container > div.slider > a {
    max-width: 70vw;
  }
}
@media (min-width: 1000px) {
  .main-section > .main-card-container > div.slider > a {
    max-width: unset;
    flex-direction: row;
  }
}
.main-section > .main-card-container > div.slider > a > img {
  height: auto;
  max-width: 100%;
  display: block;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  object-fit: cover;
  z-index: 1;
}
@media (min-width: 1000px) {
  .main-section > .main-card-container > div.slider > a > img {
    width: 620px;
    height: 350px;
  }
}
.main-section > .main-card-container > div.slider > a > div {
  display: grid;
  grid-template-rows: none;
  grid-template-columns: 1fr 1fr;
  gap: 0.5em;
}
.main-section > .main-card-container > div.slider > a > div > h4 {
  font-size: 1.1em;
  text-transform: capitalize;
  display: block;
  grid-column: span 2;
  margin: 0.5em 0 0 20px;
  z-index: 1;
  font-size: 1.4em;
}
.main-section > .main-card-container > div.slider > a > div > img {
  display: none;
}
@media (min-width: 1000px) {
  .main-section > .main-card-container > div.slider > a > div > img {
    grid-column: span 1;
    height: 91px;
    width: 100%;
    display: inline-block;
  }
}
.main-section > .main-card-container > div.slider > a > div > div:nth-last-child(2) {
  display: none;
}
@media (min-width: 1000px) {
  .main-section > .main-card-container > div.slider > a > div > div:nth-last-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: none;
    align-items: flex-start;
    gap: 0.3em;
    grid-column: span 2;
    margin-left: 20px;
  }
  .main-section > .main-card-container > div.slider > a > div > div:nth-last-child(2) > div:first-child {
    font-size: 1.05em;
  }
  .main-section > .main-card-container > div.slider > a > div > div:nth-last-child(2) > div:last-child {
    font-size: 0.8em;
    padding: 0.2em 0.6em;
    background-color: #8b0023;
  }
}
.main-section > .main-card-container > div.slider > a > div > div:last-child {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  grid-column: span 2;
  margin: 0 20px 0.5em 20px;
  z-index: 1;
}
.main-section > .main-card-container > div.slider > a > div > div:last-child > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  background-color: black;
  font-size: 0.8em;
}
.main-section > .main-card-container > div.slider > a > div > div:last-child > div * {
  display: inline-block;
  padding: 0.2em 0.4em;
}
.main-section > .main-card-container > div.slider > a > div > div:last-child > div > div:nth-child(1) {
  background-color: #4c6b22;
  color: #a4d007;
}
.main-section > .main-card-container > div.slider > a > div > div:last-child > div > div:nth-child(2) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  display: inline-flex;
  font-size: 0.85em;
  padding: 0 0.5em 0 0.5em;
}
.main-section > .main-card-container > div.slider > a > div > div:last-child > div > div:nth-child(2) span {
  font-size: 0.95em;
  text-decoration: line-through;
  color: #4c565d;
}
.main-section > .main-card-container > div.slider > a.nextSlide {
  opacity: 0;
  pointer-events: none;
  transform: translateX(100%);
}
.main-section > .main-card-container > div.slider > a.activeSlide {
  opacity: 1;
  position: unset;
  transform: translateX(0);
}
.main-section > .main-card-container > div.slider > a.lastSlide {
  opacity: 0;
  pointer-events: none;
  transform: translateX(-100%);
}
.main-section > .secondary-card-container > div:first-child {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  margin-bottom: 0.5em;
}
.main-section > .secondary-card-container > div:first-child > h5 {
  font-size: 1.1em;
  text-transform: uppercase;
}
.main-section > .secondary-card-container > div:first-child > a {
  color: #4c565d;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  transition: 0.3s;
}
.main-section > .secondary-card-container > div:first-child > a:hover {
  color: #c6d4df;
}
.main-section > .secondary-card-container > div.slider {
  display: grid;
  grid-template-rows: none;
  grid-template-columns: none;
  gap: 0.75em;
  grid-template-areas: "a b" "c b";
}
@media (min-width: 800px) {
  .main-section > .secondary-card-container > div.slider {
    grid-template-areas: "a b d" "c b e";
  }
}
.main-section > .secondary-card-container > div.slider > div {
  background: #151515;
  background: linear-gradient(180deg, #151515 65%, #313438 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.main-section > .secondary-card-container > div.slider > div > a {
  display: block;
  min-height: 67%;
}
.main-section > .secondary-card-container > div.slider > div > a > img {
  height: auto;
  max-width: 100%;
  display: block;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  object-fit: cover;
  height: 100%;
  object-fit: cover;
}
.main-section > .secondary-card-container > div.slider > div > h5 {
  font-size: 0.8em;
  text-align: right;
  padding: 0.5em 0.5em 0.25em 0;
}
@media (min-width: 600px) {
  .main-section > .secondary-card-container > div.slider > div > h5 {
    font-size: 1em;
  }
}
.main-section > .secondary-card-container > div.slider > div > div {
  padding: 0 0.5em 0.75em 0;
}
.main-section > .secondary-card-container > div.slider > div > div div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  background-color: black;
}
.main-section > .secondary-card-container > div.slider > div > div div * {
  display: inline-block;
}
.main-section > .secondary-card-container > div.slider > div > div div > div:nth-child(1) {
  background-color: #4c6b22;
  color: #a4d007;
  font-size: 1.6em;
  padding: 0.1em;
}
.main-section > .secondary-card-container > div.slider > div > div div > div:nth-child(2) {
  display: inline-flex;
  font-size: 0.85em;
  padding: 0 0.5em 0 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 0;
}
.main-section > .secondary-card-container > div.slider > div > div div > div:nth-child(2) span {
  font-size: 0.95em;
  text-decoration: line-through;
  color: #4c565d;
}
.main-section > .secondary-card-container > div.slider > div > div div > div:nth-child(2) * {
  display: block;
}
.main-section > .secondary-card-container > div.slider > div:nth-child(1) {
  grid-area: a;
}
.main-section > .secondary-card-container > div.slider > div:nth-child(2) {
  grid-area: b;
}
.main-section > .secondary-card-container > div.slider > div:nth-child(2) > a {
  min-height: 84%;
}
.main-section > .secondary-card-container > div.slider > div:nth-child(3) {
  grid-area: c;
}
.main-section > .secondary-card-container > div.slider > div:nth-child(4) {
  grid-area: d;
  display: none;
}
@media (min-width: 800px) {
  .main-section > .secondary-card-container > div.slider > div:nth-child(4) {
    display: inline-flex;
  }
}
.main-section > .secondary-card-container > div.slider > div:nth-child(5) {
  grid-area: e;
  display: none;
}
@media (min-width: 800px) {
  .main-section > .secondary-card-container > div.slider > div:nth-child(5) {
    display: inline-flex;
  }
}
.main-section > .movie-card-container {
  position: relative;
}
@media (min-width: 1000px) {
  .main-section > .movie-card-container {
    height: 380px;
    max-width: 950px;
  }
}
.main-section > .movie-card-container > div:first-child {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  margin-bottom: 0.5em;
}
.main-section > .movie-card-container > div:first-child > h5 {
  font-size: 1.1em;
  text-transform: uppercase;
}
.main-section > .movie-card-container > div:first-child > a {
  color: #4c565d;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  transition: 0.3s;
}
.main-section > .movie-card-container > div:first-child > a:hover {
  color: #c6d4df;
}
.main-section > .movie-card-container > button.previous, .main-section > .movie-card-container button.next {
  display: none;
  border: none;
}
@media (min-width: 1000px) {
  .main-section > .movie-card-container > button.previous, .main-section > .movie-card-container button.next {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0;
    position: absolute;
    top: 38%;
    width: 7%;
    height: 7em;
    border-radius: 4px;
  }
}
.main-section > .movie-card-container > button.previous > svg, .main-section > .movie-card-container button.next > svg {
  font-size: 4em;
  color: #c6d4df;
}
.main-section > .movie-card-container > button.previous {
  left: -7%;
  background: transparent;
  background: linear-gradient(270deg, transparent 40%, #313438 100%);
}
.main-section > .movie-card-container > button.previous:hover {
  background: transparent;
  background: linear-gradient(270deg, transparent 15%, #565b61 100%);
}
.main-section > .movie-card-container > button.next {
  right: -7%;
  background: transparent;
  background: linear-gradient(90deg, transparent 40%, #313438 100%);
}
.main-section > .movie-card-container > button.next:hover {
  background: transparent;
  background: linear-gradient(90deg, transparent 15%, #565b61 100%);
}
.main-section > .movie-card-container > div.slider {
  box-shadow: black 0px 20px 30px -10px;
  overflow: hidden;
  position: relative;
}
.main-section > .movie-card-container > div.slider > a {
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s linear;
  background: #151515;
  background: linear-gradient(180deg, #151515 65%, #313438 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 0;
}
@media (min-width: 800px) {
  .main-section > .movie-card-container > div.slider > a {
    max-width: 70vw;
  }
}
@media (min-width: 1000px) {
  .main-section > .movie-card-container > div.slider > a {
    height: 350px;
    max-width: unset;
    flex-direction: row;
  }
}
.main-section > .movie-card-container > div.slider > a > img {
  height: auto;
  max-width: 100%;
  display: block;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  object-fit: cover;
  z-index: 1;
}
@media (min-width: 1000px) {
  .main-section > .movie-card-container > div.slider > a > img {
    width: 620px;
    height: 350px;
  }
}
.main-section > .movie-card-container > div.slider > a > div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2em;
  padding: 1.25em;
}
@media (min-width: 1000px) {
  .main-section > .movie-card-container > div.slider > a > div {
    padding: 1.75em;
  }
}
.main-section > .movie-card-container > div.slider > a > div > div:first-child {
  position: relative;
  flex: 1;
  overflow: hidden;
  display: inline-block;
  flex-basis: 6em;
}
@media (min-width: 800px) {
  .main-section > .movie-card-container > div.slider > a > div > div:first-child {
    height: unset;
    mask-image: rgba(0, 0, 0, 0);
    mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, #151515 30%);
  }
}
.main-section > .movie-card-container > div.slider > a > div > div:first-child > p {
  font-size: 0.85em;
  font-weight: 400;
  display: block;
  max-width: 616px;
  color: white;
}
@media (min-width: 1000px) {
  .main-section > .movie-card-container > div.slider > a > div > div:first-child > p {
    font-size: 1.1em;
  }
}
.main-section > .movie-card-container > div.slider > a > div > div:last-child {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0;
}
.main-section > .movie-card-container > div.slider > a > div > div:last-child > img {
  height: 42px;
  width: 42px;
}
.main-section > .movie-card-container > div.slider > a > div > div:last-child > div {
  margin-left: 0.75em;
}
.main-section > .movie-card-container > div.slider > a > div > div:last-child > div * {
  display: block;
}
.main-section > .movie-card-container > div.slider > a > div > div:last-child > div > h6 {
  font-size: 0.85em;
}
.main-section > .movie-card-container > div.slider > a > div > div:last-child > div > p {
  margin-top: 0.25em;
  font-size: 0.6em;
  font-weight: 300;
}
.main-section > .movie-card-container > div.slider > a.nextSlide {
  opacity: 0;
  pointer-events: none;
  transform: translateX(100%);
}
.main-section > .movie-card-container > div.slider > a.activeSlide {
  opacity: 1;
  position: unset;
  transform: translateX(0);
}
.main-section > .movie-card-container > div.slider > a.lastSlide {
  opacity: 0;
  pointer-events: none;
  transform: translateX(-100%);
}
.main-section > .page-browse {
  align-self: stretch;
}
.main-section > .page-browse > div:nth-child(1) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  margin-bottom: 0.5em;
}
.main-section > .page-browse > div:nth-child(1) > h5 {
  font-size: 1.1em;
  text-transform: uppercase;
}
.main-section > .page-browse > div:nth-child(1) > a {
  color: #4c565d;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  transition: 0.3s;
}
.main-section > .page-browse > div:nth-child(1) > a:hover {
  color: #c6d4df;
}
.main-section > .page-browse > div:nth-child(2) {
  display: grid;
  grid-template-rows: none;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5em;
}
.main-section > .page-browse > div:nth-child(2) > a {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  grid-column: span 2;
  height: 3em;
  border-radius: 5px;
  border: solid 1px black;
  background-color: #8b0023;
  color: #c6d4df;
  transition: 0.3s;
}
@media (min-width: 800px) {
  .main-section > .page-browse > div:nth-child(2) > a {
    grid-column: span 1;
  }
}
.main-section > .page-browse > div:nth-child(2) > a:hover {
  background-color: #f2ecff;
  color: #302c3a;
}
.main-section > .special-card-container > div:nth-child(1) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  margin-bottom: 0.5em;
}
.main-section > .special-card-container > div:nth-child(1) > h5 {
  font-size: 1.1em;
  text-transform: uppercase;
}
.main-section > .special-card-container > div:nth-child(1) > a {
  color: #4c565d;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  transition: 0.3s;
}
.main-section > .special-card-container > div:nth-child(1) > a:hover {
  color: #c6d4df;
}
.main-section > .special-card-container > div:nth-child(2) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5em;
}
.main-section > .special-card-container > div:nth-child(2) > a {
  background: #8b0023;
  background: linear-gradient(90deg, #8b0023 20%, #151515 100%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.main-section > .special-card-container > div:nth-child(2) > a > img {
  height: auto;
  max-width: 100%;
  display: block;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  object-fit: cover;
  height: 100px;
  width: 200px;
}
.main-section > .special-card-container > div:nth-child(2) > a > div {
  padding: 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 0;
}
.main-section > .special-card-container > div:nth-child(2) > a > div > p {
  display: inline-flex;
  font-size: 0.85em;
  padding: 0 0.5em 0 0.5em;
  padding: 0.1em 0.35em;
  background-color: black;
  color: white;
  font-weight: 700;
}
.main-section > .special-card-container > div:nth-child(2) > a > div > p span {
  font-size: 0.95em;
  text-decoration: line-through;
  color: #4c565d;
}
.main-section > .special-card-container > div:nth-child(2) > a:nth-child(3) {
  display: none;
}
@media (min-width: 800px) {
  .main-section > .special-card-container > div:nth-child(2) > a:nth-child(3) {
    display: unset;
  }
}
.main-section > .special-card-container > div:nth-child(2) > a:nth-child(4) {
  display: none;
}
@media (min-width: 1000px) {
  .main-section > .special-card-container > div:nth-child(2) > a:nth-child(4) {
    display: unset;
  }
}

div.subsidiary-section {
  background-color: #8b0023;
  margin-top: 2em;
}
div.subsidiary-section div.subsidiary-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.5em;
  margin: 0 0.5em;
}
@media (min-width: 1000px) {
  div.subsidiary-section div.subsidiary-container {
    width: 975px;
    margin: 0 auto;
  }
  div.subsidiary-section div.subsidiary-container > * {
    width: 100%;
  }
}
div.subsidiary-section div.subsidiary-container div.tab-selector {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0;
  background-color: #151515;
  align-self: flex-start;
  position: relative;
}
div.subsidiary-section div.subsidiary-container div.tab-selector::after {
  content: "";
  position: absolute;
  background-color: #151515;
  top: 0;
  left: -20vw;
  height: 100%;
  width: 120vw;
  z-index: 1;
}
div.subsidiary-section div.subsidiary-container div.tab-selector button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0;
  border: none;
  height: 2.5em;
  padding: 1em 0.75em;
  transition: 0.3s;
  z-index: 2;
  background: none;
}
div.subsidiary-section div.subsidiary-container div.tab-selector button > p {
  font-size: 1em;
  color: #c6d4df;
}
div.subsidiary-section div.subsidiary-container div.tab-selector button:hover > p:not(a.active > p) {
  color: #d90037;
}
div.subsidiary-section div.subsidiary-container div.tab-selector button.active {
  background-color: #8b0023;
}
div.subsidiary-section div.subsidiary-container > section.tab-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0;
  align-self: stretch;
  z-index: 1;
}
div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 0;
  flex-grow: 1;
  transition: all 0.3s linear;
  position: relative;
}
div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-list > div:first-child {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 0;
  z-index: 2;
  padding: 0.4em;
  background-color: #6f001c;
  height: 40px;
}
div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-list > div:first-child > p {
  font-size: 0.8em;
}
div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-list > div:first-child > a {
  font-size: 0.8em;
  padding: 0.5em;
  border: 1px solid #f2ecff;
  color: #c6d4df;
  transition: 0.3s;
}
div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-list > div:first-child > a:hover {
  background-color: #f2ecff;
  color: #302c3a;
}
div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-list > div:not(:first-child) {
  visibility: hidden;
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 0.5s linear;
}
div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-list > div:not(:first-child).active {
  visibility: visible;
  opacity: 1;
  position: unset;
  z-index: 1;
}
div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-list > div:not(:first-child) > a.tab-item {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0;
  background-color: #6f001c;
  margin-bottom: 0.5em;
  transition: all 0.3s linear;
}
div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-list > div:not(:first-child) > a.tab-item > img {
  height: auto;
  max-width: 100%;
  display: block;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  object-fit: cover;
  box-shadow: unset;
  height: auto;
  width: 180px;
}
div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-list > div:not(:first-child) > a.tab-item > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  flex-grow: 10;
  padding: 0.3em 0.5em;
}
div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-list > div:not(:first-child) > a.tab-item > div > div:nth-child(1) {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.3em;
  flex-wrap: wrap;
  color: black;
  width: 75%;
}
div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-list > div:not(:first-child) > a.tab-item > div > div:nth-child(1) * {
  display: inline-block;
}
div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-list > div:not(:first-child) > a.tab-item > div > div:nth-child(1) > h4 {
  width: 100%;
  color: #c6d4df;
}
div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-list > div:not(:first-child) > a.tab-item > div > div:nth-child(1) > i {
  width: 100%;
  color: #6f6f6f;
}
div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-list > div:not(:first-child) > a.tab-item > div > div:nth-child(1) > small {
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  font-size: 0.8em;
  color: #6f6f6f;
}
div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-list > div:not(:first-child) > a.tab-item > div > div:nth-child(2) {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 0;
  width: 25%;
}
div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-list > div:not(:first-child) > a.tab-item > div > div:nth-child(2) > div:nth-child(1) {
  background-color: #4c6b22;
  display: inline;
  padding: 0.1em 0.3em;
  color: #a4d007;
}
div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-list > div:not(:first-child) > a.tab-item > div > div:nth-child(2) > div:nth-child(2) {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 0;
}
div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-list > div:not(:first-child) > a.tab-item > div > div:nth-child(2) > div:nth-child(2) > p:nth-child(1) {
  text-decoration: line-through;
  color: #6f6f6f;
  font-size: 0.7em;
}
div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-list > div:not(:first-child) > a.tab-item > div > div:nth-child(2) > div:nth-child(2) > p:nth-child(2) {
  color: #c6d4df;
  font-size: 0.8em;
}
div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-list > div:not(:first-child) > a.tab-item.active {
  background-color: #ff0040;
}
div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-list > div:not(:first-child) > a.tab-item.active h4 {
  color: white !important;
}
div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-list > div:not(:first-child) > a.tab-item.active i, div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-list > div:not(:first-child) > a.tab-item.active small {
  color: #c6d4df !important;
}
div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-list > div:not(:first-child) > a.tab-item:last-child {
  margin: 0;
}
div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-viewer {
  position: relative;
}
div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-viewer > div {
  position: absolute;
  width: 360px;
  top: 0;
  right: 0;
  opacity: 0;
  transition: opacity 0.5s linear;
}
@media (min-width: 1000px) {
  div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-viewer > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0;
    padding: 0.5em 1em 0.5em 1em;
    background-color: #8b0023;
  }
  div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-viewer > div > div {
    margin-bottom: 0.5em;
  }
  div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-viewer > div > div:nth-child(1) {
    color: white;
    font-size: 1.3em;
  }
  div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-viewer > div > div:nth-child(2) {
    background-color: #8b0023;
    align-self: stretch;
    padding: 0.5em;
    font-size: 0.75em;
  }
  div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-viewer > div > div:nth-child(2) > p:last-child > span {
    color: #6dc849;
  }
  div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-viewer > div > div:nth-child(3) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.25em;
  }
  div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-viewer > div > div:nth-child(3) > a {
    font-size: 0.7em;
    padding: 0.3em 0.6em;
    background-color: #8b0023;
    color: white;
  }
  div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-viewer > div > div:nth-child(3) > a:hover {
    background-color: #f2ecff;
    color: #302c3a;
  }
  div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-viewer > div > img {
    margin-bottom: 0.25em;
    height: auto;
    max-width: 100%;
  }
  div.subsidiary-section div.subsidiary-container > section.tab-container > div.tab-viewer > div.active {
    opacity: 1;
    background-color: #ff0040;
    position: unset;
  }
}

footer {
  position: relative;
  z-index: 10;
  padding: 1em 0.5em 0 0.5em;
}
@media (min-width: 1000px) {
  footer {
    padding: 1em 0 0 0;
  }
}
footer > div {
  display: grid;
  grid-template-rows: none;
  grid-template-columns: repeat(6, 1fr);
  gap: 1em;
  font-size: 0.9em;
}
@media (min-width: 1000px) {
  footer > div {
    width: 975px;
    margin: 0 auto 0.75em auto;
  }
}
footer > div > div:nth-child(1) {
  grid-column: span 3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0;
}
@media (min-width: 1000px) {
  footer > div > div:nth-child(1) {
    grid-area: 1/1/span 3/span 1;
    order: 1;
  }
}
footer > div > div:nth-child(1) > img {
  width: 4em;
}
footer > div > div:nth-child(2) {
  grid-column: span 3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0;
}
@media (min-width: 1000px) {
  footer > div > div:nth-child(2) {
    grid-area: 1/6/span 3/span 1;
    order: 3;
  }
}
footer > div > div:nth-child(2) > img {
  width: 6em;
}
footer > div > p {
  grid-column: span 6;
  padding: 0 10%;
}
@media (min-width: 1000px) {
  footer > div > p {
    grid-column: span 4;
    order: 2;
  }
}
footer > div > ul {
  grid-column: span 3;
}
footer > div > ul > li {
  padding: 0.5em 0;
  border-bottom: 1px solid #c6d4df;
  width: 11em;
  display: inline-block;
  border-bottom: 1px solid white;
  transition: all 0.3s linear;
}
footer > div > ul > li:hover {
  background-color: #f2ecff;
}
footer > div > ul > li > a {
  padding-left: 0.3em;
  color: #c6d4df;
}
footer > div > ul > li:hover > a {
  color: #302c3a;
}
footer > div > ul:nth-child(4) {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 0;
}
@media (min-width: 1000px) {
  footer > div > ul:nth-child(4) {
    grid-column: span 4;
    order: 4;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0;
  }
  footer > div > ul:nth-child(4) > li {
    width: unset;
    flex-grow: 1;
    border-bottom: none;
    border-right: 1px solid #c6d4df;
    padding: 0.5em 0.5em;
  }
  footer > div > ul:nth-child(4) > li:last-child {
    border: none;
  }
}
footer > div > ul:nth-child(5) {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0;
}
@media (min-width: 1000px) {
  footer > div > ul:nth-child(5) {
    grid-column: span 4;
    order: 5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0;
  }
  footer > div > ul:nth-child(5) > li {
    width: unset;
    flex-grow: 1;
    border-bottom: none;
    border-right: 1px solid #c6d4df;
    padding: 0.5em 0.5em;
    text-align: left;
  }
  footer > div > ul:nth-child(5) > li:last-child {
    border: none;
  }
}
footer > div > ul:nth-child(5) > li {
  text-align: right;
}

div.detail-container div.detail-background {
  position: absolute;
  left: 0;
  width: 100%;
  height: 75vh;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.2;
  z-index: -100;
}
div.detail-container div.detail-background.top {
  top: 0;
  background-position: center top;
}
div.detail-container div.detail-background.bottom {
  bottom: 0;
  background-position: center bottom;
}
div.detail-container > div.breadcrumbs {
  position: relative;
  letter-spacing: 0.15em;
  margin: 1em 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0;
  flex-wrap: wrap;
}
@media (max-width: 599px) {
  div.detail-container > div.breadcrumbs {
    gap: 0.25em;
  }
}
@media (min-width: 1000px) {
  div.detail-container > div.breadcrumbs {
    justify-content: flex-start;
  }
}
div.detail-container > div.breadcrumbs * {
  color: #939393;
}
div.detail-container > div.breadcrumbs > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.1em;
  white-space: nowrap;
}
div.detail-container > div.breadcrumbs > div > a, div.detail-container > div.breadcrumbs > div > p {
  transition: 0.2s;
  text-transform: uppercase;
  font-size: 0.7em;
}
div.detail-container > div.breadcrumbs > div > p {
  pointer-events: none;
}
div.detail-container > div.breadcrumbs > div > a:hover, div.detail-container > div.breadcrumbs > div > a:hover > span {
  color: white;
}
div.detail-container > div.breadcrumbs > div > span {
  font-size: 1.2em;
  pointer-events: none;
}
div.detail-container > div.breadcrumbs > div:last-child > p {
  color: #d90037;
  font-weight: 500;
}
div.detail-container > div.breadcrumbs > svg {
  font-size: 0.8em;
  margin: 0 0.1em;
}
@media (min-width: 1000px) {
  div.detail-container > div.breadcrumbs {
    width: 950px;
    margin: 1.5em auto;
  }
}
div.detail-container div.detail {
  position: relative;
  margin: 0 0.5em;
  position: relative;
  overflow: hidden;
  transition: all 0.3s linear;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 1em;
}
@media (min-width: 600px) {
  div.detail-container div.detail {
    width: 575px;
    margin: 0 auto;
  }
}
@media (min-width: 1000px) {
  div.detail-container div.detail {
    flex-direction: row;
    width: 950px;
    gap: 2em;
  }
}
div.detail-container div.detail > .read-more {
  position: absolute;
  bottom: 0;
  left: 1em;
  z-index: 10;
  color: white;
  cursor: pointer;
}
div.detail-container div.detail > .read-more:hover {
  color: #d90037 !important;
}
div.detail-container div.detail > div.detail-primary {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 1em;
}
@media (min-width: 1000px) {
  div.detail-container div.detail > div.detail-primary {
    mask-image: rgba(0, 0, 0, 0);
    mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, #151515 30%);
  }
}
@media (min-width: 1000px) {
  div.detail-container div.detail > div.detail-primary {
    display: flex;
    flex-direction: column;
    justify-content: unset;
    align-items: stretch;
    gap: 1.5em;
    width: 60%;
  }
  div.detail-container div.detail > div.detail-primary .read-more {
    display: unset;
  }
}
@media (min-width: 1000px) {
  div.detail-container div.detail > div.detail-primary > section.trailer-mobile {
    display: none;
  }
}
div.detail-container div.detail > div.detail-primary > section.trailer-mobile > * {
  display: block;
}
div.detail-container div.detail > div.detail-primary > section.trailer-mobile > a.trailer-main {
  margin-top: 1em;
  margin-bottom: 0.5em;
}
@media (min-width: 1000px) {
  div.detail-container div.detail > div.detail-primary > section.trailer-mobile > a.trailer-main {
    margin-top: 0;
  }
}
div.detail-container div.detail > div.detail-primary > section.trailer-mobile > a.trailer-main > img {
  border-radius: 3px;
  width: 100%;
  display: block;
  box-shadow: black 0px 20px 30px -10px;
}
div.detail-container div.detail > div.detail-primary > section.trailer-mobile > div.trailer-slider {
  display: grid;
  grid-template-rows: none;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5em;
}
@media (min-width: 1000px) {
  div.detail-container div.detail > div.detail-primary > section.trailer-mobile > div.trailer-slider {
    display: grid;
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr;
    gap: 0.5em;
  }
}
div.detail-container div.detail > div.detail-primary > section.trailer-mobile > div.trailer-slider > a {
  display: block;
}
div.detail-container div.detail > div.detail-primary > section.trailer-mobile > div.trailer-slider > a img {
  border-radius: 3px;
  height: auto;
  width: 100%;
  display: block;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}
div.detail-container div.detail > div.detail-primary > section.trailer-mobile > div:not(.trailer-slider) {
  font-size: 1.2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
}
div.detail-container div.detail > div.detail-primary > section.trailer-mobile > div:not(.trailer-slider) > svg {
  color: red;
  margin-top: 0.1em;
}
div.detail-container div.detail > div.detail-primary > section.trailer-mobile > div.head {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1em;
}
@media (min-width: 1000px) {
  div.detail-container div.detail > div.detail-primary > section.trailer-mobile > div.head {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1em;
  }
}
div.detail-container div.detail > div.detail-primary > section.trailer-mobile > div.head > div.head-release {
  padding: 0.1em 0.4em;
  border-radius: 6px;
  background-color: #f2ecff;
  color: #302c3a;
  letter-spacing: 0.1em;
  font-size: 0.9em;
}
div.detail-container div.detail > div.detail-primary > section.trailer-mobile > div.head > div.consoles {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.3em;
  font-size: 1.1em;
}
div.detail-container div.detail > div.detail-primary > section.glance {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1em;
  align-items: stretch;
  color: white;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.head {
  display: none;
}
@media (min-width: 1000px) {
  div.detail-container div.detail > div.detail-primary > section.glance > div.head {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }
}
@media (min-width: 1000px) and (min-width: 1000px) {
  div.detail-container div.detail > div.detail-primary > section.glance > div.head {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1em;
  }
}
@media (min-width: 1000px) {
  div.detail-container div.detail > div.detail-primary > section.glance > div.head > div.head-release {
    padding: 0.1em 0.4em;
    border-radius: 6px;
    background-color: #f2ecff;
    color: #302c3a;
    letter-spacing: 0.1em;
    font-size: 0.9em;
  }
}
@media (min-width: 1000px) {
  div.detail-container div.detail > div.detail-primary > section.glance > div.head > div.consoles {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.3em;
    font-size: 1.1em;
  }
}
div.detail-container div.detail > div.detail-primary > section.glance > h1 {
  letter-spacing: 0.05em;
  font-size: 2.5em;
}
@media (min-width: 1000px) {
  div.detail-container div.detail > div.detail-primary > section.glance > h1 {
    font-size: 4em;
  }
}
div.detail-container div.detail > div.detail-primary > section.glance > div.glance-info {
  display: grid;
  grid-template-rows: none;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.2em;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.glance-info > p:not(p:last-child) {
  grid-column: span 1;
  color: white;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.glance-info > a {
  grid-column: span 2;
  color: #6dc849;
  transition: 0.2s;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.glance-info > a:hover {
  color: #d90037;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.glance-info > p:last-child {
  grid-column: span 2;
  color: white;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.tag-container > p {
  font-size: 1.2em;
  color: #939393;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  display: block;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.tag-container > div {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  gap: 0;
  gap: 0.5em;
  overflow: hidden;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.tag-container > div > a {
  padding: 0.5em 1.25em;
  border-radius: 0.5em;
  font-size: 0.9em;
  background-color: #8b0023;
  color: #c6d4df;
  transition: 0.2s;
  white-space: nowrap;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.tag-container > div > a:hover {
  background-color: #c0bbca;
  color: #302c3a;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.ratings-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: normal;
  gap: 1em;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.ratings-container > p {
  font-size: 1.2em;
  color: #939393;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  display: block;
  margin: 0;
  width: 100%;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.ratings-container > div.ratings {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.ratings-container > div.ratings > div:nth-child(1) {
  flex-grow: 2;
  display: grid;
  grid-template-rows: none;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  row-gap: 0.25em;
  text-align: center;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.ratings-container > div.ratings > div:nth-child(1) > div:nth-child(1) {
  grid-column: 1/span 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.3em;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.ratings-container > div.ratings > div:nth-child(1) > div:nth-child(1) > h4 {
  text-transform: capitalize;
  font-size: 1.3em;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.ratings-container > div.ratings > div:nth-child(1) > div:nth-child(1) > img {
  width: 2.5em;
  height: auto;
  margin-bottom: 0.25em;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.ratings-container > div.ratings > div:nth-child(1) > div:nth-child(2) {
  grid-column: 1/span 2;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.ratings-container > div.ratings > div:nth-child(1) a {
  color: #4c565d;
  text-transform: uppercase;
  font-size: 1.1em;
  text-decoration: underline;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.ratings-container > div.ratings > div:nth-child(1) a:hover {
  color: #c6d4df;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.ratings-container > div.ratings > div:nth-child(1) > p {
  font-size: 1.2em;
}
@media (min-width: 1000px) {
  div.detail-container div.detail > div.detail-primary > section.glance > div.ratings-container > div.ratings > div:nth-child(1) > p {
    display: none;
  }
}
div.detail-container div.detail > div.detail-primary > section.glance > div.ratings-container > div.ratings > div:nth-child(2) {
  display: none;
}
@media (min-width: 1000px) {
  div.detail-container div.detail > div.detail-primary > section.glance > div.ratings-container > div.ratings > div:nth-child(2) {
    display: grid;
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0;
    flex-grow: 1;
    border-left: 1px solid #4c565d;
    border-right: 1px solid #4c565d;
  }
}
div.detail-container div.detail > div.detail-primary > section.glance > div.ratings-container > div.ratings > div:nth-child(2) > p {
  grid-column: span 1;
  font-size: 1.6em;
  text-align: right;
  padding-right: 0.25em;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.ratings-container > div.ratings > div:nth-child(2) > a {
  grid-column: span 2;
  color: #4c565d;
  text-transform: uppercase;
  text-decoration: underline;
  font-size: 1.4em;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.ratings-container > div.ratings > div:nth-child(2) > a:hover {
  color: #c6d4df;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.ratings-container > div.ratings > div:nth-child(3) {
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  gap: 0.4em;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.ratings-container > div.ratings > div:nth-child(3) > h4 {
  font-size: 1.2em;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.ratings-container > div.ratings > div:nth-child(3) > p {
  font-size: 1.4em;
  padding: 0.3em;
  color: #6dc849;
  border-radius: 0.2em;
  border: 1px solid rgba(109, 200, 73, 0.4);
}
div.detail-container div.detail > div.detail-primary > section.glance > div.glance-about {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.3em;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.glance-about > h4 {
  font-size: 1.2em;
  color: #939393;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  display: block;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.glance-about > p {
  line-height: 1.3em;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.glance-about > h3 {
  color: #939393;
  display: block;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.glance-general {
  display: grid;
  grid-template-rows: none;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.glance-general > div > p:first-child {
  color: #939393;
  display: block;
  font-size: 1.1em;
  padding-bottom: 0.5em;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.glance-general > div > p:last-child {
  display: block;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.glance-general > .linkables > div {
  line-height: 1.5em;
  word-spacing: 0.15em;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.glance-general > .linkables > div > span {
  transition: all 0.3s linear;
  padding-bottom: 0.1px;
  border-bottom: 2px solid #939393;
  cursor: pointer;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.glance-general > .linkables > div > span:hover {
  color: #4c565d;
  border-bottom: 2px solid #4c565d;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.glance-general > .linkables > div > strong {
  cursor: default;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.glance-general > .glance-tags {
  grid-column: span 2;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.glance-system {
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 0.75em;
}
@media (min-width: 1000px) {
  div.detail-container div.detail > div.detail-primary > section.glance > div.glance-system {
    padding-bottom: 1em;
  }
}
div.detail-container div.detail > div.detail-primary > section.glance > div.glance-system > h2 {
  font-size: 1.2em;
  color: #939393;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  display: block;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.glance-system > div > strong {
  color: #939393;
  display: block;
  margin-bottom: 0.5em;
}
div.detail-container div.detail > div.detail-primary > section.glance > div.glance-system > div > div > p {
  font-size: 0.9em;
}
div.detail-container div.detail > div.detail-secondary {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 0;
}
@media (min-width: 1000px) {
  div.detail-container div.detail > div.detail-secondary {
    display: flex;
    flex-direction: column;
    justify-content: unset;
    align-items: stretch;
    gap: 0;
    width: 40%;
  }
}
div.detail-container div.detail > div.detail-secondary > div.height-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 1em;
}
@media (min-width: 1000px) {
  div.detail-container div.detail > div.detail-secondary > div.height-container {
    gap: 1.5em;
  }
}
div.detail-container div.detail > div.detail-secondary > div.height-container > section.trailer-desktop {
  display: none;
}
@media (min-width: 1000px) {
  div.detail-container div.detail > div.detail-secondary > div.height-container > section.trailer-desktop {
    display: unset;
  }
}
div.detail-container div.detail > div.detail-secondary > div.height-container > section.trailer-desktop > * {
  display: block;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > section.trailer-desktop > a.trailer-main {
  margin-top: 1em;
  margin-bottom: 0.5em;
}
@media (min-width: 1000px) {
  div.detail-container div.detail > div.detail-secondary > div.height-container > section.trailer-desktop > a.trailer-main {
    margin-top: 0;
  }
}
div.detail-container div.detail > div.detail-secondary > div.height-container > section.trailer-desktop > a.trailer-main > img {
  border-radius: 3px;
  width: 100%;
  display: block;
  box-shadow: black 0px 20px 30px -10px;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > section.trailer-desktop > div.trailer-slider {
  display: grid;
  grid-template-rows: none;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5em;
}
@media (min-width: 1000px) {
  div.detail-container div.detail > div.detail-secondary > div.height-container > section.trailer-desktop > div.trailer-slider {
    display: grid;
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr;
    gap: 0.5em;
  }
}
div.detail-container div.detail > div.detail-secondary > div.height-container > section.trailer-desktop > div.trailer-slider > a {
  display: block;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > section.trailer-desktop > div.trailer-slider > a img {
  border-radius: 3px;
  height: auto;
  width: 100%;
  display: block;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > section.trailer-desktop > div:not(.trailer-slider) {
  font-size: 1.2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > section.trailer-desktop > div:not(.trailer-slider) > svg {
  color: red;
  margin-top: 0.1em;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 1.5em;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.stores-container > p {
  font-size: 1.2em;
  color: #939393;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  display: block;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.stores-container > div {
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: none;
  align-items: none;
  gap: 1.5%;
  flex-wrap: nowrap;
  scrollbar-width: none !important;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.stores-container > div > a {
  min-width: 32%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em 0;
  background-color: #8b0023;
  border-radius: 0.5em;
  color: #c6d4df;
  cursor: pointer;
  transition: 0.2s;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.stores-container > div > a:hover {
  background-color: #c0bbca;
  color: #302c3a;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.stores-container > div > a > h4 {
  text-transform: capitalize;
  font-size: 0.9em;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.stores-container > div > a > svg {
  font-size: 1.5em;
}
@media (min-width: 1000px) {
  div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.stores-container > div {
    display: grid;
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
  }
  div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.stores-container > div > a {
    min-width: none;
    padding: 0.4em 0;
  }
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.chart-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 0.5em;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.chart-container > p {
  color: #939393;
  display: block;
  align-self: flex-start;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.chart-container > div.chart {
  margin: 0.25em 0 1em 0;
  width: 100%;
  height: 3em;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.chart-container > div.chart > div {
  height: 100%;
  width: 25%;
  display: inline-block;
  overflow: hidden;
  position: relative;
  transition: all 0.2s linear;
  cursor: pointer;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.chart-container > div.chart > div > img {
  height: auto;
  width: 3.5em;
  position: absolute;
  bottom: -0.75em;
  left: -1em;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.chart-container > div.chart .active {
  box-shadow: white 0 1px 10px;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.chart-container > div.chart > .exceptional {
  background-image: linear-gradient(180deg, #b4ec51, #429321);
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.chart-container > div.chart > .exceptional > img {
  bottom: -0.5em;
  left: -0.5em;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.chart-container > div.chart > .recommended {
  background-image: linear-gradient(1800deg, #4354b9, #649bff);
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.chart-container > div.chart > .meh {
  background-image: linear-gradient(180deg, #fad961, #f76b1c);
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.chart-container > div.chart > .skip {
  background-image: linear-gradient(180deg, #ff5764, #f11a2a);
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.chart-container > div.chart > div:first-child {
  border-radius: 0.5em 0 0 0.5em;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.chart-container > div.chart > div:last-child {
  border-radius: 0 0.5em 0.5em 0;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.chart-container > div.chart-label {
  display: grid;
  grid-template-rows: none;
  grid-template-columns: 1fr 1fr;
  gap: 0;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.chart-container > div.chart-label > div {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0;
  padding: 0.5em 0.75em;
  gap: 0.5em;
  border-radius: 10px;
  border: 3px solid transparent;
  transition: all 0.2s linear;
  cursor: pointer;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.chart-container > div.chart-label > div > * {
  display: inline;
  font-size: 0.9em;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.chart-container > div.chart-label > div > p {
  color: #4c565d;
  text-transform: capitalize;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.chart-container > div.chart-label .active {
  border: 3px solid #c0bbca;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.chart-container > div.chart-label .active > p {
  color: white;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.chart-container > div.chart-label > .exceptional > svg {
  color: #429321;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.chart-container > div.chart-label > .recommended > svg {
  color: #4354b9;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.chart-container > div.chart-label > .meh > svg {
  color: #f76b1c;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > div.chart-container > div.chart-label > .skip > svg {
  color: #f11a2a;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 1em;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-action {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-action > a {
  padding: 0.5em 0.75em 0.5em 0.5em;
  background-color: #6f001c;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  transition: 0.2s;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-action > a > svg {
  margin: auto;
  font-size: 1.5em;
  color: #c6d4df;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-action > a:hover {
  background-color: #c0bbca;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-action > a:hover > svg {
  color: #302c3a;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-play {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 1em;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-play > div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  background: #6f001c;
  background: linear-gradient(60deg, #6f001c 5%, #3f0010 95%);
  padding: 1.25em;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-play > div > div:nth-child(1) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  width: 100%;
  margin-bottom: 0.75em;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-play > div > div:nth-child(1) > h5 {
  font-size: 1em;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-play > div > div:nth-child(2) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  background-color: black;
  align-self: flex-end;
  overflow: hidden;
  border-radius: 4px;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-play > div > div:nth-child(2) > * {
  display: inline-block;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-play > div > div:nth-child(2) > p {
  padding: 0 0.5em;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-play > div > div:nth-child(2) > a {
  padding: 0.5em;
  background-color: #4c6b22;
  color: #a4d007;
  border: 4px solid black;
  transition: 0.2s;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-play > div > div:nth-child(2) > a:hover {
  background-color: #c0bbca;
  color: #302c3a;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-play > div.play-demo {
  background: linear-gradient(60deg, rgba(117, 176, 34, 0.7) 5%, rgba(88, 138, 27, 0.6) 95%);
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-play > div.play-demo > div:nth-child(2) {
  display: none;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-dlc {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 0.5em;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-dlc > div:nth-child(1) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-dlc > div:nth-child(1) > p {
  font-size: 1.2em;
  color: #939393;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  display: block;
  margin: 0;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-dlc > div:nth-child(1) > a {
  font-size: 0.9em;
  color: #c6d4df;
  padding: 0.5em 0.75em;
  border: 1px #313438 solid;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-dlc > div:nth-child(1) > a:hover {
  border: 1px #f2ecff solid;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-dlc > div:nth-child(2) {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 0.2em;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-dlc > div:nth-child(2) > a {
  background: #6f001c;
  background: linear-gradient(60deg, #6f001c 5%, #3f0010 95%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  padding: 0.75em;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-dlc > div:nth-child(2) > a > * {
  display: inline-block;
  font-size: 0.85em;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-dlc > div:nth-child(2) > a > h6 {
  color: #939393;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-dlc > div:nth-child(2) > a > p {
  color: #c6d4df;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-dlc > div:nth-child(3) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5em;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-dlc > div:nth-child(3) > p {
  font-size: 1.1em;
  color: #939393;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-dlc > div:nth-child(3) > a {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  padding: 0.3em;
  background-color: #6f001c;
  color: #c6d4df;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-dlc > div:nth-child(3) > a:hover {
  background-color: #8b0023;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-dlc > div:nth-child(3) > a > p {
  font-size: 0.9em;
}
div.detail-container div.detail > div.detail-secondary > div.height-container > div.interaction > section.action > div.action-dlc > div:nth-child(3) > a > svg {
  font-size: 1.2em;
}
div.detail-container > div.recommendations {
  margin: 1em 0.5em;
  position: relative;
}
@media (min-width: 600px) {
  div.detail-container > div.recommendations {
    width: 575px;
    margin: 1.5em auto;
  }
}
@media (min-width: 1000px) {
  div.detail-container > div.recommendations {
    flex-direction: row;
    width: 950px;
    gap: 2em;
  }
}
div.detail-container > div.recommendations > section.recommended {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.5em;
}
div.detail-container > div.recommendations > section.recommended > div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 1em;
}
div.detail-container > div.recommendations > section.recommended > div > div:nth-child(1) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0;
}
div.detail-container > div.recommendations > section.recommended > div > div:nth-child(1) > h5 {
  font-size: 1.2em;
  color: #939393;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  display: block;
  margin: 0;
}
div.detail-container > div.recommendations > section.recommended > div > div:nth-child(1) > a {
  white-space: nowrap;
  font-size: 0.85em;
  padding: 0.3em 0.6em;
  background-color: #6f001c;
  color: #c6d4df;
}
div.detail-container > div.recommendations > section.recommended > div > div:nth-child(1) > a:hover {
  background-color: #8b0023;
}
div.detail-container > div.recommendations > section.recommended > div > div:nth-child(2) {
  display: grid;
  grid-template-rows: none;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5em;
}
@media (min-width: 600px) {
  div.detail-container > div.recommendations > section.recommended > div > div:nth-child(2) {
    display: grid;
    grid-template-rows: none;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5em;
  }
}
div.detail-container > div.recommendations > section.recommended > div > div:nth-child(2) > a {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5em;
  background: #151515;
  background: linear-gradient(180deg, #151515 75%, #313438 100%);
  box-shadow: black 0px 20px 30px -10px;
}
div.detail-container > div.recommendations > section.recommended > div > div:nth-child(2) > a > div:first-child > div {
  max-height: 175px;
  width: auto;
  overflow: hidden;
  margin-bottom: 0.25em;
}
div.detail-container > div.recommendations > section.recommended > div > div:nth-child(2) > a > div:first-child > div > img {
  object-fit: fill;
  height: auto;
  max-width: 100%;
  display: block;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}
div.detail-container > div.recommendations > section.recommended > div > div:nth-child(2) > a > div:first-child > h4 {
  color: #939393;
  display: block;
  padding-left: 0.5em;
}
div.detail-container > div.recommendations > section.recommended > div > div:nth-child(2) > a > div:last-child {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
  background: black;
  padding-right: 0.2em;
  align-self: flex-end;
}
div.detail-container > div.recommendations > section.recommended > div > div:nth-child(2) > a > div:last-child > p:nth-child(1) {
  background-color: #4c6b22;
  color: #a4d007;
  font-size: 1.1em;
  padding: 0.2em;
}
div.detail-container > div.recommendations > section.recommended > div > div:nth-child(2) > a > div:last-child > p:nth-child(2) {
  padding-right: 0.5em;
}
div.detail-container > div.recommendations > section.recommended > div > div:nth-child(2) > a:nth-child(3) {
  display: none;
}
@media (min-width: 600px) {
  div.detail-container > div.recommendations > section.recommended > div > div:nth-child(2) > a:nth-child(3) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.25em;
  }
}

/*# sourceMappingURL=index.ss.map */