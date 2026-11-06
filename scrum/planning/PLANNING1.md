# Sprint Planning Report: Sprint 1

---

## 1. Meeting Details

**Date:** 11/02/2026

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

**Sprint dates:** 11/02/2026 - 11/6/2026

**Velocity last sprint (points completed):** n/a

**Average velocity so far:** n/a

**Known absences or reduced availability this sprint:** 

**Points committed this sprint:** 5

**Why this commitment is realistic:** *(Compare it to your velocity and capacity. If you are committing more than last sprint's velocity, explain why.)*

We are just starting out, so having low value tasks will help us gauge how much we could realistically handle

---

## 4. Committed Backlog Items

*Every item listed here must meet the Definition of Ready in your constitution. Items should be taken from the top of the product backlog in priority order. If you skipped a higher-priority item, explain why under "Notes".*

| Issue # | User story | Estimate | Owner | Ready? |
|---------|------------|----------|-------|--------|
| Wall interaction     | As a player, if I run into a wall, I want to stop moving           |    1      |       | [ ]    |
| Grid based movement  | As a player, if I move forward, I want to move exactly one grid space. |     1     |       | [ ]    |
| Baseplate            | As a player, I want to see my character on a board |    1      |       | [ ]    |
| Character Sprite     | As a player, I want my character to not be a circle |   1       |       | [ ]    |
| Start Screen        | As a player, when I open the game, i want to see a play button that starts the game           |        1  |       | [ ]    |

**Total points:** 4

**Notes:** _

---

## 5. Task Breakdown

*Break each story into tasks. Include tasks for writing tests and reviewing PRs, not only coding.*

### Issue 1: Start Screen
As a player, when I open the game, i want to see a play button that starts the game
- A screen appears when players open the game
- Needs a play button in the center and the title of the game at the top.
- Given I load up the game, I am met with a colored box with a play button and the name of the game
  
### Issue 2: Baseplate
As a player, I want to see my character on a board

- have a set area where the character is generated and will eventually be able to move around
- Given I press play, then I see gray box of 800px x 800px
  
### Issue 3: Grid based movement
As a player, if I move forward, I want to move exactly one grid space.
- Player moves with WASD or arrow keys
- Given I am on the baseplate, if I tap wasd or an arrow key, I move a set amount of pixels in that direction

### Issue 4: Wall Interaction
As a player, if I run into a wall, I want to stop movin
- When a player moves into a wall, they are stopped
- Given I am on the baseplate, if I tap wasd or an arrow key and hit the edge of the plate, my movement is halted
*(Repeat for each committed story.)*

### Issue 5: Character Sprite
As a player, I want my character to not be a circle
- Player is a static sprite
- Given I play the game, if I am on the baseplate, my character is a static sprite that changes direction based on where im facing.
*(Repeat for each committed story.)*

---

## 6. Work Distribution

| Member | Stories owned | Points |
|--------|---------------|--------|
| Jesse  |       3        |    3    |
| Grace  |       1        |     1   |
| Ally   |        1       |     1   |
|        |               |        |

*If the work is not balanced, explain why:*

Baseplate, player movement, and wall interaction are all closely related, so it makes sense to delegate all of that to a single person than try and allocate each function to multiple people.
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
|     n/a     |                                |
|             |                                |

---

## 9. Risks and Dependencies

*What might stop the team from meeting the sprint goal? Which stories depend on others being finished first?*

Lack of time
Grid movement depends on a baseplate being established, and wall interaction depends on grid movement being established.

---

## 10. Checklist

- [ ] Sprint goal written
- [ ] Every committed story meets the Definition of Ready
- [ ] Every story has an owner
- [ ] Board updated: committed stories in the sprint, tasks created
- [ ] Commitment compared to velocity
- [ ] Report committed to `scrum/planning/` via pull request
