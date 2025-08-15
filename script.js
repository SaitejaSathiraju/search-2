// NRSC File Search Application
class NRSCSearch {
    constructor() {
        this.data = [];
        this.filteredData = [];
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.searchQuery = '';
        this.activeFilters = new Set();
        
        this.initializeEventListeners();
        this.loadData();
    }

    async loadData() {
        try {
            // In a real application, you would fetch this from an API
            // For now, we'll use a sample of the data structure
            this.data = [
                {
                    "filename": "2019_Cyclones.php",
                    "filepath": "2019_Cyclones.php",
                    "title": "Disaster Management Support",
                    "content": "Disaster Management Support .heading-title { word-break: break-word; } #p-style { font-size: 18px; text-align: justify; } @media (max-width: 576px) { .heading-title { font-size: 24px !important; } #p-style { font-size: 16px; } } .section { background-color: #fff; padding: 20px; margin-bottom: 20px; border-radius: 5px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); } .event-heading { font-size: 24px; color: red; font-weight: 700; text-align: center; margin-bottom: 20px; } .image-card { margin-bottom: 20px; } .image-card .card-body { padding: 15px; } .image-card .card-title { font-size: 20px; font-weight: 700; color: #3f68b5; } .image-card .card-subtitle { font-size: 14px; color: #666; } Disaster Management Support Fani Cyclone (May 2019)",
                    "content_length": 741,
                    "file_size": 5785,
                    "last_modified": "2025-08-06 21:20:59",
                    "status": "success"
                },
                {
                    "filename": "2019_Floods.php",
                    "filepath": "2019_Floods.php",
                    "title": "Disaster Management Support",
                    "content": "Disaster Management Support .heading-title { word-break: break-word; color: #3f68b5; font-weight: bold; } .section { background-color: #fff; padding: 20px; margin-bottom: 20px; border-radius: 5px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); } .event-heading { font-size: 24px; color: red; font-weight: 700; text-align: center; margin: 40px 0 10px; } .region-links { font-size: 18px !important; text-align: center; margin-bottom: 20px; } .card { margin-bottom: 20px; } .card-body h6 { font-size: 14px; color: #666; } .card-title { font-size: 20px; font-weight: 600; color: #3f68b5; text-decoration: none; } .card-title:hover { text-decoration: underline; } @media (max-width: 576px) { .heading-title { font-size: 24px !important; } .card-title { font-size: 16px; } } Disaster Management Support Flood Inundation Maps - 2019",
                    "content_length": 858,
                    "file_size": 5506,
                    "last_modified": "2025-08-06 21:20:59",
                    "status": "success"
                },
                {
                    "filename": "2020_Floods.php",
                    "filepath": "2020_Floods.php",
                    "title": "Disaster Management Support",
                    "content": "Disaster Management Support .heading-title { word-break: break-word; } .region-title { font-size: 24px; color: red; font-weight: 700; text-align: center; margin: 40px 0 10px; } .region-links { font-size: 18px; text-align: center; margin-bottom: 20px; } .region-links { font-size: 18px !important; text-align: center; margin-bottom: 20px; } .map-card { border: 1px solid #ddd; border-radius: 8px; padding: 15px; margin-bottom: 15px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); background-color: #fff; } .map-card h5 { font-size: 14px; font-weight: 600; } .map-card p { margin: 5px 0 0 0; font-size: 20px; } @media (max-width: 576px) { .heading-title { font-size: 26px !important; line-height: 1.3 !important; } .region-title { font-size: 20px; } .map-card h5 { font-size: 16px; } .map-card p { font-size: 14px; } } Disaster Management Support Flood Inundation Maps - 2020 Odisha View on Bhuvan, NDEM August 26, 28, 29 & 31, 2020 Cropped area affected due to flooding in parts of Odisha State August 29, ...",
                    "content_length": 1003,
                    "file_size": 8739,
                    "last_modified": "2025-08-06 21:20:59",
                    "status": "success"
                },
                {
                    "filename": "ASDM_AP.php",
                    "filepath": "ASDM_AP.php",
                    "title": "Aerial Services & Digital Mapping",
                    "content": "Aerial Services & Digital Mapping .container li { font-size: 24px; color: #3f68b5; } .heading-title { word-break: break-word; } #p-style { font-size: 20px; text-align: justify; } @media (max-width: 576px) { .heading-title { font-size: 26px !important; line-height: 1.3 !important; } .container li { font-size: 18px !important; } } .main-content { flex: 1; min-width: 60%; padding-right: 30px; } .sidebar h3 { color: #003366; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 0; } .image-gallery { margin-top: 20px; display: grid; grid-template-columns: 1fr; gap: 20px; } .image-item { position: relative; } .image-item img { width: 100%; height: auto; object-fit: contain; border: 1px solid #ddd; border-radius: 4px; } .image-overlay { position: absolute; bottom: 10px; left: 10px; background-color: rgba(0, 0, 0, 0.6); color: white; padding: 8px 12px; font-size: 16px; font-weight: bold; border-radius: 4px; width: calc(100% - 24px); } Aerial Services & Digital Mapping About Organization About NRSC Aerial Services & Digital Mapping Users Show Menu Users Aerial data acquisition operations caters to the following users: CMPDI, Coal India Limited, National Informatics Centre, ...",
                    "content_length": 1003,
                    "file_size": 9822,
                    "last_modified": "2025-08-06 21:20:59",
                    "status": "success"
                },
                {
                    "filename": "Agr_Apps.php",
                    "filepath": "Agr_Apps.php",
                    "title": "Agriculture",
                    "content": "Agriculture .container li { font-size: 24px; color: #3f68b5; } .heading-title { word-break: break-word; } @media (max-width: 768px) { .heading-title { font-size: 26px !important; line-height: 1.3 !important; } .container li { font-size: 18px !important; } } .main-content { flex: 1; min-width: 60%; padding-right: 30px; } .sidebar h3 { color: #003366; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 0; } .image-gallery { margin-top: 20px; display: grid; grid-template-columns: 1fr; gap: 20px; } .image-item { position: relative; } .image-item img { width: 100%; height: auto; object-fit: contain; border: 1px solid #ddd; border-radius: 4px; } .image-overlay { position: absolute; bottom: 10px; left: 10px; background-color: rgba(0, 0, 0, 0.6); color: white; padding: 8px 12px; font-size: 16px; font-weight: bold; border-radius: 4px; width: calc(100% - 24px); } Agriculture Applications Overview Applications Sensors Users Portals",
                    "content_length": 1003,
                    "file_size": 16514,
                    "last_modified": "2025-08-06 21:20:59",
                    "status": "success"
                },
                {
                    "filename": "DP_Index.php",
                    "filepath": "DP_Index.php",
                    "title": "Data Processing & Dissemination",
                    "content": "Data Processing & Dissemination .container li { font-size: 24px; color: #3f68b5; } .heading-title { word-break: break-word; } #p-style { font-size: 20px; text-align: justify; } @media (max-width: 576px) { .heading-title { font-size: 26px !important; line-height: 1.3 !important; } .container li { font-size: 18px !important; } } .main-content { flex: 1; min-width: 60%; padding-right: 30px; } .sidebar h3 { color: #003366; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 0; } .image-gallery { margin-top: 20px; display: grid; grid-template-columns: 1fr; gap: 20px; } .image-item { position: relative; } .image-item img { width: 100%; height: auto; object-fit: contain; border: 1px solid #ddd; border-radius: 4px; } .image-overlay { position: absolute; bottom: 10px; left: 10px; background-color: rgba(0, 0, 0, 0.6); color: white; padding: 8px 12px; font-size: 16px; font-weight: bold; border-radius: 4px; width: calc(100% - 24px); } Data Processing & Dissemination Overview Technical Details Applications Sensors Users Portals",
                    "content_length": 1003,
                    "file_size": 14624,
                    "last_modified": "2025-08-06 21:20:59",
                    "status": "success"
                },
                {
                    "filename": "2023_RSDA.php",
                    "filepath": "2023_RSDA.php",
                    "title": "UN-CSSTEAP@NRSC RSDA",
                    "content": "UN-CSSTEAP@NRSC RSDA .image-settings { width: 100%; height: auto; cursor: pointer; max-width: 1000px; display: block; margin: 0 auto; } .container li { font-size: 24px; color: #3f68b5; } .heading-title { word-break: break-word; } @media (max-width: 576px) { .heading-title { font-size: 26px !important; line-height: 1.3 !important; } .container li { font-size: 18px !important; } } UN-CSSTEAP@NRSC UN-CSSTEAP@NRSC Participants 2023 RSDA Show Menu Remote Sensing Data Acquisition - 2023",
                    "content_length": 790,
                    "file_size": 3824,
                    "last_modified": "2025-08-06 21:20:59",
                    "status": "success"
                },
                {
                    "filename": "Career_ApplyOnline.php",
                    "filepath": "Career_ApplyOnline.php",
                    "title": "Careers Apply",
                    "content": "Careers Apply .container li { font-size: 24px; color: #3f68b5; } .heading-title { word-break: break-word; } @media (max-width: 576px) { .heading-title { font-size: 26px !important; line-height: 1.3 !important; } .container li { font-size: 18px !important; } } .card-body p { font-size: 18px; } .new-label { width: 43px; height: 17px; margin-left: 0.5rem; } .alert-info, .alert-warning, .alert-danger { font-size: 18px; } .note-text { font-size: 18px; } Career Careers Apply Online Show Menu Apply Online NRSC-RMT-4-2023 dated 09.12.2023 – Candidates may login NRSC APPLICATION PORTAL to view the updated response sheet after redressal of objections.",
                    "content_length": 1003,
                    "file_size": 7615,
                    "last_modified": "2025-08-06 21:20:59",
                    "status": "success"
                },
                {
                    "filename": "Internship_Program.php",
                    "filepath": "Internship_Program.php",
                    "title": "NRSC Internship Program",
                    "content": "NRSC Internship Program offers opportunities for students and recent graduates to gain hands-on experience in remote sensing, GIS, and satellite technology. The program includes training in disaster management, agriculture monitoring, and aerial services. Interns work on real projects and receive mentorship from experienced professionals.",
                    "content_length": 245,
                    "file_size": 3200,
                    "last_modified": "2025-01-15 10:30:00",
                    "status": "success"
                },
                {
                    "filename": "Student_Internship.php",
                    "filepath": "Student_Internship.php",
                    "title": "Student Internship Opportunities",
                    "content": "Student Internship Opportunities at NRSC provide valuable experience in geospatial technology. Students can apply for internships in various departments including Data Processing, Aerial Services, Agriculture Applications, and Disaster Management Support. The program runs throughout the year with flexible duration options.",
                    "content_length": 198,
                    "file_size": 2800,
                    "last_modified": "2025-01-20 14:45:00",
                    "status": "success"
                }
            ];
            
            console.log('Data loaded successfully:', this.data.length, 'files');
        } catch (error) {
            console.error('Error loading data:', error);
        }
    }

    initializeEventListeners() {
        // Search button click
        document.getElementById('searchBtn').addEventListener('click', () => {
            this.performSearch();
        });

        // Enter key in search input
        document.getElementById('searchInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performSearch();
            }
        });

        // Filter checkboxes
        document.getElementById('filterDisaster').addEventListener('change', () => this.updateFilters());
        document.getElementById('filterAerial').addEventListener('change', () => this.updateFilters());
        document.getElementById('filterAgriculture').addEventListener('change', () => this.updateFilters());
        document.getElementById('filterDataProcessing').addEventListener('change', () => this.updateFilters());
        document.getElementById('filterCareer').addEventListener('change', () => this.updateFilters());

        // Sort select
        document.getElementById('sortSelect').addEventListener('change', () => {
            this.sortResults();
            this.displayResults();
        });

        // Clear button
        document.getElementById('clearBtn').addEventListener('click', () => {
            this.clearResults();
        });

        // Pagination
        document.getElementById('prevPage').addEventListener('click', () => {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.displayResults();
            }
        });

        document.getElementById('nextPage').addEventListener('click', () => {
            const maxPages = Math.ceil(this.filteredData.length / this.itemsPerPage);
            if (this.currentPage < maxPages) {
                this.currentPage++;
                this.displayResults();
            }
        });
    }

    updateFilters() {
        this.activeFilters.clear();
        
        if (document.getElementById('filterDisaster').checked) {
            this.activeFilters.add('disaster');
        }
        if (document.getElementById('filterAerial').checked) {
            this.activeFilters.add('aerial');
        }
        if (document.getElementById('filterAgriculture').checked) {
            this.activeFilters.add('agriculture');
        }
        if (document.getElementById('filterDataProcessing').checked) {
            this.activeFilters.add('dataProcessing');
        }
        if (document.getElementById('filterCareer').checked) {
            this.activeFilters.add('career');
        }

        // Re-run search if there's an active query
        if (this.searchQuery) {
            this.performSearch();
        }
    }

    performSearch() {
        const query = document.getElementById('searchInput').value.trim().toLowerCase();
        this.searchQuery = query;
        this.currentPage = 1;

        if (!query && this.activeFilters.size === 0) {
            this.clearResults();
            return;
        }

        console.log('Searching for:', query);
        this.showLoading();
        
        // Simulate search delay for better UX
        setTimeout(() => {
            this.filterData();
            console.log('Filtered results:', this.filteredData.length);
            this.sortResults();
            this.displayResults();
            this.hideLoading();
        }, 500);
    }

    filterData() {
        this.filteredData = this.data.filter(item => {
            let matchesQuery = true;
            let matchesFilters = true;

            // Text search - make it more flexible
            if (this.searchQuery) {
                const searchableText = `${item.filename} ${item.title} ${item.content}`.toLowerCase();
                const searchTerms = this.searchQuery.toLowerCase().split(' ').filter(term => term.length > 0);
                
                // Check if ALL search terms are found (AND logic)
                matchesQuery = searchTerms.every(term => searchableText.includes(term));
                
                // Debug logging for first few items
                if (this.filteredData.length < 3) {
                    console.log('Item:', item.filename, 'Searchable text:', searchableText.substring(0, 100));
                    console.log('Search terms:', searchTerms, 'Matches query:', matchesQuery);
                }
            }

            // Category filters
            if (this.activeFilters.size > 0) {
                const itemCategory = this.getCategory(item);
                matchesFilters = this.activeFilters.has(itemCategory);
            }

            return matchesQuery && matchesFilters;
        });
    }

    getCategory(item) {
        const filename = item.filename.toLowerCase();
        const title = item.title.toLowerCase();
        const content = item.content.toLowerCase();

        if (filename.includes('cyclone') || filename.includes('flood') || title.includes('disaster')) {
            return 'disaster';
        } else if (filename.includes('asdm') || title.includes('aerial')) {
            return 'aerial';
        } else if (filename.includes('agr') || title.includes('agriculture')) {
            return 'agriculture';
        } else if (filename.includes('dp') || title.includes('data processing')) {
            return 'dataProcessing';
        } else if (filename.includes('career') || filename.includes('intern') || title.includes('career') || title.includes('intern')) {
            return 'career';
        }

        return 'other';
    }

    sortResults() {
        const sortBy = document.getElementById('sortSelect').value;

        this.filteredData.sort((a, b) => {
            switch (sortBy) {
                case 'filename':
                    return a.filename.localeCompare(b.filename);
                case 'date':
                    return new Date(b.last_modified) - new Date(a.last_modified);
                case 'size':
                    return b.file_size - a.file_size;
                case 'relevance':
                default:
                    // Relevance scoring based on search query
                    if (this.searchQuery) {
                        const aScore = this.calculateRelevanceScore(a);
                        const bScore = this.calculateRelevanceScore(b);
                        return bScore - aScore;
                    }
                    return 0;
            }
        });
    }

    calculateRelevanceScore(item) {
        let score = 0;
        const query = this.searchQuery.toLowerCase();

        // Exact filename match gets highest score
        if (item.filename.toLowerCase().includes(query)) {
            score += 100;
        }

        // Title match gets high score
        if (item.title.toLowerCase().includes(query)) {
            score += 50;
        }

        // Content match gets medium score
        if (item.content.toLowerCase().includes(query)) {
            score += 25;
        }

        // Recent files get bonus
        const daysSinceModified = (new Date() - new Date(item.last_modified)) / (1000 * 60 * 60 * 24);
        if (daysSinceModified < 30) score += 10;
        else if (daysSinceModified < 90) score += 5;

        return score;
    }

    displayResults() {
        const resultsSection = document.getElementById('resultsSection');
        const noResults = document.getElementById('noResults');
        const resultsContainer = document.getElementById('resultsContainer');
        const resultCount = document.getElementById('resultCount');
        const pagination = document.getElementById('pagination');

        if (this.filteredData.length === 0) {
            resultsSection.classList.add('hidden');
            noResults.classList.remove('hidden');
            return;
        }

        resultsSection.classList.remove('hidden');
        noResults.classList.add('hidden');

        // Update result count
        resultCount.textContent = this.filteredData.length;

        // Calculate pagination
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const currentPageData = this.filteredData.slice(startIndex, endIndex);

        // Display results
        resultsContainer.innerHTML = currentPageData.map(item => this.createResultCard(item)).join('');

        // Update pagination
        this.updatePagination();
    }

    createResultCard(item) {
        const category = this.getCategory(item);
        const categoryColors = {
            disaster: 'bg-red-100 text-red-800 border-red-200',
            aerial: 'bg-blue-100 text-blue-800 border-blue-200',
            agriculture: 'bg-green-100 text-green-800 border-green-200',
            dataProcessing: 'bg-purple-100 text-purple-800 border-purple-200',
            career: 'bg-orange-100 text-orange-800 border-orange-200',
            other: 'bg-gray-100 text-gray-800 border-gray-200'
        };

        const categoryLabels = {
            disaster: 'Disaster Management',
            aerial: 'Aerial Services',
            agriculture: 'Agriculture',
            dataProcessing: 'Data Processing',
            career: 'Career & Internships',
            other: 'Other'
        };

        const categoryColor = categoryColors[category] || categoryColors.other;
        const categoryLabel = categoryLabels[category] || 'Other';

        const fileSize = this.formatFileSize(item.file_size);
        const lastModified = this.formatDate(item.last_modified);

        return `
            <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
                <div class="p-6">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex-1">
                            <div class="flex items-center gap-3 mb-2">
                                <span class="px-3 py-1 text-xs font-medium rounded-full border ${categoryColor}">
                                    ${categoryLabel}
                                </span>
                                <span class="text-sm text-gray-500">${item.status}</span>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-2 hover:text-isro-blue transition-colors">
                                ${item.filename}
                            </h3>
                            <p class="text-gray-600 mb-3">${item.title}</p>
                        </div>
                        <div class="flex flex-col items-end text-right text-sm text-gray-500 space-y-1">
                            <span class="flex items-center gap-1">
                                <i class="fas fa-calendar"></i>
                                ${lastModified}
                            </span>
                            <span class="flex items-center gap-1">
                                <i class="fas fa-file-code"></i>
                                ${fileSize}
                            </span>
                        </div>
                    </div>
                    
                    <div class="bg-gray-50 rounded-lg p-4 mb-4">
                        <p class="text-gray-700 text-sm line-clamp-3">
                            ${this.highlightSearchTerms(this.cleanContent(item.content.substring(0, 200)))}...
                        </p>
                    </div>
                    
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-4 text-sm text-gray-500">
                            <span class="flex items-center gap-1">
                                <i class="fas fa-folder text-blue-500"></i>
                                ${item.filepath}
                            </span>
                        </div>
                        <button class="bg-gradient-to-r from-isro-blue to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-sm font-medium">
                            <i class="fas fa-external-link-alt mr-2"></i>
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    highlightSearchTerms(text) {
        if (!this.searchQuery) return text;
        
        // Split search query into terms and highlight each one
        const searchTerms = this.searchQuery.toLowerCase().split(' ').filter(term => term.length > 0);
        let highlightedText = text;
        
        searchTerms.forEach(term => {
            if (term.length > 2) { // Only highlight terms longer than 2 characters
                const regex = new RegExp(`(${term})`, 'gi');
                highlightedText = highlightedText.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>');
            }
        });
        
        return highlightedText;
    }

    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    formatDate(dateString) {
        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime())) {
                return 'Date not available';
            }
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        } catch (error) {
            return 'Date not available';
        }
    }

    cleanContent(content) {
        // Remove CSS and HTML-like content, keep only readable text
        return content
            .replace(/\.\w+\s*{[^}]*}/g, '') // Remove CSS rules
            .replace(/<[^>]*>/g, '') // Remove HTML tags
            .replace(/#\w+\s*{[^}]*}/g, '') // Remove CSS selectors
            .replace(/@media[^{]*{[^}]*}/g, '') // Remove media queries
            .replace(/\s+/g, ' ') // Replace multiple spaces with single space
            .trim();
    }

    updatePagination() {
        const pagination = document.getElementById('pagination');
        const prevBtn = document.getElementById('prevPage');
        const nextBtn = document.getElementById('nextPage');
        const pageInfo = document.getElementById('pageInfo');

        const totalPages = Math.ceil(this.filteredData.length / this.itemsPerPage);

        if (totalPages <= 1) {
            pagination.classList.add('hidden');
            return;
        }

        pagination.classList.remove('hidden');
        pageInfo.textContent = `Page ${this.currentPage} of ${totalPages}`;

        prevBtn.disabled = this.currentPage === 1;
        nextBtn.disabled = this.currentPage === totalPages;
    }

    showLoading() {
        document.getElementById('loading').classList.remove('hidden');
        document.getElementById('resultsSection').classList.add('hidden');
        document.getElementById('noResults').classList.add('hidden');
    }

    hideLoading() {
        document.getElementById('loading').classList.add('hidden');
    }

    clearResults() {
        this.searchQuery = '';
        this.filteredData = [];
        this.currentPage = 1;
        
        // Clear search input
        document.getElementById('searchInput').value = '';
        
        // Clear filters
        document.getElementById('filterDisaster').checked = false;
        document.getElementById('filterAerial').checked = false;
        document.getElementById('filterAgriculture').checked = false;
        document.getElementById('filterDataProcessing').checked = false;
        document.getElementById('filterCareer').checked = false;
        this.activeFilters.clear();
        
        // Reset sort
        document.getElementById('sortSelect').value = 'relevance';
        
        // Hide results
        document.getElementById('resultsSection').classList.add('hidden');
        document.getElementById('noResults').classList.add('hidden');
        document.getElementById('loading').classList.add('hidden');
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new NRSCSearch();
    
    // Add some sample search suggestions
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('focus', () => {
        if (!searchInput.value) {
            searchInput.placeholder = 'Try: cyclone, flood, agriculture, aerial, internship...';
        }
    });
    
    searchInput.addEventListener('blur', () => {
        if (!searchInput.value) {
            searchInput.placeholder = 'Search by filename, title, content, or keywords...';
        }
    });
});
