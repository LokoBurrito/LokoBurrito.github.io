const apkSelect = document.getElementById('apk-select');
const apkDescription = document.getElementById('apk-description');
const downloadButton = document.querySelector('.apk-selection button'); // Get the download button

apkSelect.addEventListener('change', function() {
    const selectedApk = this.value;
    let descriptionText = '';
    let downloadLink = 'https://www.mediafire.com/file/kw1dk7c39ce75z2/Roblox+Arceus+X+NEO+1.2.8.apk'; // Default to Arceus X

    if (selectedApk === 'arceus') {
        descriptionText = "Arceus X, powered by SPDM team, capable of executing most scripts. (unable to make/send Webhooks, keep in mind.)";
    } else if (selectedApk === 'codex') {
        descriptionText = "Codex, also powered by SPDM team, simple and also capable of executing most scripts. (this APK cant make/send Webhooks unless your scripts code is modified yourself, keep in mind.)";
        downloadLink = 'https://www.mediafire.com/file/z72dvyk7kbac1v9/Codex_2.617.apk/file'; 
    }

    apkDescription.textContent = descriptionText;
    // Update download button
    downloadButton.href = downloadLink; 
    downloadButton.target = '_blank'; // Open in a new tab
});
