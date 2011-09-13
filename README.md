## What is this?

labelMe is a jQuery extension to place field labels inside the elements (except checkbox and radio buttons, that can be placed after or before the element).


## How does it works?

It simply add the text that's defined in an attribute at the element. There's some options to add/remove class to the labeled element, add line break after, change the position of radio/checkbox labels (before and after) and clean the label (if field is not set) value when submit the form.


## Configuring

There are some configuratioin options:

* labelAttr - The attribute containing the label (default: rel).
* blurClass - The class placed in element when the element lose focus (default: label_blur).
* labelClass - Label class for labels created for checkboxes and radio buttons (default: label).
* addLineBreak - Boolean value, true if you want a line break tag after the elements (default: false).
* labelBefore - Boolean value, true if you want to add the label before checkbox or radio button (default: false).
* cleanOnFormSubmit - Boolean value, true if you want to clean the default label value (default: true).


## Usage

Using default configuration:
<code>
$('.label').labelMe();
</code>

Using custom configuration:
<code>
$('.label').labelMe({ 'labelAttr': 'rel', 'labelBefore': true });
</code>