/* 
Nested function, use new date() to grab the date, the .getday() to get
and integer representation of the day of the week starting at sunday as zero.
Then we use the switch statement to basically hold that int and iterate through
the days till we find a match. When we find the match we return the day to the
todaySwitch function. once the date is held there we call it from the console.log
func. its all called from getFartOfTheWeek
*/

const getFartOfTheWeek = function() {
    const todaySwitch = function() {
      switch (new Date().getDay()) {
        case 0: 
          return "Sunday";
        case 1:
          return "Monday";
        case 2:
          return "Tuesday";
        case 3:
          return "Wednesday";
        case 4:
          return "Thursday";
        case 5:
          return "Friday";
        case 6:
          return "Saturday";
        
        // dont forget about default:
        }
    }
  
    console.log("You stink on a " + todaySwitch());
  }

  // Call the fuckin function to get the day of the week and display the message with
  getFartOfTheWeek();