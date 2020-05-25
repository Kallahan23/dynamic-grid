# Dynamic Grid

An Angular grid form template which supports dynamic columns and rows at runtime.

## Author

Danny Kalnian

## Two Implementations

In the end I made two different implementations of the template.
In the src/app/components/grid folder, you will find the files:

- `grid.component.html`
- `grid.component.scss`

as well as:

- `grid.alt.component.html`
- `grid.alt.component.scss`

The first two files (without the .alt) are my main implementation of the template.
The .alt files are an alternative implementation which don't use CSS grid, but rather use an HTML table only.

I was experimenting with different approaches to see which would turn out best.
The disadvantage of the alt version is that the scrollbars are not in the required positions. Also, since it doesn't use a CSS grid, I thought it probably won't meet the requirements of the task. I hence decided not to use it, despite the slightly shorter code. I just thought I'd leave it in here for reference.

To use the alternative template, use `--configuration=alt` when building or serving the app.

## 3rd-party Packages

I decided to limit the number of 3rd-party packages/tools I used.
The only package I installed was Angular Material, from which I only used the:

- Select Module - for the dropdown menu
- Button Module - for the stylised buttons
- Snackbar Module - to display messages
