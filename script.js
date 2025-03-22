document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const mainContent = document.getElementById('main-content');
    const titlebox = document.getElementById('titlebox'); // Ensure this element exists

    function updateTabText() {
        const isMobile = window.innerWidth <= 600; // Adjust breakpoint as needed
        tabs.forEach(tab => {
            const originalText = tab.getAttribute("name");
            const mobileText = tab.getAttribute("icon");

            if (isMobile && mobileText) {
                tab.textContent = mobileText;
            } else {
                tab.textContent = originalText;
            }
        });
    }

    // Run text update on load & window resize
    updateTabText();
    window.addEventListener('resize', updateTabText);

    // Inline formatting functions
    function applyItalics(content) {
        return content.replace(/\\(.*?)\\/g, '<i>$1</i>');
    }

    function applyBold(content) {
        return content.replace(/\*(.*?)\*/g, '<b>$1</b>');
    }

    function applyBox(content) {
        return content.replace(/\{([\s\S]*?)\}/g, '<div class="boxed">$1</div>');
    }

    function applyCode(content) {
        return content.replace(/\$\((.*?)\)\$/g, '<code>$1</code>');
    }

    function applyButtons(content) {
        return content.replace(/\|([^|]+)\|([^|]+)\|/g, '<a href="$1" class="button-link" target="_blank">$2</a>');
    }

    function applyBulletList(content) {
        return content
            .replace(/^- (.*?)(?=\n|$)/gm, '<li>$1</li>')  // Multiline mode
            .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>'); // Avoid non-capturing group
    }

    function applyHorizontalRule(content) {
        return content.replace(/^===$/gm, '<hr>');
    }

    // Markdown-like processing function
    function processMarkdown(content) {
        const lines = content.split('\n');
        let result = '';
        let imgClass = 'imgl';
        let tableRows = [];
        let insideTable = false;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();

            if (line.startsWith('#')) {
                result += `<h1>${line.substring(1).trim()}</h1>`;
            } else if (line.startsWith('%')) {
                result += `<img class="bannerimg" src=${line.substring(1).trim()}>`;
            } else if (line.startsWith('~')) {
                result += `<h4>${line.substring(1).trim()}</h4>`;
            } else if (line.startsWith('-')) {
                result += applyBulletList(line);
                break;
            } else if (line === '===') {
                result += '<hr>';
            } else if (line.includes('[')) {
                const imageName = line.substring(
                    line.lastIndexOf('[') + 1,
                    line.lastIndexOf(']')
                );
                if (lines[i + 1] && !lines[i + 1].includes('[')) {
                    const nextLine = lines[i + 1].trim();
                    result += `<div class="${imgClass}"><img src="${imageName}" alt="Image"><p>${nextLine}</p></div>`;
                    imgClass = imgClass === 'imgl' ? 'imgr' : 'imgl';
                    i++;
                } else {
                    result += `<img class="imgc" src="${imageName}" alt="Image">`;
                }
            } else if (line.startsWith('&(') && line.endsWith(')&')) {
                if (!insideTable) {
                    result += '<table>';
                    insideTable = true;
                }
                const cells = line.slice(1, -1).replace(/^\(|\)$/g, '').split(')(').map(cell => `<td>${cell}</td>`).join('');
                result += `<tr>${cells}</tr>`;
            } else {
                if (insideTable) {
                    result += '</table>';
                    insideTable = false;
                }
                result += line ? `<p>${line}</p>` : '<br>'; // Fix: Preserve newlines
            }
        }

        if (insideTable) {
            result += '</table>';
        }

        return result;
    }

    function formatContent(content) {
        const codeBlocks = [];
        content = content.replace(/^\$\(\n?([\s\S]*?)\n?\)\$$/gm, (match, p1) => {
            codeBlocks.push(p1.trim());
            return `__CODEBLOCK_${codeBlocks.length - 1}__`;
        });

        content = content.replace(/\$\((.*?)\)\$/g, '<code>$1</code>');
        content = applyButtons(content);
        content = applyItalics(content);
        content = applyBold(content);
        content = applyBox(content);
        content = applyBulletList(content);
        content = applyHorizontalRule(content);
        content = processMarkdown(content);

        content = content.replace(/__CODEBLOCK_(\d+)__/g, (match, index) => {
            return `<pre><code class="codeblock">${codeBlocks[index]}</code></pre>`;
        });

        return content;
    }

tabs.forEach(tab => {
    const bgColor = tab.getAttribute('bgcol');
    tab.addEventListener('mouseover', () => {
        tab.style.backgroundColor = bgColor;
    });

    tab.addEventListener('mouseout', () => {
        tab.style.backgroundColor = '';
    });

    tab.addEventListener('click', () => {
        const tabName = tab.getAttribute("name");
        window.location.hash = tabName; // Update the URL with the tab name

        tabs.forEach(t => t.classList.remove('selected-tab'));
        tab.classList.add('selected-tab');

        window.scrollTo({ top: 0, behavior: 'smooth' });
        titlebox.classList.add('switching');
        mainContent.classList.add('switching');

        setTimeout(() => {
            titlebox.innerHTML = `
                <h1 class="backtext">${tab.getAttribute("japan")}</h1>
                <h1 class="fronttext">${tab.getAttribute("name")}</h1>
            `;

            document.body.style.backgroundColor = tab.getAttribute("bgcol");

            fetch(`./text/${tabName}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok.');
                    }
                    return response.text();
                })
                .then(data => {
                    const formattedData = formatContent(data);
                    mainContent.innerHTML = formattedData;
                })
                .catch(error => {
                    console.error('Error fetching file:', error);
                    mainContent.innerHTML = `<p>Sorry, content could not be loaded.</p>`;
                });

            titlebox.classList.remove('switching');
            mainContent.classList.remove('switching');
        }, 500);
    });
});

// Check URL hash on page load
function activateTabFromHash() {
    const hash = window.location.hash.substring(1); // Remove #
    if (hash) {
        const tabToActivate = [...tabs].find(tab => tab.getAttribute("name") === hash);
        if (tabToActivate) {
            tabToActivate.click();
        }
    } else if (tabs.length > 0) {
        tabs[0].click();
    }
}

window.addEventListener('load', activateTabFromHash);
window.addEventListener('hashchange', activateTabFromHash); // Handle back/forward navigation

});
