This theme starter kit is meant to act as a guide when setting up your own custom theme directory to zip, and upload for use in OpenScholar. For first time themers, it is recommended that this starterkit directory be used as the basis for the custom theme-it will help dampen the chances of forgetting to include a file or a reference somewhere. Again, this is only a suggestion. 

While having Drupal theming experience is not necessary to create a custom theme, being comfortable with writing CSS and using Firebug or Chrome Dev Tools are important skills to have. The key to successful Drupal theming is understanding how the many layers of css affect various html elements, and knowing how to override only the css rules and attributes that are required to attain the desired styled result, in the custom theme. Using Firebug or Chrome Dev Tools will indicate exactly which css rules/attributes need to be overridden in the custom theme css file(s).  
**************************************************

** Before adding styles or javascript to a css or js file, all instances of starterkit should be replaced with the name of the custom theme. Replacing instances of this name includes the names of the css files found in this kit, references to css file(s) or a js file in the .info file, and the name of this parent directory. 

** Once all instances of starterkit have been replaced with the name of the custom theme, start by opening the .info file. This file is critical in order for the custom theme to work. 

As noted in the .info file, all lines with a ; (semicolon) are optional.  First, note the name of the base theme referenced. By default, os_basetheme is the theme from which this custom theme will be based on. os_basetheme only contains very basic/raw styling rules--things like default link colors, spacing around headings, etc. Often times, its easier to start by loosely basing a custom theme on an existing one. For example, if the openscholar theme "cleanblue" is appealing, but the background image, the navbar background color, the body link color, and the heading styles all need to be different,  then using cleanblue as the base theme is a good path to follow. In this case, the os_basetheme reference would be changed to cleanblue. If the custom theme style is going to be radically different from any of the existing openscholar themes, then leave the base theme reference as is. IMPORTANT NOTE: the layout.css file is only required if this custom theme is NOT based on an existing openscholar theme (like cleanblue).

~Once all of the references in the info file have been updated and/or uncommented/activated, adding css rules and attributes to the css file can begin. 


**************************************************
As mentioned above, using Firebug or Chrome Dev tools to "pick through" the markup will identify which elements need over-riding. As a workflow suggestion, its easier to start with the outer emoluments in the DOM--things like the body tag, the page div, the menu-bar div, etc. Once these outer elements have been styled, more specific styling can be applied to things like the main menu li's, block h2's, verious widget list styles found in the sidebar regions, etc. 




