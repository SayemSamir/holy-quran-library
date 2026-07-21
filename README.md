# 📖 Al-Qur'an Al-Kareem (القرآن الكريم) — Ultimate Digital Qur'an & Study Platform

> *"Indeed, this Qur'an guides to that which is most suitable and gives good tidings to the believers who do righteous deeds that they will have a great reward."*  
> **— Surah Al-Isra (17:9)**

---

## 🌐 Live Web Application

[![Live Demo](https://img.shields.io/badge/LIVE_DEMO-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://quran-kareem-web.netlify.app/)
[![GitHub Stars](https://img.shields.io/github/stars/your-username/holy-quran-library?style=for-the-badge&color=10b981)](https://github.com/your-username/holy-quran-library/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/your-username/holy-quran-library?style=for-the-badge&color=fbbf24)](https://github.com/your-username/holy-quran-library/network/members)
[![Profile Views](https://komarev.com/ghpvc/?username=your-username-quran-library&color=10b981&style=for-the-badge&label=TOTAL+READERSHIP+VIEWS)](https://github.com/your-username/holy-quran-library)
[![License](https://img.shields.io/github/license/your-username/holy-quran-library?style=for-the-badge&color=6366f1)](LICENSE)

🔗 **Access the Live App:** [https://quran-kareem-web.netlify.app/](https://quran-kareem-web.netlify.app/)

---

## 📌 Executive Summary

**Al-Qur'an Al-Kareem** is an open-source, modern, highly interactive Digital Qur'an & Study Platform designed to provide Muslims and researchers worldwide with seamless, distraction-free access to the Holy Qur'an. Built with clean HTML5, custom CSS3 animation components, glassmorphism UI, and modern asynchronous JavaScript (ES6+), this application integrates directly with real-time RESTful APIs, open-source PDF repositories, and high-definition audio CDN streams.

---

## 🌟 Key Features & Interactive Components

### 1. 📖 Complete Uthmani Script & Multi-Lingual Translations
- **Full 114 Surahs:** Instant fetching of all chapters with metadata (Makki / Madani, verse counts, transliterations).
- **Dual Language Support:** Simultaneous reading of authentic Bengali (*বাংলা অনুবাদ*) and English translations alongside classical Uthmani Arabic.
- **Typography Engine:** Rendered using Google Fonts' **Amiri** for Arabic calligraphy and **Hind Siliguri** for crisp Bengali text.

## 🌐 Related Platforms & External Resources

### 🔗 Leading Open-Source Qur'an Platforms & APIs
For cross-referencing, API documentation, and UI inspiration, the following industry-standard platforms are integrated/referenced:

- **[Quran.com](https://quran.com/):** Primary source for API v4 metadata, Uthmani script, and verified multi-lingual translations.
- **[Tanzil.net](https://tanzil.net/):** International Qur’anic project providing highly accurate, verified Qur’anic text and translation databases.
- **[QuranWBW.com](https://quranwbw.com/):** Popular reference platform for word-by-word analysis and audio pronunciations.
- **[EveryAyah.com](https://everyayah.com/):** Open-source repository offering verse-by-verse high-bitrate audio recitations.
- **[Sunnah.com](https://sunnah.com/):** Comprehensive digital Hadith database utilized for contextual cross-referencing.

---

## 📚 Academic References & Research Papers

To maintain structural authenticity, computational accuracy, and adherence to Islamic digital standards, this platform references several academic studies and computational Qur'anic engineering methodologies:

1. **Digital Qur'an Text Verification & Encoding Standards**
   - *Al-Kabi, M. N., et al.* (2013). "A Survey of Digital Quranic Resources and Tools." *Journal of King Saud University – Computer and Information Sciences*.  
   - 📄 [Read on ScienceDirect](https://doi.org/10.1016/j.jksuci.2013.03.003)

2. **Natural Language Processing (NLP) for Arabic & Qur'anic Texts**
   - *Dukes, K., & Habash, N.* (2010). "Morphological Annotation of Quranic Arabic." *Proceedings of the 7th International Conference on Language Resources and Evaluation (LREC)*.  
   - 📄 [Access Corpus at Quranic Arabic Corpus](https://corpus.quran.com/)

3. **Audio-Text Alignment Algorithms for Sacred Texts**
   - *Shoaib, M., et al.* (2017). "Verse-by-Verse Speech Recognition and Automatic Audio-Text Synchronization in Qur'anic Recitations." *IEEE Access*.  
   - 📄 [View on IEEE Xplore](https://ieeexplore.ieee.org/)

4. **Information Security & Authenticity in Digital Mushaf Infrastructure**
   - *Khan, A. A., & Al-Ghamdi, M.* (2020). "Integrity Verification Mechanisms for Online Quranic Text Distribution." *International Journal of Advanced Computer Science and Applications (IJACSA)*.

---

## 🛠️ Updated Feature Roadmap

- [x] Integration with Quran.com API v4 & EveryAyah Audio Streaming
- [x] Embedded Open-Source PDF Readers (Mushaf & Tafseer)
- [x] External References to Standard Digital Qur'an Repositories & Research Papers
- [ ] **Interactive Tafseer Modals:** On-click Tafsir Ibn Kathir modal overlays per verse.
- [ ] **Offline Progressive Web App (PWA):** Service worker implementation for offline reading & audio caching.

### 3. 🎨 Animated Glassmorphic UI & Interactive Buttons
The interface includes customizable button variants with hover elevations, ripple animations, and dynamic state feedback:

| Button Type | Action / Function | CSS Class / Effect |
| :--- | :--- | :--- |
| **Primary Reader CTA** | Triggers full Surah view | `.btn-primary-glow` (Pulse animation) |
| **Audio Recitation Play/Pause** | Controls verse-by-verse audio | `.btn-audio-toggle` (Waveform animation) |
| **PDF Download Button** | Downloads offline PDF resources | `.btn-pdf-download` (Slide-down effect) |
| **Verse Copy & Share** | Copies formatted Ayah to clipboard | `.btn-icon-glass` (Glassmorphism hover) |
| **Theme Switcher** | Toggles Dark / Light reading modes | `.btn-theme-toggle` (Smooth 360° rotation) |

### 4. 🎧 Verse-by-Verse Audio Streaming Engine
- **Audio Reciter:** High-quality MP3 streaming via *EveryAyah CDN* (Default: Sheikh Mishary Rashid Al-Afasy).
- **Auto-Scroll Tracking:** Smoothly auto-scrolls to the active playing verse with highlight animation.

---

## 🏗️ Technical Architecture
