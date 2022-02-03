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
"Belinda",
"Amy",
"Liz",
"Ellie",
"Cori",
"Danielle"
]
let girl_names_GL = [
"Gerry",
"Ham",
"Ida",
"Jane",
"Kelly",
"Lex"
]
let neutral_names = ["a", "b", "c"]
neutral_names = ["a", "b", "c"]
game.splash("welcome to baby name generator")
game.splash("what gender?")
letterOfNames = game.askForNumber("press 1 for boy, press 2 for girl, press 3 for neutral", 1)
names(1)
