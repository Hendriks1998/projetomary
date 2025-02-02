<script>
    const words = ["Software Engineering Student", "Web Developer", "Tech Enthusiast"];
    let currentWordIndex = 0;

    function typeWord() {
        const span = document.getElementById('dynamic-text');
        span.textContent = words[currentWordIndex];
        currentWordIndex = (currentWordIndex + 1) % words.length;
    }

    // Alterne as palavras a cada 5 segundos
    setInterval(typeWord, 5000);
    typeWord(); // Inicializa a primeira palavra
</script>