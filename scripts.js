function toggleSubdirectory(subdirectoryId) {
    const subdirectory = document.getElementById(subdirectoryId + 'Subdirectory');
    const checkbox = document.getElementById(subdirectoryId);
    const label = document.querySelector(`label[for='${subdirectoryId}']`);

    if (checkbox.checked) {
        subdirectory.style.display = 'block';
        label.classList.add('expanded');
    } else {
        subdirectory.style.display = 'none';
        label.classList.remove('expanded');
    }

    // Log the checkbox state and class to the console for debugging
    console.log(`Checkbox: ${subdirectoryId} - Checked: ${checkbox.checked}, Expanded: ${label.classList.contains('expanded')}`);
}
