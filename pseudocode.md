# Rock Paper Scissors

## Pseudocode for rock paper scissors console game for odin js exercise

- map rock paper scissors to {0, 1, 2}
- Rock Paper Scissors
- make a draw function
- make win lose function
- generate random choice
- take user answer, set to lowercase
- match the user answer to random choice
  - paper beats rock (Paper > Rock)
  - scissors beats paper (Scissor > Paper)
  - rock beats scissors (Rock < Scissor)

- set score to 0
- set how many tries = 5
- make play function
- get user input. set to lowercase
- let computer choose RPS
- compare user choice and computer choice
- if win show Win, score + 1, tries + 1
- if lose show Lose, tries + 1
- if tries <= 5, execute play again

```javascript
switch
case Scissor
answer = Paper > win
answer = Rock > lose
case Paper
answer = Rock > win
answer = Scissor > lose
case Rock
answer = Scissor > win
answer = Paper > lose
```
