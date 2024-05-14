// header scrolling effect
$(window).on('scroll', function(){
	if($(window).scrollTop()){
      $('header').addClass('nav-show');	  
	} 
	else{
		$('header').removeClass('nav-show');
	}
	   
})



//hamburger

// document.addEventListener("DOMContentLoaded", () => {
//     const hamburger = document.querySelector(".hamburger");
//     const navBar = document.querySelector(".nav-bar");

//     hamburger.addEventListener("click", () => {
//         // navBar.classList.toggle("active"); // Toggle active class on nav-bar
//         hamburger.classList.toggle("open"); // Optionally toggle a class for hamburger animation
//     });
// });


document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            // Prevent default link behavior
            event.preventDefault();

            // Remove "active" class from all links
            navLinks.forEach((link) => {
                link.classList.remove("active");
            });

            // Add "active" class to the clicked link
            link.classList.add("active");

            // Smooth scroll to the target section
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});


		 
      //Animation links
	 navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
		   }
		});
	  //hamburger animation
	 hamburger.classList.toggle("toggle");
    // }
	 
	// }

window.onload = () => navSlide();
