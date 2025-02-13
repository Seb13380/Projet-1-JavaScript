const prompt = require("prompt-sync")();
let choice = '';

choice = prompt("Bonjour, Bienvenue dans votre nouveau jeu. Vous vous réveillez en pleine nuit dans une forêt sombre. Que faites-vous? (1: Explorer les alentours / 2: Rester sur place et crier) ");

while (choice !== '1' && choice !== "2") {
    choice = prompt('Choisis entre 1 et 2: ');
}

if (choice === '1') {  //1a
    console.log("Tu avances, il fait froid et tu trouves une maison.");
    choice = prompt('Que fais-tu? (1: Pousser la porte et entrer / 2: Continuer ta route) ');

    while (choice !== '1' && choice !== "2") {
        choice = prompt('Choisis entre 1 et 2: ');
    }

    if (choice === '1') { //2
        console.log("Tu pousses la porte et entres.");

        choice = prompt("Que fais-tu? (1:Visiter la maison / 2: Appeler pour savoir s'il y a quelqu'un ) ");

        while (choice !== '1' && choice !== "2") {
            choice = prompt('Choisis entre 1 et 2: ');
        }

        if (choice === '1') { //3a
            console.log("Tu trouves une bibliothèque avec des livres magiques lumineux.");

            choice = prompt("Que fais-tu? (1: Prendre et ouvrir le livre jaune / 2: Prendre et ouvrir le livre vert) ");

            while (choice !== '1' && choice !== "2") {
                choice = prompt('Choisis entre 1 et 2: ');
            }

            if (choice === '1') { //3a1

                console.log("Tu te retrouves dans un monde où tu es complètement Seul! Mais avec nourriture, boissons, séries et jeux vidéos à volonté.");
                choice = prompt("Que fais-tu? (1: Rester et profiter / 2: Prendre la porte de retour) ");

                while (choice !== '1' && choice !== "2") {
                    choice = prompt('Choisis entre 1 et 2: ');
                }

                if (choice === '1') { //3a1
                    console.log("Au bout de 3 semaines tu deviens complètement fou et te laisse déperrir. Moralité: Un monde de faignace pousse à ta perte! Game-over");
                } else { //3a2
                    console.log("Tu arrives chez toi avec ta famille, prêt à bosser tes cours RI7! La belle vie quoi!");
                }
            } else { //3a2
                console.log("Tu arrives dans un monde préhistorique rempli de danger! Mais avec des Femmes/Hommes sublimes.");

                choice = prompt("Que fais-tu? (1: Rester et profiter malgrés un confort quasi inexistant / 2: Prendre la porte de retour) ");

                while (choice !== '1' && choice !== "2") {
                    choice = prompt('Choisis entre 1 et 2: ');
                }

                if (choice === '1') { //3a1
                    console.log("Tu passes une nuit de folie! Mais dès le lendemain dois chercher à manger, à boire, cuisiner... tu deviens un ESCLAVE!! Game-over");
                } else { //3a2
                    console.log("Tu arrives chez toi avec ta famille, prêt à bosser tes cours RI7! La belle vie quoi!");
                }
            }

        } else { //3b
            console.log("Un Barman apparait avec son bar et tout ce qu'il faut");
            choice = prompt("Que fais-tu? (1: S'installer au bar / 2: Saluer le Barman et rester en retrait) ");

            while (choice !== '1' && choice !== "2") {
                choice = prompt('Choisis entre 1 et 2: ');
            }

            if (choice === '1') { //3a1
                console.log("Le barman me demande:Qu'est-ce que vous désirez prendre?",
                    "Tu réponds :",
                    "Un whisky avec 2 glaçons, s'il vous plaît.",
                    "Le Barman te sert le verre. Tu l'avales d'un coup puis prend le chemin de la sortie. Le Barman te rappelle:",
                    "Eh, vous n'avez pas payé votre consommation !",
                    "Tu réponds :",
                    "Ah non, hein. Vous m'avez demandé ce que je désirais prendre.",
                    "Non, mais Monsieur, on s'est mal compris. Quand je propose un verre à quelqu'un je ne lui demande pas de payer. Ce serait malhonnête. tu lui dis bonne journée et tu sors…",

                    "Le lendemain, tu reviens dans l'établissement avec une canne à pêche.",

                    "Bonjour Monsieur !",
                    "Tu réponds :",
                    "Bonjour Monsieur !",
                    "Il se dit cette fois, Il ne m'aura pas!",

                    "Euh, Monsieur désire-t-il passer commande ?",
                    "Tu réponds :",
                    "Oui, bien sûr, un œuf dur et un couteau, s'il vous plaît….",
                    "Le Barman, un peu étonné, te donne ce que tu demandes. Puis il te voit en train d'éplucher l'œuf puis de le découper en petits cubes… Curieux, il s'approche et demande :",

                    "Qu'est-ce que vous faites, Monsieur ?",
                    "Tu réponds : Je me prépare pour la pèche. Incroyable! Vous ne connaissez pas ça? J'utilise ces cubes en les mettant sur mon hameçon, ça marche très bien.",
                    "Le Barman, surpris :",
                    "Ah bon, vous péchez avec des œufs durs ? Et qu'est-ce que vous prenez avec ça ?",
                    "Un whisky avec deux glaçons",
                    "Fin, tu as trop ris!)");

            } else { //3a2
                console.log("Tu es mal poli, il te tire une balle entre les 2 yeux! Fin")
            }
        }

    } else { //2b
        console.log("Tu marches plusieurs jours, tu as soif, tu as faim. Tu trouves une grotte et vit en hermitte toute ta vie. Tu es tranquille et fais ce que tu veux.");
    }

} else { //1b
    console.log("Un bûcheron t'entend et vient te voir.");
    choice = prompt('Que fais-tu? (1: Le saluer et lui demander ton chemin / 2: Partir en courant car il a une hâche) ');

    while (choice !== '1' && choice !== "2") {
        choice = prompt('Choisis entre 1 et 2: ');
    }

    if (choice === '1') { //2a
        console.log("Tu le salues et lui demandes ton chemin.");
        choice = prompt('Que fais-tu? (1: Prendre à droite, direction de la forêt magique / 2: Aller tout droit dans la forêt mystérieuse) ');

        while (choice !== '1' && choice !== "2") {
            choice = prompt('Choisis entre 1 et 2: ');
        }

        if (choice === '1') { //3a
            console.log("Il te dit de prendre à droite, direction de la forêt magique.");
        } else { //3b
            console.log("Ou va tout droit dans la forêt mystérieuse.");
        }

    } else { //2b
        console.log("Tu pars en courant car il a une hâche.");

        choice = prompt('Que fais-tu? (1: Le bûcheron devient hystérique et te court après / 2: Le bûcheron te transforme en champignon vénéneux) ');

        while (choice !== '1' && choice !== "2") {
            choice = prompt('Choisis entre 1 et 2: ');
        }

        if (choice === '1') { //2b1
            console.log("Alors que tu parts en courant à toute vitesse à travers les bois, le bûcheron, fou de rage, se met à vous poursuivre avec sa hache. Vous devez rapidement prendre une décision pour échapper à son emprise:");
            choice = prompt("Que fais-tu? (1: Tu décides de grimper à un arbre à proximité pour te cacher. / 2: Tu repéres un petit tunnel dans le sol et t'y glisses pour t'échapper.) ");

            while (choice !== '1' && choice !== "2") {
                choice = prompt('Choisis entre 1 et 2: ');
            }

            if (choice === '1') { //3a
                console.log("Tu montes rapidement, mais le bûcheron commence à abattre l'arbre avec sa hâche. Tu dois agir vite et sauter jusqu'à l'arbre voisin avant que celui-ci ne s'effondre.");
                choice = prompt("Que fais-tu? (1: Tu sautes le plus loin possible pour atteindre l'autre arbre. / 2: L'autre arbre est trop loin et tu rescends le plus rapidement possible en essayant qu'il ne te regarde pas.) ");

                while (choice !== '1' && choice !== "2") {
                    choice = prompt('Choisis entre 1 et 2: ');
                }

                if (choice === '1') { //3a
                    console.log("Tu sautes hyper loin. Tu attrapes la branche de l'autre arbre qui casse et tu t'éclates par terre. End Game!");
                } else { //3b
                    console.log("Tu te laisses glisser le long du tronc et réussis à atteindre le sol. Le bucheron te voit. Il te lance la hâche et t'entaille le bras. ");
                    choice = prompt("Que fais-tu? (1:Tu cours le plus vite possible jusqu'à la route? / 2:Tu tombes et fait le mort. C'est ta dernière chance?) ");

                    while (choice !== '1' && choice !== "2") {
                        choice = prompt('Choisis entre 1 et 2: ');
                    }

                    if (choice === '1') { //3a
                        console.log("Une voiture arrive, ouf tu es sauvé! Attention le bucheron est tout proche");

                        choice = prompt("Que fais-tu? (1:Tu montes à bord? / 2:Tu vois que c'est un autre bucheron et prends le VTT accroché à l'arrière de la voiture?) ");

                        while (choice !== '1' && choice !== "2") {
                            choice = prompt('Choisis entre 1 et 2: ');
                        }

                        if (choice === '1') { //3a
                            console.log("C'est la voiture du frère du bucheron. Dommage! Ils te font rotir au repas de ce soir! Pour te réconforter, Tu es succulent!! Miam miam");
                        } else { //3b
                            console.log("Le bucheron s'approche de toi. Il te donne des coups de pieds!");
                            choice = prompt("Que fais-tu? (1:Tu fais le mort? / 2:Tu lui sautes dessus et te défends?) ");

                            while (choice !== '1' && choice !== "2") {
                                choice = prompt('Choisis entre 1 et 2: ');
                            }

                            if (choice === '1') { //3a
                                console.log("Tu as bien fait le mort! Bravo, Il repart! Tu es sauf avec 3 cotes cassées! You win!");
                            } else { //3b
                                console.log("Tu es courageux, téméraire, tu t'es bien battu mais il te coupe en 2 avec sa hâche bien affutée! You loose!");
                            }
                        }
                    } else { //3b
                        console.log("Le bucheron monte avec son frère dans la voiture. Ils te poursuivent la hache entre les dents! Tu pédales comme un fou! Ils accélèrent, te percutent en t'envoient en l'air! Tu montes très haut et retombe! Soudain tu te réveilles en sursaut. Tu es dans ton lit!");
                    }
                }
            } 
            else { //3b
                console.log("Tu rampes dans un petit tunnel très étroit. Heureusement que tu n'es pas claustrophobe!! Enfin la grotte s'élargit. Tu te trouves devant 2 portes.");
                choice = prompt('Que fais-tu? (1: Prendre la porte de droite / 2: Prendre la porte de gauche) ');

                while (choice !== '1' && choice !== "2") {
                    choice = prompt('Choisis entre 1 et 2: ');
                }
        
                if (choice === '1') { //3a
                    console.log("Tu arrives au village des licornes. C'est coloré, paisible et tu sens bien. Le seul problème c'est que chaques fois que tu fléchis les genoux tu prends une décharge de 300 volts dans le bas du dos. Tu deviens donc le robot d'Elon Musk!");
                } else { //3b
                    console.log("Tu rentres dans un village grisâtre d'où tu ne peux plus jamais sortir. Tout le monde est triste et pleure tout le temps.");
                }
            }

        } else { //2b2
            console.log("Tu es horrible et méconnaissable (enfin tu as toujours été moche, il faut l'avouer! Tu continues d'avancer et vois 2 villages devant toi");
            choice = prompt('Que fais-tu? (1: Se diriger vers le village de droite / 2: Aller tout droit dans le grand royaume) ');

            while (choice !== '1' && choice !== "2") {
                choice = prompt('Choisis entre 1 et 2: ');
            }
            if (choice === '1') { //3a
                console.log("Tu arrives dans un petit village où tout le monde est très gentil. Tu vis paisiblement. Le chef tu village t'obliges à épouser sa fille. Elle est magnifique. c'est la belle et toi la bête!!");
            } else { //3b
                console.log("Tu arrives dans un rayome somptueux. Tout le monde te rejette. Tu rencontres un mage qui te propose un sort");
                choice = prompt('Que fais-tu? (1: Tu peux te faire aimer à chaques fois que tu touches la personne / 2:Tu deviens extrêment riche)');

                while (choice !== '1' && choice !== "2") {
                    choice = prompt('Choisis entre 1 et 2: ');
                }
        
                if (choice === '1') { //3a
                    console.log("Tout le monde t'aime mais il y a un mais, tu t'aimes trop et du coup tu es jaloux et ne supporte plus personne... Game over");
                } else { //3b
                    console.log("Très bon choix! Même si t'es vraiment moche, comme tu es super riche tu as tout ce que tu veux! Sauf le véritable amour. Mais pas grave t'es riche... ");
                }
            }
        }
    }
}
