// Data Loader Utility for NRSC File Search
// This file shows how to integrate your actual JSON data

class NRSCDataLoader {
    constructor() {
        this.data = [];
        this.isLoaded = false;
    }

    // Load data from your JSON file
    async loadFromFile(filePath) {
        try {
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.data = await response.json();
            this.isLoaded = true;
            console.log(`Loaded ${this.data.length} files from ${filePath}`);
            return this.data;
        } catch (error) {
            console.error('Error loading data from file:', error);
            throw error;
        }
    }

    // Load data from a JSON string (if you want to embed data directly)
    loadFromString(jsonString) {
        try {
            this.data = JSON.parse(jsonString);
            this.isLoaded = true;
            console.log(`Loaded ${this.data.length} files from string`);
            return this.data;
        } catch (error) {
            console.error('Error parsing JSON string:', error);
            throw error;
        }
    }

    // Get all data
    getAllData() {
        return this.data;
    }

    // Get data by category
    getDataByCategory(category) {
        return this.data.filter(item => {
            const itemCategory = this.getCategory(item);
            return itemCategory === category;
        });
    }

    // Get data by search query
    searchData(query) {
        const searchTerm = query.toLowerCase();
        return this.data.filter(item => {
            const searchableText = `${item.filename} ${item.title} ${item.content}`.toLowerCase();
            return searchableText.includes(searchTerm);
        });
    }

    // Categorize items (same logic as in main script)
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
        }

        return 'other';
    }

    // Get statistics about the data
    getDataStats() {
        const stats = {
            total: this.data.length,
            categories: {},
            fileTypes: {},
            averageFileSize: 0,
            totalFileSize: 0
        };

        let totalSize = 0;

        this.data.forEach(item => {
            // Category stats
            const category = this.getCategory(item);
            stats.categories[category] = (stats.categories[category] || 0) + 1;

            // File type stats
            const fileType = item.filename.split('.').pop() || 'unknown';
            stats.fileTypes[fileType] = (stats.fileTypes[fileType] || 0) + 1;

            // Size stats
            totalSize += item.file_size || 0;
        });

        stats.totalFileSize = totalSize;
        stats.averageFileSize = this.data.length > 0 ? totalSize / this.data.length : 0;

        return stats;
    }

    // Export filtered data to JSON
    exportToJSON(data, filename = 'nrsc-search-results.json') {
        const dataStr = JSON.stringify(data, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = filename;
        link.click();
    }

    // Export to CSV
    exportToCSV(data, filename = 'nrsc-search-results.csv') {
        if (data.length === 0) return;

        const headers = ['Filename', 'Title', 'Category', 'File Size', 'Last Modified', 'Status'];
        const csvContent = [
            headers.join(','),
            ...data.map(item => [
                `"${item.filename}"`,
                `"${item.title}"`,
                `"${this.getCategory(item)}"`,
                item.file_size,
                item.last_modified,
                item.status
            ].join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    }
}

// Usage Examples:

// 1. Load from your JSON file
/*
const dataLoader = new NRSCDataLoader();
dataLoader.loadFromFile('./nrsc_file_content.json')
    .then(data => {
        console.log('Data loaded successfully:', data.length, 'files');
        
        // Get statistics
        const stats = dataLoader.getDataStats();
        console.log('Data statistics:', stats);
        
        // Search for specific content
        const cycloneResults = dataLoader.searchData('cyclone');
        console.log('Cyclone-related files:', cycloneResults.length);
        
        // Get disaster management files
        const disasterFiles = dataLoader.getDataByCategory('disaster');
        console.log('Disaster management files:', disasterFiles.length);
    })
    .catch(error => {
        console.error('Failed to load data:', error);
    });
*/

// 2. Load from embedded JSON string
/*
const jsonString = `[{"filename":"example.php","title":"Example","content":"Content here"}]`;
const dataLoader = new NRSCDataLoader();
dataLoader.loadFromString(jsonString);
*/

// 3. Export functionality
/*
// Export search results to JSON
const searchResults = dataLoader.searchData('flood');
dataLoader.exportToJSON(searchResults, 'flood-search-results.json');

// Export to CSV
dataLoader.exportToCSV(searchResults, 'flood-search-results.csv');
*/

// Export the class for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NRSCDataLoader;
} else if (typeof window !== 'undefined') {
    window.NRSCDataLoader = NRSCDataLoader;
}

