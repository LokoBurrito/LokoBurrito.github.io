const apkSelect = document.getElementById('apk-select');
const apkDescription = document.getElementById('apk-description');

apkSelect.addEventListener('change', function() {
    const selectedApk = this.value;
    let descriptionText = '';

    if (selectedApk === 'arceus') {
        descriptionText = "Arceus X, powered by SPDM team, capable of executing most scripts. (unable to make/send Webhooks, keep in mind.)";
    } else if (selectedApk === 'codex') {
        descriptionText = "Codex, also powered by SPDM team, simple and also capable of executing most scripts. (this APK cant make/send Webhooks unless your scripts code is modified yourself, keep in mind.)";
    }

    apkDescription.textContent = descriptionText;
});
