export let options = { 
    stages: [ 
            { duration: '5m', target: 50 }, // Ramp-up to 500 users 
            { duration: '10m', target: 15 }, // Hold steady at 500 users 
            { duration: '5m', target: 0 },   // Ramp-down to 0 users 
         ], 
      maxRedirects: 4 };
    