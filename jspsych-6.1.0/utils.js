function downloadCSV(csv,filename) {
    var csvFile;
    var downloadLink;

    // Retrieve CSV file from Experiment
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download Link
    downloadLink = document.createElement("a");

    // Retrieve File Name
    downloadLink.download = filename;

    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Hide download Link
    downloadLink.style.display = 'none';

    // Add link to DOM
    document.body.appendChild(downloadLink);

    downloadLink.click();
}