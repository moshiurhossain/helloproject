tailwind.config = {
    theme: {
      extend: {
        colors: {
        //  color start
         headerColor:"rgba(22, 12, 109, 0.50)",
         hoverColor:"#1BBF00",
         overlaycolor: "rgba(106, 98, 197, 0.9)",
         borderColor: "#C4C4C4",
         countertextcolor:"#141135",
         choosetxtcolor: "#726E9E",
         card_bg:"#6B62C5",
         cardbgcolor:"#F6F5FF",
         plain_white:"#F8F8FF",
         footercolor:"#48409C",
         hoverbg:"#CBC8F0",
         hovertrans:"rgba(25, 191, 0, 0.307)",
         forball:"rgba(135, 129, 205, 0.795)",
         background666:"#EDE6F7",
         //  color end
        },
        // containers start
        width: {
            headcontainer: '1170px',
            bannerContainer:"962px",
            countercontainer: "1210px",
            
          },
          // containers end
          // font family start
          fontFamily: {
            open: ['Open Sans', 'sans-serif'],

            paprika: ['Paprika', 'cursive'],

            nuni: [ 'Nunito','sans-serif'],
            quicksand: ['Quicksand', 'sans-serif'],
            
          },
          // font family end
          // background image start
          backgroundImage: {
             bannerbg: "url('images/banner.png')",
             counterbg: "url('images/counterbg.png')",
             whychoosebg: "url('images/whychoose.png')",
             webbg: "url('image/webbg.png')",
          }
           // background image start
      },
    },
  };

  
