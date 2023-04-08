const raisinAlarm = function (cookie) {
    // Put your solution here

   cookie = [];

   if (cookie.includes("🍇")){
    return "Raisin Alert"
   }else {
    return "All good"
   }
  };

  // Test cases 
  
  console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
  console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
  console.log(raisinAlarm(["🍫", "🍫", "🍫"]));