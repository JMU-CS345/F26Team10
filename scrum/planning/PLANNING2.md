# Sprint Planning Report: Sprint 1

---

## 1. Meeting Details

**Date:** 11/11/2026

**Scrum Master:** Jesse Homan

**Attendees:** Grace, Ally, Jesse

**Absent:** Sri

---

## 2. Sprint Goal

*One or two sentences describing a playable outcome, not a list of tickets. e.g., "A player can create a character and enter the first dungeon."*
A player can move around on a set board. If a player runs into the edge, they are stopped.

_

---

## 3. Capacity and Velocity

**Sprint dates:** 11/11/2026 - 11/18/2026

**Velocity last sprint (points completed):** 3

**Average velocity so far:** 3

**Known absences or reduced availability this sprint:** 

**Points committed this sprint:** 18

**Why this commitment is realistic:** *(Compare it to your velocity and capacity. If you are committing more than last sprint's velocity, explain why.)*

Now that we have a good idea of what our team can handle, we are bumping up the total amount of points each person is handling.

---

## 4. Committed Backlog Items

*Every item listed here must meet the Definition of Ready in your constitution. Items should be taken from the top of the product backlog in priority order. If you skipped a higher-priority item, explain why under "Notes".*

| Issue # | User story | Estimate | Owner | Ready? |
|---------|------------|----------|-------|--------|
| Wall interaction     | As a player, if I run into a wall, I want to stop moving|    3      |   Jesse    | [ ]    |
| Grid based movement  | As a player, if I move forward, I want to move exactly one grid space. |     1     |  Jesse     | [ ]    |
| Player Selection     | As a player, if I boot up a new game |    2     |  Ally     | [ ]    |
| Create a coherent player class | As a programmer, I want everything to be self contained within a player class that dynamically keeps track of itself |  5  |  Jesse     | [ ]    |
| Different Mage Sprites | As a player, when I start the game, I want the option to choose which class I want to be |   1  |  Grace  | [ ]    |
| Background | As a player, when I start the game, I want to see a cool dungeon background     |   2  | Grace | [ ]    |
| Game Logo | As a player, when I am on the start screen, I want to see a cool game logo |   2  | Grace  | [ ]    |
| Settings/Pause screen | As a player, when I play the game, I want the option to pause the game and change my settings |  2  |  Ally  | [ ]    |



**Total points:** 18

**Notes:** _

---

## 5. Task Breakdown

*Break each story into tasks. Include tasks for writing tests and reviewing PRs, not only coding.*

### Issue 1: Wall Interaction
As a player, if I run into a wall, I want to stop movin
- When a player moves into a wall, they are stopped
- Given I am on the baseplate, if I tap wasd or an arrow key and hit the edge of the plate, my movement is halted
- Randomly generate walls on the grid to halt movement
- Create a wall class that keeps track of wall location
  
### Issue 2: Grid based movement
As a player, if I move forward, I want to move exactly one grid space.
- Player moves with WASD or arrow keys
- Given I am on the baseplate, if I tap wasd or an arrow key, I move a set amount of pixels in that direction
- Player sprite turns to face direction I move.

### Issue 3: Different Mage Sprite
As a player, I want more than one character to play as.
- Player can be one of three mages: fire, ice, and mind.
- Make the sprites that will be implemented in Player Selection

### Issue 4: Player Selection
As a player, if I start the game, I want the option to choose between different mages
- Have the option to select between three mages: fire, ice, and mind
- Given I am on the selection screen, if I click a mage, my character sprite becomes that mage
- Be able to cycle through the players using the arrow keys or wasd.

### Issue 5: Create a Coherent Player Class
As a player, if I start the game, I my character to have all the attributes that allow me to play the game
- Combine character sprite into main player class
- Add attributes for health, mana, inventory, armor, and weapon
- Add functions that manipulate health, mana, armor, weapon, and inventory

### Issue 6: Background
As a player, if I start the game, my character shows up on a background
- Given I start the game, if I am on the baseplate, I see a nice dungeon background.
- Update the grid partitions (we still need them for testing reasons) to be white
- Make both the dungeon background and safe zone background (will be implemented later).
- Also make background for title screen.

### Issue 7: Game Logo
As a player, if I boot up the game, I want the title screen to show me a cool game logo
- Given I start the game, if I am on the start screen, I see a cool game logo.
- Make it big and flashy
- Add a background

### Issue 8: Pause/Settings menu
As a player, if I click the settings button, it pauses the game and allows me to change my settings
- Given I play the game, if I click the settings button, I am given a menu to change my settings.
- Put it in the corner, make it semi transparent.
- Should have a resume button, game sound and music sliders (or mute button), and a return to menu button.
- If i hit esc, the pause menu should open.





---

## 6. Work Distribution

| Member | Stories owned | Points |
|--------|---------------|--------|
| Jesse  |       3       |    9   |
| Grace  |       3       |     5  |
| Ally   |        2      |     4  |
|        |               |        |

*If the work is not balanced, explain why:*

Jesse didn't fully implement all of my tasks during the last sprint, so he is playing catch up, hence why he have four more allocated points than the rest of the team.
_

---

## 7. Stories Split or Deferred

*Did you split any stories that were too large for one sprint, or move stories back to the backlog? List them and say why.*

No

---

## 8. Retrospective Follow-Through

*Which action items from last sprint's retrospective are part of this sprint's plan, and how? (Sprint 1: write "n/a")*

| Action item | How it shows up in this sprint |
|-------------|--------------------------------|
|  Set aside more time to make sure we are all on the same page |  During class, spend a few minutes to make sure everyone pushes and pulls everything they have so far.     |
|             |                                |

---

## 9. Risks and Dependencies

*What might stop the team from meeting the sprint goal? Which stories depend on others being finished first?*

Lack of time
The selection screen depends on the new player sprites being made.

---

## 10. Checklist

- [ 0] Sprint goal written
- [ 0] Every committed story meets the Definition of Ready
- [ 0] Every story has an owner
- [ 0] Board updated: committed stories in the sprint, tasks created
- [ 0] Commitment compared to velocity
- [ 0] Report committed to `scrum/planning/` via pull request
