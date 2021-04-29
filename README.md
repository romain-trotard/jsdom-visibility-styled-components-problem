# Run the App

You can run the app after having installing the dependencies (`yarn`) by running:
- `yarn start`

It's a simple page in which you will see almost nothing.
- A text
- Behind this test a text is printed but is hidden (so you can't see it)

# Launch the test

You can launch the test with:
- `yarn test`

The test, just test the component `MyHiddenComponent`. This one is implemented with styled-component.

The `GlobalStyle` is important because add a rule that `forEachMatchingSheetRuleOfElement` will process and unfortunately override 
the `visibility` property with `""` (previously `hidden`).

(The order of rules in `forEachMatchingSheetRuleOfElement` seems to be random I can change the code to make the test pass but for me there is a bug in jsdom)

The test will then failed saying that the component is visible but it's not.