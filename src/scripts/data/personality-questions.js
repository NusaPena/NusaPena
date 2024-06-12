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
            a: { si_kancil: 4, cindelaras: 3, bawang_putih: 2, putri_keong_mas: 1, timun_emas: 2, si_kura_kura: 1, si_belalang: 3 },
            b: { si_kancil: 3, cindelaras: 4, bawang_putih: 2, putri_keong_mas: 1, timun_emas: 3, si_kura_kura: 2, si_belalang: 4 },
            c: { si_kancil: 2, cindelaras: 1, bawang_putih: 3, putri_keong_mas: 4, timun_emas: 1, si_kura_kura: 3, si_belalang: 2 },
            d: { si_kancil: 1, cindelaras: 2, bawang_putih: 4, putri_keong_mas: 3, timun_emas: 4, si_kura_kura: 4, si_belalang: 1 }
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
            a: { si_kancil: 3, cindelaras: 2, bawang_putih: 4, putri_keong_mas: 3, timun_emas: 2, si_kura_kura: 4, si_belalang: 1 },
            b: { si_kancil: 2, cindelaras: 3, bawang_putih: 3, putri_keong_mas: 4, timun_emas: 3, si_kura_kura: 2, si_belalang: 4 },
            c: { si_kancil: 4, cindelaras: 1, bawang_putih: 2, putri_keong_mas: 2, timun_emas: 4, si_kura_kura: 3, si_belalang: 2 },
            d: { si_kancil: 1, cindelaras: 4, bawang_putih: 1, putri_keong_mas: 1, timun_emas: 1, si_kura_kura: 1, si_belalang: 3 }
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
            a: { si_kancil: 3, cindelaras: 4, bawang_putih: 3, putri_keong_mas: 2, timun_emas: 4, si_kura_kura: 2, si_belalang: 3 },
            b: { si_kancil: 2, cindelaras: 3, bawang_putih: 2, putri_keong_mas: 4, timun_emas: 3, si_kura_kura: 3, si_belalang: 4 },
            c: { si_kancil: 4, cindelaras: 2, bawang_putih: 4, putri_keong_mas: 3, timun_emas: 2, si_kura_kura: 1, si_belalang: 1 },
            d: { si_kancil: 1, cindelaras: 1, bawang_putih: 1, putri_keong_mas: 1, timun_emas: 1, si_kura_kura: 4, si_belalang: 2 }
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
            a: { si_kancil: 2, cindelaras: 3, bawang_putih: 4, putri_keong_mas: 4, timun_emas: 2, si_kura_kura: 3, si_belalang: 1 },
            b: { si_kancil: 3, cindelaras: 4, bawang_putih: 3, putri_keong_mas: 2, timun_emas: 3, si_kura_kura: 4, si_belalang: 2 },
            c: { si_kancil: 4, cindelaras: 2, bawang_putih: 2, putri_keong_mas: 3, timun_emas: 4, si_kura_kura: 2, si_belalang: 3 },
            d: { si_kancil: 1, cindelaras: 1, bawang_putih: 1, putri_keong_mas: 1, timun_emas: 1, si_kura_kura: 1, si_belalang: 4 }
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
            a: { si_kancil: 4, cindelaras: 3, bawang_putih: 2, putri_keong_mas: 1, timun_emas: 4, si_kura_kura: 2, si_belalang: 3 },
            b: { si_kancil: 2, cindelaras: 4, bawang_putih: 3, putri_keong_mas: 3, timun_emas: 3, si_kura_kura: 4, si_belalang: 4 },
            c: { si_kancil: 3, cindelaras: 2, bawang_putih: 4, putri_keong_mas: 4, timun_emas: 2, si_kura_kura: 1, si_belalang: 1 },
            d: { si_kancil: 1, cindelaras: 1, bawang_putih: 1, putri_keong_mas: 2, timun_emas: 1, si_kura_kura: 3, si_belalang: 2 }
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
            a: { si_kancil: 3, cindelaras: 2, bawang_putih: 4, putri_keong_mas: 3, timun_emas: 2, si_kura_kura: 1, si_belalang: 2 },
            b: { si_kancil: 2, cindelaras: 4, bawang_putih: 3, putri_keong_mas: 4, timun_emas: 3, si_kura_kura: 3, si_belalang: 4 },
            c: { si_kancil: 4, cindelaras: 3, bawang_putih: 2, putri_keong_mas: 2, timun_emas: 4, si_kura_kura: 2, si_belalang: 1 },
            d: { si_kancil: 1, cindelaras: 1, bawang_putih: 1, putri_keong_mas: 1, timun_emas: 1, si_kura_kura: 4, si_belalang: 3 }
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
            a: { si_kancil: 2, cindelaras: 3, bawang_putih: 3, putri_keong_mas: 4, timun_emas: 2, si_kura_kura: 4, si_belalang: 1 },
            b: { si_kancil: 3, cindelaras: 4, bawang_putih: 4, putri_keong_mas: 3, timun_emas: 3, si_kura_kura: 2, si_belalang: 3 },
            c: { si_kancil: 4, cindelaras: 2, bawang_putih: 2, putri_keong_mas: 2, timun_emas: 4, si_kura_kura: 1, si_belalang: 4 },
            d: { si_kancil: 1, cindelaras: 1, bawang_putih: 1, putri_keong_mas: 1, timun_emas: 1, si_kura_kura: 3, si_belalang: 2 }
        }
    }
];

export default questions;
