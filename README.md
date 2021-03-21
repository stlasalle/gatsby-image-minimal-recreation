## `gatsby-plugin-image` bug recreation

1.  run `yarn`

2.  run `yarn develop`

3.  go to `localhost:8000`

    My expectation is that the image contains itself to the grid row height of `100px`

    The actual behaviour is that the image renders at full size, and then is cut off at the top and bottom to only show the middle 100px of the image.