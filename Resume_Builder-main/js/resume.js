// Resume functionality and preview updates

const skills = []
let educationCount = 0
let experienceCount = 0
const currentTheme = "light" // Default theme

function updatePreview() {
  // Update personal information
  const fullName = document.getElementById("fullName").value || "Your Name"
  const email = document.getElementById("email").value || "your.email@example.com"
  const phone = document.getElementById("phone").value || "+1 (555) 123-4567"
  const summary = document.getElementById("summary").value

  document.getElementById("previewName").textContent = fullName
  document.getElementById("previewEmail").textContent = email
  document.getElementById("previewPhone").textContent = phone

  // Update summary
  const summarySection = document.getElementById("summarySection")
  if (summary.trim()) {
    document.getElementById("previewSummary").textContent = summary
    summarySection.style.display = "block"
  } else {
    summarySection.style.display = "none"
  }

  // Update skills
  updateSkillsPreview()

  // Update education
  updateEducationPreview()

  // Update experience
  updateExperiencePreview()
}

function updateSkillsPreview() {
  const skillsSection = document.getElementById("skillsSection")
  const previewSkills = document.getElementById("previewSkills")

  if (skills.length > 0) {
    previewSkills.innerHTML = ""
    skills.forEach((skill) => {
      const skillItem = document.createElement("div")
      skillItem.className = "skill-item"
      skillItem.textContent = skill
      previewSkills.appendChild(skillItem)
    })
    skillsSection.style.display = "block"
  } else {
    skillsSection.style.display = "none"
  }
}

function addEducation() {
  const container = document.getElementById("educationContainer")
  const educationItem = document.createElement("div")
  educationItem.className = "dynamic-item education-item"
  educationItem.innerHTML = `
        <div class="form-group">
            <label>Institution</label>
            <input type="text" name="education[${educationCount}][institution]" placeholder="University/School name">
        </div>
        <div class="form-group">
            <label>Degree</label>
            <input type="text" name="education[${educationCount}][degree]" placeholder="Degree/Certificate">
            <button type="button" class="ai-suggestion-btn" onclick="showAISuggestions('degree')">✨ AI</button>
        </div>
        <div class="form-group">
            <label>Year</label>
            <input type="text" name="education[${educationCount}][year]" placeholder="2020-2024">
        </div>
        <button type="button" class="btn btn-danger" onclick="removeEducation(this)">Remove</button>
    `

  container.appendChild(educationItem)
  educationCount++

  // Add event listeners to new inputs
  const inputs = educationItem.querySelectorAll("input")
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      updatePreview()
      updateProgress()
    })
  })
}

function removeEducation(button) {
  button.parentElement.remove()
  updatePreview()
  updateProgress()
}

function updateEducationPreview() {
  const educationItems = document.querySelectorAll(".education-item")
  const previewEducation = document.getElementById("previewEducation")
  const educationSection = document.getElementById("educationSection")

  previewEducation.innerHTML = ""
  let hasEducation = false

  educationItems.forEach((item) => {
    const institution = item.querySelector('input[name*="[institution]"]').value
    const degree = item.querySelector('input[name*="[degree]"]').value
    const year = item.querySelector('input[name*="[year]"]').value

    if (institution || degree || year) {
      hasEducation = true
      const educationDiv = document.createElement("div")
      educationDiv.className = "resume-item"
      educationDiv.innerHTML = `
                <h4>${degree || "Degree"}</h4>
                <div class="meta">${institution || "Institution"} ${year ? `• ${year}` : ""}</div>
            `
      previewEducation.appendChild(educationDiv)
    }
  })

  educationSection.style.display = hasEducation ? "block" : "none"
}

function addExperience() {
  const container = document.getElementById("experienceContainer")
  const experienceItem = document.createElement("div")
  experienceItem.className = "dynamic-item experience-item"
  experienceItem.innerHTML = `
        <div class="form-group">
            <label>Company</label>
            <input type="text" name="experience[${experienceCount}][company]" placeholder="Company name">
        </div>
        <div class="form-group">
            <label>Position</label>
            <input type="text" name="experience[${experienceCount}][position]" placeholder="Job title">
            <button type="button" class="ai-suggestion-btn" onclick="showAISuggestions('position')">✨ AI</button>
        </div>
        <div class="form-group">
            <label>Duration</label>
            <input type="text" name="experience[${experienceCount}][duration]" placeholder="Jan 2020 - Present">
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea name="experience[${experienceCount}][description]" placeholder="Job responsibilities..."></textarea>
            <button type="button" class="ai-suggestion-btn" onclick="showAISuggestions('experience')">✨ AI</button>
        </div>
        <button type="button" class="btn btn-danger" onclick="removeExperience(this)">Remove</button>
    `

  container.appendChild(experienceItem)
  experienceCount++

  // Add event listeners to new inputs
  const inputs = experienceItem.querySelectorAll("input, textarea")
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      updatePreview()
      updateProgress()
    })
  })
}

function removeExperience(button) {
  button.parentElement.remove()
  updatePreview()
  updateProgress()
}

function updateExperiencePreview() {
  const experienceItems = document.querySelectorAll(".experience-item")
  const previewExperience = document.getElementById("previewExperience")
  const experienceSection = document.getElementById("experienceSection")

  previewExperience.innerHTML = ""
  let hasExperience = false

  experienceItems.forEach((item) => {
    const company = item.querySelector('input[name*="[company]"]').value
    const position = item.querySelector('input[name*="[position]"]').value
    const duration = item.querySelector('input[name*="[duration]"]').value
    const description = item.querySelector('textarea[name*="[description]"]').value

    if (company || position || duration || description) {
      hasExperience = true
      const experienceDiv = document.createElement("div")
      experienceDiv.className = "resume-item"
      experienceDiv.innerHTML = `
                <h4>${position || "Position"}</h4>
                <div class="meta">${company || "Company"} ${duration ? `• ${duration}` : ""}</div>
                ${description ? `<p>${description}</p>` : ""}
            `
      previewExperience.appendChild(experienceDiv)
    }
  })

  experienceSection.style.display = hasExperience ? "block" : "none"
}

async function downloadPDF() {
  const downloadText = document.getElementById("downloadText")
  const downloadLoading = document.getElementById("downloadLoading")

  downloadText.style.display = "none"
  downloadLoading.style.display = "inline-block"

  try {
    showLoadingPopup()

    const { jsPDF } = window.jspdf
    const resumeElement = document.getElementById("resumePreview")

    // Store original theme and force light theme for PDF
    const originalTheme = currentTheme
    if (currentTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "light")
    }

    // Create a clone of the resume for PDF generation
    const resumeClone = resumeElement.cloneNode(true)
    resumeClone.style.position = "absolute"
    resumeClone.style.left = "-9999px"
    resumeClone.style.top = "0"
    resumeClone.style.width = "794px"
    resumeClone.style.fontFamily = "Arial, sans-serif"
    resumeClone.style.fontSize = "14px"
    resumeClone.style.lineHeight = "1.4"
    resumeClone.style.color = "#000000"
    resumeClone.style.backgroundColor = "#ffffff"

    // Apply PDF-specific styles to the clone
    const allElements = resumeClone.querySelectorAll("*")
    allElements.forEach((el) => {
      el.style.fontFamily = "Arial, sans-serif"
      el.style.color = "#000000"
      el.style.webkitFontSmoothing = "antialiased"
      el.style.mozOsxFontSmoothing = "grayscale"
      el.style.textRendering = "optimizeLegibility"

      if (el.classList.contains("resume-name")) {
        el.style.fontSize = "28px"
        el.style.fontWeight = "bold"
        el.style.color = "#ffffff"
      }
      if (el.tagName === "H3") {
        el.style.fontSize = "18px"
        el.style.fontWeight = "bold"
        el.style.color = "#000000"
      }
      if (el.tagName === "H4") {
        el.style.fontSize = "16px"
        el.style.fontWeight = "bold"
        el.style.color = "#000000"
      }
      if (el.classList.contains("meta")) {
        el.style.fontSize = "13px"
        el.style.color = "#666666"
      }
      if (el.tagName === "P") {
        el.style.fontSize = "14px"
        el.style.color = "#333333"
        el.style.lineHeight = "1.5"
      }
    })

    document.body.appendChild(resumeClone)

    await new Promise((resolve) => setTimeout(resolve, 500))

    const canvas = await window.html2canvas(resumeClone, {
      scale: 4,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#ffffff",
      letterRendering: true,
      logging: false,
      width: 794,
      height: resumeClone.scrollHeight,
      windowWidth: 794,
      windowHeight: resumeClone.scrollHeight,
      onclone: (clonedDoc) => {
        const style = clonedDoc.createElement("style")
        style.textContent = `
                    * {
                        font-family: Arial, sans-serif !important;
                        -webkit-font-smoothing: antialiased !important;
                        -moz-osx-font-smoothing: grayscale !important;
                        text-rendering: optimizeLegibility !important;
                    }
                `
        clonedDoc.head.appendChild(style)
      },
    })

    document.body.removeChild(resumeClone)
    document.documentElement.setAttribute("data-theme", originalTheme)

    const imgData = canvas.toDataURL("image/png", 1.0)
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: false,
    })

    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()
    const imgWidth = pdfWidth
    const imgHeight = (canvas.height * pdfWidth) / canvas.width

    let heightLeft = imgHeight
    let position = 0

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight, "", "FAST")
    heightLeft -= pdfHeight

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight, "", "FAST")
      heightLeft -= pdfHeight
    }

    const fileName = document.getElementById("fullName").value || "Resume"
    pdf.save(`${fileName.replace(/\s+/g, "_")}_Resume.pdf`)
  } catch (error) {
    console.error("Error generating PDF:", error)
    closePopup()
    showErrorPopup()
  } finally {
    downloadText.style.display = "inline"
    downloadLoading.style.display = "none"
  }
}

function showLoadingPopup() {
  // Implementation for showing loading popup
}

function closePopup() {
  // Implementation for closing popup
}

function showErrorPopup() {
  // Implementation for showing error popup
}

function showAISuggestions(field) {
  // Implementation for showing AI suggestions
}

function updateProgress() {
  // Implementation for updating progress
}
