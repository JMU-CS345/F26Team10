# Sprint Retrospective Report: Sprint 1

*Copy this file into `scrum/retrospective/` using your team's naming format. Fill in every field. Replace the italic guidance with your team's information. Due by 11:59 p.m. on the day of the retrospective.*

---

## 1. Meeting Details

**Date:** 11/18/2026

**Facilitator:** Jesse

**Attendees:** Jesse, Grace, Ally

**Absent:** _

---

## 2. Last Sprint's Action Items

*Did we do what we said we would? Did it help? (Sprint 1: write "n/a")*

| Action item | Owner | Done? | Did it help? |
|-------------|-------|-------|--------------|
| Wall interaction     | Jesse|    yes    | yes   |
| Grid based movement  | Jesse |  yes     | yes    |
| Player Selection     | Ally |    yes    | yes    |
| Create a coherent player class | Jesse |  yes   | yes   |
| Different Mage Sprites | Grace |   yes  |  yes |
| Background |  Grace  |   Jesse  | no | no    |
| Game Logo | Grace | yes  | yes   |
| Settings/Pause screen | Ally |  yes  |  yes   |

---

## 3. The Sprint in Numbers

*Use these to ground the discussion in evidence.*

**Points committed / completed:** 18 / 16

**PRs merged:** 

**CI runs failed / total:** 7 / 20 *(In your repo's **Actions** tab, count the runs from this sprint's dates. Use the **Status** filter to find the failed ones.)*

**Stories carried over:** 2

---

## 4. Observations

*Every member contributes at least one item. Be specific: "three PRs waited more than two days for review" is more useful than "communication could be better."*

*A concrete observation says what happened and backs it up with a specific PR, story, date, or number. Filling in section 3 isn't enough on its own: use its numbers in your observations where they help explain what happened.*

### What went well

- The Drawing of the sprites including the different mages, sprites, and backgrounds.
- The creation of a pause/settings screen to exit from the game when the user wants to.
- The implementations from our first sprint made it significantly easier to implement new features like wall collision. 

### What did not go well

- Time management in regards to implementing the images into the game specifically the safe zone implementation.
- Conflicts with merging in the same file which caused a lot of figuring out exactly where our code was having errors. 
- We still encountered errors with pushing and pulling, as well as branches not functioning properly.

### What puzzled us or what we want to try

- Implementing multiple game ares, dungeon and safe zone, and traveling between the two.
- We want to try adding sound, so that the volume buttons in the settings bar are actually functional. 
- We want to try making the enemies and inventory

---

## 5. Root Cause

*Pick the most important problem from above and ask "why?" until you reach something the team can change.*

**Problem:** Conflicts while merging in the same file.

**Why?** Incorrect handling of merges

**Why?** We were using the buttons instead of manually editing the merges to make them work

**Why?** _

**Root cause:** We were using the buttons instead of manually editing the merges to make them work.

---

## 6. Action Items for Next Sprint

*Two or three items. Each one has an owner and a way to tell whether it worked. (Sprint 4: write "n/a")*

| Action item | Owner | How we will know it worked |
|-------------|-------|----------------------------|
| Establish clearer responsibilities between classes  |  Jesse     |   Classes are easier to read and understand what they do |
| Improve class testing  |  Jesse  | Every file has near 100% coverage over test cases. |

---

## 7. Constitution Changes

*Did this retrospective show that a rule in CONSTITUTION.md isn't working? If so, propose the change here and make it through a pull request. If not, explain why no change is needed. (Sprint 4: write "n/a")*

**Proposed change:** none

**Pull request:** none

**If no change is needed, why not?** All of our general rules are working because we managed to get most of our goals without any major conflicts.

---

## 8. Checklist

- [ 0] Every member contributed observations
- [ 0] Last sprint's action items reviewed
- [ 0] A root cause identified
- [ 0] Action items have owners and success measures (Sprint 4: n/a)
- [ 0] Action items added to the board or next planning report (Sprint 4: n/a)
- [ 0] Constitution change proposed through a pull request, or the reason none is needed explained (Sprint 4: n/a)
- [ 0] Report committed to `scrum/retrospective/` via pull request by 11:59 p.m. on the day of the retrospective
