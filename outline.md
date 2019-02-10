# Workout Tracker

What are we trying to do?
Track workouts.

What is a workout?
Activities + Sets + Reps

## TODO

Activity should have starting value. ex. 100
Activity should have target reps. ex. 5

Activity layout for Workout Detail:

* Add Activity Workflow
  * Add Activity
    * Select Activity - dropdown?
    * Defaults to last value and rep count.
    * Change either and add
    * Creates a card. Activity name and add set button.

* Add set
  * Adds rep count button. Tap button to cycle rep count.

## Project Outline

### Main Menu

* [Workouts](#workouts)
* [Activities](#activities)

### Workouts

* [New Workout](#workout-detail)
* [List: Workouts](#workout-detail) | Delete [WORKOUT_DELETE](#workout-mutations)

### Workout Detail

_Auto-save on each interaction. Debounce 300ms [WORKOUT_SAVE](#workout-mutations)_

_NOTE: Only save if all required fields are populated. Warning that workout is not saved yet_

* [Back to Workouts](#workouts)
* *Title: string
* Date: number default to today (Date.now())
* Add Activity [ACTIVITY_HISTORY_CREATE](#activity-history-mutations)
* List: Activities - state.activityHistory.filter(workoutid)
  * Title
  * Remove Activity [ACTIVITY_HISTORY_DELETE](#activity-history-mutations)
  * Add Set [ACTIVITY_HISTORY_SET_ADD](#activity-history-mutations)
  * Remove Set [ACTIVITY_HISTORY_SET_REMOVE](#activity-history-mutations)
    * Sets
      * Amount +/- [ACTIVITY_HISTORY_SET_INCREMENT](#activity-history-mutations)
* Notes: string textarea
* Delete Workout [WORKOUT_DELETE](#workout-mutations)|[ACTIVITY_HISTORY_SET_REMOVE_BY_WORKOUT](#activity-history-mutations) -> [Workouts](#workouts)

### Activities

* [Create Activity](#activity-detail)
* [List: Activities](#activity-detail) | Delete [ACTIVITY_DELETE](#activity-mutations)|[ACTIVITY_HISTORY_SET_REMOVE_BY_ACTIVITY](#activity-history-mutations)

### Activity Detail

* Back to Activities -> [Activities](#activities)
* *Title: string
* Description: string
* *Unit of Measurement: string
* *Increment amount: number greater than 0

## Data Structure

```js
// All entities inherit from this
BaseEntity {
  createdOn: Number,
  updatedOn: Number,
  id: String
}

Workout {
  ...BaseEntity,
  title: String,
  date: Number,
  activities: ActivityHistory[]
}

Activity {
  ...BaseEntity,
  title: String,
  description: String,
  unit: String,
  increment: Number
}

ActivityHistory {
  ...BaseEntity,
  activityId: String,
  workoutId: String,
  sets: [
    {
      id: String,
      amount: Number
    }
  ]
}

Set {
  ...BaseEntity,
  amount: Number
}
```

## Mutations

### Workout Mutations

```js
WORKOUT_DELETE (workoutId)
WORKOUT_SAVE (workout)
```

### Activities Mutations

```js
ACTIVITY_DELETE (activityId)
ACTIVITY_SAVE (activity)
```

### Activity History Mutations

```js
ACTIVITY_HISTORY_CREATE (activityId, workoutId)
ACTIVITY_HISTORY_DELETE (activityHistoryId)
ACTIVITY_HISTORY_SET_ADD (activityHistoryId, set)
ACTIVITY_HISTORY_SET_INCREMENT (activityHistoryId, setId, amount)
ACTIVITY_HISTORY_SET_REMOVE_BY_ACTIVITY (activityId)
ACTIVITY_HISTORY_SET_REMOVE_BY_WORKOUT (workoutId)
ACTIVITY_HISTORY_SET_REMOVE (activityHistoryId)
```

## Project setup

`npm install`

### Compiles and hot-reloads for development

`npm run serve`

### Compiles and minifies for production

`npm run build`

### Run your tests

`npm run test`

### Lints and fixes files

`npm run lint`

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
