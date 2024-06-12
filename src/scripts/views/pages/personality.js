import questions from "../../data/personality-questions";

const characterDescriptions = {
    si_kancil: {
        story: "Kancil dan Buaya",
        description: "Kancil dikenal sebagai hewan yang cerdik dan pandai mencari solusi dari masalah dengan cepat."
    },
    cindelaras: {
        story: "Cindelaras",
        description: "Cindelaras adalah anak yang jujur dan pemberani, yang selalu berusaha untuk menemukan kebenaran."
    },
    bawang_putih: {
        story: "Bawang Putih dan Bawang Merah",
        description: "Bawang Putih adalah sosok yang sabar dan baik hati, meskipun sering menghadapi kesulitan."
    },
    putri_keong_mas: {
        story: "Putri Keong Mas",
        description: "Putri Keong Mas adalah simbol dari ketabahan dan keajaiban, dengan hati yang baik dan penuh kasih."
    },
    timun_emas: {
        story: "Timun Emas",
        description: "Timun Emas adalah tokoh yang berani dan cerdik, yang selalu mencari cara untuk mengatasi bahaya."
    },
    si_kura_kura: {
        story: "Kura-Kura dan Kelinci",
        description: "Si Kura-Kura adalah lambang kesabaran dan kegigihan. Dia menunjukkan bahwa ketekunan bisa mengalahkan kecepatan."
    },
    si_belalang: {
        story: "Belalang dan Semut",
        description: "Si Belalang adalah simbol dari pentingnya kerja keras dan perencanaan ke depan."
    }
};

const Personality = {
    async render() {
        document.querySelector('footer').style.display = 'none';
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
            si_kancil: 0,
            cindelaras: 0,
            bawang_putih: 0,
            putri_keong_mas: 0,
            timun_emas: 0,
            si_kura_kura: 0,
            si_belalang: 0
        };

        const questionElement = document.getElementById('question');
        const optionsElement = document.getElementById('options');
        const nextButton = document.querySelector('.next');
        const resultElement = document.querySelector('.result');

        function showQuestion(questionIndex) {
            console.log(questionIndex);
            const question = questions[questionIndex];
            console.log(question);
            questionElement.textContent = question.question;
            optionsElement.innerHTML = '';
            for (const [key, answer] of Object.entries(question.answers)) {
                const optionLabel = document.createElement('label');
                optionLabel.classList.add('option');
                optionLabel.innerHTML = `<input type="radio" name="option" value="${key}"><span>${answer}</span>`;
                optionsElement.appendChild(optionLabel);
            }
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

