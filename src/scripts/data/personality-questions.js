const questions = [
    {
        question: "Bagaimana cara kamu menghadapi masalah yang sulit dan membutuhkan kecerdikan?",
        answers: {
            a: "Mencari solusi dengan cepat dan cerdas",
            b: "Mendiskusikan dengan orang lain untuk mendapatkan ide",
            c: "Menghindari masalah tersebut jika memungkinkan",
            d: "Menunggu hingga ada solusi yang lebih mudah"
        },
        characterPoints: {
            a: { Si_kancil: 4, Cindelaras: 3, Bawang_Putih: 2, Candra_Kirana: 1, Timun_Emas: 2, Si_Kura_Kura: 1, Si_Belalang: 3 },
            b: { Si_kancil: 3, Cindelaras: 4, Bawang_Putih: 2, Candra_Kirana: 1, Timun_Emas: 3, Si_Kura_Kura: 2, Si_Belalang: 4 },
            c: { Si_kancil: 2, Cindelaras: 1, Bawang_Putih: 3, Candra_Kirana: 4, Timun_Emas: 1, Si_Kura_Kura: 3, Si_Belalang: 2 },
            d: { Si_kancil: 1, Cindelaras: 2, Bawang_Putih: 4, Candra_Kirana: 3, Timun_Emas: 4, Si_Kura_Kura: 4, Si_Belalang: 1 }
        }
    },
    {
        question: "Bagaimana kamu menunjukkan kesabaran saat menghadapi masalah yang berkepanjangan?",
        answers: {
            a: "Tetap tenang dan mencari solusi perlahan-lahan",
            b: "Mencari bantuan dari orang lain",
            c: "Mengeluh tapi tetap menghadapinya",
            d: "Menghindari masalah sebaik mungkin"
        },
        characterPoints: {
            a: { Si_kancil: 3, Cindelaras: 2, Bawang_Putih: 4, Candra_Kirana: 3, Timun_Emas: 2, Si_Kura_Kura: 4, Si_Belalang: 1 },
            b: { Si_kancil: 2, Cindelaras: 3, Bawang_Putih: 3, Candra_Kirana: 4, Timun_Emas: 3, Si_Kura_Kura: 2, Si_Belalang: 4 },
            c: { Si_kancil: 4, Cindelaras: 1, Bawang_Putih: 2, Candra_Kirana: 2, Timun_Emas: 4, Si_Kura_Kura: 3, Si_Belalang: 2 },
            d: { Si_kancil: 1, Cindelaras: 4, Bawang_Putih: 1, Candra_Kirana: 1, Timun_Emas: 1, Si_Kura_Kura: 1, Si_Belalang: 3 }
        }
    },
    {
        question: "Apa yang kamu lakukan ketika menghadapi tantangan besar dalam hidup?",
        answers: {
            a: "Menghadapinya dengan penuh semangat dan keberanian",
            b: "Meminta bantuan dari orang lain",
            c: "Mengabaikan tantangan tersebut",
            d: "Menyerah jika terlalu sulit"
        },
        characterPoints: {
            a: { Si_kancil: 3, Cindelaras: 4, Bawang_Putih: 3, Candra_Kirana: 2, Timun_Emas: 4, Si_Kura_Kura: 2, Si_Belalang: 3 },
            b: { Si_kancil: 2, Cindelaras: 3, Bawang_Putih: 2, Candra_Kirana: 4, Timun_Emas: 3, Si_Kura_Kura: 3, Si_Belalang: 4 },
            c: { Si_kancil: 4, Cindelaras: 2, Bawang_Putih: 4, Candra_Kirana: 3, Timun_Emas: 2, Si_Kura_Kura: 1, Si_Belalang: 1 },
            d: { Si_kancil: 1, Cindelaras: 1, Bawang_Putih: 1, Candra_Kirana: 1, Timun_Emas: 1, Si_Kura_Kura: 4, Si_Belalang: 2 }
        }
    },
    {
        question: "Bagaimana kamu menunjukkan kesetiaanmu dalam hubungan atau pekerjaan?",
        answers: {
            a: "Selalu ada untuk orang lain dan siap membantu kapan saja",
            b: "Memberikan yang terbaik dalam setiap tugas",
            c: "Mengikuti aturan dan menjaga komitmen",
            d: "Mencari jalan untuk menguntungkan diri sendiri"
        },
        characterPoints: {
            a: { Si_kancil: 2, Cindelaras: 3, Bawang_Putih: 4, Candra_Kirana: 4, Timun_Emas: 2, Si_Kura_Kura: 3, Si_Belalang: 1 },
            b: { Si_kancil: 3, Cindelaras: 4, Bawang_Putih: 3, Candra_Kirana: 2, Timun_Emas: 3, Si_Kura_Kura: 4, Si_Belalang: 2 },
            c: { Si_kancil: 4, Cindelaras: 2, Bawang_Putih: 2, Candra_Kirana: 3, Timun_Emas: 4, Si_Kura_Kura: 2, Si_Belalang: 3 },
            d: { Si_kancil: 1, Cindelaras: 1, Bawang_Putih: 1, Candra_Kirana: 1, Timun_Emas: 1, Si_Kura_Kura: 1, Si_Belalang: 4 }
        }
    },
    {
        question: "Bagaimana kamu menunjukkan keberanianmu saat menghadapi tantangan?",
        answers: {
            a: "Mengambil risiko dan bertindak dengan cepat",
            b: "Merencanakan langkah-langkah yang diperlukan",
            c: "Mengikuti arahan dan saran orang lain",
            d: "Menunggu waktu yang tepat untuk bertindak"
        },
        characterPoints: {
            a: { Si_kancil: 4, Cindelaras: 3, Bawang_Putih: 2, Candra_Kirana: 1, Timun_Emas: 4, Si_Kura_Kura: 2, Si_Belalang: 3 },
            b: { Si_kancil: 2, Cindelaras: 4, Bawang_Putih: 3, Candra_Kirana: 3, Timun_Emas: 3, Si_Kura_Kura: 4, Si_Belalang: 4 },
            c: { Si_kancil: 3, Cindelaras: 2, Bawang_Putih: 4, Candra_Kirana: 4, Timun_Emas: 2, Si_Kura_Kura: 1, Si_Belalang: 1 },
            d: { Si_kancil: 1, Cindelaras: 1, Bawang_Putih: 1, Candra_Kirana: 2, Timun_Emas: 1, Si_Kura_Kura: 3, Si_Belalang: 2 }
        }
    },
    {
        question: "Bagaimana kamu menghadapi orang yang selalu memperlakukanmu dengan tidak baik?",
        answers: {
            a: "Mengabaikan mereka dan fokus pada dirimu sendiri",
            b: "Mencoba memahami alasan di balik perilaku mereka",
            c: "Melawan dan membela diri",
            d: "Mencari bantuan dari orang lain"
        },
        characterPoints: {
            a: { Si_kancil: 3, Cindelaras: 2, Bawang_Putih: 4, Candra_Kirana: 3, Timun_Emas: 2, Si_Kura_Kura: 1, Si_Belalang: 2 },
            b: { Si_kancil: 2, Cindelaras: 4, Bawang_Putih: 3, Candra_Kirana: 4, Timun_Emas: 3, Si_Kura_Kura: 3, Si_Belalang: 4 },
            c: { Si_kancil: 4, Cindelaras: 3, Bawang_Putih: 2, Candra_Kirana: 2, Timun_Emas: 4, Si_Kura_Kura: 2, Si_Belalang: 1 },
            d: { Si_kancil: 1, Cindelaras: 1, Bawang_Putih: 1, Candra_Kirana: 1, Timun_Emas: 1, Si_Kura_Kura: 4, Si_Belalang: 3 }
        }
    },
    {
        question: "Bagaimana kamu menunjukkan kasih sayang kepada orang yang kamu cintai?",
        answers: {
            a: "Memberikan waktu dan perhatian sepenuhnya",
            b: "Membantu mereka dalam setiap kebutuhan",
            c: "Memberikan hadiah atau kejutan",
            d: "Menunjukkan rasa cinta dengan tindakan kecil sehari-hari"
        },
        characterPoints: {
            a: { Si_kancil: 2, Cindelaras: 3, Bawang_Putih: 3, Candra_Kirana: 4, Timun_Emas: 2, Si_Kura_Kura: 4, Si_Belalang: 1 },
            b: { Si_kancil: 3, Cindelaras: 4, Bawang_Putih: 4, Candra_Kirana: 3, Timun_Emas: 3, Si_Kura_Kura: 2, Si_Belalang: 3 },
            c: { Si_kancil: 4, Cindelaras: 2, Bawang_Putih: 2, Candra_Kirana: 2, Timun_Emas: 4, Si_Kura_Kura: 1, Si_Belalang: 4 },
            d: { Si_kancil: 1, Cindelaras: 1, Bawang_Putih: 1, Candra_Kirana: 1, Timun_Emas: 1, Si_Kura_Kura: 3, Si_Belalang: 2 }
        }
    }
];

export default questions;
