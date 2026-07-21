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

### 2. 📚 Integrated Open-Source PDF Library & Viewer
Direct embedded access to verified open-source Mushaf and Tafsir PDF documents:

- 📖 **Full Qur'an 15-Line Hafezi Mushaf (PDF):** [Direct View / Download](https://archive.org/download/Quran_15_Line_Hafezi/Quran_15_Line_Hafezi.pdf)
- 📖 **Tajweed Color-Coded Qur'an (PDF):** [Direct View / Download](https://archive.org/download/ColorCodedTajweedQuranPDF/Color_Coded_Tajweed_Quran.pdf)
- 📖 **Tafsir Ibn Kathir - Complete English (PDF):** [Direct View / Download](https://archive.org/download/TafsirIbnKathirEnglish10Volumes/Tafsir%20Ibn%20Kathir%20All%2010%20Volumes.pdf)
- 📖 **Tafseer Ahsanul Bayaan - Bangla (PDF):** [Direct View / Download](https://archive.org/download/TafseeraAhsanulBayaanBangla/Tafseer_Ahsanul_Bayaan_Bangla.pdf)

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
