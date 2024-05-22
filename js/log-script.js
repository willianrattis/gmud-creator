document.addEventListener('DOMContentLoaded', function () {
    const logList = JSON.parse(localStorage.getItem('logList')) || [];
    const logListElement = document.getElementById('log-list');

    logList.forEach(logEntry => {
        const [apiName, imageTag, fullImplementationDate] = logEntry.split(';');

        const logItem = document.createElement('li');
        logItem.className = 'list-group-item';
        logItem.innerHTML = `
        <div>
          <strong>${apiName}</strong>
          <span class="badge badge-primary ml-2">${imageTag}</span>
        </div>
        <div class="text-muted">${fullImplementationDate}</div>
      `;

        logListElement.appendChild(logItem);
    });
});
