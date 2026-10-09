// ==========================================
// 1. DANH SÁCH TỪ VỰNG A1-B2 PHÂN THEO CHỦ ĐỀ
// ==========================================
const fullVocabularyList = [
    // --- 1. Gia đình & Con người ---
    { en: 'Father', type: 'n', ipa: "/'fa:.der/", vi: 'Bố, cha', cat: 'Gia đình & Con người' },
    { en: 'Mother', type: 'n', ipa: '/mao.ǝr/', vi: 'Mẹ', cat: 'Gia đình & Con người' },
    { en: 'Brother', type: 'n', ipa: '/brad.er/', vi: 'Anh/em trai', cat: 'Gia đình & Con người' },
    { en: 'Sister', type: 'n', ipa: "/'sIs.ter/", vi: 'Chị/em gái', cat: 'Gia đình & Con người' },
    { en: 'Parents', type: 'n', ipa: '/peǝ.rants/', vi: 'Bố mẹ, phụ huynh', cat: 'Gia đình & Con người' },
    { en: 'Cousin', type: 'n', ipa: '/kaz.ən/', vi: 'Anh em họ', cat: 'Gia đình & Con người' },
    { en: 'Nephew', type: 'n', ipa: '/nef.ju:/', vi: 'Cháu trai', cat: 'Gia đình & Con người' },
    { en: 'Niece', type: 'n', ipa: '/ni:s/', vi: 'Cháu gái', cat: 'Gia đình & Con người' },
    { en: 'Sibling', type: 'n', ipa: '/ˈsɪb.lɪŋ/', vi: 'Anh chị em ruột', cat: 'Gia đình & Con người' },
    { en: 'Ancestor', type: 'n', ipa: '/ˈæn.ses.tɚ/', vi: 'Tổ tiên', cat: 'Gia đình & Con người' },

    // --- 2. Đồ ăn & Thức uống ---
    { en: 'Breakfast', type: 'n', ipa: "/'brek.fest/", vi: 'Bữa ăn sáng', cat: 'Đồ ăn & Thức uống' },
    { en: 'Bread', type: 'n', ipa: '/bred/', vi: 'Bánh mì', cat: 'Đồ ăn & Thức uống' },
    { en: 'Vegetable', type: 'n', ipa: "/'vedz.tə.bal/", vi: 'Rau củ', cat: 'Đồ ăn & Thức uống' },
    { en: 'Fruit', type: 'n', ipa: '/fru:t/', vi: 'Trái cây, hoa quả', cat: 'Đồ ăn & Thức uống' },
    { en: 'Water', type: 'n', ipa: '/wo:.ter/', vi: 'Nước uống', cat: 'Đồ ăn & Thức uống' },
    { en: 'Coffee', type: 'n', ipa: '/kpf.i/', vi: 'Cà phê', cat: 'Đồ ăn & Thức uống' },
    { en: 'Milk', type: 'n', ipa: '/milk/', vi: 'Sữa', cat: 'Đồ ăn & Thức uống' },
    { en: 'Beef', type: 'n', ipa: '/bi:f/', vi: 'Thịt bò', cat: 'Đồ ăn & Thức uống' },
    { en: 'Seafood', type: 'n', ipa: '/ˈsiː.fuːd/', vi: 'Hải sản', cat: 'Đồ ăn & Thức uống' },
    { en: 'Beverage', type: 'n', ipa: '/ˈbev.ɚ.ɪdʒ/', vi: 'Đồ uống nói chung', cat: 'Đồ ăn & Thức uống' },

    // --- 3. Nghề nghiệp ---
    { en: 'Teacher', type: 'n', ipa: '/ti:.tfər/', vi: 'Giáo viên', cat: 'Nghề nghiệp' },
    { en: 'Doctor', type: 'n', ipa: "/'dpk.tər/", vi: 'Bác sĩ', cat: 'Nghề nghiệp' },
    { en: 'Engineer', type: 'n', ipa: "/en.dzı'nıər/", vi: 'Kỹ sư', cat: 'Nghề nghiệp' },
    { en: 'Accountant', type: 'n', ipa: "/ə'kaʊn.tənt/", vi: 'Kế toán', cat: 'Nghề nghiệp' },
    { en: 'Cashier', type: 'n', ipa: '/kæfıǝr/', vi: 'Nhân viên thu ngân', cat: 'Nghề nghiệp' },
    { en: 'Baker', type: 'n', ipa: "/'ber.kər/", vi: 'Thợ làm bánh', cat: 'Nghề nghiệp' },
    { en: 'Artist', type: 'n', ipa: "/'a:.tist/", vi: 'Nghệ sĩ, họa sĩ', cat: 'Nghề nghiệp' },
    { en: 'Nurse', type: 'n', ipa: '/n3:s/', vi: 'Y tá', cat: 'Nghề nghiệp' },
    { en: 'Lawyer', type: 'n', ipa: '/ˈlɑː.jɚ/', vi: 'Luật sư', cat: 'Nghề nghiệp' },
    { en: 'Architect', type: 'n', ipa: '/ˈɑːr.kə.tekt/', vi: 'Kiến trúc sư', cat: 'Nghề nghiệp' },

    // --- 4. Thời gian & Thời tiết ---
    { en: 'Yesterday', type: 'n', ipa: '/jes.tə.der/', vi: 'Hôm qua', cat: 'Thời gian & Thời tiết' },
    { en: 'Tomorrow', type: 'n', ipa: "/te'mpr.ǝซ/", vi: 'Ngày mai', cat: 'Thời gian & Thời tiết' },
    { en: 'Weather', type: 'n', ipa: "/'wed.ǝr/", vi: 'Thời tiết', cat: 'Thời gian & Thời tiết' },
    { en: 'Sunny', type: 'adj', ipa: "/'san.i/", vi: 'Có nắng', cat: 'Thời gian & Thời tiết' },
    { en: 'Rainy', type: 'adj', ipa: '/rex.ni/', vi: 'Có mưa', cat: 'Thời gian & Thời tiết' },
    { en: 'Cloudy', type: 'adj', ipa: "/'klav.di/", vi: 'Nhiều mây', cat: 'Thời gian & Thời tiết' },
    { en: 'Season', type: 'n', ipa: "/'si:.zen/", vi: 'Mùa trong năm', cat: 'Thời gian & Thời tiết' },
    { en: 'Summer', type: 'n', ipa: "/'som.ar/", vi: 'Mùa hè', cat: 'Thời gian & Thời tiết' },
    { en: 'Forecast', type: 'n', ipa: '/ˈfɔːr.kæst/', vi: 'Dự báo thời tiết', cat: 'Thời gian & Thời tiết' },
    { en: 'Temperature', type: 'n', ipa: '/ˈtem.prə.tʃɚ/', vi: 'Nhiệt độ', cat: 'Thời gian & Thời tiết' },

    // --- 5. Cảm xúc & Tính cách ---
    { en: 'Happy', type: 'adj', ipa: '/hæp.i/', vi: 'Hạnh phúc', cat: 'Cảm xúc & Tính cách' },
    { en: 'Sad', type: 'adj', ipa: '/sæd/', vi: 'Buồn bã', cat: 'Cảm xúc & Tính cách' },
    { en: 'Angry', type: 'adj', ipa: "/'æn.gri/", vi: 'Tức giận', cat: 'Cảm xúc & Tính cách' },
    { en: 'Afraid', type: 'adj', ipa: '/ǝ\'freid/', vi: 'Lo sợ', cat: 'Cảm xúc & Tính cách' },
    { en: 'Kind', type: 'adj', ipa: '/kaind/', vi: 'Tốt bụng', cat: 'Cảm xúc & Tính cách' },
    { en: 'Generous', type: 'adj', ipa: "/'dzen.er.es/", vi: 'Hào phóng', cat: 'Cảm xúc & Tính cách' },
    { en: 'Creative', type: 'adj', ipa: "/kri'er.tv/", vi: 'Sáng tạo', cat: 'Cảm xúc & Tính cách' },
    { en: 'Polite', type: 'adj', ipa: "/pa'lart/", vi: 'Lịch sự', cat: 'Cảm xúc & Tính cách' },
    { en: 'Optimistic', type: 'adj', ipa: '/ˌɑːp.təˈmɪs.tɪk/', vi: 'Lạc quan', cat: 'Cảm xúc & Tính cách' },
    { en: 'Stubborn', type: 'adj', ipa: '/ˈstʌb.ɚn/', vi: 'Bướng bỉnh', cat: 'Cảm xúc & Tính cách' },

    // --- 6. Địa điểm & Giao thông ---
    { en: 'Hospital', type: 'n', ipa: '/hps.pi.tal/', vi: 'Bệnh viện', cat: 'Địa điểm & Giao thông' },
    { en: 'School', type: 'n', ipa: '/sku:l/', vi: 'Trường học', cat: 'Địa điểm & Giao thông' },
    { en: 'Bus', type: 'n', ipa: '/bAs/', vi: 'Xe buýt', cat: 'Địa điểm & Giao thông' },
    { en: 'Airplane', type: 'n', ipa: "/'ee.plein/", vi: 'Máy bay', cat: 'Địa điểm & Giao thông' },
    { en: 'Street', type: 'n', ipa: '/stri:t/', vi: 'Đường phố', cat: 'Địa điểm & Giao thông' },
    { en: 'Station', type: 'n', ipa: "/'ster.Jen/", vi: 'Nhà ga', cat: 'Địa điểm & Giao thông' },
    { en: 'Market', type: 'n', ipa: '/ma:.kit/', vi: 'Chợ', cat: 'Địa điểm & Giao thông' },
    { en: 'Hotel', type: 'n', ipa: "/hǝu'tel/", vi: 'Khách sạn', cat: 'Địa điểm & Giao thông' },
    { en: 'Airport', type: 'n', ipa: '/ˈer.pɔːrt/', vi: 'Sân bay', cat: 'Địa điểm & Giao thông' },
    { en: 'Vehicle', type: 'n', ipa: '/ˈviː.ə.kəl/', vi: 'Phương tiện xe cộ', cat: 'Địa điểm & Giao thông' }
];

// ==========================================
// 2. DANH SÁCH CÂU GIAO TIẾP HẰNG NGÀY
// ==========================================
const sentenceList = [
    { vi: "Xin chào!", ans: ["Hello!", "Hi there!"] },
    { vi: "Buổi sáng tốt lành.", ans: ["Good morning."] },
    { vi: "Buổi chiều tốt lành.", ans: ["Good afternoon."] },
    { vi: "Buổi tối tốt lành.", ans: ["Good evening."] },
    { vi: "Bạn khỏe không?", ans: ["How are you?", "How's it going?"] },
    { vi: "Tôi khỏe, cảm ơn bạn.", ans: ["I'm fine, thank you.", "I'm doing well."] },
    { vi: "Tên bạn là gì?", ans: ["What's your name?", "What is your name?"] },
    { vi: "Tên tôi là Linh.", ans: ["My name is Linh."] },
    { vi: "Rất vui được gặp bạn.", ans: ["Nice to meet you.", "Pleased to meet you."] },
    { vi: "Bạn từ đâu đến?", ans: ["Where are you from?"] },
    { vi: "Tôi đến từ Việt Nam.", ans: ["I'm from Vietnam.", "I come from Vietnam."] },
    { vi: "Bạn bao nhiêu tuổi?", ans: ["How old are you?"] },
    { vi: "Tôi 25 tuổi.", ans: ["I'm 25 years old."] },
    { vi: "Bạn làm nghề gì?", ans: ["What do you do?"] },
    { vi: "Tôi là sinh viên.", ans: ["I am a student."] },
    { vi: "Bạn sống ở đâu?", ans: ["Where do you live?"] },
    { vi: "Tôi sống ở Hà Nội.", ans: ["I live in Hanoi."] },
    { vi: "Lâu rồi không gặp!", ans: ["Long time no see!"] },
    { vi: "Có gì mới không?", ans: ["What's new?"] },
    { vi: "Tạm biệt!", ans: ["Goodbye!", "Bye!"] },
    { vi: "Hẹn gặp lại sau.", ans: ["See you later."] },
    { vi: "Chúc một ngày tốt lành!", ans: ["Have a nice day!"] },
    { vi: "Bây giờ là mấy giờ?", ans: ["What time is it?"] },
    { vi: "Thời tiết hôm nay thế nào?", ans: ["What is the weather like today?"] },
    { vi: "Trời nắng và nóng.", ans: ["It's sunny and hot."] },
    { vi: "Bạn đang làm gì thế?", ans: ["What are you doing?"] },
    { vi: "Tôi đang đọc sách.", ans: ["I'm reading a book."] },
    { vi: "Tôi mệt quá.", ans: ["I'm tired."] },
    { vi: "Tôi đói bụng.", ans: ["I'm hungry."] },
    { vi: "Tôi khát nước.", ans: ["I'm thirsty."] },
    { vi: "Cảm ơn bạn rất nhiều.", ans: ["Thank you very much.", "Thanks a lot."] },
    { vi: "Không có chi.", ans: ["You're welcome."] },
    { vi: "Tôi xin lỗi.", ans: ["I'm sorry."] },
    { vi: "Không sao đâu.", ans: ["It's okay.", "No problem."] },
    { vi: "Tôi có thể giúp gì cho bạn?", ans: ["Can I help you?", "How can I help you?"] },
    { vi: "Cái này bao nhiêu tiền?", ans: ["How much is this?", "How much does it cost?"] }
];

// ==========================================
// 3. ĐẦY ĐỦ 12 THÌ TIẾNG ANH + MẸO + BÀI TẬP
// ==========================================
const grammarTenses = [
    // 1. HIỆN TẠI ĐƠN
    {
        id: 'present_simple',
        name: '1. Thì Hiện Tại Đơn (Present Simple)',
        concept: 'Diễn tả thói quen lặp đi lặp lại, sự thật hiển nhiên hoặc lịch trình cố định.',
        formula: `
            <b>● Với Động từ thường:</b><br>
            - <i>S số nhiều (I/You/We/They/Số nhiều):</i> <b>V-nguyên thể</b> (Phủ định dùng <b>don't + V</b>).<br>
            - <i>S số ít (He/She/It/Tên riêng/Số ít):</i> <b>V(-s/es)</b> (Phủ định dùng <b>doesn't + V</b>).<br><br>
            <b>💡 Mẹo thêm -es:</b> Động từ kết thúc bằng <i>o, s, ch, x, sh</i> (Mẹo: <b>"Ông Sáu Chạy Xe SH"</b>) ➔ Thêm -es (watch ➔ watches, go ➔ goes).
        `,
        signals: 'always, usually, often, sometimes, rarely, never, every day/week/month...',
        exercises: [
            { question: 'She _____ (go) to school by bus every day.', options: ['go', 'goes', 'going', 'is go'], answer: 'goes', explanation: 'Chủ ngữ "She" số ít ➔ "go" tận cùng là "o" thêm -es.' },
            { question: 'They _____ (not / like) eating spicy food.', options: ['don\'t like', 'doesn\'t like', 'not like', 'aren\'t like'], answer: 'don\'t like', explanation: 'Chủ ngữ "They" số nhiều ➔ dùng "don\'t".' },
            { question: 'Water _____ (boil) at 100 degrees Celsius.', options: ['boil', 'boils', 'is boiling', 'boiled'], answer: 'boils', explanation: 'Sự thật hiển nhiên, "Water" số ít ➔ boils.' },
            { question: 'He usually _____ (get) up at 6 AM.', options: ['get', 'gets', 'getting', 'is getting'], answer: 'gets', explanation: 'Thói quen, chủ ngữ "He" ➔ gets.' },
            { question: 'Do you _____ (play) football on Sundays?', options: ['play', 'plays', 'playing', 'played'], answer: 'play', explanation: 'Sau trợ động từ "Do" dùng V nguyên thể.' }
        ]
    },

    // 2. HIỆN TẠI TIẾP DIỄN
    {
        id: 'present_continuous',
        name: '2. Thì Hiện Tại Tiếp Diễn (Present Continuous)',
        concept: 'Diễn tả hành động đang xảy ra ngay tại thời điểm nói.',
        formula: '<b>Cấu trúc:</b> S + am/is/are + V-ing<br>- I đi với <b>am</b> | He/She/It/Số ít đi với <b>is</b> | You/We/They/Số nhiều đi với <b>are</b>',
        signals: 'now, right now, at the moment, Look!, Listen!, Be quiet!...',
        exercises: [
            { question: 'Look! The baby _____ (cry).', options: ['is crying', 'cries', 'cried', 'are crying'], answer: 'is crying', explanation: 'Dấu hiệu "Look!", chủ ngữ số ít ➔ is crying.' },
            { question: 'We _____ (play) football right now.', options: ['are playing', 'is playing', 'play', 'were playing'], answer: 'are playing', explanation: 'Dấu hiệu "right now", "We" ➔ are playing.' },
            { question: 'Listen! Someone _____ (knock) on the door.', options: ['is knocking', 'knocks', 'are knocking', 'knocked'], answer: 'is knocking', explanation: 'Hành động đang xảy ra ➔ is knocking.' },
            { question: 'They _____ (not / watch) TV at the moment.', options: ['aren\'t watching', 'isn\'t watching', 'don\'t watch', 'not watching'], answer: 'aren\'t watching', explanation: 'Chủ ngữ "They" ➔ aren\'t watching.' },
            { question: 'What _____ you doing now?', options: ['are', 'is', 'do', 'have'], answer: 'are', explanation: 'Chủ ngữ "you" trong thì tiếp diễn ➔ are.' }
        ]
    },

    // 3. HIỆN TẠI HOÀN THÀNH
    {
        id: 'present_perfect',
        name: '3. Thì Hiện Tại Hoàn Thành (Present Perfect)',
        concept: 'Diễn tả hành động xảy ra trong quá khứ kéo dài đến hiện tại hoặc không rõ thời gian.',
        formula: '<b>Cấu trúc:</b> S + have/has + V3/ed<br>- I/You/We/They/Số nhiều + <b>have</b><br>- He/She/It/Số ít + <b>has</b>',
        signals: 'already, yet, just, ever, never, since, for, so far, recently...',
        exercises: [
            { question: 'I _____ (live) in Hanoi for 5 years.', options: ['have lived', 'has lived', 'lived', 'am living'], answer: 'have lived', explanation: 'Dấu hiệu "for 5 years", "I" ➔ have lived.' },
            { question: 'She _____ (not / finish) her homework yet.', options: ['hasn\'t finished', 'haven\'t finished', 'didn\'t finish', 'don\'t finish'], answer: 'hasn\'t finished', explanation: 'Dấu hiệu "yet", "She" ➔ hasn\'t finished.' },
            { question: 'Have you ever _____ (see) a volcano?', options: ['seen', 'saw', 'see', 'seeing'], answer: 'seen', explanation: 'Cấu trúc Have + S + ever + V3 (seen).' },
            { question: 'He _____ (just / leave) the office.', options: ['has just left', 'have just left', 'just left', 'is leaving'], answer: 'has just left', explanation: 'Dấu hiệu "just", "He" ➔ has just left.' },
            { question: 'We _____ (be) friends since 2015.', options: ['have been', 'has been', 'were', 'are'], answer: 'have been', explanation: 'Dấu hiệu "since 2015" ➔ have been.' }
        ]
    },

    // 4. HIỆN TẠI HOÀN THÀNH TIẾP DIỄN
    {
        id: 'present_perfect_continuous',
        name: '4. Thì Hiện Tại Hoàn Thành Tiếp Diễn (Present Perfect Continuous)',
        concept: 'Nhấn mạnh sự liên tục của hành động kéo dài từ quá khứ tới hiện tại.',
        formula: '<b>Cấu trúc:</b> S + have/has + been + V-ing',
        signals: 'all day, all morning, for (+ khoảng thời gian), since (+ mốc thời gian)...',
        exercises: [
            { question: 'He is tired because he _____ (work) all day.', options: ['has been working', 'have been working', 'is working', 'worked'], answer: 'has been working', explanation: 'Hành động liên tục "all day" gây ra kết quả ở hiện tại ➔ has been working.' },
            { question: 'They _____ (wait) for the bus for 2 hours.', options: ['have been waiting', 'has been waiting', 'are waiting', 'were waiting'], answer: 'have been waiting', explanation: 'Hành động chờ đợi kéo dài 2 tiếng ➔ have been waiting.' }
        ]
    },

    // 5. QUÁ KHỨ ĐƠN
    {
        id: 'past_simple',
        name: '5. Thì Quá Khứ Đơn (Past Simple)',
        concept: 'Diễn tả hành động đã xảy ra và kết thúc hoàn toàn trong quá khứ.',
        formula: '<b>Khẳng định:</b> S + V2/ed (To Be: was/were)<br><b>Phủ định:</b> S + didn\'t + V-bare',
        signals: 'yesterday, ago, last night/week/year, in 1999...',
        exercises: [
            { question: 'I _____ (visit) my grandparents yesterday.', options: ['visited', 'visit', 'visiting', 'have visited'], answer: 'visited', explanation: 'Dấu hiệu "yesterday" ➔ visited.' },
            { question: 'They _____ (not / go) to the party last night.', options: ['didn\'t go', 'don\'t go', 'were not go', 'didn\'t went'], answer: 'didn\'t go', explanation: 'Phủ định quá khứ dùng "didn\'t" + V nguyên thể.' },
            { question: 'Where _____ you last Sunday?', options: ['were', 'was', 'are', 'did'], answer: 'were', explanation: 'Chủ ngữ "you" với To Be quá khứ ➔ were.' },
            { question: 'She _____ (buy) a new car two days ago.', options: ['bought', 'buyed', 'buys', 'has bought'], answer: 'bought', explanation: 'V2 của "buy" là "bought".' }
        ]
    },

    // 6. QUÁ KHỨ TIẾP DIỄN
    {
        id: 'past_continuous',
        name: '6. Thì Quá Khứ Tiếp Diễn (Past Continuous)',
        concept: 'Diễn tả hành động đang xảy ra tại một thời điểm cụ thể trong quá khứ.',
        formula: '<b>Cấu trúc:</b> S + was/were + V-ing<br>- I/He/She/It/Số ít + <b>was</b> | You/We/They/Số nhiều + <b>were</b>',
        signals: 'at 8 PM yesterday, at this time last week, when, while...',
        exercises: [
            { question: 'I _____ (study) at 8 PM yesterday.', options: ['was studying', 'were studying', 'studied', 'am studying'], answer: 'was studying', explanation: 'Thời điểm cụ thể trong quá khứ "at 8 PM yesterday" ➔ was studying.' },
            { question: 'While we _____ (have) dinner, the phone rang.', options: ['were having', 'was having', 'had', 'are having'], answer: 'were having', explanation: 'Hành động đang diễn ra trong quá khứ ➔ were having.' },
            { question: 'She _____ (not / sleep) when I called.', options: ['wasn\'t sleeping', 'weren\'t sleeping', 'didn\'t sleep', 'isn\'t sleeping'], answer: 'wasn\'t sleeping', explanation: 'Chủ ngữ "She" ➔ wasn\'t sleeping.' }
        ]
    },

    // 7. QUÁ KHỨ HOÀN THÀNH
    {
        id: 'past_perfect',
        name: '7. Thì Quá Khứ Hoàn Thành (Past Perfect)',
        concept: 'Diễn tả hành động xảy ra và hoàn thành TRƯỚC một hành động khác trong quá khứ.',
        formula: '<b>Cấu trúc:</b> S + had + V3/ed',
        signals: 'before, after, by the time, as soon as...',
        exercises: [
            { question: 'By the time I arrived, the train _____ (leave).', options: ['had left', 'has left', 'left', 'was leaving'], answer: 'had left', explanation: 'Tàu chạy trước khi tôi đến ➔ had left.' },
            { question: 'She went home after she _____ (finish) her work.', options: ['had finished', 'finished', 'has finished', 'finishes'], answer: 'had finished', explanation: 'Sau "after" dùng Quá khứ hoàn thành ➔ had finished.' }
        ]
    },

    // 8. QUÁ KHỨ HOÀN THÀNH TIẾP DIỄN
    {
        id: 'past_perfect_continuous',
        name: '8. Thì Quá Khứ Hoàn Thành Tiếp Diễn (Past Perfect Continuous)',
        concept: 'Nhấn mạnh quá trình diễn ra liên tục của hành động trước một thời điểm quá khứ.',
        formula: '<b>Cấu trúc:</b> S + had + been + V-ing',
        signals: 'until then, by the time, for (+ khoảng thời gian) trước mốc quá khứ...',
        exercises: [
            { question: 'They _____ (drive) for 5 hours before they stopped for lunch.', options: ['had been driving', 'have been driving', 'were driving', 'drove'], answer: 'had been driving', explanation: 'Tính liên tục của hành động lái xe kéo dài 5 tiếng trước khi dừng lại ➔ had been driving.' }
        ]
    },

    // 9. TƯƠNG LAI ĐƠN
    {
        id: 'future_simple',
        name: '9. Thì Tương Lai Đơn (Future Simple)',
        concept: 'Diễn tả quyết định bộc phát ngay lúc nói hoặc dự đoán không có căn cứ.',
        formula: '<b>Cấu trúc:</b> S + will + V-bare (Phủ định: won\'t + V-bare)',
        signals: 'tomorrow, next week/month, in the future, I think, I promise...',
        exercises: [
            { question: 'I think it _____ (rain) tomorrow.', options: ['will rain', 'is raining', 'rains', 'rained'], answer: 'will rain', explanation: 'Dự đoán không căn cứ kèm "I think" ➔ will rain.' },
            { question: 'Don\'t worry, I _____ (help) you.', options: ['will help', 'helped', 'am helping', 'help'], answer: 'will help', explanation: 'Quyết định bộc phát / Lời hứa ➔ will help.' },
            { question: 'They _____ (not / come) to the party tomorrow.', options: ['won\'t come', 'don\'t come', 'didn\'t come', 'aren\'t come'], answer: 'won\'t come', explanation: 'Phủ định tương lai đơn ➔ won\'t come.' }
        ]
    },

    // 10. TƯƠNG LAI TIẾP DIỄN
    {
        id: 'future_continuous',
        name: '10. Thì Tương Lai Tiếp Diễn (Future Continuous)',
        concept: 'Diễn tả hành động sẽ đang diễn ra tại một thời điểm cụ thể trong tương lai.',
        formula: '<b>Cấu trúc:</b> S + will + be + V-ing',
        signals: 'at this time tomorrow, at 9 AM next Sunday...',
        exercises: [
            { question: 'At 10 AM tomorrow, I _____ (take) an English exam.', options: ['will be taking', 'will take', 'am taking', 'have taken'], answer: 'will be taking', explanation: 'Mốc thời gian xác định trong tương lai ➔ will be taking.' }
        ]
    },

    // 11. TƯƠNG LAI HOÀN THÀNH
    {
        id: 'future_perfect',
        name: '11. Thì Tương Lai Hoàn Thành (Future Perfect)',
        concept: 'Diễn tả hành động sẽ hoàn thành TRƯỚC một thời điểm trong tương lai.',
        formula: '<b>Cấu trúc:</b> S + will + have + V3/ed',
        signals: 'by tomorrow, by the end of this month, by 2030...',
        exercises: [
            { question: 'By next month, we _____ (finish) this project.', options: ['will have finished', 'will finish', 'finished', 'are finishing'], answer: 'will have finished', explanation: 'Dấu hiệu "By next month" ➔ dùng Future Perfect: will have finished.' }
        ]
    },

    // 12. TƯƠNG LAI HOÀN THÀNH TIẾP DIỄN
    {
        id: 'future_perfect_continuous',
        name: '12. Thì Tương Lai Hoàn Thành Tiếp Diễn (Future Perfect Continuous)',
        concept: 'Nhấn mạnh khoảng thời gian kéo dài liên tục của hành động tính đến một mốc tương lai.',
        formula: '<b>Cấu trúc:</b> S + will + have + been + V-ing',
        signals: 'by the time..., by next year... for (+ khoảng thời gian)...',
        exercises: [
            { question: 'By November, I _____ (work) at this company for 3 years.', options: ['will have been working', 'will be working', 'have worked', 'will work'], answer: 'will have been working', explanation: 'Tính liên tục đến mốc "By November" ➔ will have been working.' }
        ]
    }
];