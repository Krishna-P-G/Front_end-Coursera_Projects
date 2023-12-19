let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const slideNav = document.querySelector(".slide-nav"); 
let slideTimeout;
function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";

    
    slideNav.innerHTML = '';

    // navigation points
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.setAttribute("data-slide-index", i);
        dot.addEventListener("click", function () {
            slideIndex = parseInt(this.getAttribute("data-slide-index"));
            showSlides();
        });
        slideNav.appendChild(dot);
    }

    // Highlighting the navigation point
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        if (index === slideIndex - 1) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });

    clearTimeout(slideTimeout);
    slideTimeout = setTimeout(showSlides, 5000);
}

showSlides();


{/* <div class="slide fade">
              <div class="food_slide">
                <div class="food_name">rizogalo</div>
                <div class="food_type">Greek</div>
                <div class="food_desc">
                  <p>
                    Rizogalo is a traditional Greek dessert renowned<br />
                    for its creamy texture and rich flavor. This<br />
                    delectable dish is essentially a creamy rice<br />
                    pudding, crafted from arborio rice cooked slowly<br />
                    in milk until it reaches a smooth, thick consistency.
                  </p>
                </div>
                <img src="food/1.jpg" alt="Food 1" />
              </div>
            </div>

            <div class="slide fade">
              <div class="food_slide">
                <div class="food_name">Youvarlakia</div>
                <div class="food_type">Greek</div>
                <div class="food_desc">
                  <p>
                    Youvarlakia, also known as Greek Meatball Soup,<br />
                    is a cherished dish in Greek cuisine, celebrated<br />
                    for its comforting flavors and hearty essence.<br />
                    This dish is a harmonious blend of savory meatballs<br />
                    made from a combination of ground beef or lamb mixed<br />
                    with rice, breadcrumbs, herbs like parsley or mint.
                  </p>
                </div>
                <img src="food/1.jpg" alt="Food 1" />
              </div>
            </div>

            <div class="slide fade">
              <div class="food_slide">
                <div class="food_name">Lahmacun</div>
                <div class="food_type">Turkish</div>
                <div class="food_desc">
                  <p>
                    Lahmacun, a popular dish in Turkish and Middle<br />
                    Eastern cuisine.This savory delight consists of<br />
                    a thin, round, and crispy dough base topped<br />
                    with a flavorful mixture of minced or ground<br />
                    meat—typically lamb or beef—combined.
                  </p>
                </div>
                <img src="food/1.jpg" alt="Food 1" />
              </div>
            </div>

            <div class="slide fade">
              <div class="food_slide">
                <div class="food_name">Doner kebab</div>
                <div class="food_type">Turkish</div>
                <div class="food_desc">
                  <p>
                    Doner kebab is an iconic dish features succulent,<br />
                    marinated meat—usually lamb, beef, or chicken<br />
                    that's stacked in the shape of an inverted cone<br />
                    and cooked on a vertical rotisserie.
                  </p>
                </div>
                <img src="food/1.jpg" alt="Food 1" />
              </div>
            </div>
            <div class="slide-nav">
              <div class="slide-nav">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
            </div> */}