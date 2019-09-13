class dataToken {
    constructor (outer, inner, image, id = 0)
    {
        if (isNaN(inner) || Number(inner)===0) inner = '';
        if (isNaN(outer) || Number(outer)===0) outer = '';
        if (isNaN(image) || Number(image)===0) image = '';
        this.outerColor = outer;
        this.innerColor = inner;
        this.image = image;
        this.id = id;
    }
}

export default class figurixGame {
    constructor (state) {
        this.Tokens = state.Tokens;
        this.Token = state.Token;
        this.BestTimeSpan = state.BestTimeSpan;
        this.LastTimeSpan = state.LastTimeSpan;
        this.StartTime = state.StartTime;
        this.FailCounter = state.FailCounter;
        this.Solved = state.Solved;
        this.PenaltyTime = state.PenaltyTime;
    }

    static initGame(imgCount = 6, innerCount = 3, outerCount = 3)
    {
        const newState = {
            Tokens: figurixGame._createTokens(imgCount, innerCount, outerCount),
            Token: new dataToken(),
            BestTimeSpan: 99999,
            LastTimeSpan: 100000,
            StartTime: Date.now(),
            FailCounter: 0,
            PenaltyTime: 500,
            Solved: true
        };
        return new figurixGame(newState);
    }

    setRandomToken() {
        this.Token = this.Tokens[Math.floor(Math.random() * this.Tokens.length)];
        this.FailCounter = 0;
        this.Solved = false;
        this.StartTime = Date.now();
    }

    tryTokenSolution(id)
    {
        const stopTime = Date.now();
        if (this.Solved) return false;

        if(id === this.Token.id) {
            this.LastTimeSpan = stopTime - this.StartTime + this.PenaltyTime * this.FailCounter;
            if (this.LastTimeSpan < this.BestTimeSpan) this.BestTimeSpan = this.LastTimeSpan;
            this.Solved = true;
            this.Token = new dataToken();
            return true;
        }

        this.FailCounter++;
        return false;
    }

    static _createTokens(imgCount, innerCount, outerCount)
    {
        const newTokens = [];
        
        let idCounter = 1;
        for (let img = 1; img <= imgCount; img++) {
            for (let innr = 1; innr <= innerCount; innr++) {
                for (let outr = 1; outr <= outerCount; outr++) {
                    newTokens.push(new dataToken(outr, innr, img, idCounter++));
                }
            }
        }
        
        figurixGame._shuffleArray(newTokens);
        return newTokens;
    }
    
    static _shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
}

// 0: dataToken {outerColor: 1, innerColor: 1, image: 1, id: 1}
// 1: dataToken {outerColor: 2, innerColor: 1, image: 1, id: 2}
// 2: dataToken {outerColor: 3, innerColor: 1, image: 1, id: 3}
// 3: dataToken {outerColor: 1, innerColor: 2, image: 1, id: 4}
// 4: dataToken {outerColor: 2, innerColor: 2, image: 1, id: 5}
// 5: dataToken {outerColor: 3, innerColor: 2, image: 1, id: 6}
// 6: dataToken {outerColor: 1, innerColor: 3, image: 1, id: 7}
// 7: dataToken {outerColor: 2, innerColor: 3, image: 1, id: 8}
// 8: dataToken {outerColor: 3, innerColor: 3, image: 1, id: 9}
// 9: dataToken {outerColor: 1, innerColor: 1, image: 2, id: 10}
// 10: dataToken {outerColor: 2, innerColor: 1, image: 2, id: 11}
// 11: dataToken {outerColor: 3, innerColor: 1, image: 2, id: 12}
// 12: dataToken {outerColor: 1, innerColor: 2, image: 2, id: 13}
// 13: dataToken {outerColor: 2, innerColor: 2, image: 2, id: 14}
// 14: dataToken {outerColor: 3, innerColor: 2, image: 2, id: 15}
// 15: dataToken {outerColor: 1, innerColor: 3, image: 2, id: 16}
// 16: dataToken {outerColor: 2, innerColor: 3, image: 2, id: 17}
// 17: dataToken {outerColor: 3, innerColor: 3, image: 2, id: 18}
// 18: dataToken {outerColor: 1, innerColor: 1, image: 3, id: 19}
// 19: dataToken {outerColor: 2, innerColor: 1, image: 3, id: 20}
// 20: dataToken {outerColor: 3, innerColor: 1, image: 3, id: 21}
// 21: dataToken {outerColor: 1, innerColor: 2, image: 3, id: 22}
// 22: dataToken {outerColor: 2, innerColor: 2, image: 3, id: 23}
// 23: dataToken {outerColor: 3, innerColor: 2, image: 3, id: 24}
// 24: dataToken {outerColor: 1, innerColor: 3, image: 3, id: 25}
// 25: dataToken {outerColor: 2, innerColor: 3, image: 3, id: 26}
// 26: dataToken {outerColor: 3, innerColor: 3, image: 3, id: 27}
// 27: dataToken {outerColor: 1, innerColor: 1, image: 4, id: 28}
// 28: dataToken {outerColor: 2, innerColor: 1, image: 4, id: 29}
// 29: dataToken {outerColor: 3, innerColor: 1, image: 4, id: 30}
// 30: dataToken {outerColor: 1, innerColor: 2, image: 4, id: 31}
// 31: dataToken {outerColor: 2, innerColor: 2, image: 4, id: 32}
// 32: dataToken {outerColor: 3, innerColor: 2, image: 4, id: 33}
// 33: dataToken {outerColor: 1, innerColor: 3, image: 4, id: 34}
// 34: dataToken {outerColor: 2, innerColor: 3, image: 4, id: 35}
// 35: dataToken {outerColor: 3, innerColor: 3, image: 4, id: 36}
// 36: dataToken {outerColor: 1, innerColor: 1, image: 5, id: 37}
// 37: dataToken {outerColor: 2, innerColor: 1, image: 5, id: 38}
// 38: dataToken {outerColor: 3, innerColor: 1, image: 5, id: 39}
// 39: dataToken {outerColor: 1, innerColor: 2, image: 5, id: 40}
// 40: dataToken {outerColor: 2, innerColor: 2, image: 5, id: 41}
// 41: dataToken {outerColor: 3, innerColor: 2, image: 5, id: 42}
// 42: dataToken {outerColor: 1, innerColor: 3, image: 5, id: 43}
// 43: dataToken {outerColor: 2, innerColor: 3, image: 5, id: 44}
// 44: dataToken {outerColor: 3, innerColor: 3, image: 5, id: 45}
// 45: dataToken {outerColor: 1, innerColor: 1, image: 6, id: 46}
// 46: dataToken {outerColor: 2, innerColor: 1, image: 6, id: 47}
// 47: dataToken {outerColor: 3, innerColor: 1, image: 6, id: 48}
// 48: dataToken {outerColor: 1, innerColor: 2, image: 6, id: 49}
// 49: dataToken {outerColor: 2, innerColor: 2, image: 6, id: 50}
// 50: dataToken {outerColor: 3, innerColor: 2, image: 6, id: 51}
// 51: dataToken {outerColor: 1, innerColor: 3, image: 6, id: 52}
// 52: dataToken {outerColor: 2, innerColor: 3, image: 6, id: 53}
// 53: dataToken {outerColor: 3, innerColor: 3, image: 6, id: 54}
