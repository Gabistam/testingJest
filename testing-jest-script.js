// Données des quiz
const quizData = {
    1: {
        title: "Quiz 1 - Fondamentaux du testing",
        questions: [
            {
                question: "Pourquoi le testing automatisé est-il préférable au testing manuel ?",
                answers: [
                    "Le testing automatisé permet de détecter les bugs immédiatement après modification du code, d'exécuter des milliers de tests en quelques secondes, et de prévenir les régressions lors des refactorisations",
                    "Le testing manuel est plus rapide et ne nécessite aucune installation d'outils",
                    "Le testing automatisé coûte moins cher en temps mais ne détecte que les bugs simples",
                    "Le testing manuel garantit une meilleure couverture du code grâce à l'intervention humaine systématique sur chaque ligne de code"
                ],
                correct: 0,
                explanation: "Le testing automatisé permet d'exécuter rapidement des centaines ou milliers de tests à chaque modification, détectant ainsi immédiatement les bugs et les régressions. Il libère du temps pour se concentrer sur le développement plutôt que sur des tests répétitifs manuels."
            },
            {
                question: "Qu'est-ce qu'un test unitaire ?",
                answers: [
                    "Un test qui vérifie qu'une application complète fonctionne correctement de bout en bout",
                    "Un test qui vérifie qu'une seule fonction isolée fonctionne correctement avec différentes entrées",
                    "Un test qui simule plusieurs utilisateurs simultanément pour vérifier la performance du système",
                    "Un test qui vérifie que tous les modules d'une application communiquent bien ensemble"
                ],
                correct: 1,
                explanation: "Un test unitaire cible une fonction isolée et vérifie qu'elle retourne le résultat attendu pour différentes entrées. Il est rapide, simple et indépendant des autres parties de l'application."
            },
            {
                question: "Dans la pyramide des tests, quel type de test devrait être le plus nombreux ?",
                answers: [
                    "Les tests E2E (End-to-End) car ils simulent le comportement réel des utilisateurs dans l'application complète",
                    "Les tests d'intégration car ils vérifient que les modules fonctionnent bien ensemble dans leur environnement réel",
                    "Les tests de performance car ils garantissent que l'application reste rapide sous charge",
                    "Les tests unitaires car ils sont rapides, simples et permettent de tester chaque fonction isolément"
                ],
                correct: 3,
                explanation: "La base de la pyramide est constituée de tests unitaires car ils sont nombreux, rapides à exécuter (millisecondes) et simples à déboguer. Les tests d'intégration et E2E sont moins nombreux car plus lents et complexes."
            },
            {
                question: "Quelle est la principale différence entre un test unitaire et un test E2E ?",
                answers: [
                    "Un test unitaire teste une fonction isolée tandis qu'un test E2E simule le parcours complet d'un utilisateur dans l'application",
                    "Un test unitaire est écrit en JavaScript tandis qu'un test E2E utilise obligatoirement Python",
                    "Un test unitaire s'exécute en millisecondes tandis qu'un test E2E prend exactement 1 seconde",
                    "Un test unitaire nécessite Jest tandis qu'un test E2E ne nécessite aucun framework"
                ],
                correct: 0,
                explanation: "Un test unitaire cible une fonction isolée (ex: vérifier que add(2,3) retourne 5), tandis qu'un test E2E simule un utilisateur réel (ex: se connecter, naviguer, acheter un produit). Les tests unitaires sont rapides, les E2E sont lents mais testent l'application complète."
            },
            {
                question: "À quoi sert le framework Jest ?",
                answers: [
                    "Jest sert uniquement à tester des applications React développées par Meta",
                    "Jest est un framework complet pour écrire, structurer et exécuter des tests JavaScript avec des assertions intégrées",
                    "Jest remplace npm en tant que gestionnaire de packages pour les projets JavaScript modernes",
                    "Jest est un compilateur qui transforme le code TypeScript en JavaScript"
                ],
                correct: 1,
                explanation: "Jest est un framework de test JavaScript complet créé par Meta. Il permet d'écrire des tests avec une syntaxe simple (describe, it, expect), d'exécuter les tests rapidement, et intègre tout le nécessaire (assertions, mocking, snapshots) sans configuration complexe."
            },
            {
                question: "Quel est l'avantage principal d'utiliser Jest plutôt qu'un autre framework de test ?",
                answers: [
                    "Jest fonctionne \"zero-config\", c'est-à-dire qu'il nécessite très peu de configuration pour démarrer et intègre tout le nécessaire",
                    "Jest est le seul framework capable de tester du code JavaScript moderne avec ES6+",
                    "Jest est gratuit tandis que tous les autres frameworks de test sont payants pour un usage commercial",
                    "Jest garantit que tous les tests s'exécutent en moins de 100 millisecondes quelle que soit la complexité"
                ],
                correct: 0,
                explanation: "L'avantage majeur de Jest est sa configuration minimale (zero-config). Il fonctionne immédiatement après installation, intègre les assertions, le mocking, la couverture de code, et exécute les tests en parallèle pour plus de rapidité."
            }
        ]
    },
    2: {
        title: "Quiz 2 - Pratique avec Jest",
        questions: [
            {
                question: "Quelle commande permet de lancer les tests Jest en mode surveillance (watch) ?",
                answers: [
                    "npm start -- --watch",
                    "npm test -- --watch",
                    "jest --surveillance",
                    "npm run watch-tests"
                ],
                correct: 1,
                explanation: "La commande 'npm test -- --watch' lance Jest en mode surveillance. Ce mode re-exécute automatiquement les tests à chaque modification de fichier, ce qui est très pratique pendant le développement."
            },
            {
                question: "Quelle est la différence entre toBe() et toEqual() dans Jest ?",
                answers: [
                    "toBe() compare des chaînes de caractères tandis que toEqual() compare uniquement des nombres",
                    "toBe() utilise l'égalité stricte (===) pour les valeurs primitives, toEqual() compare en profondeur les objets et tableaux",
                    "toBe() est plus rapide car il ne vérifie que le type, toEqual() vérifie le type et la valeur",
                    "toBe() et toEqual() sont exactement identiques, ce sont juste deux noms différents pour la même fonction"
                ],
                correct: 1,
                explanation: "toBe() utilise l'égalité stricte (===) et convient aux valeurs primitives (nombres, strings, booleans). toEqual() fait une comparaison profonde et est nécessaire pour comparer des objets ou tableaux. Exemple: expect([1,2]).toEqual([1,2]) ✅ mais expect([1,2]).toBe([1,2]) ❌"
            },
            {
                question: "Qu'est-ce qu'une fonction pure ?",
                answers: [
                    "Une fonction qui utilise uniquement des variables globales pour ses calculs",
                    "Une fonction écrite sans utiliser de commentaires dans le code",
                    "Une fonction qui retourne toujours le même résultat pour les mêmes paramètres et n'a pas d'effet de bord",
                    "Une fonction qui ne contient aucune boucle (for, while) et utilise uniquement la récursivité"
                ],
                correct: 2,
                explanation: "Une fonction pure a deux caractéristiques: (1) elle retourne toujours le même résultat pour les mêmes entrées, (2) elle n'a pas d'effet de bord (ne modifie rien en dehors d'elle-même). Exemple: add(2,3) retourne toujours 5."
            },
            {
                question: "Pourquoi est-il important de tester les cas limites (edge cases) ?",
                answers: [
                    "Les cas limites comme null, undefined, 0, ou [] révèlent souvent des bugs que les cas normaux ne détectent pas",
                    "Tester les cas limites est optionnel car les utilisateurs n'utilisent jamais de valeurs inhabituelles",
                    "Les cas limites permettent uniquement d'améliorer les performances du code",
                    "Les cas limites sont testés automatiquement par Jest sans qu'on ait besoin de les écrire"
                ],
                correct: 0,
                explanation: "Les cas limites (null, undefined, 0, tableaux vides, chaînes vides) révèlent souvent des bugs que le 'happy path' (cas normal) ne détecte pas. Par exemple, une fonction peut fonctionner avec add(2,3) mais planter avec add(null, 5). Tester ces cas garantit la robustesse du code."
            },
            {
                question: "À quoi sert la fonction describe() dans Jest ?",
                answers: [
                    "describe() exécute un test individuel et vérifie qu'une fonction retourne le résultat attendu",
                    "describe() sert à expliquer en français ce que fait le code testé pour la documentation",
                    "describe() groupe logiquement plusieurs tests liés (par exemple tous les tests pour une même fonction)",
                    "describe() remplace expect() pour les comparaisons d'objets complexes"
                ],
                correct: 2,
                explanation: "describe() permet de grouper plusieurs tests liés ensemble. Par exemple, tous les tests pour la fonction 'add' seront dans un describe('Fonction add', ...). Cela organise les tests et rend les rapports plus lisibles."
            },
            {
                question: "Que signifie le pattern AAA (Arrange, Act, Assert) ?",
                answers: [
                    "AAA est une méthode de tri alphabétique des fonctions de test pour améliorer la lisibilité",
                    "AAA signifie: Arrange (préparer les données), Act (exécuter la fonction), Assert (vérifier le résultat)",
                    "AAA désigne trois types de tests différents: Automatisés, Asynchrones, Avancés",
                    "AAA est un framework concurrent de Jest créé par Amazon pour tester les applications AWS"
                ],
                correct: 1,
                explanation: "Le pattern AAA structure un test en 3 phases: (1) Arrange = préparer les données (const a = 2, b = 3), (2) Act = exécuter la fonction à tester (const result = add(a, b)), (3) Assert = vérifier le résultat (expect(result).toBe(5)). Cette structure rend les tests clairs et faciles à comprendre."
            }
        ]
    }
};

// Classe pour gérer un quiz
class Quiz {
    constructor(quizNumber) {
        this.quizNumber = quizNumber;
        this.data = quizData[quizNumber];
        this.currentQuestion = 0;
        this.score = 0;
        this.selectedAnswer = null;
        this.container = document.querySelector(`[data-quiz="${quizNumber}"]`);
        
        this.init();
    }

    init() {
        this.displayQuestion();
        this.attachEventListeners();
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    displayQuestion() {
        const question = this.data.questions[this.currentQuestion];
        
        // Update progress bar
        const progress = ((this.currentQuestion + 1) / this.data.questions.length) * 100;
        this.container.querySelector('.quiz-progress-bar').style.width = `${progress}%`;
        
        // Update counter
        this.container.querySelector('.current-question').textContent = this.currentQuestion + 1;
        this.container.querySelector('.total-questions').textContent = this.data.questions.length;
        
        // Display question
        this.container.querySelector('.quiz-question').textContent = question.question;
        
        // Shuffle answers and display
        const answersContainer = this.container.querySelector('.quiz-answers');
        answersContainer.innerHTML = '';
        
        // Create array of answers with their original indices
        const answersWithIndices = question.answers.map((answer, index) => ({
            text: answer,
            originalIndex: index
        }));
        
        // Shuffle
        const shuffledAnswers = this.shuffleArray(answersWithIndices);
        
        // Display shuffled answers
        shuffledAnswers.forEach((answerObj) => {
            const answerDiv = document.createElement('div');
            answerDiv.className = 'quiz-answer';
            answerDiv.textContent = answerObj.text;
            answerDiv.dataset.index = answerObj.originalIndex;
            answersContainer.appendChild(answerDiv);
        });
        
        // Reset state
        this.selectedAnswer = null;
        this.container.querySelector('.quiz-explanation').style.display = 'none';
        this.container.querySelector('.btn-validate').style.display = 'inline-block';
        this.container.querySelector('.btn-next').style.display = 'none';
    }

    attachEventListeners() {
        // Answer selection
        this.container.querySelector('.quiz-answers').addEventListener('click', (e) => {
            if (e.target.classList.contains('quiz-answer') && !e.target.classList.contains('disabled')) {
                // Remove previous selection
                this.container.querySelectorAll('.quiz-answer').forEach(answer => {
                    answer.classList.remove('selected');
                });
                
                // Select new answer
                e.target.classList.add('selected');
                this.selectedAnswer = parseInt(e.target.dataset.index);
            }
        });

        // Validate button
        this.container.querySelector('.btn-validate').addEventListener('click', () => {
            this.validateAnswer();
        });

        // Next button
        this.container.querySelector('.btn-next').addEventListener('click', () => {
            this.nextQuestion();
        });

        // Restart button
        this.container.querySelector('.btn-restart').addEventListener('click', () => {
            this.restart();
        });
    }

    validateAnswer() {
        if (this.selectedAnswer === null) {
            alert('Veuillez sélectionner une réponse');
            return;
        }

        const question = this.data.questions[this.currentQuestion];
        const isCorrect = this.selectedAnswer === question.correct;

        // Update score
        if (isCorrect) {
            this.score++;
        }

        // Mark answers
        this.container.querySelectorAll('.quiz-answer').forEach(answer => {
            const answerIndex = parseInt(answer.dataset.index);
            answer.classList.add('disabled');
            
            if (answerIndex === question.correct) {
                answer.classList.add('correct');
            } else if (answerIndex === this.selectedAnswer) {
                answer.classList.add('incorrect');
            }
        });

        // Show explanation
        const explanationDiv = this.container.querySelector('.quiz-explanation');
        explanationDiv.innerHTML = `<strong>${isCorrect ? '✅ Correct !' : '❌ Incorrect'}</strong><p>${question.explanation}</p>`;
        explanationDiv.style.display = 'block';

        // Update buttons
        this.container.querySelector('.btn-validate').style.display = 'none';
        this.container.querySelector('.btn-next').style.display = 'inline-block';
    }

    nextQuestion() {
        this.currentQuestion++;

        if (this.currentQuestion < this.data.questions.length) {
            this.displayQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        const percentage = (this.score / this.data.questions.length) * 100;
        let message = '';
        
        if (percentage === 100) {
            message = '🎉 Parfait ! Vous maîtrisez parfaitement le sujet !';
        } else if (percentage >= 80) {
            message = '👏 Très bien ! Vous avez une bonne compréhension du sujet.';
        } else if (percentage >= 60) {
            message = '👍 Bien ! Relisez les points que vous avez manqués.';
        } else {
            message = '📚 Continuez à apprendre ! Relisez le cours attentivement.';
        }

        this.container.querySelector('.quiz-content').style.display = 'none';
        this.container.querySelector('.quiz-explanation').style.display = 'none';
        this.container.querySelector('.quiz-navigation').style.display = 'none';
        
        const resultDiv = this.container.querySelector('.quiz-result');
        resultDiv.querySelector('.result-score').innerHTML = `
            <strong>Score : ${this.score}/${this.data.questions.length}</strong> (${percentage.toFixed(0)}%)<br>
            ${message}
        `;
        resultDiv.style.display = 'block';
    }

    restart() {
        this.currentQuestion = 0;
        this.score = 0;
        this.selectedAnswer = null;

        this.container.querySelector('.quiz-content').style.display = 'block';
        this.container.querySelector('.quiz-navigation').style.display = 'flex';
        this.container.querySelector('.quiz-result').style.display = 'none';

        this.displayQuestion();
    }
}

// Initialisation des quiz au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser les deux quiz
    new Quiz(1);
    new Quiz(2);

    // Gestion de la navigation slide
    const slides = document.querySelectorAll('.section');
    const totalSlides = slides.length;
    let currentSlideIndex = 0;

    const updateSlideInfo = (index) => {
        currentSlideIndex = index;
        document.getElementById('current-slide').textContent = index + 1;
        document.getElementById('total-slides').textContent = totalSlides;
        
        // Mettre à jour la barre de progression
        const progress = ((index + 1) / totalSlides) * 100;
        document.getElementById('main-progress-bar').style.width = `${progress}%`;

        // Mettre à jour les boutons
        const prevBtn = document.getElementById('prev-slide');
        const nextBtn = document.getElementById('next-slide');
        
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === totalSlides - 1;

        // Mettre à jour la sidebar
        document.querySelectorAll('.sidebar-link').forEach((link, i) => {
            link.classList.toggle('active', i === index);
        });
    };

    // Fonction pour naviguer vers une slide
    const goToSlide = (index) => {
        if (index >= 0 && index < totalSlides) {
            slides[index].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            updateSlideInfo(index);
        }
    };

    // Boutons précédent/suivant
    document.getElementById('prev-slide').addEventListener('click', () => {
        goToSlide(currentSlideIndex - 1);
    });

    document.getElementById('next-slide').addEventListener('click', () => {
        goToSlide(currentSlideIndex + 1);
    });

    // Navigation au clavier
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            goToSlide(currentSlideIndex - 1);
        } else if (e.key === 'ArrowRight') {
            goToSlide(currentSlideIndex + 1);
        }
    });

    // Smooth scroll pour la sidebar et mise à jour de la slide active
    document.querySelectorAll('.sidebar-link').forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            goToSlide(index);
        });
    });

    // Détecter la slide visible lors du scroll
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '-80px 0px -40% 0px'
    };

    const slideObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const slideIndex = Array.from(slides).indexOf(entry.target);
                updateSlideInfo(slideIndex);
            }
        });
    }, observerOptions);

    slides.forEach(slide => {
        slideObserver.observe(slide);
    });

    // Animation au scroll
    const fadeObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, fadeObserverOptions);

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        fadeObserver.observe(section);
    });

    // Initialiser la première slide
    updateSlideInfo(0);
});
