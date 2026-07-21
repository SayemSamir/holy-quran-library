# holy-quran-library
A modern, open-source digital Holy Qur'an platform built with HTML5, CSS3, and JavaScript. Features real-time API integrations, multi-language translations, Sheikh Mishary audio streaming, dynamic font scaling, and dark/light themes.

# 📖 Al-Qur'an Al-Kareem (القرآن الكريم) — Ultimate Digital Qur'an & Study Platform

> *"Indeed, this Qur'an guides to that which is most suitable and gives good tidings to the believers who do righteous deeds that they will have a great reward."*  
> **— Surah Al-Isra (17:9)**

---

## 📌 Executive Summary

**Al-Qur'an Al-Kareem** is an open-source, modern, lightweight, and high-performance Web Application designed to provide Muslims and researchers worldwide with seamless access to the Holy Qur'an. Built with clean HTML5, custom CSS3 variable design systems, and modern asynchronous JavaScript (ES6+), this application integrates directly with real-time RESTful APIs to deliver Uthmani Arabic script, multi-language translations (Bengali & English), word-by-word structural layout, audio recitations by world-renowned Qaris, and dynamic accessibility tools.

Whether you are performing daily recitation, conducting thematic study, or sharing verses on social channels, this application delivers a distraction-free, ad-free, and spiritually enriching environment across desktop, tablet, and mobile browsers.

---

## 🌟 Key Highlights & Features

### 1. 📖 Full Qur'anic Text & Authentic Uthmani Script
- **Complete 114 Surahs:** Instant access to every chapter of the Holy Qur'an with precise metadata (Makki / Madani designation, total verse count, English/Bengali translated names).
- **Clear Typography:** Rendered using the classical **Amiri** font to mirror traditional Mushaf calligraphy for effortless readability.

### 2. 🌍 Multi-Lingual Translations & Parallel Reading
- **Dual Translations:** Concurrent rendering of authentic Bengali (*বাংলা অনুবাদ*) and English translations for every single verse (*Ayah*).
- **Clean HTML Stripping:** Automatic sanitization of raw API output to ensure smooth text formatting without orphaned tags.

### 3. 🎧 Dynamic Audio Recitation Engine
- **Ayah-by-Ayah Audio:** High-quality verse recitations streamed directly via the *EveryAyah* engine (defaulted to Sheikh Mishary Rashid Al-Afasy).
- **Auto-Play Next Verse:** Intelligent continuous playback capability that smoothly scrolls the active Ayah into view as the reciter progresses.
- **Audio Feedback Toast:** Real-time visual notification indicating the currently playing verse key (e.g., `1:1`).

### 4. 🛠️ Personalized Control Panel & Reading Controls
- **Instant Search & Filter:** Dynamic client-side search by Surah name (English/Bengali) or Surah number.
- **Dynamic Font Scaling:** One-click font magnification (`A+` / `A-`) allowing users to adjust font scales smoothly from 80% up to 150%.
- **Dark & Light Mode Engine:** Full CSS variables theme engine providing seamless switching between Dark Mode (designed for low-light night reading) and Light Mode.
- **Visual Progress Bar:** Top-anchored reading progress indicator that updates fluidly as you scroll through long Surahs.

### 5. 📋 Versatile Sharing & Clipboard Tools
- **One-Click Verse Copy:** Formats and copies Arabic text, Surah metadata, Bengali translation, and English translation to the clipboard in a clean structured format.
- **Native Web Share Integration:** Uses the browser’s native sharing dialogue on supported mobile and desktop browsers to share verses directly to messaging apps and social media.

---

## 🏗️ Technical Architecture & Data Pipeline

The application operates as a Serverless Single-Page Web Application (SPA) leveraging client-side fetching mechanisms for optimal performance and minimal memory footprint.
