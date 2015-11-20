![General Assembly](../assets/images/ga.png)
# FEWD LESSON 2

## FEWD - CSS Basics

### Instructor
Nicole Bieber



## Agenda

* Quick Recap (and Homework Review)
* HTML Basics Review
  * Images
  * Directory Structures
<!--* Introducing Git (and Github again)-->
* Intro To CSS
  * Fonts
* Code Along
* CSS Colors
* Lab Time
* Introducing Git (and Github again)



<!--## Quick Recap (and Homework Review)-->

<!--* HTML Basics (html, p, h1, h2, h3, ul, li, a, etc)-->
<!--* Introduced Sublime Text, Github-->
<!--* , Codepen-->
<!--* Feedback on any of the following?-->
<!--  * HTML Basics-->
<!--  * Tools & Services-->
<!--  * Schoology-->
<!--  * Life in general? :)-->



## HTML Basics Review
<aside class="notes"></aside>

### Images

* Images are placed using the ```<img>``` tag.

```<img src="img/imageName.jpg" alt="alternative text">```

<br>

* The `img` tag requires a `src` attribute, which tells the browser where to find the image to be placed.



## HTML Basics Review
<aside class="notes"></aside>

## alt attribute

```<img src="puppy.jpg" alt="My cute puppy">```

* Add a simple description about your image as **alt** text
* A lingustic context for search engine to understand what's your image is about



## HTML Basics Review
<aside class="notes"></aside>

### 3 types of image format

* .png
  * Supports transparency and semi-transparency
  * Great for logos, icons, and repeating background tiles
* .gif
  * Smaller, can be animated
* .jpg/jpeg
  * No transparency
  * Can be stored at different compression levels with varying amounts of "lossy-ness"
  * Typically the best format for photos



## Where should you store the assets (images, etc) and how do we reference?



## HTML Basics Review
<aside class="notes"></aside>

### How would you write the src in RELATIVE PATH?

```
[project]
  | - [images]
  |    | - logo.png
  |    | - apple.png
  |
  | - [fruits]
  |    | - apple.html
  |    
  | - index.html
```

* index.html - ```<img src="images/logo.png">```
* apple.html - ```<img src="../images/apple.png">```

<br>

```..``` means **GO UP A DIRECTORY**. We could have ```../../``` too!



## HTML Basics Review
<aside class="notes"></aside>

### How would you write the src in RELATIVE PATH?

```<img src="images/logo.png">```

Are the same as

```<img src="./images/logo.png">```

<br>

* ```..``` means **GO UP A DIRECTORY**
* ```.``` means **CURRENT DIRECTORY**



## HTML Basics Review
<aside class="notes"></aside>

### How would you write the src in ABSOLUTE PATH?

```
[project]
  | - [images]
  |    | - logo.png
  |    | - apple.png
  |
  | - [fruits]
  |    | - apple.html
  |    
  | - index.html
```

* index.html - ```<img src="/images/logo.png">```
* apple.html - ```<img src="/images/apple.png">```

<br>

ABSOLUTE PATH always starts from ```/```



## HTML Basics Review
<aside class="notes"></aside>

### Or Use a Full URL so you can even use an image from another website

```<img src="http://www.startupshk.com/wp-content/uploads/2013/04/A-Practical-Intro-To-Viral-Video.jpg">```



## Brief Interlude - Introducing Git (and Github again)



## Introducing Git (and Github again)

* Github is both a place to store your code and a lovely web interface (social too)
* Git is the underlying technology
  * And the means with which you get your code in (and out) of Github
<!--* Download the Github client (mac.github.com or windows.github.com)-->
* Download SourceTree (https://www.sourcetreeapp.com/)
<!--* Also install the CLI (Command Line Interface) from http://git-scm.com-->
* Open https://github.com/nbieber/FEWD (and click "Clone in Desktop")
<!--* Quick look at the CLI (note that you'll also apply you "directory traversal" skills here too)-->
* SourceTree Tutorial(https://learnwithnicole.wordpress.com/2015/11/15/making-a-new-project-with-github-and-sourcetree/)



## Let's do some exercises!
<aside class="notes"></aside>

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)
## Fix It

<!--* Download https://github.com/nbieber/FEWD_Slides via the client-->
* Open SourceTree to your FEWD project - press the 'pull' button
* Open Week_02_Styling/In_Class/fix_it/index.html
* Debug the issues "issues"
* An important discipline both for your own work and when working with other developers
* Once you're done we'll explore sub-directories



## How should you organize things?

* Firstly, it's not an exact science...
* Typically you group images, css, javascript, etc in separate directories
  * Remember the importance of "separating concerns"
* With all your pages kept in the top (or root directory)



## Example directory structure

```
[project]
  | - [images]
  |    | - logo.png
  |    | - mickey-mouse.jpg
  |
  | - [css]
  |    | - style.css
  |    
  | - index.html
  | - about.html
```
* Let's try it with Mickey ("mickey-mouse.jpg")
* Create an "images" directory and move the image in there
* Update the path to the image


## Quick Break?



## Cascading Style Sheets



## CSS
<aside class="notes"></aside>

![CSS](../assets/images/unit_1/css_syntax.png)



## CSS
<aside class="notes"></aside>

### Where does CSS go?

* Inline CSS - Written on the style attribute on the HTML tag  
* Internal CSS - Written on the `<head>` tag
* External CSS - Written on a separate .css file



## CSS
<aside class="notes"></aside>

### Inline CSS

```
<p style="color: red;">Hello World</p>
```



## CSS
<aside class="notes"></aside>

### Internal CSS

```
<html>
  <head>
     <style type="text/css">
       p { color: red; }
     </style>
  </head>
  <body>
    <p>Hello World</p>
  </body>
</html>
```



## CSS
<aside class="notes"></aside>

### External CSS

```
<html>
  <head>
     <link rel="stylesheet" type="text/css" href="css/style.css">
  </head>
  <body>
    <p>Hello World</p>
  </body>
</html>
```



## CSS
<aside class="notes"></aside>

### Use EXTERNAL CSS for best practice!



## CSS Break Down
<aside class="notes"></aside>

```
p {
  color: red;
  font-weight: bold;
}
```

* This whole thing is called a **rule**.
* The `p` is called a **selector**, and it's followed by a set of **declarations** in a **declaration block**.



## CSS Break Down
<aside class="notes"></aside>

The **declaration block** here is:

```
{
  color: red;
  font-weight: bold;
}
```

**Declarations** go inside curly braces.



## CSS Break Down
<aside class="notes"></aside>

This example has two declarations. Here's the first:

```
color: red;
```

Every declaration is a **property** followed by a **value**, separated by a colon, ending in a semicolon.

In this declaration, we are setting the `color` **property** to the **value** `red`.



## CSS Break Down
<aside class="notes"></aside>

Let's look at the second declaration:

```
font-weight: bold;
```



## CSS Break Down
<aside class="notes"></aside>

As mentioned before, EXTERNAL CSS is a good practise.

But why do we want to link to a separate CSS file?



## Let's do some exercises!
<aside class="notes"></aside>

![GeneralAssemb.ly](../assets/images/icons/code_along.png)
## About Me

* We will create a About Me page from sketch
* Show you how to apply CSS on your HTML tags



## Colors in CSS
<aside class="notes"></aside>

Colors can be specified in CSS in a variety of ways:

![Colors](../assets/images/unit_1/color.png)



## Colors in CSS
<aside class="notes"></aside>

* keyword
* hex codes
* rgb
* hsl
* rgba
* hsla



## Colors in CSS
<aside class="notes"></aside>

### Keyword

These are used less frequently, but are handy for basic colors like `black` and `white`. There are several

[Check it out!](http://msdn.microsoft.com/en-us/library/ie/aa358802.aspx)



## Colors in CSS
<aside class="notes"></aside>

### Hex Codes (RGB)

![Hex Color explanation](../assets/images/unit_1/hex_colors.png)

[HTML Color Codes](http://html-color-codes.info/)



## Colors in CSS
<aside class="notes"></aside>

### RGB Color Values

```rgb(0,0,0)```

* The first value is red, the second green, the third blue.
* Each value can range from 0 to 255, which expresses the same number of color steps as 00 to FF in base-16.
* In RGB, `rgb(0,0,0)` is black, `rgb(255,255,255)` is white, `rgb(255,0,0)` is red, etc.



## Colors in CSS
<aside class="notes"></aside>

### RGBa Colors

* RGBa works identically to RGB, expect that it takes a 4th value called the "alpha".
* This is a value between 0 and 1 which will be used to determine a color's opacity on the page.

![RGBA Color](../assets/images/unit_1/rgba_color.png)



## Colors in CSS
<aside class="notes"></aside>

### HSL Colors
Similar notation to RGB values, but specify colors using hue, saturation, and lightness.

<br>

### HSLa Colors
As with RGBa, HSLa is exactly like HSL for the first 3 values, but takes a 4th alpha-channel value.

[HSL Color Picker](http://www.workwithcolor.com/hsl-color-picker-01.htm)



##Lab Time
<aside class="notes">Both ~ 30 min</aside>

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)

<!--* Wendy G. Bites - Resume-->
<!--* "WendyBite_Resume.png" (and "RESUME PAGE" under "Wendy_Bite.txt")-->
<!--* Reference the same CSS file-->
* Your Portfolio Page!
* Continue where you left off on the homework - add a second page to start displaying the projects you will build in this class
* Use the sample code from last time as a model, but feel free to be creative!
