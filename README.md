# Foundation + ReactJS boilerplate

I couldn't figure out how to incorporate Foundation SCSS build into Webpack because of the `@import ` it has. So they are build by grunt and imported as a css bundle. 

Foundation Javascript require some extra work too. Because it is based on JQuery, it will not follow the ReactJS update mechanism. I had to manually mount the right plugin.
