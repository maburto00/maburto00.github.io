document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("pre").forEach(function(codeBlock) {
        const button = document.createElement("button");
        button.innerText = "Copy";
        button.className = "copy-button";

        codeBlock.parentNode.insertBefore(button, codeBlock);

        button.addEventListener("click", function() {
            const code = codeBlock.innerText;
            navigator.clipboard.writeText(code).then(function() {
                button.innerText = "Copied!";
                setTimeout(function() {
                    button.innerText = "Copy";
                }, 2000);
            }, function(err) {
                console.error("Error copying text: ", err);
            });
        });
    });
});
