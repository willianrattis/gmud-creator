document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('implementation-date');
    const timeInput = document.getElementById('implementation-time');
    const apiNameSelect = document.getElementById('api-name');
    const applicationInput = document.getElementById('application');
    const impactSelect = document.getElementById('impact');
    const impactDescriptionContainer = document.getElementById('impact-description-container');
    const impactDescription = document.getElementById('impact-description');
    const generateButton = document.getElementById('generate-button');
    const chgExInput = document.getElementById('chg-ex');
    const chgPfInput = document.getElementById('chg-pf');
    const chgCbInput = document.getElementById('chg-cb');
    const imageTagInput = document.getElementById('image-tag');
    const descriptionInput = document.getElementById('description');
    const objectiveInput = document.getElementById('objective');
    const responsibleSelect = document.getElementById('responsible-select');
    const responsibleInput = document.getElementById('responsible');
    const testerInput = document.getElementById('tester');

    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const formattedDate = `${year}-${month}-${day}`;

    dateInput.value = formattedDate;
    timeInput.value = '14:00';

    apiNameSelect.addEventListener('change', function() {
        const selectedApiName = apiNameSelect.value;
        applicationInput.value = `vv-viaunica-backend-${selectedApiName}-api`;
        validateForm();
    });

    impactSelect.addEventListener('change', function() {
        if (impactSelect.value === 'com-impacto') {
            impactDescriptionContainer.classList.remove('hidden');
        } else {
            impactDescriptionContainer.classList.add('hidden');
            impactDescription.value = '';
        }
        validateForm();
    });

    impactDescription.addEventListener('input', validateForm);

    responsibleSelect.addEventListener('change', function() {
        const selectedOption = responsibleSelect.options[responsibleSelect.selectedIndex];
        responsibleInput.value = selectedOption.value;
        testerInput.value = selectedOption.text;
    });

    function validateChangeNumbers() {
        const chgEx = chgExInput.value.trim();
        const chgPf = chgPfInput.value.trim();
        const chgCb = chgCbInput.value.trim();

        const duplicateFields = [];

        if (chgEx && (chgEx === chgPf || chgEx === chgCb)) {
            duplicateFields.push(chgExInput);
        }
        if (chgPf && (chgPf === chgEx || chgPf === chgCb)) {
            duplicateFields.push(chgPfInput);
        }
        if (chgCb && (chgCb === chgEx || chgCb === chgPf)) {
            duplicateFields.push(chgCbInput);
        }

        [chgExInput, chgPfInput, chgCbInput].forEach(input => {
            if (duplicateFields.includes(input)) {
                input.classList.add('is-invalid');
            } else {
                input.classList.remove('is-invalid');
            }
        });

        validateForm();
    }

    function validateImageTag() {
        const imageTag = imageTagInput.value.trim();
        const imageTagPattern = /^\d+\.\d+\.\d+-\d+$/;

        if (imageTagPattern.test(imageTag)) {
            imageTagInput.classList.remove('is-invalid');
        } else {
            imageTagInput.classList.add('is-invalid');
        }

        validateForm();
    }

    function validateForm() {
        const isChangeNumbersValid = !chgExInput.classList.contains('is-invalid') &&
                                     !chgPfInput.classList.contains('is-invalid') &&
                                     !chgCbInput.classList.contains('is-invalid');
        const isImageTagValid = !imageTagInput.classList.contains('is-invalid');
        const isImpactDescriptionValid = impactSelect.value === 'sem-impacto' || (impactSelect.value === 'com-impacto' && impactDescription.value.trim() !== '');
        const areAllFieldsFilled = descriptionInput.value.trim() !== '' &&
                                   chgExInput.value.trim() !== '' &&
                                   chgPfInput.value.trim() !== '' &&
                                   chgCbInput.value.trim() !== '' &&
                                   imageTagInput.value.trim() !== '' &&
                                   objectiveInput.value.trim() !== '';

        generateButton.disabled = !(isChangeNumbersValid && isImageTagValid && isImpactDescriptionValid && areAllFieldsFilled);
    }

    [chgExInput, chgPfInput, chgCbInput, descriptionInput, objectiveInput, imageTagInput].forEach(input => {
        input.addEventListener('input', validateForm);
    });

    [chgExInput, chgPfInput, chgCbInput].forEach(input => {
        input.addEventListener('input', validateChangeNumbers);
    });

    imageTagInput.addEventListener('input', validateImageTag);

    validateForm();
});

function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateDocumentation() {
    const apiName = document.getElementById('api-name').value;
    const capitalizedApiName = capitalizeFirstLetter(apiName);
    const description = document.getElementById('description').value.trim();
    const chgEx = document.getElementById('chg-ex').value.trim();
    const chgPf = document.getElementById('chg-pf').value.trim();
    const chgCb = document.getElementById('chg-cb').value.trim();
    const imageTag = document.getElementById('image-tag').value.trim();
    const objective = document.getElementById('objective').value.trim();
    const impact = document.getElementById('impact').value;
    const impactDescription = document.getElementById('impact-description').value.trim();
    const implementationDate = document.getElementById('implementation-date').value;
    const implementationTime = document.getElementById('implementation-time').value;
    const responsible = document.getElementById('responsible').value.trim();

    const formattedDate = formatDate(implementationDate);
    const fullImplementationDate = implementationDate && implementationTime ? `${formattedDate} - ${implementationTime}` : '';

    const hours = parseInt(implementationTime.split(':')[0], 10);
    const greeting = hours < 12 ? 'Bom dia, pessoal.' : 'Boa tarde, pessoal.';

    const impactText = impact === 'com-impacto' ? impactDescription : 'Sem impacto';

    const documentation = `
${greeting}

Descrição
${description}

Número das mudanças
${chgEx} - [${capitalizedApiName}] vv-viaunica-backend-${apiName}-api (ex) - ${imageTag}
${chgPf} - [${capitalizedApiName}] vv-viaunica-backend-${apiName}-api (pf) - ${imageTag}
${chgCb} - [${capitalizedApiName}] vv-viaunica-backend-${apiName}-api (cb) - ${imageTag}

Qual o objetivo da mudança?
${objective}

Qual a aplicação?
vv-viaunica-backend-${apiName}-api

Quais os possíveis impactos?
${impactText}

Todos estão com acesso para Fazer Rollback?
Sim

Quem será o responsável pelo rollback em caso de problema (nome, email e telefone)
${responsible}

Plano de validação do ambiente (Testes de consultas, monitorias e modificação)
Dynatrace, Grafana (Endpoints e CircuitBreaker), navegação do App

Quem será o responsável pelos testes após deploy?
${document.getElementById('tester').value.trim()}

Data/Hora da implementação?
${fullImplementationDate}
    `;

    document.getElementById('output').textContent = documentation;
    document.getElementById('output').classList.add('pre-wrap');
    $('#documentationModal').modal('show');
}

function copyToClipboard() {
    const output = document.getElementById('output');
    navigator.clipboard.writeText(output.textContent).then(() => {
       // alert('Documentação copiada para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar a documentação: ', err);
    });

    saveToLog();
}

function saveToLog() {
    const apiName = document.getElementById('api-name').value;
    const imageTag = document.getElementById('image-tag').value.trim();
    const implementationDate = document.getElementById('implementation-date').value;
    const implementationTime = document.getElementById('implementation-time').value;

    const formattedDate = formatDate(implementationDate);
    const fullImplementationDate = implementationDate && implementationTime ? `${formattedDate} - ${implementationTime}` : '';

    const logEntry = `${apiName};${imageTag};${fullImplementationDate}`;

    let logList = JSON.parse(localStorage.getItem('logList')) || [];

    if (!logList.includes(logEntry)) {
        logList.unshift(logEntry);
        localStorage.setItem('logList', JSON.stringify(logList));
    }

    updateLogHTML();
}

function updateLogHTML() {
    const logList = JSON.parse(localStorage.getItem('logList')) || [];
    let logContent = '';

    logList.forEach(entry => {
        const [apiName, imageTag, date] = entry.split(';');
        logContent += `
        <div class="log-entry">
            <span class="api-name">${apiName}</span>
            <span class="image-tag">${imageTag}</span>
            <span class="date">${date}</span>
        </div>`;
    });

    document.getElementById('log-content').innerHTML = logContent;
}
