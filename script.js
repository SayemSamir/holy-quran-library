
    let chapters = [];
    let currentAudio = null;
    let currentVerseList = [];
    let currentPlayingIndex = -1;

    // --- INITIALIZE SURAH LIST FROM API ---
    async function init() {
      try {
        const res = await fetch('https://api.quran.com/api/v4/chapters?language=bn');
        const data = await res.json();
        chapters = data.chapters;
        renderDropdown(chapters);
        loadSurah(1); // Load Al-Fatiha by default
      } catch (e) {
        document.getElementById('quranView').innerHTML = `<div class="loading-box" style="color:#ef4444;">ডাটা লোড করতে ব্যর্থ হয়েছে। ইন্টারনেট সংযোগ চেক করুন।</div>`;
      }
    }

    function renderDropdown(list) {
      const select = document.getElementById('surahSelect');
      select.innerHTML = list.map(c => 
        `<option value="${c.id}">${c.id}. ${c.name_simple} (${c.name_arabic}) — ${c.translated_name.name}</option>`
      ).join('');
    }

    function filterSurah() {
      const q = document.getElementById('surahSearch').value.toLowerCase();
      const filtered = chapters.filter(c => 
        c.name_simple.toLowerCase().includes(q) || 
        c.id.toString().includes(q) ||
        c.translated_name.name.toLowerCase().includes(q)
      );
      renderDropdown(filtered);
      if (filtered.length > 0) loadSurah(filtered[0].id);
    }

    // --- LOAD SURAH WITH ARABIC, BANGLA & ENGLISH ---
    async function loadSurah(id) {
      const view = document.getElementById('quranView');
      view.innerHTML = `<div class="loading-box">সূরা লোড হচ্ছে... 📖</div>`;

      try {
        const [chapterRes, versesRes] = await Promise.all([
          fetch(`https://api.quran.com/api/v4/chapters/${id}?language=bn`),
          fetch(`https://api.quran.com/api/v4/verses/by_chapter/${id}?language=bn&words=false&translations=161,131&fields=text_uthmani&per_page=300`)
        ]);

        const chapterData = await chapterRes.json();
        const versesData = await versesRes.json();

        const ch = chapterData.chapter;
        currentVerseList = versesData.verses;

        let html = `
          <div class="surah-header-card">
            <div class="surah-title-ar">${ch.name_arabic}</div>
            <div class="surah-title-en">${ch.name_simple}</div>
            <div class="surah-meta">
              অর্থ: <strong>${ch.translated_name.name}</strong> | অবতীর্ণ: <strong>${ch.revelation_place === 'makkah' ? 'মাক্কী' : 'মাদানী'}</strong> | মোট আয়াত: <strong>${ch.verses_count}</strong>
            </div>
          </div>
        `;

        currentVerseList.forEach((v, index) => {
          const bnText = v.translations[0] ? v.translations[0].text.replace(/<[^>]*>/g, '') : 'অনুবাদ পাওয়া যায়নি';
          const enText = v.translations[1] ? v.translations[1].text.replace(/<[^>]*>/g, '') : '';

          html += `
            <article class="ayah-card" id="ayah-${index}">
              <div class="ayah-top-bar">
                <span class="verse-key-badge">${v.verse_key}</span>
                <div class="action-buttons">
                  <button class="btn-action" onclick="playAyahAudio(${index})">▶ প্লে তিলওয়াত</button>
                  <button class="btn-action" onclick="copyAyah('${v.verse_key}', \`${v.text_uthmani}\`, \`${bnText}\`, \`${enText}\`)">📋 কপি</button>
                  <button class="btn-action" onclick="shareAyah('${v.verse_key}', \`${bnText}\`)">🔗 শেয়ার</button>
                </div>
              </div>

              <!-- ARABIC SCRIPT -->
              <div class="ayah-arabic">${v.text_uthmani}</div>

              <!-- TRANSLATIONS -->
              <div class="translation-container">
                <div class="bangla-translation">
                  <strong style="color:var(--primary-accent);">বাংলা অর্থ:</strong> ${bnText}
                </div>
                ${enText ? `
                <div class="english-translation">
                  <strong style="color:var(--gold-accent);">English:</strong> ${enText}
                </div>` : ''}
              </div>
            </article>
          `;
        });

        view.innerHTML = html;
      } catch (err) {
        view.innerHTML = `<div class="loading-box" style="color:#ef4444;">সূরা লোড করা সম্ভব হয়নি।</div>`;
      }
    }

    // --- AUDIO PLAYER & AUTO-PLAY NEXT ---
    function playAyahAudio(index) {
      if (currentAudio) currentAudio.pause();
      currentPlayingIndex = index;
      
      const verseKey = currentVerseList[index].verse_key;
      const [s, a] = verseKey.split(':');
      const formattedS = s.padStart(3, '0');
      const formattedA = a.padStart(3, '0');
      const url = `https://everyayah.com/data/Alafasy_128kbps/${formattedS}${formattedA}.mp3`;
      
      currentAudio = new Audio(url);
      currentAudio.play();

      showToast(`তিলওয়াত প্লে হচ্ছে: আয়াত ${verseKey}`);

      currentAudio.onended = () => {
        const isAutoPlay = document.getElementById('autoPlayToggle').checked;
        if (isAutoPlay && currentPlayingIndex + 1 < currentVerseList.length) {
          playAyahAudio(currentPlayingIndex + 1);
          document.getElementById(`ayah-${currentPlayingIndex + 1}`).scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      };
    }

    // --- COPY & SHARE FEATURE ---
    function copyAyah(key, arabic, bangla, english) {
      const fullText = `[সূরা আয়াত: ${key}]\n\n${arabic}\n\nবাংলা: ${bangla}\n\nEnglish: ${english}`;
      navigator.clipboard.writeText(fullText).then(() => {
        showToast('আয়াত ও অনুবাদ কপি করা হয়েছে! 📋');
      });
    }

    function shareAyah(key, bangla) {
      if (navigator.share) {
        navigator.share({
          title: `কুরআন মজিদ - আয়াত ${key}`,
          text: `[সূরা আয়াত ${key}]\n${bangla}`,
          url: window.location.href,
        });
      } else {
        copyAyah(key, '', bangla, '');
      }
    }

    // --- FONT SIZE RESIZER ---
    let fontScale = 1;
    function adjustFontSize(delta) {
      fontScale = Math.max(0.8, Math.min(1.5, fontScale + delta));
      document.documentElement.style.setProperty('--arabic-scale', `${2.5 * fontScale}rem`);
      document.documentElement.style.setProperty('--translation-scale', `${1.1 * fontScale}rem`);
      showToast(`ফন্ট সাইজ: ${Math.round(fontScale * 100)}%`);
    }

    // --- TOAST NOTIFICATION ---
    function showToast(msg) {
      const toast = document.getElementById('toast');
      toast.innerText = msg;
      toast.style.display = 'block';
      setTimeout(() => { toast.style.display = 'none'; }, 2500);
    }

    // --- SCROLL PROGRESS BAR ---
    window.onscroll = function() {
      let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      document.getElementById("progress-bar").style.width = (winScroll / height) * 100 + "%";
    };

    // --- THEME TOGGLE ---
    document.getElementById('themeToggle').addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const target = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', target);
      document.getElementById('themeToggle').textContent = target === 'dark' ? '🌙 থিম' : '☀️ থিম';
    });

    init();
  
