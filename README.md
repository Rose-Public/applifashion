# applifashion


# Instructions reminder :
Write tests for v1 and v2 of AppliFashion, on different browsers and devices, in traditional way and modern way.

| Browsers | Width | Height | Device |
|----------|-------|--------|--------|
| Chrome | 1200 | 700 | Laptop |
| Firefox | 1200 | 700 | Laptop |
| Edge Chromium | 1200 | 700 | Laptop |
| Chrome | 768 | 700 | Tablet |
| Firefox | 768 | 700 | Tablet |
| Edge Chromium | 768 | 700 | Tablet |
| Mobile* | 500 | 700 | Mobile |

( * ) for traditional approach : Chrome ;
for modern approach : “iPhone X” & “Portrait”


# Automation tool used :
I used Cypress to write AppliFashion tests.

# Notes about traditional tests :

## 1- How to launch tests on multiple browsers
To test on multiple browsers, you will have to launch the tests series multiple times and, each time, change manually the browser in Cypress launcher.
Note : As I am on Linux, it has been impossible for me to lauch my tests on Edge chromium : the browser is not proposed in Cypress' list.

## 2- Screenshots
In traditional approach, tests are dotted with screenshots. You will find screnshots results in dedicated folder "AppliFashion > cypress > screenshots".
It is usefull to manually assert the way elements display in the screen, when it is not possible - or too complicated - to assert it automatically.
Before launching tests, delete these files to have a clearer view of screens.


# Notes about modern tests :

## 1- Default configuration
The default cross-browsers and cross-devices configurations are available in file **applitools.config.js** (available at project's root).
Those will be used by default, thus, you will see in some tests that browsers' list is redefined, to overrun this default config.
This is because some tests on mobile and tablet need to act on buttons that are only displayed in screens with a specific viewport.

## 2- Multiple batches
Tests are divided according to their Task. Each group has a batch name that reminds the Task number. For example, when you launch Task 1 tests, they will be gathered in Applitools under "UFG-Hackathon-Task1".

# General notes :

## How to read tests code :
Inside each tests file, you will always find this structure :
- ELEMENTS : it is the place where DOM elements (used in the following tests) are renamed into a variable. Thus, if the DOM name changes, we just have to change it once.
- FUNCTIONS : it is the place where functions used accross several tests are created.
- TESTS : below this section, you will find tests code.


## Notes about tests campaign architecture :
I usually like to isolate tests dealing with recurrent elements of pages (i.e. components that you will find on all pages, typically Header and Footer) and dedicate them specific tests, run once and for all.
That is why, in traditionnal approach, you will find a cutting of Header and Footer from pages contents as such.
In modern approach, I decided not to follow this architecture, since :
- in the AppliFashion app, on the same device, the header does not display the same elements if you are on homepage and if you are on a shoe details page. This first sound like a bug to me, but V1 was presented as a bug-free version, so I decided to consider it as knowingly done.
- above all, the modern approach would have lead to a huge amount of assertions repeating, and it was easier and cleaner to keep a global view per page.

## Cypress eyes commands doc :
I used some Cypress-Applitools commands, like "ignore" or "target"-"region". For more details, see : https://github.com/applitools/eyes.sdk.javascript1/tree/master/packages/eyes-cypress#Commands).
