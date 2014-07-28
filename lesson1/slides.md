![GeneralAssemb.ly](../assets/images/icons/FEWD_Logo.png)

#FEWD Lesson 1
## FEWD - HTML BASICS

###Instructors

Kevin Bluer & Jimmy Wong



##Agenda

*	Introductions 
*	Course Structure
*	Intro To Web Development
*	Tools & Services
*	Version Control
*	HTML Tags
*	Lab Time



##Introductions

###Kevin Bluer

* Entrepreneur and Developer
* Lived in both London, New York, and now Hong Kong
* Worked across a number of larger enterprises as well as startups
* Currently operate Bluer Inc / Ltd



##Introductions

###Jimmy Wong

* ...



## ...and tell us about yourselves

* Your name?
* Why you're interested in gaining front-end skills?
* Your favorite website? 
* Don't forget to say hi on Schoology too [GA Student Profile](https://www.schoology.com/course/126724641/materials/discussion/view/126724709)!



## Course Structure

* Classes
  * Basics
  * Layout
  * JavaScript
  * jQuery
  * Review & Refactor
  * Multiple Screens
* Grading
  * Complete and submit 80% of all course homework assignments



## Final Project

* Start thinking about as possible...
* [FEWD HK Example](http://studio.generalassemb.ly/HK/FEWD1/Sean/project/v3/)
* [GA Gallery](https://generalassemb.ly/gallery)



## Intro To Web Development



## What is Web Development?

![Web Developer](../assets/images/web-developer.jpg)



## What is Web Development?
<aside class="notes"></aside>

Website

* Single page of plain text
* http://www.columbia.edu/~fdc/sample.html
* Text-based browser - [Lynx](http://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Lynx-wikipedia.png/1024px-Lynx-wikipedia.png) (this is how browsers used to look)
* Modern browsers - Chrome, Firefox



## What is Web Development?
<aside class="notes"></aside>

Web applications

* Online shop
* http://www.amazon.com
* Social networks
* http://www.facebook.com



## What is Web Development?
<aside class="notes"></aside>

### Client-Side

* HTML
* CSS
* JavaScript



## What is Web Development?
<aside class="notes"></aside>

### Server-Side

* Ruby
* PHP
* Python
* PERL
* C++



## What is Web Development?
<aside class="notes"></aside>

For a static website, web development can simply refer to:

* Writing markup: HTML
* Writing style: CSS
* Coding: Javascript

![HTML is the building block of a website](../assets/images/web_blocks.gif)



## How a web project works?
<aside class="notes"></aside>



<aside class="notes"></aside>
![How a web project works?](../assets/images/web-project-roles.png)



## How a web project works?
<aside class="notes"></aside>

For large web applications, it could involve hundreds of people working on different aspects including:

* Web design: Graphical designer
* GUI design (Graphical User Interface): UX designer
* Front End Web Development (Client side): Javascript developer, Flash developer
* Back End Web Development (Server side): PHP, Ruby, Python developer
* Database: Database engineer, Database administrator
* Code optimization: SEO engineer
* Testing: Test developer, QA
* Application deployment: Best practice engineer
* Web server setup & Security: Server administrator, Best practice engineer



## How a web project works?
<aside class="notes"></aside>

Developer Tools

* Text Editor / Integrated Development Environment
* Automated Test Suits
* Deployment Tools
* A Web Server

<br>
Project Management Tools

* Project management tool
* Bug tracker
* Version control



## Get yourself armed...
<aside class="notes"></aside>



## Github and Codepen (and let's be friends)
<aside class="notes"></aside>

* Write you code online at [codepen.io](http://codepen.io/)
* Manage your code (and a lot more) at [github.com](http://github.com)
* List yourself (and follow your peers) at [bit.ly/fewd6-share](http://bit.ly/fewd6-share)



## Download 

* Slides and exercises from [bit.ly/fewd6-code](http://bit.ly/fewd6-code)
* We'll be updating this regularly (and pushing updates)



## Text Editor
<aside class="notes"></aside>
[SublimeText3](http://www.sublimetext.com/3)

* [Package Control](https://sublime.wbond.net/installation#st3)
* Create a project
* Introduce yourself to `p`
* Try to make a good first impression
* You will love `p`
* [Hacks](http://hexlator.blogspot.hk/2013/05/best-sublime-text-2-tips-tricks-hacks.html), [Tips](http://net.tutsplus.com/articles/news/perfect-workflow-in-sublime-text-free-course/) & [Tricks](http://net.tutsplus.com/tutorials/tools-and-tips/sublime-text-2-tips-and-tricks/)



## General Course / Code Flow
<aside class="notes"></aside>

* Mix of code alongs and exercises (and slides)
* Note that you can view the slides [http://ga-students.github.io/FEWD_HK_6/](http://ga-students.github.io/FEWD_HK_6/)
* Or check the slide markdown (.md) files in your local FEWD repository
* Ask questions via Email, Schoology, or [Github Issues](https://github.com/ga-students/FEWD_HK_6/issues)



## HTML Tags
<aside class="notes"></aside>

![GeneralAssemb.ly](../assets/images/icons/code_along.png)
## General Assembly Press Release

* Review the basic structure of a HTML document
* Get comfortable with Sublime (and file structure)
* Start considering the concept of "semantic" structure
* Note that we'll code on screen and then review separately afterwards



## HTML Basics
<aside class="notes"></aside>



## HTML vs HTML5
<aside class="notes"></aside>

HTML5 is HTML with a few additions
The Doctype tells you if the page is HTML5 ready.

```<!DOCTYPE html>```



## HTML HISTORY
<aside class="notes"></aside>

![HTML History](../assets/images/unit_1/Timeline_of_web_technologies.jpg)



## HTML Syntax
<aside class="notes"></aside>

![HTML Syntax](../assets/images/unit_1/tags.png)



## Content Tags
<aside class="notes"></aside>

### Heading Elements

```<h1>```Largest Heading```</h1>```

```<h2>``` . . . ```</h2>```

```<h3>``` . . . ```</h3>```

```<h4>``` . . . ```</h4>```

```<h5>``` . . . ```</h5>```

```<h6>```Smallest Heading```</h6>```



## Content Tags
<aside class="notes"></aside>

### Text Elements

```<p>```This is a paragraph```</p>```

```<code>```This is some computer code```</code>```



## Content Tags
<aside class="notes"></aside>

### Unordered list
```<ul>``` ```</ul>```



## Content Tags
<aside class="notes"></aside>

### Unordered list item

```<li>```First item```</li>```<br>
```<li>```Next item```</li>```<br>



## Content Tags
<aside class="notes"></aside>

### Unorder list example

`<ul>`<br>
&nbsp;&nbsp;`<li>`First item`</li>`<br>
&nbsp;&nbsp;`<li>`Second item`</li>`<br>
&nbsp;&nbsp;`<li>`Third item`</li>`<br>
`</ul>`



## HTML Syntax
<aside class="notes"></aside>

![HTML Syntax](../assets/images/unit_1/tags_attributes.png)



## Content Tags
<aside class="notes"></aside>

### links
```<a href="Link">```First item```</a>```



## Cookie Recipe
<aside class="notes"></aside>
![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)

* Create your first index.html
* Try the __html__ + __Tab__ magic
* [HTML Quick List](http://www.w3schools.com/html/html_quick.asp)



## Homework
<aside class="notes"></aside>

* Simple Resume 
* It's going to build up to the following (but for now just what we have covered...headers, bullets, etc)
  * [About me](https://raw.github.com/ga-students/FEWD_HK_5/gh-pages/lesson2/labs/wendy_resume/WendyBite_AboutMe.png)
  * [Résumé](https://raw.github.com/ga-students/FEWD_HK_5/gh-pages/lesson2/labs/wendy_resume/WendyBite_Resume.png)
* Read [Don't Fear The Internet](http://www.dontfeartheinternet.com/the-basics/not-tubes)
* Some additional reading...



## Readings
<aside class="notes"></aside>

* [General Assembly's Programming For Non Programmers](https://generalassemb.ly/online/videos/programming-for-non-programmers-get-started-with-html)
* [The Guardian Blog](http://www.theguardian.com/help/insideguardian/2009/sep/28/blogpost)
* [Web Design or Web Development, What’s The Difference?](http://purelybranded.com/insights/web-design-or-web-development-whats-the-difference/)
* [Redefining Web Designers, Web Developers, and Web Hybrids for the modern market](http://tristandenyer.com/redefining-web-designers-web-developers-and-web-hybrids-for-the-modern-market/)
* [How The Internet Works in Five Minutes](http://www.youtube.com/embed/7_LPdttKXPc)
* [How does the Internet work? - Naked Science Scrapbook](http://www.youtube.com/watch?v=oj7A2YDgIWE)
* [How The Internet Works - cartoon](http://landofthefreeish.com/pics/how-the-internet-works/)
