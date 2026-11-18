# Sprint Review Report: Sprint _

*Copy this file into `scrum/review/` using your team's naming format. Fill in every field. Replace the italic guidance with your team's information. Due by 11:59 p.m. on the day of the review.*

---

## 1. Meeting Details

**Date:** 11/9/2026

**Scrum Master:** Jesse

**Attendees:** Jesse, Grace, Ally

**Absent:** _

**Presenter:** Ally

**Deployed build reviewed:** [*(GitHub Pages URL)*](https://github.com/JMU-CS345/F26Team10)

**Release PR into `production`:** *(link; merge it before the review begins)*

---

## 2. Sprint Goal

*Tell the stakeholder whether the sprint delivered what it set out to.*

**The goal we set:** The player should be able to select between different classes and restart the game (in addition to movement from the previous sprint).

**Did we meet it?** *(Yes / Partly / No, and one sentence explaining why)*

Yes. While we did not meet one of our requirements, the core mechanics that we set out to implement were all successfully implemented.

---

## 3. Committed Items: Done or Not Done

*Done means the item meets every point of your Definition of Done, including "works in the deployed build." There is no "mostly done."*

*The presenter credits the members who built each story during the demo.*

| Issue # | User story | Estimate | Owner | Done? | Built by |
|---------|------------|----------|-------|-------|----------|
| Wall interaction     | As a player, if I run into a wall, I want to stop moving|    3      |   Jesse    | yes    | Jesse|
| Grid based movement  | As a player, if I move forward, I want to move exactly one grid space. |     1     |  Jesse     | yes   | Jesse|
| Player Selection     | As a player, if I boot up a new game |    2     |  Ally     | yes   | Ally|
| Create a coherent player class | As a programmer, I want everything to be self contained within a player class that dynamically keeps track of itself |  5  |  Jesse     | yes    | Jesse|
| Different Mage Sprites | As a player, when I start the game, I want the option to choose which class I want to be |   1  |  Grace  | yes    | Grace |
| Background | As a player, when I start the game, I want to see a cool dungeon background     |   2  | Grace | yes   | Grace |
| Game Logo | As a player, when I am on the start screen, I want to see a cool game logo |   2  | Grace  | yes    | Grace |
| Settings/Pause screen | As a player, when I play the game, I want the option to pause the game and change my settings |  2  |  Ally  | yes    | Ally|

---

## 4. Metrics

| | Points |
|---|---|
| Committed | 18 |
| Completed | 16 |
| Completion rate | 88.9% |

**Velocity history:**

| Sprint | Committed | Completed |
|--------|-----------|-----------|
| 1      |     5      |      3     |
| 2      |      18     |     16      |
| 3      |           |           |
| 4      |           |           |

**Burndown or board snapshot:** [*(Attach a screenshot or link)*](https://kommodo.ai/i/lPRcWWskooqyvZIzfYIa)

**What explains the difference between committed and completed?** Committed means that the code for each issue is put into the branch, but doesn't work. Completed means that the implementation of a specific issue is done.

---

## 5. Demo

*For each completed story, list the acceptance criteria and show that each one passed in the deployed build.*

*Presenter: be ready to explain and answer questions about every completed story, including work you didn't build.*

### Issue #1: Wall interaction

- [0 ] Generate walls around the dungeon.
- [ 0] If the player tries to move into one, nothing happens.

### Issue #2: Grid based movement

- [0 ] If the player presses the arrow keys or wasd, then they move in that direction
- [0 ] The sprite changes direction based on which arrow key is pressed
- [0] All movement is  constrained to a grid.

### Issue #3: Player Selection

- [0 ] After pressing play, a menu pops up to select characters
- [0 ] The sprites for each should be shown so you can see what they look like
- [0] pressing select selects that character and the player sprite is changed to it.

### Issue #4: Create a coherent player class

- [0 ] Player attributes should be centralized in a single class
- [0 ] Any attempts to access the player class from other classes must be done through getters and setters.

### Issue #5: Different Mage Sprites

- [0 ] Each sprite should be distinguishable 
- [0 ] Four directional sprites for one of each class: Fire, Ice, Psychic

## Issue #6: Game Logo

- [0 ] The title screen should have a specialized logo for the game
- [0 ] Should look cool

### Issue #7: Settings/Pause screen

- [0 ] A special menu must pop up when you click the settings button
- [0 ] It should pause all movement while it is open
- [0 ] Volume button that should be able to be manipulated with arrow keys
- [0 ] Should also feature a button that allows you to reset the game.
---

## 6. Incomplete Work

*What happens to each item that is not done? Return it to the backlog and re-estimate it, even if the estimate stays the same. (Sprint 4: write "n/a")*

| Issue # | What remains | New estimate | Back in backlog? |
|---------|--------------|--------------|------------------|
| Background | As a player, when I start the game, I want to see a cool dungeon background     |   2  | Grace | [ ]    |
---

## 7. Stakeholder Feedback

*Record what the instructor said: what they liked, what should change, and any new priorities. (Sprint 4: write "n/a")*

Did a good job with graphics, wall collisions well done. Get sound in there if we are going to have volume buttons. More developed dungeon maps, between towns, and add enemies.

---

## 8. Backlog Changes

*How did the backlog change in response to the feedback? (Sprint 4: write "n/a")*

**New stories added:** Enemies, sounds, and dungeon maps

**Priorities changed:** None

**Stories removed:** None

**If no change was needed, why not?**

---

## 9. Quality

*Give the stakeholder an honest picture of the build's quality.*

**CI status on `production`:** passing

**Number of specs:** 7

**Known bugs in the deployed build:** 0 (we will be bug testing in the future).

---

## 10. Checklist

- [0 ] Demo given from the deployed GitHub Pages build
- [ 0] Demo given by one presenter, crediting the members who built each story
- [0 ] Release PR merged before the review begins
- [ 0] Every committed item marked Done or Not Done
- [ 0] Every item marked Done has all its acceptance criteria checked in section 5
- [0 ] Metrics filled in, with the committed/completed difference explained
- [ 0] Stakeholder feedback recorded (Sprint 4: n/a)
- [ 0] Backlog updated, or the reason no change was needed explained (Sprint 4: n/a)
- [ 0] Report committed to `scrum/review/` via pull request by 11:59 p.m. on the day of the review
