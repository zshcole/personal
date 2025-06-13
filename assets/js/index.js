        // JavaScript to populate the current date
        function displayCurrentDate() {
            const dateDiv = document.getElementById('currentDate');
            const currentDate = new Date();
            const options = { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                weekday: 'long'
            };
            const formattedDate = currentDate.toLocaleDateString('en-US', options);
            dateDiv.textContent = `resume viewed on: ${formattedDate.toLocaleLowerCase()}`;
            
            // Console message
            console.log('resume page loaded successfully!');
            console.log(`current date: ${formattedDate}`);
            console.log('welcome to colburn sanders portfolio.');
            console.log('thanks for stopping by :)');
        }

        // Call the function when the page loads
        window.addEventListener('load', displayCurrentDate);