import questions from "../../data/personality-questions";

const characterDescriptions = {
    Si_kancil: {
        story: "Kancil dan Buaya",
        storyId: "fbsyg3fuveznhnt3",
        description: "Kamu dikenal sebagai orang yang cerdik dan pandai mencari solusi dari masalah dengan cepat. Seperti Kancil, kamu selalu menemukan cara kreatif untuk mengatasi tantangan yang dihadapi. Terus kembangkan kreativitasmu dan jangan ragu untuk berbagi ide-ide brilianmu dengan orang lain."
    },
    Cindelaras: {
        story: "Cindelaras",
        storyId: "dgkemnmpb_prty8f",
        description: "Kamu adalah orang yang jujur dan pemberani, selalu berusaha menemukan kebenaran. Seperti Cindelaras, integritas dan keberanian adalah nilai-nilai utama dalam hidupmu. Tetaplah berpegang pada prinsip-prinsipmu dan jadilah contoh yang baik bagi orang-orang di sekitarmu."
    },
    Bawang_Putih: {
        story: "Bawang Putih dan Bawang Merah",
        storyId: "dg13ng069jgjqbor",
        description: "Kamu adalah sosok yang sabar dan baik hati, meskipun sering menghadapi kesulitan. Seperti Bawang Putih, kebaikan hati dan kesabaranmu membuatmu mampu menghadapi segala rintangan. Jangan biarkan kesulitan meredupkan semangatmu. Teruslah berbuat baik, karena kebaikan akan selalu kembali padamu."
    },
    Candra_Kirana: {
        story: "Putri Keong Mas",
        storyId: "dgmwb4kgkp3bblu9",
        description: "Kamu adalah simbol dari ketabahan dan keajaiban, dengan hati yang baik dan penuh kasih. Seperti Putri Keong Mas, kamu menunjukkan bahwa dengan ketabahan dan cinta, kamu dapat menghadapi segala sesuatu. Percayalah pada keajaiban dan jangan pernah menyerah pada impianmu, tidak peduli seberapa sulit jalannya."
    },
    Timun_Emas: {
        story: "Timun Emas",
        storyId: "dgxlllmqcwmdo1dt",
        description: "Kamu adalah orang yang berani dan cerdik, selalu mencari cara untuk mengatasi bahaya. Seperti Timun Emas, keberanian dan kecerdikanmu membantu kamu menghadapi berbagai tantangan hidup. Terus asah keberanian dan kecerdikanmu, dan ingat bahwa setiap masalah memiliki solusi jika kamu cukup gigih mencarinya."
    },
    Si_Kura_Kura: {
        story: "Kura-Kura dan Kelinci",
        storyId: "fbpznbbcwh54ifzm",
        description: "Kamu adalah lambang kesabaran dan kegigihan. Seperti Si Kura-Kura, kamu menunjukkan bahwa ketekunan bisa mengalahkan kecepatan dan bahwa kerja keras selalu membuahkan hasil. Jangan terburu-buru dalam mengejar tujuanmu. Teruslah bekerja keras dengan tekun dan yakinlah bahwa kesuksesan akan datang pada waktunya."
    },
    Si_Belalang: {
        story: "Belalang dan Semut",
        storyId: "fbt1gpv6ldm3ybak",
        description: "Kamu cenderung menikmati hidup dan kadang-kadang mengabaikan perencanaan ke depan. Seperti Si Belalang, kamu mungkin menemukan dirimu menghadapi kesulitan karena kurangnya persiapan. Belajarlah untuk lebih menghargai pentingnya kerja keras dan perencanaan. Sedikit usaha dan perencanaan sekarang dapat mencegah banyak masalah di masa depan."
    }
};


const Personality = {
    async render() {
        const footer = document.querySelector("footer");
        if (footer) {
            footer.style.display = 'none';
        }
        return `
            <section class="personality-test">
                <div class="test-container">
                    <h1>Karakter Apa Kah Kamu?</h1>
                    <div class="question-box">
                        <p id="question" class="question">Ini pertannyaanya, apakah kamu blablabla</p>
                        <div id="options" class="options">
                            <!-- <label class="option"><input type="radio" name="option" class="option1"><span>Opsi 1</span></label>
                            <label class="option"><input type="radio" name="option" class="option2"><span>Opsi 1</span></label>
                            <label class="option"><input type="radio" name="option" class="option3"><span>Opsi 1</span></label> -->
                        </div>
                        <button class="next">Selanjutnya</button>
                    </div>
                    <div class="result"></div>
                </div>
            </section>
        `;
    },

    async afterRender() {
        console.log("personality page");
        let currentQuestion = 0;
        const scores = {
            Si_kancil: 0,
            Cindelaras: 0,
            Bawang_Putih: 0,
            Candra_Kirana: 0,
            Timun_Emas: 0,
            Si_Kura_Kura: 0,
            Si_Belalang: 0
        };

        const questionElement = document.getElementById('question');
        const optionsElement = document.getElementById('options');
        const nextButton = document.querySelector('.next');
        const resultElement = document.querySelector('.result');

        function showQuestion(questionIndex) {
            const question = questions[questionIndex];
            questionElement.textContent = question.question;
            optionsElement.innerHTML = '';
            for (const [key, answer] of Object.entries(question.answers)) {
                const optionLabel = document.createElement('label');
                optionLabel.classList.add('option');
                optionLabel.innerHTML = `<input type="radio" name="option" value="${key}" tabindex="0"><span>${answer}</span>`;
                optionsElement.appendChild(optionLabel);
            }

            const optionInputs = optionsElement.querySelectorAll('input[type="radio"]');
            optionInputs.forEach((input, index) => {
                input.addEventListener('keydown', (event) => {
                    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
                        optionInputs[(index + 1) % optionInputs.length].focus();
                        
                    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
                        optionInputs[(index - 1 + optionInputs.length) % optionInputs.length].focus();
                        
                    } else if (event.key === 'Enter') {
                        input.checked = true;
                    }
                });
            });
        }

        function calculateResult() {
            let maxScore = 0;
            let character = '';
            for (const [key, value] of Object.entries(scores)) {
                if (value > maxScore) {
                    maxScore = value;
                    character = key;
                }
            }
            return character;
        }

        function showResult() {
            const character = calculateResult();
            const description = characterDescriptions[character];
            
            const questionBoxElement = document.getElementsByClassName('question-box')[0];
            
            if (questionBoxElement) {
                questionBoxElement.style.display = 'none';
            }
        
            console.log(description.story);

            resultElement.innerHTML = `
                <p>Karakter kamu adalah</p>
                <p class="highlight"><b>${character.replace(/_/g, ' ')}</b><p> 
                <p>dari cerita</p>
                <p class="highlight"><b>${description.story}</b></p>
                <p class="desc">${description.description}</p>
                <a class="main-button" href="#/detail/${description.storyId}"><i class="fa-solid fa-book"></i>    Baca Cerita</a>
            `;
            resultElement.style.display = 'block';
        }
        
        nextButton.addEventListener('click', () => {
            const selectedOption = document.querySelector('input[name="option"]:checked');
            if (!selectedOption) {
                alert('Silakan pilih salah satu jawaban!');
                return;
            }

            const answerValue = selectedOption.value;
            const points = questions[currentQuestion].characterPoints[answerValue];
            for (const [character, point] of Object.entries(points)) {
                scores[character] += point;
            }

            currentQuestion++;
            if (currentQuestion < questions.length) {
                showQuestion(currentQuestion);
            } else {
                showResult();
                nextButton.style.display = 'none';
            }
        });

        console.log(currentQuestion);
        showQuestion(currentQuestion);
    },
};

export default Personality;

