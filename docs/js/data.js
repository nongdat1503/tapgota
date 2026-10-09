// ==========================================
// 1. DANH SÁCH TỪ VỰNG (Phân loại theo Chủ đề)
// ==========================================
const fullVocabularyList = [
    // --- Chủ đề: Giáo dục ---
    { en: 'assignment', type: 'n', ipa: '/əˈsaɪn.mənt/', vi: 'bài tập tiểu luận', cat: 'Giáo dục' },
    { en: 'concentrate', type: 'v', ipa: '/ˈkɑːn.sən.treɪt/', vi: 'tập trung', cat: 'Giáo dục' },
    { en: 'curriculum', type: 'n', ipa: '/kəˈrɪk.jə.ləm/', vi: 'chương trình giảng dạy', cat: 'Giáo dục' },
    { en: 'graduate', type: 'v', ipa: '/ˈɡrædʒ.u.eɪt/', vi: 'tốt nghiệp', cat: 'Giáo dục' },
    { en: 'internship', type: 'n', ipa: '/ˈɪn.tɜːrn.ʃɪp/', vi: 'kỳ thực tập', cat: 'Giáo dục' },
    { en: 'practice', type: 'n', ipa: '/ˈpræk.tɪs/', vi: 'bài luyện tập', cat: 'Giáo dục' },
    { en: 'qualification', type: 'n', ipa: '/ˌkwɑː.lə.fəˈkeɪ.ʃən/', vi: 'trình độ chuyên môn', cat: 'Giáo dục' },
    { en: 'syllabus', type: 'n', ipa: '/ˈsɪl.ə.bəs/', vi: 'giáo trình', cat: 'Giáo dục' },

    // --- Chủ đề: Thiên nhiên ---
    { en: 'atmosphere', type: 'n', ipa: '/ˈæt.mə.sfɪr/', vi: 'khí quyển', cat: 'Thiên nhiên' },
    { en: 'environment', type: 'n', ipa: '/ɪnˈvaɪ.rən.mənt/', vi: 'môi trường', cat: 'Thiên nhiên' },
    { en: 'mountain', type: 'n', ipa: '/ˈmaʊn.tən/', vi: 'núi, dãy núi', cat: 'Thiên nhiên' },
    { en: 'waterfall', type: 'n', ipa: '/ˈwɑː.t̬ɚ.fɑːl/', vi: 'thác nước', cat: 'Thiên nhiên' },

    // --- Chủ đề: Tính cách ---
    { en: 'ambitious', type: 'adj', ipa: '/æmˈbɪʃ.əs/', vi: 'tham vọng', cat: 'Tính cách' },
    { en: 'courageous', type: 'adj', ipa: '/kəˈreɪ.dʒəs/', vi: 'can đảm', cat: 'Tính cách' },
    { en: 'diligent', type: 'adj', ipa: '/ˈdɪl.ə.dʒənt/', vi: 'siêng năng, cần cù', cat: 'Tính cách' },

    // --- Chủ đề: Thực phẩm ---
    { en: 'croissant', type: 'n', ipa: '/kwɑːˈsɑːŋ/', vi: 'bánh sừng bò', cat: 'Thực phẩm' },
    { en: 'hamburger', type: 'n', ipa: '/ˈhæmˌbɝː.ɡɚ/', vi: 'bánh kẹp thịt', cat: 'Thực phẩm' }
];

// ==========================================
// 2. DANH SÁCH CÂU GIAO TIẾP
// ==========================================
const sentenceList = [
    { vi: "Xin chào.", ans: ["Hello.", "Hi."] },
    { vi: "Cảm ơn.", ans: ["Thank you.", "Thanks."] },
    { vi: "Xin chào, tôi tên là Long.", ans: ["Hello, my name is Long.", "Hi, my name is Long.", "Hello, I am Long."] },
    { vi: "Rất vui được gặp bạn.", ans: ["Nice to meet you.", "It is nice to meet you.", "Pleased to meet you."] },
    { vi: "Bạn khỏe không?", ans: ["How are you?", "How are you doing?"] }
];

// ==========================================
// 3. LÝ THUYẾT & BÀI TẬP CÁC THÌ TIẾNG ANH
// ==========================================
const grammarTenses = [
    {
        id: 'present_simple',
        name: 'Thì Hiện Tại Đơn (Present Simple)',
        concept: 'Diễn tả hành động lặp đi lặp lại theo thói quen, một sự thật hiển nhiên hoặc một lịch trình cố định.',
        formula: '<b>Khẳng định:</b> S + V(s/es)<br><b>Phủ định:</b> S + do/does + not + V_bare<br><b>Nghi vấn:</b> Do/Does + S + V_bare?',
        signals: 'always, usually, often, sometimes, everyday, every week...',
        exercises: [
            {
                question: 'She _____ (go) to school by bus every day.',
                options: ['go', 'goes', 'going', 'is go'],
                answer: 'goes',
                explanation: 'Chủ ngữ "She" đi với động từ thêm "es" (goes).'
            },
            {
                question: 'They _____ (not / like) eating spicy food.',
                options: ['dont like', 'doesnt like', 'not like', 'are not like'],
                answer: 'dont like',
                explanation: 'Chủ ngữ "They" dùng trợ động từ "don\'t" (do not).'
            },
            {
                question: 'The sun _____ (rise) in the East.',
                options: ['rises', 'rise', 'is rising', 'rose'],
                answer: 'rises',
                explanation: 'Sự thật hiển nhiên, chủ ngữ ngôi thứ 3 số ít "The sun" chia "rises".'
            }
        ]
    },
    {
        id: 'present_continuous',
        name: 'Thì Hiện Tại Tiếp Diễn (Present Continuous)',
        concept: 'Diễn tả hành động đang diễn ra ngay tại thời điểm nói hoặc một kế hoạch đã lên lịch trong tương lai gần.',
        formula: '<b>Khẳng định:</b> S + am/is/are + V-ing<br><b>Phủ định:</b> S + am/is/are + not + V-ing<br><b>Nghi vấn:</b> Am/Is/Are + S + V-ing?',
        signals: 'now, at the moment, right now, Look!, Listen!...',
        exercises: [
            {
                question: 'Look! The baby _____ (cry).',
                options: ['is crying', 'cries', 'cried', 'are crying'],
                answer: 'is crying',
                explanation: 'Có dấu hiệu "Look!", chủ ngữ "The baby" chia "is crying".'
            },
            {
                question: 'We _____ (play) football right now.',
                options: ['are playing', 'is playing', 'play', 'were playing'],
                answer: 'are playing',
                explanation: 'Dấu hiệu "right now", chủ ngữ "We" dùng "are playing".'
            }
        ]
    },
    {
        id: 'past_simple',
        name: 'Thì Quá Khứ Đơn (Past Simple)',
        concept: 'Diễn tả hành động đã xảy ra và kết thúc hoàn toàn trong quá khứ.',
        formula: '<b>Khẳng định:</b> S + V2/ed<br><b>Phủ định:</b> S + did not + V_bare<br><b>Nghi vấn:</b> Did + S + V_bare?',
        signals: 'yesterday, ago, last week, last year, in 1999...',
        exercises: [
            {
                question: 'I _____ (visit) my grandparents yesterday.',
                options: ['visited', 'visit', 'visiting', 'have visited'],
                answer: 'visited',
                explanation: 'Dấu hiệu "yesterday", thêm "ed" vào sau động từ "visit".'
            },
            {
                question: 'They _____ (not / go) to the party last night.',
                options: ['didnt go', 'dont go', 'were not go', 'didnt went'],
                answer: 'didnt go',
                explanation: 'Thì quá khứ đơn dạng phủ định dùng "didn\'t" + động từ nguyên thể.'
            }
        ]
    }
];