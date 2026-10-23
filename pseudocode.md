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
