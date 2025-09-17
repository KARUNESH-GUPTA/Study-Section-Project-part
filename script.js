// Global variables
let currentState = '';
let currentUniversity = '';
let currentCourse = '';
let currentVideo = null;
let currentPlaylist = [];
let allVideos = [];
let likedVideos = JSON.parse(localStorage.getItem('likedVideos')) || [];
let recentVideos = JSON.parse(localStorage.getItem('recentVideos')) || [];
let watchLaterVideos = JSON.parse(localStorage.getItem('watchLaterVideos')) || [];
let savedNotes = JSON.parse(localStorage.getItem('savedNotes')) || [];
let isDarkTheme = localStorage.getItem('darkTheme') === 'true';
let currentStep = 0;
let isVoiceRecording = false;
let recognition = null;
let currentLang = localStorage.getItem('platformLang') || 'hi';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadUserPreferences();
});

function initializeApp() {
    // Apply theme
    if (isDarkTheme) {
        document.body.setAttribute('data-theme', 'dark');
        document.getElementById('themeToggle').innerHTML = '<i class="fas fa-sun"></i>';
    }

    // Apply language
    applyTranslations();

    // Setup speech recognition
    if ('webkitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = currentLang === 'hi' ? 'hi-IN' : currentLang === 'pa' ? 'pa-IN' : 'en-US';

        recognition.onresult = function(event) {
            let transcript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                if (event.results[i].isFinal) {
                    transcript += event.results[i][0].transcript;
                }
            }
            if (transcript) {
                document.getElementById('noteContent').value += transcript + ' ';
            }
        };

        recognition.onerror = function(event) {
            showToast(getTranslation('voiceRecordingError') + ': ' + event.error, 'error');
            stopVoiceRecording();
        };

        recognition.onend = function() {
            stopVoiceRecording();
        };
    }

    displaySavedNotes();
    populateStates();
}

function setupEventListeners() {
    // Modal click outside to close
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            closeAllModals();
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key === 's') {
            event.preventDefault();
            saveNote(event);
        }
        if (event.key === 'Escape') {
            closeAllModals();
        }
    });

    // Rating slider
    const ratingSlider = document.getElementById('feedbackRating');
    if (ratingSlider) {
        ratingSlider.addEventListener('input', function() {
            document.getElementById('ratingValue').textContent = this.value + '/5';
        });
    }
}

function loadUserPreferences() {
    const savedSelection = JSON.parse(localStorage.getItem('userSelection') || '{}');
    if (savedSelection.state && savedSelection.university && savedSelection.course) {
        currentState = savedSelection.state;
        currentUniversity = savedSelection.university;
        currentCourse = savedSelection.course;
        setupSelectedCourse();
    }
}

// Language Functions
function getTranslation(key) {
    return translations[currentLang][key] || translations.hi[key] || key;
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = getTranslation(key);
    });

    document.querySelectorAll('[data-placeholder]').forEach(el => {
        const key = el.getAttribute('data-placeholder');
        el.placeholder = getTranslation(key);
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        el.title = getTranslation(key);
    });

    document.title = getTranslation('platformName');
    document.getElementById('langSelect').value = currentLang;
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('platformLang', lang);
    applyTranslations();
    
    // Update speech recognition language
    if (recognition) {
        recognition.lang = currentLang === 'hi' ? 'hi-IN' : currentLang === 'pa' ? 'pa-IN' : 'en-US';
    }
    
    showToast(getTranslation('themeChanged'), 'success');
}

// Theme toggle
function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
    document.getElementById('themeToggle').innerHTML = isDarkTheme ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('darkTheme', isDarkTheme);
    showToast(getTranslation('themeChanged'), 'success');
}

// Selection Modal Functions
function populateStates() {
    const grid = document.getElementById('statesGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    Object.keys(educationData).forEach(stateKey => {
        const state = educationData[stateKey];
        const card = document.createElement('div');
        card.className = 'option-card';
        card.innerHTML = `
            <div class="option-title">${state.name}</div>
            <div class="option-subtitle">${Object.keys(state.universities).length} Universities</div>
        `;
        card.onclick = () => selectState(stateKey, card);
        grid.appendChild(card);
    });
}

function openSelectionModal() {
    document.getElementById('selectionModal').classList.add('active');
    currentStep = 0;
    showStep(0);
}

function closeSelectionModal() {
    document.getElementById('selectionModal').classList.remove('active');
}

function selectState(state, card) {
    currentState = state;
    document.querySelectorAll('#statesGrid .option-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    document.getElementById('nextStepBtn').disabled = false;
}

function selectUniversity(university, card) {
    currentUniversity = university;
    document.querySelectorAll('#universitiesGrid .option-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    document.getElementById('nextStepBtn').disabled = false;
}

function selectCourse(course, card) {
    currentCourse = course;
    document.querySelectorAll('#coursesGrid .option-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    document.getElementById('nextStepBtn').disabled = false;
}

function nextStep() {
    if (currentStep < 2) {
        currentStep++;
        showStep(currentStep);
    } else {
        finishSelection();
    }
}

function previousStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
}

function showStep(step) {
    // Hide all steps
    document.querySelectorAll('.selection-step').forEach(stepEl => {
        stepEl.classList.add('hidden');
    });

    // Show current step
    const stepElements = ['stateStep', 'universityStep', 'courseStep'];
    const currentStepEl = document.getElementById(stepElements[step]);
    if (currentStepEl) {
        currentStepEl.classList.remove('hidden');
    }

    // Update buttons
    document.getElementById('prevStepBtn').disabled = step === 0;
    document.getElementById('nextStepBtn').disabled = true;

    // Populate step content
    if (step === 1) {
        populateUniversities();
    } else if (step === 2) {
        populateCourses();
        const nextBtn = document.getElementById('nextStepBtn');
        nextBtn.innerHTML = `<i class="fas fa-check"></i> ${getTranslation('finish')}`;
    } else {
        const nextBtn = document.getElementById('nextStepBtn');
        nextBtn.innerHTML = `${getTranslation('next')} <i class="fas fa-arrow-right"></i>`;
    }
}

function populateUniversities() {
    const grid = document.getElementById('universitiesGrid');
    grid.innerHTML = '';
    const universities = educationData[currentState].universities;

    Object.keys(universities).forEach(key => {
        const uni = universities[key];
        const card = document.createElement('div');
        card.className = 'option-card';
        card.innerHTML = `
            <div class="option-title">${uni.name}</div>
            <div class="option-subtitle">${uni.fullName}</div>
        `;
        card.onclick = () => selectUniversity(key, card);
        grid.appendChild(card);
    });
}

function populateCourses() {
    const grid = document.getElementById('coursesGrid');
    grid.innerHTML = '';
    const courses = educationData[currentState].universities[currentUniversity].courses;

    Object.keys(courses).forEach(key => {
        const course = courses[key];
        const card = document.createElement('div');
        card.className = 'option-card';
        card.innerHTML = `
            <div class="option-title">${course.name}</div>
            <div class="option-subtitle">${course.duration}</div>
        `;
        card.onclick = () => selectCourse(key, card);
        grid.appendChild(card);
    });
}

function finishSelection() {
    // Save selection
    localStorage.setItem('userSelection', JSON.stringify({
        state: currentState,
        university: currentUniversity,
        course: currentCourse
    }));

    setupSelectedCourse();
    closeSelectionModal();
    showToast(getTranslation('courseSelected'), 'success');
}

function setupSelectedCourse() {
    if (!currentState || !currentUniversity || !currentCourse) return;
    
    const stateData = educationData[currentState];
    const universityData = stateData.universities[currentUniversity];
    const courseData = universityData.courses[currentCourse];

    // Update UI
    document.getElementById('courseName').textContent = courseData.name;
    document.getElementById('universityName').textContent = universityData.name;
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('videoSection').style.display = 'block';
    document.getElementById('videosSection').style.display = 'block';

    // Setup navigation
    setupCourseNavigation(courseData.structure);
    flattenAllVideos(courseData.structure);
    populateSubjects(courseData.structure);
    showAllVideos();
}

function setupCourseNavigation(structure) {
    const nav = document.getElementById('courseNavigation');
    nav.innerHTML = '';

    Object.keys(structure).forEach(year => {
        const yearItem = document.createElement('li');
        yearItem.className = 'nav-item expandable';
        
        let semesterItems = '';
        Object.keys(structure[year]).forEach(semester => {
            let subjectItems = '';
            Object.keys(structure[year][semester]).forEach(subject => {
                const videoCount = structure[year][semester][subject].length;
                subjectItems += `
                    <li class="nav-item">
                        <a href="#" class="nav-link" onclick="showSubjectVideos('${subject}', '${year}', '${semester}', event)">
                            <i class="fas fa-play-circle"></i>
                            <span>${subject} (${videoCount})</span>
                        </a>
                    </li>
                `;
            });
            
            semesterItems += `
                <li class="nav-item expandable">
                    <a href="#" class="nav-link" onclick="toggleNavExpand(event)">
                        <i class="fas fa-book-open"></i>
                        <span>${semester}</span>
                        <i class="fas fa-chevron-right expand-icon"></i>
                    </a>
                    <ul class="nav-list sub-nav">
                        ${subjectItems}
                    </ul>
                </li>
            `;
        });
        
        yearItem.innerHTML = `
            <a href="#" class="nav-link" onclick="toggleNavExpand(event)">
                <i class="fas fa-calendar-alt"></i>
                <span>${year}</span>
                <i class="fas fa-chevron-right expand-icon"></i>
            </a>
            <ul class="nav-list sub-nav">
                ${semesterItems}
            </ul>
        `;

        nav.appendChild(yearItem);
    });
}

function toggleNavExpand(event) {
    event.preventDefault();
    const expandable = event.target.closest('.expandable');
    expandable.classList.toggle('expanded');
}

function flattenAllVideos(structure) {
    allVideos = [];
    Object.keys(structure).forEach(year => {
        Object.keys(structure[year]).forEach(semester => {
            Object.keys(structure[year][semester]).forEach(subject => {
                allVideos.push(...structure[year][semester][subject]);
            });
        });
    });
}

function populateSubjects(structure) {
    const select = document.getElementById('noteSubject');
    select.innerHTML = `<option value="">${getTranslation('selectSubject')}</option>`;
    
    const subjects = new Set();
    Object.keys(structure).forEach(year => {
        Object.keys(structure[year]).forEach(semester => {
            Object.keys(structure[year][semester]).forEach(subject => {
                subjects.add(subject);
            });
        });
    });

    subjects.forEach(subject => {
        const option = document.createElement('option');
        option.value = subject;
        option.textContent = subject;
        select.appendChild(option);
    });
}

// Video functions
function showSubjectVideos(subject, year, semester, event) {
    if (event) {
        event.preventDefault();
        // Update active navigation
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        event.target.classList.add('active');
    }
    
    const courseData = educationData[currentState].universities[currentUniversity].courses[currentCourse];
    const videos = courseData.structure[year][semester][subject];
    
    currentPlaylist = videos;
    document.getElementById('sectionTitle').textContent = subject;
    displayVideos(videos);
}

function showAllVideos() {
    currentPlaylist = allVideos;
    document.getElementById('sectionTitle').textContent = getTranslation('allVideos');
    displayVideos(allVideos);
}

function showLikedVideos() {
    currentPlaylist = likedVideos;
    document.getElementById('sectionTitle').textContent = getTranslation('favorites');
    displayVideos(likedVideos);
}

function showRecentVideos() {
    currentPlaylist = recentVideos;
    document.getElementById('sectionTitle').textContent = getTranslation('recent');
    displayVideos(recentVideos);
}

function showWatchLater() {
    currentPlaylist = watchLaterVideos;
    document.getElementById('sectionTitle').textContent = getTranslation('watchLater');
    displayVideos(watchLaterVideos);
}

function displayVideos(videos) {
    const grid = document.getElementById('videosGrid');
    grid.innerHTML = '';

    if (videos.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-secondary);">${getTranslation('noVideosFound')}</div>`;
        return;
    }

    videos.forEach((video, index) => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.innerHTML = `
            <div class="video-thumbnail">
                🎬
                <div class="video-duration">${video.duration}</div>
            </div>
            <div class="video-details">
                <div class="video-card-title">${video.title}</div>
                <div class="video-meta">
                    <span>${video.duration}</span>
                    <button class="btn btn-secondary" onclick="event.stopPropagation(); addToWatchLaterFromCard('${video.id}')" style="padding: 4px 8px; font-size: 12px;">
                        <i class="fas fa-clock"></i>
                    </button>
                </div>
            </div>
        `;
        card.onclick = () => playVideo(video, index);
        grid.appendChild(card);
    });
}

function playVideo(video, index) {
    currentVideo = video;
    document.getElementById('videoFrame').src = video.iframe;
    document.getElementById('currentVideoTitle').textContent = video.title;
    document.getElementById('videoDuration').textContent = video.duration;

    // Add to recent videos
    addToRecentVideos(video);
    updateLikeButton();
    
    // Scroll to video player
    document.getElementById('videoSection').scrollIntoView({ behavior: 'smooth' });
}

function addToRecentVideos(video) {
    recentVideos = recentVideos.filter(v => v.id !== video.id);
    recentVideos.unshift(video);
    if (recentVideos.length > 50) {
        recentVideos = recentVideos.slice(0, 50);
    }
    localStorage.setItem('recentVideos', JSON.stringify(recentVideos));
}

function updateLikeButton() {
    const likeBtn = document.getElementById('likeBtn');
    const isLiked = likedVideos.some(v => v.id === currentVideo.id);
    
    if (isLiked) {
        likeBtn.innerHTML = `<i class="fas fa-heart"></i> ${getTranslation('liked')}`;
        likeBtn.classList.add('btn-primary');
        likeBtn.classList.remove('btn-secondary');
    } else {
        likeBtn.innerHTML = `<i class="far fa-heart"></i> ${getTranslation('like')}`;
        likeBtn.classList.add('btn-secondary');
        likeBtn.classList.remove('btn-primary');
    }
}

function toggleLike() {
    if (!currentVideo) {
        showToast(getTranslation('selectVideoFirst'), 'warning');
        return;
    }

    const index = likedVideos.findIndex(v => v.id === currentVideo.id);
    if (index > -1) {
        likedVideos.splice(index, 1);
        showToast(getTranslation('videoUnliked'), 'info');
    } else {
        likedVideos.push(currentVideo);
        showToast(getTranslation('videoLiked'), 'success');
    }

    localStorage.setItem('likedVideos', JSON.stringify(likedVideos));
    updateLikeButton();
}

function addToWatchLater() {
    if (!currentVideo) {
        showToast(getTranslation('selectVideoFirst'), 'warning');
        return;
    }
    addToWatchLaterFromCard(currentVideo.id);
}

function addToWatchLaterFromCard(videoId) {
    const video = allVideos.find(v => v.id === videoId);
    if (video && !watchLaterVideos.some(v => v.id === videoId)) {
        watchLaterVideos.push(video);
        localStorage.setItem('watchLaterVideos', JSON.stringify(watchLaterVideos));
        showToast(getTranslation('addedToWatchLater'), 'success');
    } else if (watchLaterVideos.some(v => v.id === videoId)) {
        showToast(getTranslation('alreadyInList'), 'info');
    }
}

function previousVideo() {
    if (!currentVideo) return;
    const currentIndex = currentPlaylist.findIndex(v => v.id === currentVideo.id);
    if (currentIndex > 0) {
        playVideo(currentPlaylist[currentIndex - 1], currentIndex - 1);
    } else {
        showToast(getTranslation('firstVideo'), 'info');
    }
}

function nextVideo() {
    if (!currentVideo) return;
    const currentIndex = currentPlaylist.findIndex(v => v.id === currentVideo.id);
    if (currentIndex < currentPlaylist.length - 1) {
        playVideo(currentPlaylist[currentIndex + 1], currentIndex + 1);
    } else {
        showToast(getTranslation('lastVideo'), 'info');
    }
}

function changePlaybackSpeed() {
    showToast('Playback speed changed', 'info');
}

function toggleFullscreen() {
    const videoFrame = document.getElementById('videoFrame');
    if (videoFrame.requestFullscreen) {
        videoFrame.requestFullscreen();
    }
}

function shareVideo() {
    if (!currentVideo) {
        showToast(getTranslation('selectVideoFirst'), 'warning');
        return;
    }
    
    if (navigator.share) {
        navigator.share({
            title: currentVideo.title,
            url: currentVideo.iframe
        });
    } else {
        navigator.clipboard.writeText(currentVideo.iframe).then(() => {
            showToast(getTranslation('linkCopied'), 'success');
        });
    }
}

function downloadVideo() {
    if (!currentVideo) {
        showToast(getTranslation('selectVideoFirst'), 'warning');
        return;
    }
    
    // This would typically open the video in a new tab for download
    window.open(currentVideo.iframe, '_blank');
}

// Search function
function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    if (!query) {
        showAllVideos();
        return;
    }

    const filtered = allVideos.filter(video => 
        video.title.toLowerCase().includes(query)
    );

    currentPlaylist = filtered;
    document.getElementById('sectionTitle').textContent = `${getTranslation('searchResults')}: "${query}"`;
    displayVideos(filtered);
    
    if (filtered.length === 0) {
        showToast(getTranslation('noVideosFound'), 'info');
    } else {
        showToast(`${filtered.length} videos found`, 'success');
    }
}

function handleSearchEnter(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
}

// View functions
function setGridView() {
    const grid = document.getElementById('videosGrid');
    grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
    grid.classList.remove('list-view');
    
    document.getElementById('gridViewBtn').classList.add('active');
    document.getElementById('listViewBtn').classList.remove('active');
}

function setListView() {
    const grid = document.getElementById('videosGrid');
    grid.style.gridTemplateColumns = '1fr';
    grid.classList.add('list-view');
    
    document.getElementById('listViewBtn').classList.add('active');
    document.getElementById('gridViewBtn').classList.remove('active');
}

// Sidebar and notebook toggle
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}

function toggleNotebook() {
    document.getElementById('notebook').classList.toggle('active');
}

// Notes functions
function saveNote(event) {
    event.preventDefault();
    
    const title = document.getElementById('noteTitle').value.trim();
    const subject = document.getElementById('noteSubject').value;
    const content = document.getElementById('noteContent').value.trim();

    if (!title || !content) {
        showToast(getTranslation('titleRequired'), 'warning');
        return;
    }

    const note = {
        id: Date.now().toString(),
        title: title,
        subject: subject,
        content: content,
        timestamp: Date.now(),
        videoTitle: currentVideo ? currentVideo.title : null
    };

    savedNotes.push(note);
    localStorage.setItem('savedNotes', JSON.stringify(savedNotes));

    // Clear form
    document.getElementById('noteTitle').value = '';
    document.getElementById('noteContent').value = '';
    document.getElementById('noteSubject').value = '';

    displaySavedNotes();
    showToast(getTranslation('noteSaved'), 'success');
}

function displaySavedNotes() {
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = '';

    if (savedNotes.length === 0) {
        notesList.innerHTML = `<div style="text-align: center; color: var(--text-secondary); padding: 1rem;">${getTranslation('noVideosFound')}</div>`;
        return;
    }

    savedNotes.slice().reverse().forEach(note => {
        const noteItem = document.createElement('div');
        noteItem.className = 'note-item';
        noteItem.innerHTML = `
            <div class="note-item-title">${note.title}</div>
            <div class="note-item-preview">${note.content.substring(0, 100)}${note.content.length > 100 ? '...' : ''}</div>
            <div class="note-item-date">${new Date(note.timestamp).toLocaleDateString()}</div>
        `;
        noteItem.onclick = () => loadNote(note);
        notesList.appendChild(noteItem);
    });
}

function loadNote(note) {
    document.getElementById('noteTitle').value = note.title;
    document.getElementById('noteSubject').value = note.subject || '';
    document.getElementById('noteContent').value = note.content;
}

function formatText(command) {
    const textarea = document.getElementById('noteContent');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);

    if (selectedText) {
        let formattedText = selectedText;
        switch (command) {
            case 'bold':
                formattedText = `**${selectedText}**`;
                break;
            case 'italic':
                formattedText = `*${selectedText}*`;
                break;
            case 'underline':
                formattedText = `_${selectedText}_`;
                break;
        }

        textarea.value = textarea.value.substring(0, start) + formattedText + textarea.value.substring(end);
        textarea.focus();
        textarea.setSelectionRange(start + formattedText.length, start + formattedText.length);
    }
}

function toggleVoiceRecording() {
    if (!recognition) {
        showToast('Voice recording not supported', 'error');
        return;
    }

    if (isVoiceRecording) {
        recognition.stop();
    } else {
        recognition.start();
        isVoiceRecording = true;
        document.getElementById('voiceStatus').classList.add('recording');
        document.getElementById('voiceBtn').innerHTML = `<i class="fas fa-stop"></i> Stop`;
        showToast(getTranslation('voiceRecordingStarted'), 'success');
    }
}

function stopVoiceRecording() {
    isVoiceRecording = false;
    document.getElementById('voiceStatus').classList.remove('recording');
    document.getElementById('voiceBtn').innerHTML = `<i class="fas fa-microphone"></i> ${getTranslation('voiceNote')}`;
}

// Modal functions
function openFeedbackModal() {
    document.getElementById('feedbackModal').classList.add('active');
}

function closeFeedbackModal() {
    document.getElementById('feedbackModal').classList.remove('active');
}

function submitFeedback(event) {
    event.preventDefault();
    
    const name = document.getElementById('feedbackName').value;
    const email = document.getElementById('feedbackEmail').value;
    const rating = document.getElementById('feedbackRating').value;
    const message = document.getElementById('feedbackMessage').value;

    // Here you would normally send this data to your server
    console.log('Feedback submitted:', { name, email, rating, message });

    showToast(getTranslation('feedbackSent'), 'success');
    closeFeedbackModal();

    // Clear form
    document.getElementById('feedbackName').value = '';
    document.getElementById('feedbackEmail').value = '';
    document.getElementById('feedbackRating').value = '5';
    document.getElementById('feedbackMessage').value = '';
    document.getElementById('ratingValue').textContent = '5/5';
}

function openChatbotModal() {
    document.getElementById('chatbotModal').classList.add('active');
}

function closeChatbotModal() {
    document.getElementById('chatbotModal').classList.remove('active');
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;

    const messagesContainer = document.getElementById('chatMessages');
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user-message';
    userMessage.innerHTML = `<strong>You:</strong> ${message}`;
    messagesContainer.appendChild(userMessage);

    // Add bot response (simple responses)
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'chat-message bot-message';
        botMessage.innerHTML = `<strong>${getTranslation('assistant')}:</strong> ${getBotResponse(message)}`;
        messagesContainer.appendChild(botMessage);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);

    input.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getBotResponse(message) {
    const responses = [
        getTranslation('chatWelcome'),
        "You can save your study notes in the notebook section.",
        "If you're facing any technical issues, please fill the feedback form.",
        "You can add videos to favorites and watch them later.",
        "Do you need information about any specific course or subject?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

function handleChatEnter(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
}

// Toast notification
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type} show`;
    
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };

    toast.innerHTML = `
        <i class="${icons[type]}"></i>
        <span>${message}</span>
    `;

    document.getElementById('toastContainer').appendChild(toast);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}