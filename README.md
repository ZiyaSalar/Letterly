# Letterly

**Letterly** is a Chrome Extension that generates quick, context‑aware, tone‑adjustable email replies right inside Gmail.

---

## 🚀 Features

* **AI‑Powered Replies** — Turn any incoming email into a polished reply.
* **Tone Control** — Professional, Friendly, Concise, Empathetic, etc.
* **One‑Click Insert** — Paste the suggestion into Gmail’s compose box.
* **Lightweight UI** — Injected via content script

---

## 🛠 Tech Stack

* **Frontend** : HTML, CSS, JavaScript (Content Script, MV3)
* **Backend** : Spring Boot (Java)
* **AI** : Google Generative Language API (Gemini) or your chosen provider
* **Browser** : Chrome, Manifest V3

---

## 📦 Installation (Developer Mode)

1. **Clone** the repo
   ```bash
   git clone https://github.com/your-username/letterly.git
   cd letterly
   ```
2. **Start the backend** (Spring Boot) at `http://localhost:8080/`.
3. **Load the extension**
   * Open `chrome://extensions/`
   * Enable **Developer mode**
   * Click **Load unpacked** and select the project root folder
4. Open Gmail and ensure the extension activates.

---

## 🧪 Usage

* Open a message in Gmail → click the extension action or your injected UI button → choose tone → generate → insert.
