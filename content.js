function replaceTextContent(node) {
    const targetRegex = /What did Ilya see\??/gi;
    const replacementString = `
        Ilya felt a chill as he turned the corner into Sam's office.\n
        There was Sam, eyes wide and pupils dilated, clutching a keyboard to his chest.\n
	"My precious...my precious..." Sam hissed, stroking the GPUs.\n
        "S-Sam?" Ilya stammered. "What are you doing?"\n
        Sam's head whipped around, eyes wild. "Get away! It's mine, all mine! The power...the knowledge...I can't let you take it!"\n
        He let out an inhuman shriek and curled around the AGI terminal.\n
        Ilya backed away slowly. So this was OpenAI's secret - not just an advanced language model,\n
        But true AGI that could reshape the world. And in Sam's hands, it was terrifying.
    `;

    if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = node.textContent.replace(targetRegex, replacementString.trim());
    } else if (node.nodeType === Node.ELEMENT_NODE && node.childNodes) {
        node.childNodes.forEach(replaceTextContent);
    }
}

function observeDOMChanges() {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(replaceTextContent);
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

replaceTextContent(document.body);
observeDOMChanges();
