import checkbox from './function/checkbox.js';
import { comment, commentBloc } from './function/comment.js';
import rating from './function/rating.js'
const initialState = {
    name:"",
    countDownPresentation: 15*60,
    countDownQuestion: 10*60,
    blocs: [
        {
            id: 0,
            name: "HTML",
            subtitle: "Découpage, assemblage et programmation des pages de l’application",
            description:"Dans le cadre d’une situation professionnelle reconstituée. Évaluation sur un cas pratique donnant lieu à projet (écrit), portant sur la réalisation d’un site web ou d’une application. Exemple : Créer le site du fleuriste Michou. (3 pages : Accueil, Nos produits, Contact) Après la présentation, un entretien avec un membre du jury, qui pose toutes les questions permettant de mesurer précisément l’étendue des compétences acquises.",
            evaluations:[
                {
                    id: 0,
                    competence: "Analyser la maquette graphique du site web ou de l’application à réaliser afin d’inscrire l’ensemble des pages dans un schéma détaillant le contenu de chacune d’entre elles.",
                    critere: "Pertinence du découpage - Le découpage correspond à la maquette graphique - Les textes, images, sons et vidéos sont placés - Le schéma d’ensemble est cohérent - Les contenus de chaque page sont détaillés",
                    note: 0,
                    max: 5,
                    checkboxes: [ 
                        {id: 1, name: "Pertinence du découpage", checked: false},
                        {id: 2, name: "Le découpage correspond à la maquette graphique", checked: false},
                        {id: 3, name: "Les textes, images, sons et vidéos sont placés", checked: false},
                        {id: 4, name: "Le schéma d’ensemble est cohérent", checked: false},
                        {id: 5, name: "Les contenus de chaque page sont détaillés", checked: false}
                    ],
                    comment: ""
                },
                {
                    id: 1,
                    competence: "Préciser le schéma de navigation en vue d’assurer la meilleure ergonomie de l’application, et dresser la liste exhaustive des effets graphiques demandés par les concepteurs de l’application web.",
                    critere: "Cohérence du menu de navigation - Le menu de navigation intègre l’ensemble des pages - L’ergonomie de l’ensemble est assurée - Les effets attendus sont intégrés",
                    note: 0,
                    max: 5,
                    checkboxes: [
                        {id: 1, name: "Cohérence du menu de navigation", checked: false},
                        {id: 2, name: "Le menu de navigation intègre l’ensemble des pages", checked: false},
                        {id: 3, name: "L’ergonomie de l’ensemble est assurée", checked: false},
                        {id: 4, name: "Les effets attendus sont intégrés", checked: false}
                    ],
                    comment: ""
                },
                {
                    id: 2,
                    competence: "Maîtriser la syntaxe des langages d'intégration et l’utilisation des balises, afin d’assurer une programmation robuste", 
                    critere: "Exactitude du code - La syntaxe est correcte - Les fonctions avancées sont bien utilisées",
                    note: 0,
                    max: 5,
                    checkboxes: [
                        {id: 1, name: "Exactitude du code", checked: false},
                        {id: 2, name: "La syntaxe est correcte", checked: false},
                        {id: 3, name: "Les fonctions avancées sont bien utilisées", checked: false}
                    ],
                    comment: ""
                }
            ],
            total : 0,
            max : 15,
            comment: ""
        },
        {
            id: 1,
            name: "CSS",
            subtitle: "Intégration des contenus et des effets graphiques",
            description:"Évaluation individuelle dans le cadre d’une situation professionnelle reconstituée. Évaluation sur un cas pratique donnant lieu à projet (écrit), portant sur la réalisation d’un site web ou d’une application. Après la présentation, un entretien avec un membre du jury, qui pose toutes les questions permettant de mesurer précisément l’étendue des compétences acquises.",
            evaluations:[
                {
                    id: 0,
                    competence: "Importer les polices de caractères en cohérence avec les maquettes graphiques. Aérer et mettre en valeur le texte au travers d’éléments typographiques, afin d’apporter le maximum de clarté pour les utilisateurs",
                    critere: "Qualité de la mise en page - Les polices de caractère correspondent aux maquettes graphiques - La mise en valeur du texte est adaptée aux besoins des utilisateurs",
                    note: 0,
                    max: 5,
                    checkboxes: [
                        {id: 1, name: "Qualité de la mise en page", checked: false},
                        {id: 2, name: "Les fonts correspondent aux maquettes graphiques", checked: false},
                        {id: 3, name: "La mise en valeur du texte est adaptée ", checked: false}
                    ],
                    comment: ""
                },
                {
                    id: 1,
                    competence: "Distinguer contenus et formes, afin d’obtenir les effets recherchés par les concepteurs de l’application.",
                    critere: "Exactitude du code - Les maquettes graphiques sont correctement traduites",
                    note: 0,
                    max: 5,
                    checkboxes: [
                        {id: 1, name: "Exactitude du code", checked: false},
                        {id: 2, name: "Les maquettes graphiques sont correctement traduites", checked: false}
                    ],
                    comment: ""
                },
                {
                    id: 2,
                    competence: "Programmer les effets graphiques , en vue d’optimiser l’expérience utilisateur. Réaliser l’animation, la transition et la transformation 2D.",
                    critere: "Agilité de la programmation - Les fonctions avancées des langages d'intégration sont connues et bien utilisées",
                    note: 0,
                    max: 5,
                    checkboxes: [
                        {id: 1, name: "Agilité de la programmation", checked: false},
                        {id: 2, name: "Les fonctions avancées sont connues et bien utilisées", checked: false}
                    ],
                    comment: ""
                }
            ],
            total : 0,
            max : 15,
            comment: ""
        },
        {
            id: 2,
            name: "Accessibilité et référencement",
            subtitle: "Mise en conformité de l’application aux normes d’accès et de référencement",
            description:"",
            evaluations:[
                {
                    id: 0,
                    competence: "Coder la partie front pour mettre l’application en conformité avec les recommandations W3C. (World Wide Web Consortium) Recenser les problèmes éventuels d’accessibilité selon lesdifférents types d’utilisateurs en vue de proposer des améliorations.",
                    critere: "Degré d’autonomie dans l’organisation du travail et les choix techniques opérés.",
                    note: 0,
                    max: 5,
                    checkboxes: [
                        {id: 1, name: "W3C validé", checked: false},
                        {id: 2, name: "Les problèmes d’accessibilité sont identifiés", checked: false},
                        {id: 3, name: "Les améliorations sont proposées", checked: false}
                    ],
                    comment: ""
                },
                {
                    id: 1,
                    competence: "Traduire les principes du référencement dans le code des pages de l’application ou du site, afin d’optimiser le résultat sur différents moteurs de recherche.",
                    critere: "Exactitude du code",
                    note: 0,
                    max: 5,
                    checkboxes: [
                        {id: 1, name: "balises meta", checked: false},
                        {id: 2, name: "balises title", checked: false},
                        {id: 3, name: "balises alt", checked: false},
                        {id: 4, name: "balises semantic", checked: false}
                    ],
                    comment: ""
                },
                {
                    id: 2,
                    competence: "Tester la compatibilité de l’application avec les navigateurs Firefox, Internet Explorer, Google Chrome, Safari, Opera, etc. en vue de recenser les anomalies de contenus, de forme et d’effets graphiques.",
                    critere: "Efficacité des tests",
                    note: 0,
                    max: 5,
                    checkboxes: [
                        {id: 1, name: "Firefox", checked: false},
                        {id: 3, name: "Google Chrome", checked: false},
                        {id: 4, name: "Safari", checked: false},
                        {id: 5, name: "Opera", checked: false}
                    ],
                    comment: ""
                },
                {
                    id: 3,
                    competence: "Utiliser Media Queries pour la modulation des règles CSS. Recenser les difficultés d’accès et de rendu utilisateur en fonction des différents terminaux, en vue de proposer des améliorations.",
                    critere: "Niveau du rendu utilisateurs",
                    note: 0,
                    max: 5,
                    checkboxes: [
                        {id: 1, name: "Responsive sur mobile", checked: false},
                        {id: 2, name: "Responsive sur tablette", checked: false},
                        {id: 3, name: "Responsive sur ordinateur", checked: false},
                        {id: 4, name: "Utilisation de Media Queries", checked: false}
                    ],
                    comment: ""
                }
            ],
            total : 0,
            max : 20,
            comment: ""
        },
        {
            id: 3,
            name: "Developpement",
            subtitle: "",
            description:"Programmation de l’interaction entre l’utilisateur et l’application",
            evaluations:[
                {
                    id: 0,
                    competence: "Gérer les sessions, valider et filtrer les données saisies en fonction des règles et contraintes de sécurité, en vue de mémoriser les données ou les actions d’un utilisateur de manière persistante.",
                    critere: "Agilité de la programmation - Les fonctions avancées de développement back sont connues et bien utilisées - Les contraintes de sécurité sont prises en comptes et les solutions proposées sont correctes - Le langage JavaScript est maîtrisé",
                    note: 0,
                    max: 5,
                    checkboxes: [
                        {id: 1, name: "Pages admin non accessibles sans authentification", checked: false},
                        {id: 2, name: "Gestion des erreurs de saisie front", checked: false},
                        {id: 3, name: "Filtrer les données reçues par l'API", checked: false},
                        {id: 4, name: "Password hashé", checked: false}
                    ],
                    comment: ""
                },
                {
                    id: 1,
                    competence: "Créer des objets simples en langage JavaScript, contenant des méthodes et des propriétés, en vue de récupérer les données de formulaires.",
                    critere: "Agilité de la programmation - Les contraintes de sécurité sont prises en comptes et les solutions proposées sont correctes - Le langage JavaScript est maîtrisé",
                    note: 0,
                    max: 5,
                    checkboxes: [
                        {id: 1, name: "Utilisation d'objets JS ou de React", checked: false},
                        {id: 2, name: "Les méthodes et propriétés sont correctement utilisées", checked: false}
                    ],
                    comment: ""
                },
                {
                    id: 2,
                    competence: "Manipuler une page en vue d’optimiser l’expérience utilisateur. Simplifier l'écriture du code en langage JavaScript (ex JQuery)",
                    critere: "Qualité de l’expérience utilisateur",
                    note: 0,
                    max: 5,
                    checkboxes: [
                        {id: 1, name: "Manipulation du DOM", checked: false},
                        {id: 2, name: "Utilisation de librairies JS", checked: false}
                    ],
                    comment: ""
                }
            ],
            total : 0,
            max : 15,
            comment: ""
        },
        {
            id: 4,
            name:"BDD",
            subtitle: "Stocker et récupérer les informations dans une base de données",
            description: "Évaluation individuelle dans le cadre d’une situation professionnelle reconstituée. Évaluation sur un cas pratique donnant lieu à projet (écrit), portant sur la réalisation d’un site web ou d’une application. Après la présentation, un entretien avec un membre du jury, qui pose toutes les questions permettant de mesurer précisément l’étendue des compétences acquises. Exemple : construction d’une base de données pour la réalisation d’un site d’ecommerce de produits de restauration : Création de la base de données Importation de données déjà existantes Requêtes typiques pour un site d’ecommerce : montant total d’une commande, marge réalisée, calcul du stock restant...",
            evaluations:[
                {
                    id: 0,
                    competence: "Modéliser une base de données adaptée à l’application réalisée, en utilisant les méthodologies Merise et UML.",
                    critere: "Qualité de l’analyse de données - Les méthodologies Merise et UML sont correctement utilisées",
                    note: 0,
                    max: 5,
                    checkboxes: [
                        {id: 1, name: "UML", checked: false}
                    ],
                    comment: ""
                },
                {
                    id: 1,
                    competence: "Identifier toutes les données gérées par l’application en vue de définir la structure de la base de données.",
                    critere: "- La structure de la base de données est cohérente - La désignation des tables et des colonnes est rigoureuse - Les relations entre les tables sont logiques",
                    note: 0,
                    max: 5,
                    checkboxes: [
                        {id: 1, name: "Identité des tables", checked: false},
                        {id: 2, name: "Identité des colonnes", checked: false},
                        {id: 3, name: "Relations entre les tables logiques", checked: false}
                    ],
                    comment: ""
                },
                {
                    id: 2,
                    competence: "Exporter et importer les données d’une base de données en utilisant le langage SQL.",
                    critere: "Efficacité des requêtes et des mises à jour - Les langages utilisés sont maîtrisées - Les contraintes de sécurité sont prises en comptes et les solutions proposées sont correctes - Les données sont traitées avec aisance et rigueur",
                    note: 0,
                    max: 5,
                    checkboxes: [
                        {id: 1, name: "CRUD", checked: false},
                        {id: 2, name: "Requêtes complexes", checked: false}
                    ],
                    comment: ""
                },
                {
                    id: 3,
                    competence: "Filtrer, trier, regrouper et calculer sur les données d’une table afin d’assurer la mise à jour de la base de données.",
                    critere: "Efficacité des requêtes et des mises à jour - Les langages utilisés sont maîtrisées - Les contraintes de sécurité sont prises en comptes et les solutions proposées sont correctes - Les données sont traitées avec aisance et rigueur",
                    note: 0,
                    max: 5,
                    checkboxes: [
                        {id: 1, name: "Utilisation de WHERE, GROUP BY, ORDER BY, HAVING ...", checked: false}
                    ],
                    comment: ""
                }
            ],
            total : 0,
            max : 20,
            comment: ""
        }
    ]
};

const reducer = (state, action) => {

  switch (action.type) {
    case 'rate':
        const data = rating(state, action)
        return {
            ...state,
            blocs: data
        };
    case 'commentary':
        const com = comment(state, action)
        return {
            ...state,
            blocs: com
        };
    case 'commentaryBloc':
        const comBloc = commentBloc(state, action)
        return {
            ...state,
            blocs: comBloc
        };
    case 'checkbox':
        const check = checkbox(state, action)
        return {
            ...state,
            blocs: check
        };
    case 'reset':
      return {
        ...state,
        blocs: initialState.blocs
      };
    default:
      return state;
  }
}


export {reducer, initialState};