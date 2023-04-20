let a = 3;
try {
    //let a = 3;
    console.log(a);
  } catch (err) {
    console.log("let перед использованием нужно объявить");
  }


 try {
  let b = 0
  let result = 1/b;
  if (!isFinite(result)) {
    throw new Error();
  }
} catch (error) {
  console.error("на ноль делить нельзя");
}