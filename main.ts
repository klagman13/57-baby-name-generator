function names (num: number) {
    if (num == 1) {
        game.splash("what letter do you like press 1, 2, 3, or 4 for letters: A-F, G-L, M-R, or S-Z")
        letterOfNames = game.askForNumber("A-F (1), G-L(2), M-R()4, or S-Z(5)", 1)
        if (num == 1) {
            for (let value of girl_names_AF) {
                game.splash(value)
            }
        } else if (num == 2) {
        	
        } else if (num == 3) {
        	
        } else if (num == 4) {
        	
        }
    } else if (num == 2) {
        game.splash("what letter do you like")
        letterOfNames = game.askForNumber("", 1)
    } else if (num == 3) {
        letterOfNames = game.askForNumber("", 1)
        game.splash("what letter do you like")
    }
}
let letterOfNames = 0
let girl_names_AF: string[] = []
girl_names_AF = [
"Amy",
"Avery",
"Abby",
"Anne",
"Blair",
"Bianca",
"Brianna",
"Beth",
"Clara",
"Catherine",
"Camilla",
"Celeste",
"Diana",
"Daisy",
"Demi",
"Destiny",
"Esther",
"Emmy",
"Everly",
"Elena",
"Faith",
"Fiona",
"Felicity",
"Francesa"
]
let girl_names_GL = [
"Grace",
"Gabi",
"Giselle",
"Gemma",
"Harlow",
"Heidi",
"Helena",
"Haley",
"Isabella",
"Itzel",
"Ivory",
"Isla",
"Juliana",
"Jasmine",
"Jacklyn",
"Julie",
"Katie",
"Kimberly",
"Kali",
"Kendall",
"Louisa",
"Layla",
"Lucie",
"Lilly"
]
let girlNamesMR = [
"Maria",
"Mary",
"Megan",
"Miranda",
"Nancy",
"Noelia",
"Nessa",
"Nina",
"Olivia",
"Olympia",
"Olga",
"Olina",
"Penelope",
"Peyton",
"Pheobe",
"Paige",
""
]
let boy_names_AF = [
"Maria",
"Melody",
"Margret",
"Maya",
"Nicole",
"Naomi",
"Noelle",
"Nora",
"Oliva",
"Opal",
"Olive",
"Ophelia",
"Phoebe",
"Pearl",
"Priscilla",
"Paris",
"Queem",
"Quincy",
"Quetzaly",
"Quest",
"Rose",
"Rachel",
"Remi",
"Rebecca"
]
let girl_names_SZ = [
"Scarlet",
"Sofia",
"Samantha",
"Sara",
"Thea",
"Talia",
"Tiana",
"Teresa",
"Ursla",
"Uriel",
"Ulyssa",
"Urvi",
"Victoria",
"Violet",
"Veronica",
"Valarie",
"Winne",
"Wendy",
"Winona",
"Wilma",
"Ximena",
"Xia",
"Xyla",
"Xarani",
"Yasmine",
"Yareli",
"Yuna",
"Yaneli",
"Zoe",
"Zara",
"Zuri",
"Zora"
]
boy_names_AF = [
"Aidan",
"Alex",
"Aaron",
"Austin",
"Benjamin",
"Braiden",
"Bennet",
"Brody",
"Christian",
"Cole",
"Calvin",
"Carson",
"Dean",
"Dallas",
"Dante",
"Derick",
"Eli",
"Evan",
"Emmet",
"Ethan",
"Finn",
"Felix",
"Frank",
"Frances"
]
let boy_names_GL = [
"Garry",
"Griffin",
"Gavin",
"Grant",
"Hunter",
"Henry",
"Hudson",
"Harison",
"Isaac",
"Ian",
"Ivan",
"Isaiah",
"Jack",
"Jorge",
"John",
"Josh",
"Kaidan",
"Kyle",
"Kaleb",
"Ken",
"Luis",
"Liam",
"Logan",
"Levi"
]
game.splash("welcome to baby name generator")
game.splash("what gender?")
letterOfNames = game.askForNumber("press 1 for boy, press 2 for girl, press 3 for neutral", 1)
names(1)
