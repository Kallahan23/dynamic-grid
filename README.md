# DynamicGrid

A grid form template which supports dynamic columns and rows at the runtime.

## Two Implementations

In the end I made 2 different implementations of the template.
In the src/app/components/grid folder, you will find the files:

- `grid.component.html`
- `grid.component.scss`

as well as:

- `grid.alt.component.html`
- `grid.alt.component.scss`

The first 2 files (without the .alt) are my main implementation of the template.
The .alt files are an alternative implementation which don't use CSS grid, but rather use an HTML table only.

I was experimenting with different approaches to see which would turn out best.
The disadvantage of the alt version is that the scrollbars are not in the required positions. Also, since it doesn't use a CSS grid, I thought it probably won't meet the requirements of the task. I hence decided not to use it, despite the slightly shorter code. I just thought I'd leave it in here for reference.

To use the alternative template, use `--configuration=alt` when building or serving the app.

## Assumptions

I made a few small assumptions when implementing this task:

- Since 'Hour Interval: 6 Hours' generates 4 columns and 'Hour Interval: 4 Hours' generates 6 columns, then 'Hour Interval: 24 Hours' should only generate 1 column, since there are only 24 hours in a day. The image in extra features section has a table with columns that have 1 hour intervals. I assume this would require an option for 'Hour Interval: 1 Hour', but since it was not in the required list of dropdown options, I did not include it.

- The structure given to the form data in the task document is written under the save data section. There is also a requirement that the textboxes all need to bind to data models. Since the 'units' field is not in the form data structure but is included as a column in the template, I made the assumption that the specified form data structure is what the data should look like only when posting. I used a modified version of this structure to use inside the component in order to complement the template structure.

- Since there is no API or database to post the data to, I just made the app save the data to the browser's local storage. I have also included a comment containing a small piece of mock code which calls http.post(), just as proof that I know how to use the Angular HttpClient.
