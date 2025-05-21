
// let homeBtn = nav-bar.querySelector("button");
        document.querySelectorAll('.sidebar li').forEach(item => {
            item.addEventListener('click', () => {
                // Remove active class from all menu items
                document.querySelectorAll('.sidebar li').forEach(i => i.classList.remove('active'));
                // Add active class to clicked item
                item.classList.add('active');

                // Hide all sections
                document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
                // Show selected section
                const sectionId = item.getAttribute('data-section');
                document.getElementById(sectionId).classList.add('active');
            });
        });

        // Handle form submissions (basic example)
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                alert('Changes saved successfully!');
            });
          
        });
