# Love Decoded

## Getting Started

### MacOS

### Windows

## Creating New Steps

- add title for step in the [titles util](src/util/titles.ts)
- add enum for screens in the step (i.e., in [Course1Screens](src/route/Steps/Course1Screens.ts)
- add new step entries in the [route enums](src/route/enums.ts)
  - add above enum to union type `Course1Screens`
  - `stepEntryPoints`
  - `stepHomeScreens`
  - `stepDayOverviewScreens`
  - `stepGoodJobScreens`
- new entries for `Activites` and `EndOfDaySurveys` enums in the [survey redux types](src/redux/types/survey.ts)
  - note: these are for surveys, so only need activities with text inputs on them
- new type for CourseXStepX state in the [survey redux types](src/redux/types/survey.ts)
- build initial state in [initialSurveyStates](src/redux/reducer/initialSurveyStates.ts)
- add the new initial state to `INITIAL_STATE` in the [survey reducer](src/redux/reducer/survey.ts) and type it with the new type
- create screens (copy from previous step, i.e. [Step 4](src/screens/Courses/Course1/Step4)
  - update `nextTarget` in each Activities screen with its new destination
- new stack for step's screens with the [Step Stacks](src/route/Steps)
- add stack as a screen in [CourseStack](src/route/Steps/CourseStack.tsx)
- add stack to `getNavigationStack` in the [navigation util](src/util/navigation.ts)
- add step to `getDropDownChoices` in [ContentReview](src/screens/Courses/Tabs/Home/ContentReview/ContentReview.tsx)
