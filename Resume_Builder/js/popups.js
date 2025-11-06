// POPUP SYSTEM FUNCTIONS

let skills = []
const updateSkillsDisplay = () => {}
const updatePreview = () => {}
const updateProgress = () => {}

function createPopup(type, animationType = "default") {
  // Remove existing popup
  const existingPopup = document.querySelector(".popup-overlay")
  if (existingPopup) {
    existingPopup.remove()
  }

  // Create overlay
  const overlay = document.createElement("div")
  overlay.className = "popup-overlay"

  // Create popup
  const popup = document.createElement("div")
  popup.className = `popup popup-${type} popup-${animationType}`

  overlay.appendChild(popup)
  document.body.appendChild(overlay)

  return { overlay, popup }
}

function showPopup(overlay) {
  setTimeout(() => {
    overlay.classList.add("show")
  }, 10)
}

function closePopup() {
  const overlay = document.querySelector(".popup-overlay")
  if (overlay) {
    overlay.classList.remove("show")
    setTimeout(() => {
      overlay.remove()
    }, 400)
  }
}

// DEMO POPUP FUNCTIONS

function showSuccessPopup() {
  const { overlay, popup } = createPopup("success", "bounce")

  popup.innerHTML = `
        <div class="popup-header">
            <button class="popup-close" onclick="closePopup()">×</button>
            <div class="popup-icon">✓</div>
            <h2 class="popup-title">Success!</h2>
            <p class="popup-subtitle">Operation completed successfully</p>
        </div>
        <div class="popup-body">
            <p>Your resume has been successfully created and is ready for download. All sections have been properly formatted and validated.</p>
            <ul style="margin-top: 15px; padding-left: 20px;">
                <li>✅ Personal information verified</li>
                <li>✅ Skills section optimized</li>
                <li>✅ Experience formatted</li>
                <li>✅ Education details added</li>
            </ul>
        </div>
        <div class="popup-footer">
            <button class="popup-btn popup-btn-secondary" onclick="closePopup()">Close</button>
            <button class="popup-btn popup-btn-primary" onclick="closePopup()">Continue</button>
        </div>
    `

  showPopup(overlay)
}

function showErrorPopup() {
  const { overlay, popup } = createPopup("error", "slide")

  popup.innerHTML = `
        <div class="popup-header">
            <button class="popup-close" onclick="closePopup()">×</button>
            <div class="popup-icon">✕</div>
            <h2 class="popup-title">Error Occurred</h2>
            <p class="popup-subtitle">Something went wrong</p>
        </div>
        <div class="popup-body">
            <p>We encountered an error while processing your request. Please check the following:</p>
            <ul style="margin-top: 15px; padding-left: 20px; color: #f44336;">
                <li>❌ Network connection</li>
                <li>❌ Required fields completion</li>
                <li>❌ File format compatibility</li>
                <li>❌ Browser permissions</li>
            </ul>
            <div style="background: #ffebee; padding: 15px; border-radius: 8px; margin-top: 15px;">
                <strong>Error Code:</strong> ERR_RESUME_001<br>
                <strong>Timestamp:</strong> ${new Date().toLocaleString()}
            </div>
        </div>
        <div class="popup-footer">
            <button class="popup-btn popup-btn-secondary" onclick="closePopup()">Cancel</button>
            <button class="popup-btn popup-btn-danger" onclick="closePopup()">Retry</button>
        </div>
    `

  showPopup(overlay)
}

function showWarningPopup() {
  const { overlay, popup } = createPopup("warning", "flip")

  popup.innerHTML = `
        <div class="popup-header">
            <button class="popup-close" onclick="closePopup()">×</button>
            <div class="popup-icon">⚠</div>
            <h2 class="popup-title">Warning</h2>
            <p class="popup-subtitle">Please review before proceeding</p>
        </div>
        <div class="popup-body">
            <p>We noticed some potential issues with your resume that you might want to address:</p>
            <div style="background: #fff3e0; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #ff9800;">
                <h4 style="margin-bottom: 10px; color: #f57c00;">⚠️ Recommendations:</h4>
                <ul style="margin: 0; padding-left: 20px;">
                    <li>Consider adding more skills to strengthen your profile</li>
                    <li>Include quantifiable achievements in experience</li>
                    <li>Add a professional summary if missing</li>
                    <li>Ensure contact information is complete</li>
                </ul>
            </div>
            <p>You can continue without making changes, but addressing these items will improve your resume quality.</p>
        </div>
        <div class="popup-footer">
            <button class="popup-btn popup-btn-secondary" onclick="closePopup()">Continue Anyway</button>
            <button class="popup-btn popup-btn-primary" onclick="closePopup()">Review & Fix</button>
        </div>
    `

  showPopup(overlay)
}

function showInfoPopup() {
  const { overlay, popup } = createPopup("info", "zoom")

  popup.innerHTML = `
        <div class="popup-header">
            <button class="popup-close" onclick="closePopup()">×</button>
            <div class="popup-icon">ℹ</div>
            <h2 class="popup-title">Resume Tips</h2>
            <p class="popup-subtitle">Professional guidance for better results</p>
        </div>
        <div class="popup-body">
            <div style="background: linear-gradient(135deg, #e3f2fd, #f3e5f5); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                <h4 style="margin-bottom: 15px; color: #1976d2;">💡 Pro Tips for Resume Success:</h4>
                <div style="display: grid; gap: 12px;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span style="background: #2196f3; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">1</span>
                        <span>Use action verbs to describe your achievements</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span style="background: #2196f3; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">2</span>
                        <span>Quantify your accomplishments with numbers</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span style="background: #2196f3; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">3</span>
                        <span>Tailor your resume for each job application</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span style="background: #2196f3; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">4</span>
                        <span>Keep it concise - aim for 1-2 pages maximum</span>
                    </div>
                </div>
            </div>
            <p>Our AI assistant can help you implement these best practices automatically!</p>
        </div>
        <div class="popup-footer">
            <button class="popup-btn popup-btn-secondary" onclick="closePopup()">Got It</button>
            <button class="popup-btn popup-btn-primary" onclick="closePopup()">Use AI Assistant</button>
        </div>
    `

  showPopup(overlay)
}

function showConfirmPopup() {
  const { overlay, popup } = createPopup("confirm", "elastic")

  popup.innerHTML = `
        <div class="popup-header">
            <button class="popup-close" onclick="closePopup()">×</button>
            <h2 class="popup-title">Confirm Action</h2>
            <p class="popup-subtitle">Please confirm your decision</p>
        </div>
        <div class="popup-body">
            <div class="confirm-icon">?</div>
            <h3 style="text-align: center; margin-bottom: 15px; color: var(--text-primary);">Clear All Form Data?</h3>
            <p style="text-align: center; color: var(--text-secondary); line-height: 1.6;">
                This action will permanently delete all the information you've entered in the form. 
                This includes your personal details, skills, education, and work experience.
            </p>
            <div style="background: #fff3e0; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
                <strong style="color: #f57c00;">⚠️ This action cannot be undone!</strong>
            </div>
        </div>
        <div class="popup-footer">
            <button class="popup-btn popup-btn-secondary" onclick="closePopup()">Cancel</button>
            <button class="popup-btn popup-btn-danger" onclick="confirmClearForm()">Yes, Clear All</button>
        </div>
    `

  showPopup(overlay)
}

function showFormPopup() {
  const { overlay, popup } = createPopup("form", "fade-scale")

  popup.innerHTML = `
        <div class="popup-header">
            <button class="popup-close" onclick="closePopup()">×</button>
            <h2 class="popup-title">Quick Add Experience</h2>
            <p class="popup-subtitle">Add a new work experience entry</p>
        </div>
        <div class="popup-body">
            <form id="quickExperienceForm">
                <div class="form-group">
                    <label for="quickCompany">Company Name *</label>
                    <input type="text" id="quickCompany" required placeholder="Enter company name">
                </div>
                <div class="form-group">
                    <label for="quickPosition">Position *</label>
                    <input type="text" id="quickPosition" required placeholder="Enter job title">
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                    <div class="form-group">
                        <label for="quickStartDate">Start Date</label>
                        <input type="month" id="quickStartDate">
                    </div>
                    <div class="form-group">
                        <label for="quickEndDate">End Date</label>
                        <input type="month" id="quickEndDate">
                    </div>
                </div>
                <div class="form-group">
                    <label for="quickDescription">Key Achievements</label>
                    <textarea id="quickDescription" rows="4" placeholder="Describe your main accomplishments and responsibilities..."></textarea>
                </div>
                <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin-top: 15px;">
                    <small style="color: #2e7d32;">
                        💡 <strong>Tip:</strong> Use action verbs and include quantifiable results when possible.
                    </small>
                </div>
            </form>
        </div>
        <div class="popup-footer">
            <button class="popup-btn popup-btn-secondary" onclick="closePopup()">Cancel</button>
            <button class="popup-btn popup-btn-primary" onclick="addQuickExperience()">Add Experience</button>
        </div>
    `

  showPopup(overlay)
}

function showLoadingPopup() {
  const { overlay, popup } = createPopup("loading", "bounce")

  popup.innerHTML = `
        <div class="popup-header">
            <div class="popup-icon"></div>
            <h2 class="popup-title">Processing...</h2>
            <p class="popup-subtitle">Please wait while we generate your resume</p>
        </div>
        <div class="popup-body" style="text-align: center;">
            <p style="margin-bottom: 20px;">Our AI is analyzing your information and creating a professional resume layout.</p>
            <div style="display: flex; justify-content: center; gap: 5px; margin: 20px 0;">
                <div style="width: 8px; height: 8px; background: var(--accent-color); border-radius: 50%; animation: loadingDots 1.4s infinite ease-in-out both; animation-delay: -0.32s;"></div>
                <div style="width: 8px; height: 8px; background: var(--accent-color); border-radius: 50%; animation: loadingDots 1.4s infinite ease-in-out both; animation-delay: -0.16s;"></div>
                <div style="width: 8px; height: 8px; background: var(--accent-color); border-radius: 50%; animation: loadingDots 1.4s infinite ease-in-out both;"></div>
            </div>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">This usually takes 3-5 seconds...</p>
        </div>
    `

  // Add loading dots animation
  const style = document.createElement("style")
  style.textContent = `
        @keyframes loadingDots {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1); }
        }
    `
  document.head.appendChild(style)

  showPopup(overlay)

  // Auto close after 3 seconds
  setTimeout(() => {
    closePopup()
    showSuccessPopup()
  }, 3000)
}

function showProgressPopup() {
  const { overlay, popup } = createPopup("progress", "slide")

  popup.innerHTML = `
        <div class="popup-header">
            <button class="popup-close" onclick="closePopup()">×</button>
            <div class="popup-icon"></div>
            <h2 class="popup-title">Upload Progress</h2>
            <p class="popup-subtitle">Uploading your resume to cloud storage</p>
        </div>
        <div class="popup-body">
            <div style="margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span>Uploading resume.pdf</span>
                    <span id="progressPercent">0%</span>
                </div>
                <div class="progress-bar-popup">
                    <div class="progress-fill" id="progressFill" style="width: 0%"></div>
                </div>
            </div>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 8px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span style="font-size: 0.9rem;">File size:</span>
                    <span style="font-size: 0.9rem;">2.4 MB</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span style="font-size: 0.9rem;">Upload speed:</span>
                    <span style="font-size: 0.9rem;" id="uploadSpeed">0 KB/s</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span style="font-size: 0.9rem;">Time remaining:</span>
                    <span style="font-size: 0.9rem;" id="timeRemaining">Calculating...</span>
                </div>
            </div>
        </div>
        <div class="popup-footer">
            <button class="popup-btn popup-btn-danger" onclick="closePopup()">Cancel Upload</button>
        </div>
    `

  showPopup(overlay)

  // Simulate progress
  let progress = 0
  const progressInterval = setInterval(() => {
    progress += Math.random() * 15
    if (progress > 100) progress = 100

    document.getElementById("progressFill").style.width = progress + "%"
    document.getElementById("progressPercent").textContent = Math.round(progress) + "%"
    document.getElementById("uploadSpeed").textContent = (Math.random() * 500 + 100).toFixed(0) + " KB/s"
    document.getElementById("timeRemaining").textContent = Math.max(0, Math.round((100 - progress) / 10)) + "s"

    if (progress >= 100) {
      clearInterval(progressInterval)
      setTimeout(() => {
        closePopup()
        showSuccessPopup()
      }, 500)
    }
  }, 200)
}

function showImagePopup() {
  const { overlay, popup } = createPopup("image", "zoom")

  popup.innerHTML = `
        <div class="popup-header">
            <button class="popup-close" onclick="closePopup()">×</button>
            <div class="popup-icon">📄</div>
            <h2 class="popup-title">Resume Preview</h2>
            <p class="popup-subtitle">Full-size preview of your generated resume</p>
        </div>
        <div class="popup-body">
            <div style="text-align: center; padding: 20px; background: #f5f5f5; border-radius: 8px;">
                <div style="width: 100%; height: 400px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.2rem; margin-bottom: 15px;">
                    📄 Resume Preview<br>
                    <small style="font-size: 0.8rem; opacity: 0.8;">Click to download full resolution</small>
                </div>
                <p style="color: var(--text-secondary); font-size: 0.9rem;">
                    This is a preview of how your resume will look when printed or saved as PDF.
                </p>
            </div>
        </div>
        <div class="popup-footer">
            <button class="popup-btn popup-btn-secondary" onclick="closePopup()">Close</button>
            <button class="popup-btn popup-btn-primary" onclick="downloadPDF(); closePopup();">Download PDF</button>
        </div>
    `

  showPopup(overlay)
}

function showAnimationDemo() {
  const animations = ["bounce", "slide", "flip", "zoom", "fade-scale", "elastic"]
  let currentIndex = 0

  function showNextAnimation() {
    const { overlay, popup } = createPopup("info", animations[currentIndex])

    popup.innerHTML = `
            <div class="popup-header">
                <button class="popup-close" onclick="closePopup()">×</button>
                <h2 class="popup-title">Animation Demo</h2>
                <p class="popup-subtitle">Current: ${animations[currentIndex]} animation</p>
            </div>
            <div class="popup-body" style="text-align: center;">
                <div style="background: var(--primary-gradient); color: white; padding: 30px; border-radius: 15px; margin: 20px 0;">
                    <h3 style="margin-bottom: 15px;">🎬 ${animations[currentIndex].toUpperCase()}</h3>
                    <p>This popup is using the <strong>${animations[currentIndex]}</strong> animation effect.</p>
                </div>
                <p style="color: var(--text-secondary);">
                    Animation ${currentIndex + 1} of ${animations.length}
                </p>
                <div style="display: flex; justify-content: center; gap: 5px; margin: 15px 0;">
                    ${animations
                      .map(
                        (_, i) =>
                          `<div style="width: 8px; height: 8px; border-radius: 50%; background: ${i === currentIndex ? "var(--accent-color)" : "var(--border-color)"};"></div>`,
                      )
                      .join("")}
                </div>
            </div>
            <div class="popup-footer">
                <button class="popup-btn popup-btn-secondary" onclick="closePopup()">Close</button>
                <button class="popup-btn popup-btn-primary" onclick="nextAnimation()">
                    ${currentIndex < animations.length - 1 ? "Next Animation" : "Start Over"}
                </button>
            </div>
        `

    showPopup(overlay)
  }

  window.nextAnimation = () => {
    closePopup()
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % animations.length
      showNextAnimation()
    }, 500)
  }

  showNextAnimation()
}

// Helper functions for popup actions
function confirmClearForm() {
  closePopup()
  // Clear form logic here
  document.getElementById("resumeForm").reset()
  skills = []
  updateSkillsDisplay()
  updatePreview()
  updateProgress()

  setTimeout(() => {
    showSuccessPopup()
  }, 300)
}

function addQuickExperience() {
  const company = document.getElementById("quickCompany").value
  const position = document.getElementById("quickPosition").value
  const startDate = document.getElementById("quickStartDate").value
  const endDate = document.getElementById("quickEndDate").value
  const description = document.getElementById("quickDescription").value

  if (company && position) {
    // Add to experience (simplified for demo)
    closePopup()
    setTimeout(() => {
      showSuccessPopup()
    }, 300)
  } else {
    showErrorPopup()
  }
}
