const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

const bracketList = [
	{
		openBracket: '(',
		closeBracket: ')',
	},
	{
		openBracket: '[',
		closeBracket: ']',
	},
	{
		openBracket: '{',
		closeBracket: '}',
	},
]



const validInputStr = (inputStr) => {
	if (inputStr.length % 2) {
		return false
	}
	for (let i = 0; i <= inputStr.length / 2 - 1; i++) {
		const bracket = { 
				openBracket: inputStr.charAt(i),
		    closeBracket:inputStr.charAt(inputStr.length - 1 - i) 
		}
		const res = bracketList.find((n) =>
			n.openBracket === bracket.openBracket &&
			n.closeBracket === bracket.closeBracket )

		if (!res) {
			return false
		}
	}

	return true
}

rl.question('What is your string?', (answer) => {
	if (validInputStr(answer)) {
		console.log(`Input string ${answer} is valid`)
	} else {
		console.log(`Input string ${answer} is not valid`)
	}
	rl.close()
})


