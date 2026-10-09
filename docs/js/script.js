let canvas, ctx, scoreEl, categoryEl, menuOverlay, selectCategoryOverlay, learnOverlay, selectTenseOverlay, tenseDetailOverlay, categoryGrid, selectCategoryGrid, tenseGrid, wordCardsContainer;
let activeWordList = [];
let selectedCategoryForLearning = '';
let isSentenceMode = false;
let score = 0;
let enemies = [];
let bullets = [];
let activeTarget = null;
let gameRunning = false;
let spawnInterval = null;
let gun = { x: 400, y: 570 };

function generateScrambledHint(text, isSentence) {
    if (isSentence) {
        let words = text.replace(/[.,?!]/g, '').split(' ');
        for (let i = words.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [words[i], words[j]] = [words[j], words[i]];
        }
        return words.join(' / ');
    } else {
        let chars = text.toLowerCase().replace(/[^a-z0-9]/g, '').split('');
        for (let i = chars.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [chars[i], chars[j]] = [chars[j], chars[i]];
        }
        return chars.join(' ');
    }
}

function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    scoreEl = document.getElementById('score');
    categoryEl = document.getElementById('currentCategory');
    menuOverlay = document.getElementById('menuOverlay');
    selectCategoryOverlay = document.getElementById('selectCategoryOverlay');
    learnOverlay = document.getElementById('learnOverlay');
    selectTenseOverlay = document.getElementById('selectTenseOverlay');
    tenseDetailOverlay = document.getElementById('tenseDetailOverlay');
    categoryGrid = document.getElementById('categoryGrid');
    selectCategoryGrid = document.getElementById('selectCategoryGrid');
    tenseGrid = document.getElementById('tenseGrid');
    wordCardsContainer = document.getElementById('wordCardsContainer');
    gun = { x: canvas.width / 2, y: canvas.height - 30 };

    initMenu();
    gameLoop();
});

function initMenu() {
    categoryGrid.innerHTML = '';
    
    // Nút Học Ngữ Pháp Các Thì
    const grammarBtn = document.createElement('button');
    grammarBtn.className = 'category-btn grammar-btn';
    grammarBtn.innerText = '📖 Học Lý Thuyết & Làm Bài Tập Các Thì';
    grammarBtn.onclick = showSelectTenseScreen;
    categoryGrid.appendChild(grammarBtn);

    // Nút Học Từ Mới Theo Chủ Đề
    const learnCatBtn = document.createElement('button');
    learnCatBtn.className = 'category-btn learn-cat-btn';
    learnCatBtn.innerText = '📚 Học Từ Mới Theo Chủ Đề (Có Phát Âm & IPA)';
    learnCatBtn.onclick = showSelectCategoryScreen;
    categoryGrid.appendChild(learnCatBtn);

    // Nút Luyện Tập Đoạn Câu
    const sentenceBtn = document.createElement('button');
    sentenceBtn.className = 'category-btn sentence-btn';
    sentenceBtn.innerText = '💬 Luyện Tập Gõ Câu Giao Tiếp';
    sentenceBtn.onclick = () => startGame('Đoạn Câu Giao Tiếp', true);
    categoryGrid.appendChild(sentenceBtn);

    // Nút Chơi Ngay
    const allBtn = document.createElement('button');
    allBtn.className = 'category-btn all-btn';
    allBtn.innerText = '🌟 Chơi Ngay: Tất Cả Từ Vựng';
    allBtn.onclick = () => startGame('Tất cả từ vựng', false);
    categoryGrid.appendChild(allBtn);

    const categories = [...new Set(fullVocabularyList.map(item => item.cat))];
    categories.forEach(catName => {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.innerText = 'Bắn trực tiếp: ' + catName;
        btn.onclick = () => startGame(catName, false);
        categoryGrid.appendChild(btn);
    });
}

// Màn hình chọn Thì
function showSelectTenseScreen() {
    menuOverlay.style.display = 'none';
    tenseDetailOverlay.style.display = 'none';
    selectTenseOverlay.style.display = 'flex';

    tenseGrid.innerHTML = '';
    grammarTenses.forEach(tense => {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.style.gridColumn = 'span 3';
        btn.innerText = tense.name;
        btn.onclick = () => showTenseDetail(tense.id);
        tenseGrid.appendChild(btn);
    });
}

// Màn hình Chi Tiết Lý Thuyết & Bài Tập
function showTenseDetail(tenseId) {
    const tense = grammarTenses.find(t => t.id === tenseId);
    if (!tense) return;

    selectTenseOverlay.style.display = 'none';
    tenseDetailOverlay.style.display = 'flex';

    document.getElementById('tenseTitle').innerText = tense.name;
    document.getElementById('tenseConcept').innerText = tense.concept;
    document.getElementById('tenseFormula').innerHTML = tense.formula;
    document.getElementById('tenseSignals').innerText = tense.signals;

    // Hiển thị danh sách bài tập
    const exList = document.getElementById('exerciseList');
    exList.innerHTML = '';

    tense.exercises.forEach((ex, idx) => {
        const item = document.createElement('div');
        item.className = 'exercise-item';
        
        let optionsHTML = '';
        ex.options.forEach(opt => {
            optionsHTML += `<button class="opt-btn" onclick="checkAnswer(this, '${opt}', '${ex.answer}', 'exp_${idx}')">${opt}</button>`;
        });

        item.innerHTML = `
            <div><b>Câu ${idx + 1}:</b> ${ex.question}</div>
            <div class="ex-options">${optionsHTML}</div>
            <div class="explanation" id="exp_${idx}">💡 <b>Giải thích:</b> ${ex.explanation}</div>
        `;
        exList.appendChild(item);
    });
}

// Chấm điểm bài tập trắc nghiệm
function checkAnswer(btn, selected, correct, expId) {
    const parent = btn.parentElement;
    const buttons = parent.querySelectorAll('.opt-btn');
    buttons.forEach(b => b.disabled = true); // Khóa các nút sau khi chọn

    const expEl = document.getElementById(expId);
    expEl.style.display = 'block';

    if (selected === correct) {
        btn.classList.add('correct');
    } else {
        btn.classList.add('wrong');
        buttons.forEach(b => {
            if (b.innerText === correct) b.classList.add('correct');
        });
    }
}

function showSelectCategoryScreen() {
    menuOverlay.style.display = 'none';
    learnOverlay.style.display = 'none';
    selectCategoryOverlay.style.display = 'flex';

    selectCategoryGrid.innerHTML = '';
    const categories = [...new Set(fullVocabularyList.map(item => item.cat))];

    categories.forEach(catName => {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.innerText = 'Học Chủ Đề: ' + catName;
        btn.onclick = () => showCategoryWordsScreen(catName);
        selectCategoryGrid.appendChild(btn);
    });
}

function showCategoryWordsScreen(catName) {
    selectedCategoryForLearning = catName;
    selectCategoryOverlay.style.display = 'none';
    learnOverlay.style.display = 'flex';

    document.getElementById('learnTitle').innerText = 'Học Từ Mới: ' + catName;
    wordCardsContainer.innerHTML = '';

    const catWords = fullVocabularyList.filter(item => item.cat === catName);

    catWords.forEach(w => {
        const card = document.createElement('div');
        card.className = 'word-card';
        card.innerHTML = `
            <div class="word-info">
                <span class="en">${w.en} <small style="font-size:12px; color:#94a3b8;">(${w.type})</small></span>
                <span class="phonetic">${w.ipa}</span>
                <span class="vi">${w.vi}</span>
            </div>
            <button class="audio-btn" onclick="speakText('${w.en}')">🔊</button>
        `;
        wordCardsContainer.appendChild(card);
    });
}

function startLearnedCategoryGame() {
    learnOverlay.style.display = 'none';
    startGame(selectedCategoryForLearning, false);
}

function showMenu() {
    gameRunning = false;
    clearInterval(spawnInterval);
    enemies = [];
    bullets = [];
    activeTarget = null;
    selectCategoryOverlay.style.display = 'none';
    learnOverlay.style.display = 'none';
    selectTenseOverlay.style.display = 'none';
    tenseDetailOverlay.style.display = 'none';
    menuOverlay.style.display = 'flex';
}

function startGame(category, isSentence = false) {
    categoryEl.innerText = category;
    isSentenceMode = isSentence;
    
    if (isSentenceMode) {
        activeWordList = sentenceList.map(item => ({ 
            validAnswers: item.ans,
            vi: item.vi 
        }));
    } else if (category === 'Tất cả từ vựng') {
        activeWordList = fullVocabularyList.map(item => ({ validAnswers: [item.en], vi: item.vi }));
    } else {
        activeWordList = fullVocabularyList.filter(item => item.cat === category).map(item => ({ validAnswers: [item.en], vi: item.vi }));
    }

    score = 0;
    scoreEl.innerText = score;
    enemies = [];
    bullets = [];
    activeTarget = null;
    
    menuOverlay.style.display = 'none';
    selectCategoryOverlay.style.display = 'none';
    learnOverlay.style.display = 'none';
    selectTenseOverlay.style.display = 'none';
    tenseDetailOverlay.style.display = 'none';
    gameRunning = true;
    
    clearInterval(spawnInterval);
    const spawnTime = isSentenceMode ? 9000 : 3500;
    spawnInterval = setInterval(spawnEnemy, spawnTime);
    spawnEnemy();
}

function spawnEnemy() {
    if (!gameRunning || activeWordList.length === 0) return;

    const wordObj = activeWordList[Math.floor(Math.random() * activeWordList.length)];
    const x = Math.random() * (canvas.width - 380) + 40;
    const speed = isSentenceMode ? 0.12 : 0.4;
    
    const primaryText = wordObj.validAnswers[0];
    const hintText = generateScrambledHint(primaryText, isSentenceMode);

    enemies.push({
        validAnswers: wordObj.validAnswers,
        currentMatchedAns: null,
        meaning: wordObj.vi,
        hint: hintText,
        userTyped: "",
        x: x,
        y: 30,
        speed: speed,
        wrongFlash: 0
    });
}

function fireBullet(targetX, targetY) {
    bullets.push({
        x: gun.x,
        y: gun.y,
        targetX: targetX,
        targetY: targetY,
        speed: 18
    });
}

function cleanChar(char) {
    return char.toLowerCase().replace(/[^a-z0-9]/g, '');
}

window.addEventListener('keydown', (e) => {
    if (!gameRunning) return;

    const key = e.key;
    if (key.length !== 1) return;

    const cleanedKey = cleanChar(key);
    if (!cleanedKey) return;

    if (!activeTarget) {
        for (let enemy of enemies) {
            for (let ans of enemy.validAnswers) {
                const firstClean = cleanChar(ans[0]);
                if (firstClean === cleanedKey) {
                    activeTarget = enemy;
                    activeTarget.currentMatchedAns = ans;
                    break;
                }
            }
            if (activeTarget) break;
        }
    }

    if (activeTarget) {
        let possibleAnswers = activeTarget.validAnswers;
        let testTyped = activeTarget.userTyped + cleanedKey;
        
        let matchingAns = possibleAnswers.find(ans => {
            let cleanAns = ans.split('').map(cleanChar).join('');
            return cleanAns.startsWith(testTyped);
        });

        if (matchingAns) {
            activeTarget.userTyped = testTyped;
            activeTarget.currentMatchedAns = matchingAns;

            fireBullet(activeTarget.x + activeTarget.userTyped.length * 9, activeTarget.y);

            let cleanAns = matchingAns.split('').map(cleanChar).join('');
            
            if (activeTarget.userTyped === cleanAns) {
                score += isSentenceMode ? 30 : 10;
                scoreEl.innerText = score;
                
                speakText(matchingAns);

                enemies = enemies.filter(e => e !== activeTarget);
                activeTarget = null;
            }
        } else {
            activeTarget.wrongFlash = 10;
        }
    }
});

function update() {
    if (!gameRunning) return;

    for (let enemy of enemies) {
        enemy.y += enemy.speed;
        if (enemy.wrongFlash > 0) enemy.wrongFlash--;

        if (enemy.y > canvas.height - 40) {
            if (enemy === activeTarget) activeTarget = null;
            enemies = enemies.filter(e => e !== enemy);
        }
    }

    for (let i = bullets.length - 1; i >= 0; i--) {
        let b = bullets[i];
        let dx = b.targetX - b.x;
        let dy = b.targetY - b.y;
        let dist = Math.hypot(dx, dy);

        if (dist < 12) {
            bullets.splice(i, 1);
        } else {
            b.x += (dx / dist) * b.speed;
            b.y += (dy / dist) * b.speed;
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!gameRunning) return;

    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(gun.x, gun.y, 22, 0, Math.PI * 2);
    ctx.fill();

    for (let enemy of enemies) {
        const isSelected = (enemy === activeTarget);
        const targetText = enemy.currentMatchedAns || enemy.validAnswers[0];

        ctx.font = 'bold 15px Arial';
        ctx.fillStyle = enemy.wrongFlash > 0 ? '#ef4444' : (isSelected ? '#fde047' : '#e2e8f0');
        ctx.fillText(`🇻🇳 ${enemy.meaning}`, enemy.x, enemy.y - 22);

        ctx.font = 'italic 13px Arial';
        ctx.fillStyle = '#94a3b8';
        ctx.fillText(`[Gợi ý: ${enemy.hint}]`, enemy.x, enemy.y - 6);

        ctx.font = 'bold 18px Courier New';
        
        let typedCount = enemy.userTyped.length;
        let charIndex = 0;
        let cleanFound = 0;

        while (charIndex < targetText.length && cleanFound < typedCount) {
            if (cleanChar(targetText[charIndex]) !== '') {
                cleanFound++;
            }
            charIndex++;
        }

        let typedDisplay = targetText.substring(0, charIndex);
        let remainingText = targetText.substring(charIndex);

        ctx.fillStyle = '#4ade80';
        ctx.fillText(typedDisplay, enemy.x, enemy.y + 16);

        let typedWidth = ctx.measureText(typedDisplay).width;
        let hiddenPlaceholder = remainingText.replace(/[a-zA-Z0-9]/g, '_');

        ctx.fillStyle = isSelected ? '#38bdf8' : '#475569';
        ctx.fillText(hiddenPlaceholder, enemy.x + typedWidth, enemy.y + 16);
    }

    ctx.fillStyle = '#f43f5e';
    for (let b of bullets) {
        ctx.beginPath();
        ctx.arc(b.x, b.y, 5, 0, Math.PI * 2);
        ctx.fill();
    }
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}