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


_

---

## 3. Capacity and Velocity

**Sprint dates:** 11/20/2026 - 11/18/2026

**Velocity last sprint (points completed):** 16

**Average velocity so far:** 9.5

**Known absences or reduced availability this sprint:** 

**Points committed this sprint:** 26

**Why this commitment is realistic:** *(Compare it to your velocity and capacity. If you are committing more than last sprint's velocity, explain why.)*

Most of the problems we encountered during our previous sprint dealt with merging, however it was significantly easier to track since our first sprint. Since we are getting better with our coordination and organization, we are better able to handle more tasks.
---

## 4. Committed Backlog Items

*Every item listed here must meet the Definition of Ready in your constitution. Items should be taken from the top of the product backlog in priority order. If you skipped a higher-priority item, explain why under "Notes".*

| Issue # | User story | Estimate | Owner | Ready? | 9 7 10
|---------|------------|----------|-------|--------|
| Enemies    | As a player, if I enter a dungeon, randomly generated enemies spawn in and move around
 |    5      |   Jesse    | [ ]    |
| Safe Area  | As a player, when I start the game, I want to begin in an area without any enemies.
 |     2     |  Jesse     | [ ]    |
| Attacking  | As a player, if I enter a dungeon full of enemies, I want the ability to fight back.
 |    2     |  Jesse     | [ ]    |
| Inventory | As a player, if I click the e button, I am given a menu to see what I have equipped.
 |  5  |  Ally  | [ ]    |
| Enemy Sprites |   As a player, if I see an enemy, it should be distinct
   |   2  | Grace | [ ] |
| Sound |  As a player, if I start the game, I want to hear music.
|   2  | Ally  | [ ]    |
| Weapon/Attack Sprite | As a player, if I attack, I want an indicator of where my hit box might be
 |  2  |  Grace  | [ ] |
| Health and Mana Sprite | As a player, when I load up the game, I want a health and mana bar to show me how much health/mana I have left
 |  2  |  Grace  | [ ] |
| Inventory Background |As a player, when I open up my inventory, I should see a custom UI that easily lets me see how much room I have
  |  2  |  Grace  | [ ] |
| Settings Background | As a player, when I open up the settings, I should see a custom UI that looks aesthetically pleasing
  | 2 | Grace|  [ ] |


**Total points:** 26

**Notes:** _

---

## 5. Task Breakdown

*Break each story into tasks. Include tasks for writing tests and reviewing PRs, not only coding.*

### Issue 1: Enemies
As a player, if I enter a dungeon, randomly generated enemies spawn in and move around
- At least 3 unique enemies are randomly selected
- Each enemy carries a "danger value" that determines how can appear at once
- Each unique enemy type has different movement patterns
- Create a centralized entity class to handle basic functions of all entities (including walls and player)
  
### Issue 2: Safe Area
As a player, when I start the game, I want to begin in an area without any enemies.
- Player should start in the safe area
- A door should be at the top of the screen that allows the player to enter the dungeon.
- Safe area should have wall collisions so the player can't go out of bounds.

### Issue 3: Attacking
As a player, if I enter a dungeon full of enemies, I want the ability to fight back.
- Touching an enemy decreases overall health (with a temporary window of invincibility).
- If the attack button is pressed ('space key'), then enemies take damage in an area extending from the player.
- Hitting an enemy should decrease enemy health.
- If the player's health drops below zero, it should take them immediately back to the start screen.
- If an enemy's health drops below zero, it should disappear from the field.

### Issue 4: Inventory
As a player, if I click the e button, I am given a menu to see what I have equipped.
- 'e' is the keybind to pull up inventory
- Inventory button in the corner next to settings for a mouse option
- Should be a 4x4 grid, with a weapon, spell, and armor slot on the side.

### Issue 5: Enemy Sprites
As a player, if I see an enemy, it should be distinct
- Different sprites for each unique enemy
- Should have a basic death indicator (like a static explosion)

### Issue 6: Sound
As a player, if I start the game, I want to hear music.
- Find and play copyright free music
- Implement the volume button so it adjusts the volume
- Make a separate folder in src for sounds

### Issue 7: Weapon/Attack Sprite
As a player, if I attack, I want an indicator of where my hit box might be.
- Create a generic weapon sprite.
- Create a generic attack sprite to indicate movement (static).
- Have it drawn on the screen whenever the attack key is pressed.

### Issue 8: Health and Mana Sprite
As a player, when I load up the game, I want a health and mana bar to show me how much health/mana I have left
- Player should be given 3 hearts.
- Each heart can be split into 2 (so a maximum of 6 health).
- If the player takes damage, then the hearts decrease by how much damage was dealt (so three damage equals 1 and a half hearts)
- Mana should be a static sprite for now.

### Issue 9: Inventory Background
As a player, when I open up my inventory, I should see a custom UI that easily lets me see how much room I have
- 4x4 grid, with sword, spell, and armor slot.
- Should have clear divisions between inventory slots.

### Issue 9: Settings Background
As a player, when I open up the settings, I should see a custom UI that looks aesthetically pleasing
- Settings background should not affect buttons.
- The settings text should still be visible.





---

## 6. Work Distribution

| Member | Stories owned | Points |
|--------|---------------|--------|
| Jesse  |       3       |    9   |
| Grace  |       5       |     10  |
| Ally   |       2      |     7  |
|        |               |        |

*If the work is not balanced, explain why:*

We have Grace doing 10 points because all five of her tasks are only to draw the sprites and push them to their respective folder.

---

## 7. Stories Split or Deferred

*Did you split any stories that were too large for one sprint, or move stories back to the backlog? List them and say why.*

No

---

## 8. Retrospective Follow-Through

*Which action items from last sprint's retrospective are part of this sprint's plan, and how? (Sprint 1: write "n/a")*

| Action item | How it shows up in this sprint |
|-------------|--------------------------------|
| Establish clearer responsibilities between classes  |  Create generic classes that more specialized classes can implement |
| Improve class testing | Encourage members to continuously test their code as they implement it |


---

## 9. Risks and Dependencies

*What might stop the team from meeting the sprint goal? Which stories depend on others being finished first?*

Lack of time
A lot of issues require sprites to be drawn for them, particularly enemies and attacking.
---

## 10. Checklist

- [ 0] Sprint goal written
- [ 0] Every committed story meets the Definition of Ready
- [ 0] Every story has an owner
- [ 0] Board updated: committed stories in the sprint, tasks created
- [ 0] Commitment compared to velocity
- [ 0] Report committed to `scrum/planning/` via pull request
