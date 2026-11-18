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

**The goal we set:**  A player can move around on a set board. If a player runs into the edge, they are stopped.

**Did we meet it?** *(Yes / Partly / No, and one sentence explaining why)*

Partly. While the player sprite and movement were added, we still need to combine the parts to one player object so that they both work together.

---

## 3. Committed Items: Done or Not Done

*Done means the item meets every point of your Definition of Done, including "works in the deployed build." There is no "mostly done."*

*The presenter credits the members who built each story during the demo.*

| Issue # | User story | Estimate | Owner | Done? | Built by |
|---------|------------|----------|-------|-------|----------|
| Wall interaction     | As a player, if I run into a wall, I want to stop moving |    1      | Jesse      |  no     |           |
| Grid based movement  | As a player, if I move forward, I want to move exactly one grid space. |     1     | Jesse      |   no    |           |
| Baseplate            | As a player, I want to see my character on a board |    1      | Jesse      | Yes      |           |
| Character Sprite     | As a player, I want my character to not be a circle |   1       | Grace      | Yes      |           |
| Start Screen        | As a player, when I open the game, i want to see a play button that starts the game           |        1  | Ally       | Yes      |           |
---

## 4. Metrics

| | Points |
|---|---|
| Committed | 5 |
| Completed | 3 |
| Completion rate | 60% |

**Velocity history:**

| Sprint | Committed | Completed |
|--------|-----------|-----------|
| 1      |     5      |      3     |
| 2      |           |           |
| 3      |           |           |
| 4      |           |           |

**Burndown or board snapshot:** [*(Attach a screenshot or link)*](https://kommodo.ai/i/lPRcWWskooqyvZIzfYIa)

**What explains the difference between committed and completed?** Committed means that the code for each issue is put into the branch, but doesn't work. Completed means that the implementation of a specific issue is done.

---

## 5. Demo

*For each completed story, list the acceptance criteria and show that each one passed in the deployed build.*

*Presenter: be ready to explain and answer questions about every completed story, including work you didn't build.*

### Issue #1: Baseplate

- [0 ] A 800px x 800px board is rendered
- [ 0] It has grid partitions

### Issue #2: Character Sprite

- [0 ] A sprite shows up on game load
- [0 ] The sprite changes direction based on which arrow key is pressed

### Issue #2: Start Screen

- [0 ] A screen shows up when the game load that tells you the title of the game
- [0 ] Pressing a start button

---

## 6. Incomplete Work

*What happens to each item that is not done? Return it to the backlog and re-estimate it, even if the estimate stays the same. (Sprint 4: write "n/a")*

| Issue # | What remains | New estimate | Back in backlog? |
|---------|--------------|--------------|------------------|
| Grid based movement        |  Implement with current state            |  1            | [ ]              |
|  Wall interaction       |  Make a wall class            |  3            | [ ]              |

---

## 7. Stakeholder Feedback

*Record what the instructor said: what they liked, what should change, and any new priorities. (Sprint 4: write "n/a")*

Have the player able to move

---

## 8. Backlog Changes

*How did the backlog change in response to the feedback? (Sprint 4: write "n/a")*

**New stories added:** None

**Priorities changed:** None

**Stories removed:** None

**If no change was needed, why not?** The feedback we got was already in line with what we were planning in the future.

---

## 9. Quality

*Give the stakeholder an honest picture of the build's quality.*

**CI status on `production`:** passing

**Number of specs:** 3

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
