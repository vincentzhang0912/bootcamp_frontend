let jsondata = {
    "data": [
        {
            "name": "jane",
            "marks": [
                25,
                45,
                55
            ]
        },
        {
            "name": "john",
            "marks": [
                23,
                25,
                23
            ]
        },
        {
            "name": "ram",
            "marks": [
                24,
                25,
                22
            ]
        }
    ]
}

// console.log(jsondata.data);
jsondata.data.map((elem) => {
  // console.log(elem.marks)
    console.log("*********"+elem.name+"*******")
  elem.marks.map((el,i) => {
    if(i==0) {
      console.log("English:"+el)
    }
    else if(i==1){
      console.log("Science:"+el)
    }
    else {
   console.log("Math:"+el)
    }
  });
  console.log("*********")
});

// Output:

// *********jane*******
// English:25
// Science:45
// Math:55
// *********
// *********john*******
// English:23
// Science:25
// Math:23
// *********
// *********ram*******
// English:24
// Science:25
// Math:22
// *********
