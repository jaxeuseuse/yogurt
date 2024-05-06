        // Function to scroll down when the button is clicked
        function scrollToSection(event) {
            event.preventDefault(); // Prevent default anchor behavior
            var targetId = this.getAttribute("href"); // Get target section id from href attribute
            var targetSection = document.querySelector(targetId); // Get target section element
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" }); // Scroll to the target section
            }
        }

        // Add event listener to the buttons
        document.querySelectorAll('.jump-button').forEach(button => {
            button.addEventListener('click', scrollToSection);
        });
