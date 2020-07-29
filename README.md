### Note
 - Height is not available for player comparison so i used 'crew' field instead
 
### Could Improve 
- Create a simple state management that stores each game play into an history object. This can then be accessed by any component route instead of moving props around. Thus keeps it all clean

- Number of players could be increased by updating the 'NoOfPlayers' state. This will be used inside 'getNrandomCards(NoOfPlayers, data)' method which generates N cards from the list of cards.

- Spent some more time improving UI and keeping design consistent;especially the history page.

- More testing is needed

### Important Files/Folders
- Helper file: includes methods
- Constants: includes various types and interfaces. Some of of which are reusable.
- Style: includes all theme constants

### To Run App

Remember to Install the dependencies and devDependencies and before starting app

```sh
$ yarn start
$ npm test
```


