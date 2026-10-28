# Team Constitution

*This document records how our team works together on Mage Quest. Fill in every field. Replace the italic guidance with your team's decisions. Changes to this document go through a pull request like any other change.*

---

## 1. Team and Roles

### Team Number: 10

### Team Name: Team 10

_

### Members

| Name          | GitHub username | Preferred contact | Usual availability |
|---------------|-----------------|-------------------|--------------------|
| Jesse Homan   |  oofthegrate    |                   |  Afternoon         |
| Grace Kosatka | grace-kosatka   |                   |  IDK               |
| Ally Schwarz  |  ae-schwarz     |                   |  IDK               |
|               |                 |                   |                    |

### Scrum Master

**Sprint 1 Scrum Master:** 

Jesse Homan

**Does the role rotate?** *(e.g., rotates each sprint in the order listed above; or one person for the whole project)*

No

### Product Owner

*Choose one team member who will interact with the instructor (stakeholder) to clarify and prioritize stories, and to collect new ones.*

Jesse Homan

### Other Responsibilities

Who is responsible for maintaining the project board / backlog in good order? Jesse Homan

Who is responsible for deploying the main branch to production to update GitHub pages? Grace Kosatka

### Decision Making

We will decide based on majority vote.

---

## 2. Scrum Process

### Sprint Length and Dates

| Sprint | Start | End | Review / Retro date |
|--------|-------|-----|---------------------|
| 1 | 11/2 | 11/8 | 11/9 |
| 2 | 11/9 | 11/15 | 11/16 |
| 3 | 11/16 | 11/29 | 11/30 |
| 4 | 11/30 | 12/6 | 12/7 |
| 5 | 12/7 | presentation day | presentation day | 

### Meetings

| Meeting | When |
|---------|------|
| Daily standup | Wed/Fri |
| Sprint planning | Mon |
| Sprint review | Mon |
| Sprint retrospective | Mon |


_

### Definition of Ready

*A backlog item may be pulled into a sprint only when:*

- [x] it is written as a user story
- [x] it has acceptance criteria
- [x] it has an estimate

### Definition of Done

*An item is done only when:*

- [x] code is reviewed and approved by at least one teammate
- [x] all tests pass in CI
- [x] merged to `main`
- [x] works in the deployed build
- [x] the issue is closed

### Estimation

**Method:** Story points

**Scale:** 1, 2, 3, 5, 8, 13, 21...

_

### Backlog and Board

**Where the backlog lives:** GitHub Projects board

**Board columns:** To Do → In Progress → In Review → Done

_

---

## 3. Communication

### Primary Channel

**Channel:** Text

**Expected response time:** Within 24 hours

### What Goes Where

Setup meetings and general discussions will be done over text. Bugs and requirements will be address in GitHub issues
Feedback and code suggestions are put in PR (Pull Request) comments.
_

### Reporting Blockers or Falling Behind

As soon as possible
_

### Absences

As soon as possible
_

---

## 4. Git and GitHub Workflow

### Branch Naming

**Format:** `type/issue-short-description`

**Allowed types:** `feature`, `fix`, `docs`, `refactor`, `test`, `chore`

**Examples:**

- feature/user-login
- fix/null-pointer-error
- docs/update-readme

### Branch Protection on `main`

- [x] No direct pushes to `main`
- [x] Required approvals before merge: _
- [x] CI must pass before merge
- [x] Same protection on `production`

### Commit Messages

Conventional Commit Messages

_

### Pull Requests

**Maximum size:** 300 lines

**Description template:** What / Why / How to test / Screenshot

**Linking issues:** Every PR includes `Closes #N`

_

### Code Review

**Review turnaround:** Within 48 hours

**Who reviews what:** Any teamate

_

### Merging

**Merge style:** merge commit

**Who merges:** The reviewer

**After merge:** Delete the branch

_

---

## 5. Code Conventions

### Naming

| Kind | Convention | Example |
|------|------------|---------|
| Variables and functions | camelCase | hitPoints |
| Classes | PascalCase | DungeonEnemy |
| Constants | ALL_CAPS_SNAKE_CASE| MAX_LIFE |
| Files | snake_case | dungeon_sprites.png|
| Test files | test + snake_case | test_dungeon_sprites.js |

### Formatting

**Indentation:** Tabs

**Semicolons:** Always

**Quotes:** Single

**Maximum line length:** Default

**Tools:** Prettier or ESLint, with config files committed to the repo

_

### Project Structure

```
src/             
  model/        game logic, no p5 drawing calls
  view/         drawing code
  controller/   input handling
assets/
spec/
```

### Architecture Rules

Game logic never calls p5 drawing functions directly, so it can be unit tested

-
-

### Comments and Documentation

Never required but when applicable should be added

_

### Assets

**File naming:** Allow lowercase, separated by underscores (file_example.txt)

**Licensing and attribution:** In the credits

_

---

## 6. Testing and Quality

**Test framework:** Jasmine

**Where tests live:** Test folder

**What must have tests:** All model code

_

**Coverage expectations:** 90+%

**Continuous integration:** Continuous Integration

_

**Rule for failing CI:** Nothing merges while CI is red.

_

**Manual playtesting:** Anyone available plays the build before each sprint review, and bugs a added to GitHub

_

---

## 7. Deployment

**Where the game is deployed:** GitHub Pages

**What triggers a deploy:** A release PR from `main` into `production`, opened by the Scrum Master after each sprint review

**Who checks the deployed build, and when:** Anyone when they are available (rotate who)

---

## 8. AI Tool Usage

**Allowed tools:** _ ChatGPT, CoPilot, Claude, Gemini

**Allowed uses:** Code generation. 

_

**Not allowed:** _ Test cases. Documentation.

**Disclosure:** Note AI assistance in the PR description

_

**Responsibility:** Whoever submits AI-generated code must understand it and is accountable for it. Also clarify in comments that it is AI generated.

_

---

## 9. Working Agreements and Conflict

### Expected Effort

3 hours per person per week.

_

### Fair Contribution

Story Points

_

### Conflict Resolution

1. talk to the person directly
2. raise it at the retrospective
3. Scrum Master mediates
4. escalate to the instructor

### Missed Commitments

Communicate with said group member.

_

### Amending This Constitution

Approved by team vote at retrospective.
_

---

## 10. Sign-Off

*By signing, each member agrees to follow this constitution.*

| GitHub name    | Signature (type your name) | Date |
|----------------|----------------------------|------|
| grace_kosatka  |  Grace Kosatka             | 10/28|
| ae-schwarz     |  Ally Schwarz              | 10/28|
| oofthegrate    |  Jesse Homan               | 10/28|
|                |                            |      |
