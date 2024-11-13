const datas = [
    { title: "title 1", description: "description 1" },
    { title: "title 2", description: "description 2" },
    { title: "title 3", description: "description 3" },
    { title: "title 4", description: "description 4" },
    { title: "title 5", description: "description 5" },
  ];
  
  datas.forEach(data => {
      let item = $('<div ></div>');
      let title = $('<p></p>').text(data.title);
      let description = $('<p ></p>').text(data.description); 

      item.addClass("item")
      description.addClass("desc")
      item.append(title);
      item.append(description);
  
      $("#container").append(item);
  
      item.click(function() {
          $(".desc").slideUp();  
          $(".item").css("background-color", "#f5f5f5"); 
  
          if (!description.is(":visible")) {
              description.slideDown();
              item.css("background-color", "#ccc");
          }
      });
  });
  