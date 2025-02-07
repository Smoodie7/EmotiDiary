<template>
  <div class="container py-4 text-center" style="overflow-y: hidden
  ;">
    <!-- Toggle buttons -->
    <div class="d-flex justify-content-between mb-4">
      <div>
        <button @click="setLanguage('en')" class="btn btn-light me-2 border border-secondary">🇺🇸</button>
        <button @click="setLanguage('fr')" class="btn btn-light border border-secondary">🇫🇷</button>
      </div>

      <button @click="toggleTheme" class="btn btn-light border border-secondary">Go {{ themeButtonText }}</button>
    </div>

    <h1 class="display-1 fw-bold radley-regular mb-3 ">Emoti’Diary</h1>
    <h2 class="display-1 mb-5" style="font-size: calc(4.5rem + 1vw);">{{ averageMoodEmoji }}</h2>
    <div class="d-flex justify-content-center gap-4 my-3 flex-wrap">
      <!-- Mood buttons -->
      <button v-for="mood in moods" :key="mood.name" @click="selectMood(mood)"
        :class="['btn', 'btn-outline-primary', 'btn-lg', 'rounded-circle', 'shadow-lg', 'p-4', 'fs-1', { 'bg-primary': selectedMood === mood }]">
        {{ mood.emoji }}
      </button>
    </div>
    <!-- Mood Logging -->
    <div v-if="selectedMood" class="mt-3">
      <input v-model="moodNote" class="form-control mb-2" placeholder="Add a note... (optional)" />
      <button @click="logMood" class="btn btn-success">Log Mood</button>
    </div>

    <!-- Other buttons -->
    <div class="mt-5 mb-5">
      <button @click="showStats = true" class="btn btn-primary w-100 py-4 shadow-lg mb-4 mt-5">{{ texts.viewStats
        }}</button>
      <button @click="showHistory = true" class="btn btn-secondary w-100 py-3 shadow-lg">{{ texts.viewHistory
        }}</button>
    </div>

    <!-- Stats Modal -->
    <div v-if="showStats"
      class="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center fade-in">
      <div :class="modalClass" class="p-4 rounded shadow-lg w-75 position-relative"
        style="max-height: 80vh; overflow-y: auto;">
        <button @click="showStats = false" :class="['btn-close', closeButtonClass]"
          style="position: absolute; top: 10px; right: 10px;"></button>
        <h2 class="text-center mb-3">{{ texts.statsTitle }}</h2>
        <p class="fw-bold">{{ texts.averageMood }}: {{ averageHappiness }}%</p>
        <ul class="list-group mt-3 mb-3">
          <li v-for="(mood, index) in moods" :key="index" class="list-group-item">
            <span>{{ mood.emoji }} {{ mood.name }}: {{ getMoodCount(mood.name) }}</span>
          </li>
        </ul>
        <i>TODO: Radar Chart here</i> <!-- TODO: RadarChart vue component here -->
      </div>
    </div>

    <!-- History Modal -->
    <div v-if="showHistory"
      class="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center fade-in">
      <div :class="modalClass" class="p-4 rounded shadow-lg w-75 position-relative"
        style="max-height: 80vh; overflow-y: auto;">
        <button @click="showHistory = false" :class="['btn-close', closeButtonClass]"
          style="position: absolute; top: 10px; right: 10px;"></button>
        <h2 class="text-center mb-3">{{ texts.historyTitle }}</h2>
        <ul v-if="moodHistory.length" class="list-group">
          <li v-for="(entry, index) in displayedMoodHistory" :key="index"
            class="list-group-item d-flex justify-content-between align-items-center">
            <span>{{ entry.date }} - {{ entry.mood }} <small v-if="entry.note">({{ entry.note }})</small></span>
            <button @click="deleteMood(index)" class="btn btn-secondary btn-sm">
              <strong> X </strong>
            </button>
          </li>
        </ul>

        <!-- load more -->
        <button v-if="moodHistory.length > visibleCount" @click="showMoreHistory" class="btn btn-link mt-2">{{
          texts.showMore }}</button>
        <!-- other butons -->
        <p v-else-if="moodHistory.length === 0" class="text-muted text-center mt-4">{{ texts.noMoods }}</p>
        <button @click="showClearPopup = true" class="btn btn-danger w-100 mt-5">{{ texts.clearAll }}</button>
        <div class="d-flex justify-content-between mt-3">
          <button @click="exportHistoryAsJson" class="btn btn-success flex-grow-1 me-2">{{ texts.exportJson }}</button>
          <button @click="importHistoryAsJson" class="btn btn-success flex-grow-1">{{ texts.importJson }}</button>
        </div>
      </div>
    </div>
    <!-- Clear Confirm -->
    <div v-if="showClearPopup"
      class="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center fade-in">
      <div :class="modalClass" class="p-4 rounded shadow-lg text-center position-relative">
        <button @click="showClearPopup = false" :class="['btn-close', closeButtonClass]"
          style="position: absolute; top: 10px; right: 10px;"></button>
        <p class="mb-3">{{ texts.confirmClear }}</p>
        <button @click="clearHistory" class="btn btn-danger w-100">{{ texts.yesClear }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: navigator.language.startsWith('fr') ? 'fr' : 'en',
      texts: {},
      theme: localStorage.getItem('theme') || 'light',  // Default: light theme
      translations: {},
      moods: [
        { name: "Happy", emoji: "😊", value: 3 },
        { name: "Neutral", emoji: "😐", value: 0 },
        { name: "Sad", emoji: "😢", value: -3 },
        { name: "Excited", emoji: "🎉", value: 4 },
        { name: "Angry", emoji: "😡", value: -1 },
        { name: "Relaxed", emoji: "😌", value: 2 }
      ],
      selectedMood: null,
      moodNote: "",
      moodHistory: [],
      showStats: false,
      showHistory: false,
      showClearPopup: false,
      averageHappiness: 0,
      averageMoodEmoji: "😶",
      visibleCount: 5
    };
  },
  computed: {
    displayedMoodHistory() {
      // Returns a slice of mood history based on visibleCount
      return this.moodHistory.slice(0, this.visibleCount);
    },
    themeButtonText() {
      return this.theme === 'light' ? 'dark 🌑' : 'light 🌞';
    },
    themeClass() {
      return this.theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark';
    },
    modalClass() {
      return this.theme === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark';
    },
    closeButtonClass() {
      return this.theme === 'dark' ? 'btn-close-dark' : '';
    }
  },
  created() {
    // Initializing stuff
    this.loadTranslations();
    this.loadMoodHistory();
    this.calculateHappiness();
    this.autoSetTheme();
    console.log("Loaded texts:", this.texts);
  },
  methods: {
    async loadTranslations() {
      try {
        const cachedTranslations = localStorage.getItem("translations");
        if (cachedTranslations) {
          this.translations = JSON.parse(cachedTranslations);
        } else {
          const response = await fetch('/translations.json');
          this.translations = await response.json();
          localStorage.setItem("translations", JSON.stringify(this.translations));
        }
        this.texts = this.translations[this.language] || {};
      } catch (error) {
        console.error("Error loading translations:", error);
      }
    },
    autoSetTheme() {
      // Set theme based on system preference
      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
      this.theme = prefersDarkScheme.matches ? 'dark' : 'light';
      this.applyTheme();
    },
    setLanguage(lang) {
      this.language = lang;
      this.loadTranslations();
    },

    selectMood(mood) {
      this.selectedMood = this.selectedMood === mood ? null : mood;
    },
    logMood() {
      // Log mood and update history
      if (!this.selectedMood) return;
      const entry = { mood: this.selectedMood.emoji, note: this.moodNote, value: this.selectedMood.value, date: new Date().toLocaleDateString() };
      this.moodHistory.unshift(entry);
      this.selectedMood = null;
      this.moodNote = "";
      this.saveMoodHistory();
      this.calculateHappiness();
    },
    saveMoodHistory() {
      try {
        if (this.moodHistory.length % 5 === 0) { // Save every 5 changes
          localStorage.setItem("moodHistory", JSON.stringify(this.moodHistory));
        }
      } catch (error) {
        console.error("Error saving history:", error);
      }
    },
    loadMoodHistory() {
      try {
        const savedHistory = localStorage.getItem("moodHistory");
        this.moodHistory = savedHistory ? JSON.parse(savedHistory) : [];
      } catch (error) {
        console.error("Error loading history:", error);
        alert("Error loading history:", error);
      }
    },
    clearHistory() {
      this.moodHistory = [];
      localStorage.removeItem("moodHistory");
      this.showClearPopup = false;
      this.calculateHappiness();
    },
    deleteMood(index) {
      // Delete a specific mood
      try {
        this.moodHistory.splice(index, 1);
        this.saveMoodHistory();
        this.calculateHappiness();
      } catch (error) {
        console.error("Error deleting mood:", error);
        alert("Error deleting mood:", error);
      }
    },
    calculateHappiness() {
      if (!this.moodHistory.length) {
        this.averageHappiness = 0;
        this.averageMoodEmoji = "😶";
        return;
      }

      const totalValue = this.moodHistory.reduce((sum, { value }) => sum + value, 0);
      const averageValue = totalValue / this.moodHistory.length;
      this.averageHappiness = Math.round((averageValue / 4) * 100);

      this.averageMoodEmoji = this.averageHappiness > 50 ? "😁" :
        this.averageHappiness > 10 ? "😊" :
          this.averageHappiness >= -10 ? "😐" :
            this.averageHappiness >= -50 ? "☹️" : "😢";
    },
    getMoodCount(moodName) {
      const mood = this.moods.find(m => m.name === moodName);
      return this.moodHistory.filter(entry => entry.mood === mood.emoji).length;
    },
    showMoreHistory() {
      this.visibleCount += 5;
    },
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', this.theme);
      this.applyTheme();
    },
    applyTheme() {
      // Apply selected theme by toggling classes
      document.body.classList.toggle('bg-dark', this.theme === 'dark');
      document.body.classList.toggle('text-white', this.theme === 'dark');
      document.body.classList.toggle('bg-light', this.theme === 'light');
      document.body.classList.toggle('text-dark', this.theme === 'light');
    },

    exportHistoryAsJson() {
      try {
        if (!this.moodHistory.length) return alert("Error: No mood history to export.");

        const blob = new Blob([JSON.stringify(this.moodHistory, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "mood_history.json";
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Error exporting JSON:", error);
        alert("Error exporting JSON:", error);
      }
    },
    importHistoryAsJson() {
      try {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = async (event) => {
          const file = event.target.files[0];
          if (!file) return alert("Error: No file selected.");

          const reader = new FileReader();
          reader.onload = async (event) => {
            try {
              const importedHistory = JSON.parse(event.target.result);
              if (!Array.isArray(importedHistory)) return alert("Error: Invalid JSON format.");

              this.moodHistory = importedHistory;
              this.saveMoodHistory();
              this.calculateHappiness();
            } catch (error) {
              console.error("Error importing JSON:", error);
              alert("Error importing JSON:", error);
            }
          };
          reader.readAsText(file);
        };
        input.click();
      } catch (error) {
        console.error("Error importing JSON:", error);
        alert("Error importing JSON:", error);
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Radley:ital@0;1&display=swap');

.radley-regular {
  font-family: "Radley", serif;
  font-weight: 400;
  font-style: italic;
}

/* Dark theme close button */
.btn-close-dark {
  background-color: white;
  border: 1px solid #fff;
}
</style>
