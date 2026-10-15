 const ghost = document.getElementById("ghost");

        // On écoute chaque mouvement de la souris sur toute la page
        document.addEventListener("mousemove", (event) => {
            // 1. On déplace le fantôme à la position de la souris
            ghost.style.left = event.clientX + "px";
            ghost.style.top = event.clientY + "px";

            // 2. On crée une toile d'araignée à cette position
            createTrail(event.clientX, event.clientY);
        });

        // Fonction qui crée une toile et la supprime après son animation
        function createTrail(x, y) {
            const trail = document.createElement("div");
            trail.className = "trail";
            trail.textContent = "🕸️";
            trail.style.left = x + "px";
            trail.style.top = y + "px";

            // On ajoute la toile au corps de la page
            document.body.appendChild(trail);

            // On supprime l'élément une fois l'animation finie (1 seconde)
            // C'est important pour ne pas surcharger la page !
            setTimeout(() => {
                trail.remove();
            }, 1000);
        }
