const apkSelect = document.getElementById('apk-select');
const apkDescription = document.getElementById('apk-description');
const downloadButton = document.querySelector('.apk-selection button'); 

apkSelect.addEventListener('change', function() {
    const selectedApk = this.value;
    let descriptionText = '';
    let downloadLink; // No default link

    if (selectedApk === 'arceus') {
        descriptionText = "Arceus X, powered by SPDM team, capable of executing most scripts. (unable to make/send Webhooks, keep in mind.)";
        downloadLink = 'https://www.mediafire.com/file/kw1dk7c39ce75z2/Roblox+Arceus+X+NEO+1.2.8.apk'; 
    } else if (selectedApk === 'codex') {
        descriptionText = "Codex, also powered by SPDM team, simple and also capable of executing most scripts. (this APK cant make/send Webhooks unless your scripts code is modified yourself, keep in mind.)";
        downloadLink = 'https://www.mediafire.com/file/z72dvyk7kbac1v9/Codex_2.617.apk/file'; 
    } else { // Selected option is "None"
        descriptionText = "Pressing download will redirect you to the Arceus X download, trying to fix it rn.";
        downloadLink = '#'; // Prevent default download behavior 
    }

    apkDescription.textContent = descriptionText;
    downloadButton.href = downloadLink; 
    downloadButton.target = '_blank'; // Open download links in a new tab
});

// Redirect on button click
downloadButton.addEventListener('click', function() {
    if (downloadLink) { // Check if a downloadLink has been set 
        window.open(downloadLink, '_blank');
    } 
});
