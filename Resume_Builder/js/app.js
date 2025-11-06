// Global variables
const educationCount = 1
const experienceCount = 1
let skills = []
let currentTheme = "light"

// AI Suggestions Database
const aiSuggestions = {
  fullName: [
    "Use your full legal name as it appears on official documents",
    "Consider using a professional nickname if commonly known by it",
    "Avoid using titles like Mr., Ms., Dr. unless specifically required",
  ],
  summary: [
    "Results-driven professional with X years of experience in [industry]",
    "Passionate [role] with expertise in [key skills] and proven track record of [achievements]",
    "Dynamic professional specializing in [area] with strong background in [relevant experience]",
    "Innovative [profession] with demonstrated ability to [key accomplishment]",
    "Experienced [role] committed to delivering high-quality results and driving organizational success",
  ],
  skills: [
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "SQL",
    "Git",
    "AWS",
    "Docker",
    "Project Management",
    "Data Analysis",
    "Machine Learning",
    "UI/UX Design",
    "Digital Marketing",
    "Content Writing",
    "Public Speaking",
    "Leadership",
    "Problem Solving",
    "Critical Thinking",
    "Communication",
    "Teamwork",
  ],
  degree: [
    "Bachelor of Science in Computer Science",
    "Master of Business Administration (MBA)",
    "Bachelor of Arts in Marketing",
    "Master of Science in Data Science",
    "Bachelor of Engineering in Software Engineering",
    "Certificate in Digital Marketing",
    "Associate Degree in Web Development",
  ],
  position: [
    "Software Developer",
    "Project Manager",
    "Data Analyst",
    "Marketing Specialist",
    "UX/UI Designer",
    "Business Analyst",
    "Sales Representative",
    "Content Creator",
    "Operations Manager",
    "Customer Success Manager",
    "Product Manager",
    "DevOps Engineer",
  ],
  experience: [
    "Developed and maintained web applications using modern frameworks",
    "Led cross-functional teams to deliver projects on time and within budget",
    "Analyzed complex datasets to identify trends and business opportunities",
    "Implemented marketing strategies that increased brand awareness by X%",
    "Collaborated with stakeholders to gather requirements and define project scope",
    "Optimized processes resulting in X% improvement in efficiency",
    "Managed client relationships and achieved X% customer satisfaction rate",
  ],
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  loadTheme()
  setupEventListeners()
  updatePreview()
  updateProgress()
})

function setupEventListeners() {
  // Real-time form updates
  const form = document.getElementById("resumeForm")
  form.addEventListener("input", (e) => {
    updatePreview()
    updateProgress()
  })

  // Skills input
  const skillInput = document.getElementById("skillInput")
  skillInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addSkill()
    }
  })

  // Close popup on overlay click
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      closePopup()
    }
  })

  // Close popup on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closePopup()
    }
  })
}

// Theme Management
function toggleTheme() {
  currentTheme = currentTheme === "light" ? "dark" : "light"
  document.documentElement.setAttribute("data-theme", currentTheme)

  const themeIcon = document.getElementById("themeIcon")
  const themeText = document.getElementById("themeText")

  if (currentTheme === "dark") {
    themeIcon.textContent = "☀️"
    themeText.textContent = "Light Mode"
  } else {
    themeIcon.textContent = "🌙"
    themeText.textContent = "Dark Mode"
  }

  localStorage.setItem("theme", currentTheme)
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme") || "light"
  currentTheme = savedTheme
  document.documentElement.setAttribute("data-theme", currentTheme)

  const themeIcon = document.getElementById("themeIcon")
  const themeText = document.getElementById("themeText")

  if (currentTheme === "dark") {
    themeIcon.textContent = "☀️"
    themeText.textContent = "Light Mode"
  } else {
    themeIcon.textContent = "🌙"
    themeText.textContent = "Dark Mode"
  }
}

// AI Suggestions
function showAISuggestions(type) {
  // Remove existing suggestions
  const existingSuggestions = document.querySelector(".ai-suggestions")
  if (existingSuggestions) {
    existingSuggestions.remove()
  }

  const suggestions = aiSuggestions[type]
  if (!suggestions) return

  const suggestionsDiv = document.createElement("div")
  suggestionsDiv.className = "ai-suggestions"

  const title = document.createElement("h4")
  title.textContent = "🤖 AI Suggestions:"
  suggestionsDiv.appendChild(title)

  suggestions.forEach((suggestion) => {
    const suggestionItem = document.createElement("div")
    suggestionItem.className = "suggestion-item"
    suggestionItem.textContent = suggestion
    suggestionItem.onclick = () => applySuggestion(type, suggestion)
    suggestionsDiv.appendChild(suggestionItem)
  })

  // Find the appropriate input field and add suggestions after it
  let targetElement
  if (type === "fullName") {
    targetElement = document.getElementById("fullName").parentElement
  } else if (type === "summary") {
    targetElement = document.getElementById("summary").parentElement
  } else if (type === "skills") {
    targetElement = document.getElementById("skillInput").parentElement
  } else if (type === "degree") {
    targetElement = event.target.closest(".form-group")
  } else if (type === "position") {
    targetElement = event.target.closest(".form-group")
  } else if (type === "experience") {
    targetElement = event.target.closest(".form-group")
  }

  if (targetElement) {
    targetElement.appendChild(suggestionsDiv)
  }
}

function applySuggestion(type, suggestion) {
  if (type === "fullName") {
    showInfoPopup()
  } else if (type === "summary") {
    document.getElementById("summary").value = suggestion
  } else if (type === "skills") {
    if (!skills.includes(suggestion)) {
      skills.push(suggestion)
      updateSkillsDisplay()
      updateSkillsPreview()
    }
  } else if (type === "degree") {
    const input = event.target.closest(".form-group").querySelector("input")
    input.value = suggestion
  } else if (type === "position") {
    const input = event.target.closest(".form-group").querySelector("input")
    input.value = suggestion
  } else if (type === "experience") {
    const textarea = event.target.closest(".form-group").querySelector("textarea")
    textarea.value = suggestion
  }

  // Remove suggestions after applying
  const suggestionsDiv = document.querySelector(".ai-suggestions")
  if (suggestionsDiv) {
    suggestionsDiv.remove()
  }

  updatePreview()
  updateProgress()
}

function updateProgress() {
  const requiredFields = ["fullName", "email", "phone"]
  const optionalSections = [
    document.getElementById("summary").value.trim(),
    skills.length > 0,
    document.querySelectorAll('.education-item input[value!=""]').length > 0,
    document.querySelectorAll('.experience-item input[value!=""], .experience-item textarea[value!=""]').length > 0,
  ]

  let filledRequired = 0
  requiredFields.forEach((fieldId) => {
    if (document.getElementById(fieldId).value.trim()) {
      filledRequired++
    }
  })

  let filledOptional = 0
  optionalSections.forEach((section) => {
    if (section) filledOptional++
  })

  const totalProgress = (filledRequired / requiredFields.length) * 60 + (filledOptional / optionalSections.length) * 40
  document.getElementById("progressBar").style.width = totalProgress + "%"
}

function addSkill() {
  const skillInput = document.getElementById("skillInput")
  const skill = skillInput.value.trim()

  if (skill && !skills.includes(skill)) {
    skills.push(skill)
    skillInput.value = ""
    updateSkillsDisplay()
    updateSkillsPreview()
    updateProgress()
  }
}

function removeSkill(skill) {
  skills = skills.filter((s) => s !== skill)
  updateSkillsDisplay()
  updateSkillsPreview()
  updateProgress()
}

function updateSkillsDisplay() {
  const container = document.getElementById("skillsContainer")
  container.innerHTML = ""

  skills.forEach((skill) => {
    const skillTag = document.createElement("div")
    skillTag.className = "skill-tag"
    skillTag.innerHTML = `${skill} <span onclick="removeSkill('${skill}')" style="cursor: pointer; margin-left: 8px; font-weight: bold;">×</span>`
    container.appendChild(skillTag)
  })
}

function clearForm() {
  showConfirmPopup()
}

// Auto-hide AI suggestions when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".ai-suggestion-btn") && !e.target.closest(".ai-suggestions")) {
    const suggestions = document.querySelector(".ai-suggestions")
    if (suggestions) {
      suggestions.remove()
    }
  }
})

// Declare functions that were used but not declared
function updatePreview() {
  // Implementation for updatePreview
}

function closePopup() {
  // Implementation for closePopup
}

function showInfoPopup() {
  // Implementation for showInfoPopup
}

function updateSkillsPreview() {
  // Implementation for updateSkillsPreview
}

function showConfirmPopup() {
  // Implementation for showConfirmPopup
}
