# Notes For CS260
## GitHub
- to see if there is a merge conflict do `git fetch` and `git status`
- to solve a merge issue when pulling do `git pull`
- in vscode may be able to do this without conflict if pull from source control
- can see edits to repository in the source code section of vscode
- forks are copies of repositories cloned to github and maintains a link to the original repository
- Professor likes the Dad Jokes API repository
- After making changes to a repository should commit and leave a note as to why it was changed or what was changed
- to clone a repository do `git clone "repository name"`
- read.me is where the description of the repository is
- can make folders
- can delete things by going to the file clicking the ..., clicking delete, and commiting the delete

## Website Instance
- to get to server via gitbash do ssh -i ~/keys/Ducks.pem ubuntu@100.28.180.1
- to get to website do http://100.28.180.1
- instance has elastic ip which will keep ip the same even if instance is stoped or restarted

## HTML
- `for=` and `id=` must be the same for form elements that go together
- `<hr>` seperates with a line
- if want things like labels or images to be on the same line as each other use `<div>`-
- `<select>` is the one for drop down menus and `<option>` goes in it to give options for the drop down
- `<option selected></option>` makes whatever is in that option no matter where it is in the list the thing that will automaticallgy be selected in the `<select>` box when the page loads
- for `<img>` is easier to use with images committed to github and then using relative paths to get to where image is stored as opposed to trying to figure out doing it from being saved on my computer
- instead of using a 3rd party for login will use Random Useless Facts to amuse people making ducks
- if using images from FreePiks must give credit to be safe

## CSS
- `display: flex` gives whatever thing the property of growing and shrinking according to screen size changes
- `position: absolute` allows you to place an element anywhere ased on window positioning
- `position: relative` allows you to freely move an element based of of the dimensions of the parent element
- to ensure space between elements add a div between them that contains `flex: 1 auto 1` and position elements then the div will take up whatever space is between them
- can change transparency with `opacity: 0` for transparent and `opacity: 1` for opaque
- to get rid of shadow on buttons if shorthand border doesn't work do `border-style: solid`
- `border-radius` determines curve of button edges
- to change input placeholder text color have to use `input::placeholder {}`
- cannot have `display:block` and `display: flex` just use `align-content` and absolute or relative positioning
- `align-content` is up and down
- `justify-content` is side to side

## Midterm Notes
### HTML
#### Examples
- Audio: `<audio controls src="testAudio.mp3"></audio>`
- Video: `<video controls width="300" crossorigin="anonymous"> <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
</video>`
- SVG: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" stroke="red" fill="red" style="border: 1px solid #000000">
  <circle cx="150" cy="100" r="50" />
</svg>`
- Canvas/Javascript: `<canvas id="canvasDemo" width="300" height="200" style="border: 1px solid #000000"></canvas> <script> const ctx = document.getElementById('canvasDemo').getContext('2d'); ctx.beginPath(); ctx.arc(150, 100, 50, 0, 2 * Math.PI); ctx.fillStyle = 'red'; ctx.strokeStyle = 'red'; ctx.fill(); ctx.stroke(); </script>`

### CSS
- Tailwinds is second most popular stylesheet thing and uses css parameters in html coding
- Bootstrap is most popular but can make it hard for things to look different and stand out

### JavaScript
- `document.anything` for access to be able to change elements
