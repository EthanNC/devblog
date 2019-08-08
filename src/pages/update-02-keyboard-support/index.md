---
title: Update 02:Keyboard Support
date: "2019-08-08"
featuredImage: './featured.jpg'
---

In this update to OnTheGears we will be adding Keyboard Support along with some improvements to the backend of the website.

<!-- end -->


###Keyboard Support
![Keyboards](https://i.imgur.com/WRsJY4F.gif)
Keyboards are another piece of gear you will be able to add to your collection and projects. For now the [Keyboard Index](https://onthegears.com/keyboards) only contains mechanical keyboards. The keyboard Index is based on the list from [MechType](https://www.mechtype.com/mechanical-keyboard-list/). This website renders in plain html and therefor web scraping was a breeze. While the scraping was easy, choosing how to represent the data is challenging.

As I have noted in recent posts, the keyboard ecosystem is more fragmented. Newer versions of models are made all the time and there are different variations in color, size, and switches. Beyond that there is a community of enthusiasts who also enjoy assembling from scratch or modifying their boards. 

The MechType list solves some of these issues by appending ‘ line’ to keyboards that have different variations. For example the index lists the [Varmilo VA87M Line](https://onthegears.com/keyboards/158), which has many variations: see [here](https://mechanicalkeyboards.com/shop/index.php?l=product_detail&p=4927) and [here](https://mechanicalkeyboards.com/shop/index.php?l=product_detail&p=5217). They DO give the ducky shine 4 and 5 their own listing. My guess is this is because the ducky shine 5 model with newer and improved features over version 4. I think there is room for improvement in this area but it is good for now.

As it stands there is no mod support for keyboards.This is due to the issues I talked about above and because I am a novice in keyboard modification. I will be asking the community for input on different types of modifications to include and should have it out soon.

###Backend
I have added an Express API for some features. It will improve performance in areas where I used Cloud Functions and should also make data more secure. I will be working to build the API out more in the upcoming weeks.

That is it for now. It is only a starting point for keyboard support and there is much to improve. I am excited because this is a necessary addition for how I envision OnTheGears. Until next time!

*-naethan*