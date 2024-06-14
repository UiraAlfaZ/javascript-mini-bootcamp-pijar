const names = [
    "Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", 
    "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", 
    "Elia", "Faith", "Olivia", "Penelope"
  ];
  
  function searchName(query, limit, callback) {
    const filteredNames = names.filter(name => name.toLowerCase().includes(query.toLowerCase()));
    const limitedNames = filteredNames.slice(0, limit);
    callback(limitedNames);
  }
  
  function callback(result) {
    console.log(result);
  }
  
  // Contoh penggunaan
  searchName("an", 3, callback);
  