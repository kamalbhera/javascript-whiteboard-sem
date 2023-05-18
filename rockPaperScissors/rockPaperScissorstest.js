function rockPaperScissors(n) {
    const outcomes = [];
    const plays = ['rock', 'paper', 'scissors'];

    function findOutcome (roundsLeft, result) {
      // base case
      if (roundsLeft === 0) {
        outcomes.push(result);
        return;
      };
      plays.forEach((play) => {
        console.log('roundsLeft: ', roundsLeft);
        console.log('play: ', play);  
        // console.log('Outcomes before', outcomes);  
        // console.log('result before', result);      
        findOutcome(roundsLeft - 1, result.concat(play));
        // console.log('Outcomes after', outcomes);
        // console.log('result: ', result);  

      });
    }
    findOutcome(n, []);
    return outcomes;
  }

rockPaperScissors(3)
  
  /* Some console.log tests */
// console.log('2', rockPaperScissors(2));
// console.log(rockPaperScissors(1)); 
// console.log(rockPaperScissors(4));  