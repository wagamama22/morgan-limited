let Total;
function ValidateAndCalculate()
{
  let quantity = parseInt(document.getElementById("pfNumber").value);
  let myAddress = document.getElementById("pfAddress").value.trim();
  let menuOption = document.getElementById("mTrain").value;
  let isMale = document.getElementById("m").checked;
  let isFemale = document.getElementById("f").checked;
  let productAmount = parseFloat(menuOption);
  Total = productAmount * quantity;
  
  //validate input user fields
  if(!(isMale || isFemale)) //validating radio button input
  {
    alert("please check your inputs and try again");
    return;
  }
  else if (isNaN(quantity) || quantity < 1 || myAddress === "")//validating input textboxes
  {
    alert("please check your inputs and try again");
    return;
  }
  else if ( isNaN(Total))//validating the dropdown menu textbox using the final total result
  {
    alert("please check your inputs and try again");
    return;
  }
  //displaying the output at the appropriate output display section
  else if(isMale)
  {
    document.getElementById("pInfo").innerHTML = "Purchase Order Information";
    if(menuOption === "20")
    {
      document.getElementById("product").innerHTML = "Starters Package   " + "€"+menuOption;

    }
    else if(menuOption === "50")
    {
      document.getElementById("product").innerHTML = "Professional Package    " + "€"+menuOption;
    }
    document.getElementById("pQuantity").innerHTML = "Quantity: " + quantity;
    document.getElementById("cAddress").innerHTML = "Address: " + myAddress;
    document.getElementById("gFM").innerHTML = "Gender: Male";
    document.getElementById("pTotal").innerHTML = "Total Price: "+ "€"+Total
  }
  else if(isFemale)
  {
    document.getElementById("pInfo").innerHTML = "Purchase Order Information";
    if(menuOption === "20")
    {
      document.getElementById("product").innerHTML = "Starters Package" + "€"+menuOption;

    }
    else if(menuOption === "50")
    {
      document.getElementById("product").innerHTML = "Professional Package    " + "€"+menuOption;
    }
    document.getElementById("pQuantity").innerHTML = "Quantity: " + quantity;
    document.getElementById("cAddress").innerHTML = "Address: " + myAddress;
    document.getElementById("gFM").innerHTML = "Gender: Female";
    document.getElementById("pTotal").innerHTML = "Total Price: "+ "€"+Total
  }
  
}

//validateForm the contact Form
function validateForm()
{
  //declaring and assigning variables
  let userName = document.getElementById("fName").value;
  let userEmail = document.getElementById("email").value;
  let userPhone = document.getElementById("pNumber").value;
  let userComment = document.getElementById("message").value;
  let phoneNumerTab = document.getElementById("pNumber").value;

  //check for empty input fiels and validate them
  if (!userName || !userEmail || !userComment || !userPhone)
  {
    alert("Note. All inputs are mandatory. Please amend your entries and try again");
    return false;
  }
  else if (isNaN(phoneNumerTab))
  {
    alert("Note. All inputs are mandatory. Please amend your entries and try again");
    return false;
  }
  else
  {
    alert("You have successfully submitted your message");
  }
  
}