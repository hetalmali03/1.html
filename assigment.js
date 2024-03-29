 (1)What is JavaScript?
=>JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.

(2) What is the use of isNaN function?
=>The JavaScript isNaN() Function is used to check whether a given value is an illegal number or not. It returns true if the value is a NaN else returns false. It is different from the Number.isNaN() Method.
Syntax:
	isNaN( value )
	Parameter Values: This method accepts a single parameter as mentioned above and described below: 
value: It is a required value passed in the isNaN() function.
Return Value: It returns a Boolean value i.e. returns true if the value is NaN else returns false.

(3)What is negative Infinity?
=>NEGATIVE_INFINITY is a special numeric value that is returned when an arithmetic operation or mathematical function generates a negative value greater than the largest representable number in JavaScript (i.e., more negative than -Number. MAX_VALUE) .

(4)Which company developed JavaScript?
=>JavaScript was created at Netscape Communications by Brendan Eich in 1995. Netscape and Eich designed JavaScript as a scripting language for use with the company's flagship web browser, Netscape Navigator.

(5)What are undeclared and undefined variables?
=>Undefined: It occurs when a variable has been declared but has not been assigned any value. Undefined is not a keyword. 
Undeclared: It occurs when we try to access any variable that is not initialized or declared earlier using the var or const keyword. If we use ‘typeof’ operator to get the value of an undeclared variable, we will face the runtime error with the return value as “undefined”. The scope of the undeclared variables is always global. 

(6) Write the code for adding new elements dynamically?
=>Javascript is a very important language when it comes to learning how the browser works. Often there are times we would like to add dynamic elements/content to our web pages. This post deals with all of that.

Creation of new element: New elements can be created in JS by using the createElement() method.  

Syntax:

document.createElement("<tagName>");  
// Where <tagName> can be any HTML 
// tagName like div, ul, button, etc.

// newDiv element has been created
For Eg: let newDiv = document.createElement("div");
Once the element has been created, let’s move on to the setting of attributes of the newly created element.

(7)What is the difference between ViewState and SessionState?
=>The basic difference between these two is that the ViewState is to manage state at the client's end, making state management easy for end-user while SessionState manages state at the server's end, making it easy to manage content from this end too. ViewState: It is maintained at only one level that is page-level.

(8)What is === operator?
=>The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

(10) How can the style/class of an element be changed?
=>In this article, we will learn how we can change the style/class of an element. If you want to build a cool website or app then UI plays an important role. We can change, add or remove any CSS property from an HTML element on the occurrence of any event with the help of JavaScript. There are two common approaches that allow us to achieve this task.

	=>style.property
	=>Changing the class itself

(11) How to read and write a file using JavaScript?
=>The basic difference between these two is that the ViewState is to manage state at the client's end, making state management easy for end-user while SessionState manages state at the server's end, making it easy to manage content from this end too. ViewState: It is maintained at only one level that is page-level.

(12) What are all the looping structures in JavaScript?
=>JavaScript supports different kinds of loops:
	for - loops through a block of code a number of times.
	for/in - loops through the properties of an object.
	for/of - loops through the values of an iterable object.
	while - loops through a block of code while a specified condition is true.

(13) How can you convert the string of any base to an integer in JavaScript?
=>n this article, we will convert a string into an integer in Javascript. In JavaScript parseInt() function (or a method) is used to convert the passed-in string parameter or value to an integer value itself. This function returns an integer of the base which is specified in the second argument of the parseInt() function. JavaScript parseInt() function returns Nan( not a number) when the string doesn’t contain a number. We can convert a string to javascript by the following methods:

	Using the parseInt() method
	Using the Number() method
	Using the Unary operator
	Using the parseInt() method: JavaScript parseInt() Method is used to accept the string and radix parameter and convert it into an integer.

(14)What is the function of the delete operator?
=>he delete operator removes a property from an object. If the property's value is an object and there are no more references to the object, the object held by that property is eventually released automatically.


(15)What are all the types of Pop up boxes available in JavaScript?
=>In Javascript, popup boxes are used to display the message or notification to the user. There are three types of pop-up boxes in JavaScript namely Alert Box, Confirm Box and Prompt Box.

Alert Box: It is used when a warning message is needed to be produced. When the alert box is displayed to the user, the user needs to press ok and proceed.

Syntax: 

alert("your Alert here")

(16)What is the use of Void (0)?
=>“javascript: void(0)” is similar to void. javascript: void(0) means return undefined as a primitive value. We use this to prevent any negative effects on a webpage when we insert some expression. For example, in the case of URL hyperlinks.

(17)How can a page be forced to load another page in JavaScript?
=>Approach: We can use window. location property inside the script tag to forcefully load another page in Javascript. It is a reference to a Location object that is it represents the current location of the document. We can change the URL of a window by accessing it.

(18)What are the disadvantages of using innerHTML in JavaScript?
=>Disadvantages of innerHTML
It is very slow because as inner HTML already parses the content even we have to parse the content again so that's why it takes time. When we have used the event handlers then the event handlers are not automatically attached to the new elements created by innerHTML.


