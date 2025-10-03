  
        const infoBtn = document.getElementById('info-btn');
        const subjectsBtn = document.getElementById('subjects-btn');
        const infoPanel = document.getElementById('info-panel');
        const subjectsPanel = document.getElementById('subjects-panel');
        const initialContent = document.getElementById('initial-content');
        
        const profileImg = document.getElementById('profile-img');
        const studentName = document.getElementById('student-name');
        const studentId = document.getElementById('student-id');
        const studentMajor = document.getElementById('student-major');

       
        const studentData = [
            {
                name: "Monkey D. Luffy",
                major: "Adventuring",
                image: "assets/luffy.jpg"
            },
            {
                name: "Roronoa Zoro",
                major: "Swordsmanship",
                image: "assets/Zoro.jpg" 
            },
            {
                name: "Nami",
                major: "Navigation & Cartography",
                image: "assets/nam.jpg"
            },
             {
                name: "Vinsmoke Sanji",
                major: "Culinary Arts",
                image: "assets/saj.jpg"
            }
        ];
        


        infoBtn.addEventListener('click', () => {
           
            const randomIndex = Math.floor(Math.random() * studentData.length);
            const randomStudent = studentData[randomIndex];
            
            const randomStudentId = Math.floor(10000 + Math.random() * 90000);
            
            profileImg.src = randomStudent.image;
            studentName.textContent = randomStudent.name;
            studentMajor.textContent = randomStudent.major;
            studentId.textContent = randomStudentId;
           
            
            initialContent.style.display = 'none';
            infoPanel.classList.add('active');
            subjectsPanel.classList.remove('active');
        });

        subjectsBtn.addEventListener('click', () => {
            initialContent.style.display = 'none';
            subjectsPanel.classList.add('active');
            infoPanel.classList.remove('active');
        });